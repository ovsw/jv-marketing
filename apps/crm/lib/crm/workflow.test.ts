import { describe, expect, it } from "vitest";
import { STUCK_AFTER_MS, describeWorkflow, waitLabel } from "./workflow";

const now = Date.parse("2026-09-18T12:00:00Z");
const fresh = new Date(now - 5_000);
const old = new Date(now - STUCK_AFTER_MS);

function row(overrides: Partial<Parameters<typeof describeWorkflow>[0]> = {}) {
  return {
    jobStatus: "pending",
    runId: "run",
    emailId: null,
    lastError: null,
    updatedAt: fresh,
    ...overrides,
  };
}

describe("describeWorkflow", () => {
  it("reports a completed row as complete without consulting the run", () => {
    const workflow = describeWorkflow(
      row({ jobStatus: "complete" }),
      { status: "FAILED", error: "ignored" },
      now,
    );
    expect(workflow).toMatchObject({ step: "complete", state: "complete" });
  });

  it("treats a row with no run as saved while dispatch is under way", () => {
    expect(describeWorkflow(row({ runId: null }), null, now)).toMatchObject({
      step: "saved",
      state: "in_progress",
      warning: null,
    });
  });

  it("treats a row that never got a run as a failed dispatch", () => {
    const workflow = describeWorkflow(
      row({ runId: null, updatedAt: old }),
      null,
      now,
    );
    expect(workflow).toMatchObject({ step: "failed", state: "failed" });
    expect(workflow.detail).toContain("not dispatched");
  });

  it("shows dispatched when the run status is unknown", () => {
    expect(describeWorkflow(row(), null, now)).toMatchObject({
      step: "dispatched",
      warning: null,
    });
    expect(describeWorkflow(row({ updatedAt: old }), null, now).warning).toContain(
      "No status from Trigger.dev in 2 min",
    );
  });

  it("shows queued with a worker hint once the run has waited too long", () => {
    const queued = { status: "QUEUED", error: null };
    expect(describeWorkflow(row(), queued, now)).toMatchObject({
      step: "queued",
      warning: null,
    });
    expect(describeWorkflow(row({ updatedAt: old }), queued, now).warning).toBe(
      "No worker has picked up this job in 2 min. Start the Trigger.dev worker.",
    );
  });

  it("shows running for an executing run", () => {
    expect(
      describeWorkflow(row(), { status: "EXECUTING", error: null }, now),
    ).toMatchObject({ step: "running", state: "in_progress" });
  });

  it("shows email sent once Resend accepted the message", () => {
    expect(describeWorkflow(row({ emailId: "email" }), null, now)).toMatchObject({
      step: "email_sent",
      state: "in_progress",
    });
  });

  it("surfaces a run that died before the task recorded a failure", () => {
    const workflow = describeWorkflow(
      row(),
      { status: "CRASHED", error: "Out of memory" },
      now,
    );
    expect(workflow).toMatchObject({ step: "failed", state: "failed" });
    expect(workflow.detail).toBe(
      "The job stopped on Trigger.dev (crashed). Out of memory",
    );
  });

  it("uses the recorded error for a failed row", () => {
    expect(
      describeWorkflow(
        row({ jobStatus: "failed", lastError: "Preview email is disabled." }),
        null,
        now,
      ),
    ).toMatchObject({ step: "failed", detail: "Preview email is disabled." });
  });

  it("shows a retried failure as queued while its new run waits", () => {
    expect(
      describeWorkflow(
        row({ jobStatus: "failed", lastError: "Old error" }),
        { status: "QUEUED", error: null },
        now,
      ),
    ).toMatchObject({ step: "queued", state: "in_progress" });
  });
});

it("formats waits in minutes, then hours", () => {
  expect(waitLabel(90_000)).toBe("1 min");
  expect(waitLabel(59 * 60_000)).toBe("59 min");
  expect(waitLabel(3 * 60 * 60_000 + 5 * 60_000)).toBe("3 hr");
});
