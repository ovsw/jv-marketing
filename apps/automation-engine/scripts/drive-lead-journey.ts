// Drives the Lead Journey on the development engine down every path of the
// overview diagram in spec #164, one case per path. The Worker has no handlers
// for these topics yet, so this script plays the Worker (completes external
// tasks with fake results), Jimmy and the Team (completes user tasks), and the
// webhooks (correlates messages by business key). Timers run through the job
// API, never by waiting. Each case uses its own fake Person ID and deletes its
// instances at the end.
//
//   pnpm drive                   all cases, in parallel
//   pnpm drive --case <name>     one case (repeatable)
//   pnpm drive --keep            leave the instances in the engine for Cockpit

import { randomUUID } from "node:crypto";
import { setTimeout as sleep } from "node:timers/promises";
import { parseArgs } from "node:util";
import { createEngineClient, requiredEnv } from "./engine-rest.ts";

const { values: args } = parseArgs({
  options: {
    case: { type: "string", multiple: true },
    keep: { type: "boolean", default: false },
  },
});

const engine = createEngineClient({
  url: requiredEnv("ENGINE_URL"),
  username: requiredEnv("ENGINE_OPS_USER"),
  password: requiredEnv("ENGINE_OPS_PASSWORD"),
});

const WORKER_ID = "drive-script";
const WAIT_MS = 30_000;

type Value = string | number | boolean | Date;

function typed(values: Record<string, Value>) {
  return Object.fromEntries(
    Object.entries(values).map(([name, value]) => {
      if (value instanceof Date) return [name, { value: value.toISOString().replace("Z", "+0000"), type: "Date" }];
      if (typeof value === "boolean") return [name, { value, type: "Boolean" }];
      if (typeof value === "number") return [name, { value, type: "Integer" }];
      return [name, { value, type: "String" }];
    }),
  );
}

// The engine writes dates as 2026-10-01T10:00:00.000+0000.
function parseEngineDate(value: string): number {
  return Date.parse(value.replace(/([+-]\d\d)(\d\d)$/, "$1:$2"));
}

const HOUR = 3_600_000;
const inDays = (days: number) => new Date(Date.now() + days * 24 * HOUR);

function submission(overrides: Record<string, Value> = {}): Record<string, Value> {
  return {
    submissionId: randomUUID(),
    assessmentVersion: 2,
    senderBrand: "phxhomeloan",
    emailConsent: true,
    smsConsent: true,
    timeZone: "America/Phoenix",
    military: "no",
    stubNextStep: "fix_credit_first",
    stubCallToday: false,
    ...overrides,
  };
}

type Running = { id: string; key: string };

function createJourney(caseName: string, log: (line: string) => void) {
  const businessKey = `drive-${caseName}-${randomUUID().slice(0, 8)}`;
  let rootId = "";

  async function running(): Promise<Running[]> {
    const instances = await engine.get<{ id: string; definitionId: string }[]>(`/process-instance?businessKey=${businessKey}`);
    return instances.map((instance) => ({ id: instance.id, key: instance.definitionId.split(":")[0] }));
  }

  async function instanceOf(key: string): Promise<Running | undefined> {
    return (await running()).find((instance) => instance.key === key);
  }

  async function activeActivities(): Promise<Set<string>> {
    const ids = new Set<string>();
    for (const instance of await running()) {
      const activities = await engine.get<{ activityId: string }[]>(
        `/history/activity-instance?processInstanceId=${instance.id}&unfinished=true`,
      );
      for (const activity of activities) ids.add(activity.activityId);
    }
    return ids;
  }

  // Async continuations (asyncBefore) are jobs too. Run the due ones, so that a
  // check does not wait for the job executor.
  async function runDueContinuations() {
    for (const instance of await running()) {
      const jobs = await engine.get<{ id: string }[]>(`/job?processInstanceId=${instance.id}&executable=true&messages=true`);
      for (const job of jobs) await engine.post(`/job/${job.id}/execute`).catch(() => undefined);
    }
  }

  async function waitFor<T>(what: string, probe: () => Promise<T | undefined>): Promise<T> {
    const deadline = Date.now() + WAIT_MS;
    for (;;) {
      await runDueContinuations();
      const result = await probe();
      if (result !== undefined) return result;
      if (Date.now() > deadline) {
        throw new Error(`timed out waiting for ${what}; active: ${[...(await activeActivities())].join(", ") || "none"}`);
      }
      await sleep(1_000);
    }
  }

  async function message(messageName: string, variables: Record<string, Value> = {}) {
    const [result] = await engine.post<{ processInstance: { id: string } | null }[]>("/message", {
      messageName,
      businessKey,
      processVariables: typed(variables),
      resultEnabled: true,
    });
    log(`message ${messageName} correlated`);
    return result;
  }

  return {
    businessKey,

    async start(variables: Record<string, Value>) {
      const result = await message("AssessmentSubmitted", variables);
      if (!result?.processInstance) throw new Error("AssessmentSubmitted did not start an instance");
      rootId = result.processInstance.id;
    },

    message,

    async completeExternal(activityId: string, variables: Record<string, Value> = {}) {
      const task = await waitFor(`external task ${activityId}`, async () => {
        for (const instance of await running()) {
          const [found] = await engine.get<{ id: string; topicName: string }[]>(
            `/external-task?processInstanceId=${instance.id}&activityId=${activityId}`,
          );
          if (found) return found;
        }
      });
      await engine.post(`/external-task/${task.id}/lock`, { workerId: WORKER_ID, lockDuration: 60_000 });
      await engine.post(`/external-task/${task.id}/complete`, { workerId: WORKER_ID, variables: typed(variables) });
      log(`${task.topicName} completed at ${activityId}`);
    },

    async completeUserTask(taskDefinitionKey: string, variables: Record<string, Value> = {}) {
      const task = await waitFor(`user task ${taskDefinitionKey}`, async () => {
        const [found] = await engine.get<{ id: string; name: string; due: string | null }[]>(
          `/task?processInstanceBusinessKey=${businessKey}&taskDefinitionKey=${taskDefinitionKey}`,
        );
        return found;
      });
      await engine.post(`/task/${task.id}/complete`, { variables: typed(variables) });
      log(`"${task.name}" completed`);
      return task;
    },

    async timerDue(activityId: string): Promise<number> {
      const job = await waitFor(`timer ${activityId}`, async () => {
        for (const instance of await running()) {
          const [found] = await engine.get<{ id: string; dueDate: string }[]>(
            `/job?processInstanceId=${instance.id}&activityId=${activityId}&timers=true`,
          );
          if (found) return found;
        }
      });
      return parseEngineDate(job.dueDate);
    },

    async fireTimer(activityId: string) {
      const job = await waitFor(`timer ${activityId}`, async () => {
        for (const instance of await running()) {
          const [found] = await engine.get<{ id: string }[]>(`/job?processInstanceId=${instance.id}&activityId=${activityId}&timers=true`);
          if (found) return found;
        }
      });
      await engine.post(`/job/${job.id}/execute`);
      log(`timer ${activityId} fired`);
    },

    async expectActive(...activityIds: string[]) {
      await waitFor(`${activityIds.join(" and ")} to be active`, async () => {
        const active = await activeActivities();
        return activityIds.every((id) => active.has(id)) ? true : undefined;
      });
      log(`at ${activityIds.join(" and ")}`);
    },

    async expectNotRunning(processKey: string) {
      await waitFor(`${processKey} to stop`, async () => ((await instanceOf(processKey)) ? undefined : true));
      log(`${processKey} is not running`);
    },

    async expectReached(activityId: string) {
      await waitFor(`${activityId} to be reached`, async () => {
        const [found] = await engine.get<unknown[]>(`/history/activity-instance?processInstanceId=${rootId}&activityId=${activityId}`);
        return found ? true : undefined;
      });
      log(`reached ${activityId}`);
    },

    async expectEnded(endEventId: string) {
      await waitFor(`the journey to end at ${endEventId}`, async () => {
        const instance = await engine.get<{ state: string }>(`/history/process-instance/${rootId}`);
        if (instance.state !== "COMPLETED") return undefined;
        const [found] = await engine.get<unknown[]>(`/history/activity-instance?processInstanceId=${rootId}&activityId=${endEventId}`);
        return found ? true : undefined;
      });
      log(`journey ended at ${endEventId}`);
    },

    // A variable of the running instance of processKey.
    async variable(processKey: string, name: string): Promise<unknown> {
      const instance = await waitFor(`${processKey} to run`, () => instanceOf(processKey));
      return (await engine.get<{ value: unknown }>(`/process-instance/${instance.id}/variables/${name}`)).value;
    },

    async expectRestarted(processKey: string, previousId: string) {
      await waitFor(`${processKey} to restart`, async () => {
        const instance = await instanceOf(processKey);
        return instance && instance.id !== previousId ? true : undefined;
      });
      log(`${processKey} restarted`);
    },

    async instanceId(processKey: string): Promise<string> {
      return (await waitFor(`${processKey} to run`, () => instanceOf(processKey))).id;
    },

    async cleanUp() {
      for (const instance of (await running()).reverse()) {
        await engine.delete(`/process-instance/${instance.id}?skipCustomListeners=true&skipIoMappings=true`).catch(() => undefined);
      }
    },
  };
}

type Journey = ReturnType<typeof createJourney>;

function expectEqual(actual: unknown, expected: unknown, what: string) {
  if (actual !== expected) throw new Error(`${what}: expected ${String(expected)}, got ${String(actual)}`);
}

// Submission → Action Plan saved and emailed → Nurture running.
async function actionPlanSent(journey: Journey, overrides: Record<string, Value> = {}) {
  await journey.start(submission(overrides));
  await journey.completeExternal("SaveActionPlan");
  await journey.completeExternal("SendActionPlanEmail", { sent: true });
}

async function inNurture(journey: Journey, overrides: Record<string, Value> = {}) {
  await actionPlanSent(journey, overrides);
  await journey.expectActive("MarketingPhase", "NurtureSequence", "WaitBeforeStep");
}

async function bookConsultation(journey: Journey, appointmentAt: Date) {
  await journey.message("ConsultationBooked", { appointmentId: randomUUID(), appointmentAt });
  await journey.completeExternal("MarkMarketingQualifiedLead");
  await journey.expectActive("Consultation", "WaitForAppointment");
}

async function consultationCompleted(journey: Journey) {
  await inNurture(journey);
  await bookConsultation(journey, inDays(3));
  await journey.message("AppointmentCompleted");
}

async function expectStayInTouchOnly(journey: Journey) {
  await journey.expectActive("MarketingPhase", "StayInTouch", "WaitOneMonth");
  await journey.expectNotRunning("nurture-sequence");
}

const cases: Record<string, (journey: Journey) => Promise<void>> = {
  // Nurture → Stay in Touch → End: 12 months without any action.
  "nurture-then-stay-in-touch": async (journey) => {
    await inNurture(journey);
    await journey.expectReached("NoCallNeeded");
    for (const step of [1, 2]) {
      expectEqual(await journey.variable("nurture-sequence", "stepNumber"), step, "nurture step");
      await journey.fireTimer("WaitBeforeStep");
      await journey.completeExternal("SendNurtureEmail", { sent: true });
    }
    await journey.expectNotRunning("nurture-sequence");
    await journey.expectActive("StayInTouch", "WaitOneMonth");
    for (let month = 1; month <= 2; month++) {
      await journey.fireTimer("WaitOneMonth");
      await journey.completeExternal("SendMonthlyEmail", { sent: true });
    }
    await journey.message("EngagementRecorded");
    expectEqual(await journey.variable("stay-in-touch", "monthsWithoutAction"), 0, "months without action after a click");
    for (let month = 1; month <= 12; month++) {
      await journey.fireTimer("WaitOneMonth");
      await journey.completeExternal("SendMonthlyEmail", { sent: true });
    }
    await journey.fireTimer("WaitOneMonth");
    await journey.expectEnded("NoActionFor12Months");
  },

  // Action Plan → Jimmy: call today, reached.
  "call-today-reached": async (journey) => {
    await actionPlanSent(journey, { stubCallToday: true });
    const task = await journey.completeUserTask("CallToday", { reached: true, notes: "drive script" });
    if (!task.due) throw new Error("Jimmy: call today has no due date");
    await journey.expectReached("CallHandled");
    await journey.expectActive("NurtureSequence");
  },

  // Action Plan → Jimmy: call today, not reached → missed-call SMS.
  "call-today-not-reached": async (journey) => {
    await actionPlanSent(journey, { stubCallToday: true });
    await journey.completeUserTask("CallToday", { reached: false });
    await journey.completeExternal("SendMissedCallSms", { sent: true });
    await journey.expectReached("CallHandled");
  },

  // Consultation booked → reminders → completed → Opportunity → application started.
  "consultation-opportunity": async (journey) => {
    await inNurture(journey);
    const appointmentAt = inDays(3);
    await bookConsultation(journey, appointmentAt);
    await journey.expectNotRunning("nurture-sequence");
    expectEqual(await journey.timerDue("Reminder24h"), appointmentAt.getTime() - 24 * HOUR, "24 h reminder time");
    expectEqual(await journey.timerDue("Reminder1h"), appointmentAt.getTime() - HOUR, "1 h reminder time");
    await journey.fireTimer("Reminder24h");
    await journey.completeExternal("SendReminder24h", { sent: true });
    await journey.fireTimer("Reminder1h");
    await journey.completeExternal("SendReminder1h", { sent: true });
    await journey.message("AppointmentCompleted");
    await journey.completeUserTask("RecordConsultationOutcome", { consultationOutcome: "opportunity" });
    await journey.completeExternal("MarkSalesQualifiedLead");
    await journey.completeExternal("CreateOpportunity");
    await journey.fireTimer("WaitForApplication");
    await journey.completeUserTask("CheckApplicationStatus", { status: "not_yet" });
    await journey.fireTimer("WaitForApplication");
    await journey.completeUserTask("CheckApplicationStatus", { status: "started" });
    await journey.expectEnded("ApplicationStarted");
  },

  // Opportunity → application dropped → Stay in Touch.
  "opportunity-dropped": async (journey) => {
    await consultationCompleted(journey);
    await journey.completeUserTask("RecordConsultationOutcome", { consultationOutcome: "opportunity" });
    await journey.completeExternal("MarkSalesQualifiedLead");
    await journey.completeExternal("CreateOpportunity");
    await journey.fireTimer("WaitForApplication");
    await journey.completeUserTask("CheckApplicationStatus", { status: "dropped" });
    await expectStayInTouchOnly(journey);
  },

  // Missed → Team: ask to reschedule → rebooked → missed again → rebooked, no booking in 14 days → Stay in Touch.
  "missed-rebooked": async (journey) => {
    await inNurture(journey);
    await bookConsultation(journey, inDays(3));
    await journey.message("AppointmentMissed");
    await journey.completeUserTask("AskToReschedule", { result: "rebooked" });
    await journey.expectActive("WaitForNewBooking");
    await journey.message("ConsultationBooked", { appointmentId: randomUUID(), appointmentAt: inDays(5) });
    await journey.expectActive("WaitForAppointment");
    await journey.message("AppointmentMissed");
    await journey.completeUserTask("AskToReschedule", { result: "rebooked" });
    await journey.fireTimer("NoNewBooking");
    await expectStayInTouchOnly(journey);
  },

  // Cancelled → Team: ask to reschedule → not reached → Stay in Touch.
  "cancelled-not-reached": async (journey) => {
    await inNurture(journey);
    await bookConsultation(journey, inDays(3));
    await journey.message("AppointmentCancelled");
    await journey.completeUserTask("AskToReschedule", { result: "not_reached" });
    await expectStayInTouchOnly(journey);
  },

  // Rescheduled → no result 2 h after → did not happen → rebooked → no result → happened → Consultation Outcome.
  "rescheduled-no-result": async (journey) => {
    await inNurture(journey);
    await bookConsultation(journey, inDays(3));
    const newTime = inDays(6);
    await journey.message("AppointmentRescheduled", { appointmentAt: newTime });
    expectEqual(await journey.timerDue("Reminder24h"), newTime.getTime() - 24 * HOUR, "24 h reminder after rescheduling");
    await journey.fireTimer("NoAppointmentResult");
    await journey.completeUserTask("DidConsultationHappen", { happened: false });
    await journey.completeUserTask("AskToReschedule", { result: "rebooked" });
    await journey.message("ConsultationBooked", { appointmentId: randomUUID(), appointmentAt: inDays(8) });
    await journey.fireTimer("NoAppointmentResult");
    await journey.completeUserTask("DidConsultationHappen", { happened: true });
    await journey.expectActive("RecordConsultationOutcome");
  },

  // Completed → Preparation Needed → Nurture for the Preparation Reason and a follow-up call on Jimmy's date.
  "preparation-needed": async (journey) => {
    await consultationCompleted(journey);
    const followUpDate = inDays(30);
    await journey.completeUserTask("RecordConsultationOutcome", {
      consultationOutcome: "preparation_needed",
      preparationReason: "build_cash_first",
      followUpDate,
    });
    await journey.completeExternal("MarkPreparationNeeded");
    await journey.expectActive("NurtureSequence", "WaitForFollowUpDate");
    expectEqual(await journey.variable("nurture-sequence", "nextStep"), "build_cash_first", "Nurture Next Step");
    expectEqual(await journey.timerDue("WaitForFollowUpDate"), followUpDate.getTime(), "follow-up date");
    await journey.fireTimer("WaitForFollowUpDate");
    await journey.completeUserTask("FollowUpCall", { result: "booked" });
    await journey.expectReached("FollowUpDone");
    await journey.expectActive("NurtureSequence");
  },

  // Completed → Not Moving Forward → Stay in Touch.
  "not-moving-forward": async (journey) => {
    await consultationCompleted(journey);
    await journey.completeUserTask("RecordConsultationOutcome", { consultationOutcome: "not_moving_forward" });
    await journey.completeExternal("RecordNotMovingForward");
    await expectStayInTouchOnly(journey);
  },

  // Unsubscribe during Nurture: marketing stops; a booked Consultation still gets its reminders.
  "unsubscribe-during-nurture": async (journey) => {
    await inNurture(journey);
    await journey.message("Unsubscribed", { marketingAllowed: false });
    await journey.expectActive("WaitWithoutMarketing");
    await journey.expectNotRunning("nurture-sequence");
    await journey.expectNotRunning("stay-in-touch");
    await bookConsultation(journey, inDays(3));
    await journey.fireTimer("Reminder24h");
    await journey.completeExternal("SendReminder24h", { sent: true });
    await journey.fireTimer("Reminder1h");
    await journey.completeExternal("SendReminder1h", { sent: true });
    await journey.message("AppointmentCompleted");
    await journey.completeUserTask("RecordConsultationOutcome", { consultationOutcome: "not_moving_forward" });
    await journey.completeExternal("RecordNotMovingForward");
    await journey.expectActive("WaitWithoutMarketing");
    await journey.expectNotRunning("stay-in-touch");
    await journey.fireTimer("TwelveMonthsWithoutMarketing");
    await journey.expectEnded("Unsubscribed");
  },

  // No email consent: the Action Plan email still goes out, marketing never starts.
  "no-email-consent": async (journey) => {
    await actionPlanSent(journey, { emailConsent: false });
    await journey.expectActive("WaitWithoutMarketing");
    await journey.expectNotRunning("nurture-sequence");
  },

  // A retake during Nurture restarts Nurture with the new Next Step.
  "retake-during-nurture": async (journey) => {
    await inNurture(journey, { stubNextStep: "fix_credit_first" });
    const firstNurture = await journey.instanceId("nurture-sequence");
    await journey.message("AssessmentRetaken", submission({ stubNextStep: "build_cash_first" }));
    await journey.completeExternal("SaveRetakenActionPlan");
    await journey.completeExternal("SendRetakenActionPlanEmail", { sent: true });
    await journey.expectRestarted("nurture-sequence", firstNurture);
    expectEqual(await journey.variable("nurture-sequence", "nextStep"), "build_cash_first", "restarted Nurture Next Step");
    expectEqual(await journey.variable("lead-journey", "restartNurture"), false, "restartNurture flag after restart");
  },

  // A retake during a Consultation waits; Nurture restarts when the journey returns to marketing.
  "retake-during-consultation": async (journey) => {
    await inNurture(journey);
    await bookConsultation(journey, inDays(3));
    await journey.message("AssessmentRetaken", submission({ stubNextStep: "build_cash_first" }));
    await journey.completeExternal("SaveRetakenActionPlan");
    await journey.completeExternal("SendRetakenActionPlanEmail", { sent: true });
    await journey.expectActive("WaitForAppointment");
    await journey.message("AppointmentCancelled");
    await journey.completeUserTask("AskToReschedule", { result: "not_reached" });
    await journey.expectActive("NurtureSequence");
    expectEqual(await journey.variable("nurture-sequence", "nextStep"), "build_cash_first", "Nurture Next Step after the Consultation");
  },

  // Mortgage Application started at any time: the journey ends.
  "application-started-any-time": async (journey) => {
    await inNurture(journey);
    await journey.message("MortgageApplicationStarted");
    await journey.completeExternal("RecordApplicationStarted");
    await journey.expectEnded("ApplicationStartedEnd");
    await journey.expectNotRunning("nurture-sequence");
  },
};

async function runCase(name: string): Promise<boolean> {
  const lines: string[] = [];
  const journey = createJourney(name, (line) => lines.push(`  ✓ ${line}`));
  let passed = true;
  try {
    await cases[name](journey);
  } catch (error) {
    lines.push(`  ✗ ${error instanceof Error ? error.message : String(error)}`);
    passed = false;
  } finally {
    if (!args.keep) await journey.cleanUp();
  }
  console.log(`${passed ? "PASS" : "FAIL"} ${name} (${journey.businessKey})\n${lines.join("\n")}\n`);
  return passed;
}

async function main() {
  const selected = args.case ?? Object.keys(cases);
  const unknown = selected.filter((name) => !cases[name]);
  if (unknown.length) throw new Error(`Unknown case: ${unknown.join(", ")}. Cases: ${Object.keys(cases).join(", ")}`);
  const results = await Promise.all(selected.map(runCase));
  const failed = results.filter((passed) => !passed).length;
  console.log(failed ? `${failed} of ${results.length} cases failed.` : `All ${results.length} cases passed.`);
  if (failed) process.exitCode = 1;
}

main().catch((error: unknown) => {
  console.error(`✗ ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
