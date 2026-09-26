// Smoke test through the engine REST API: deploy the disposable test process,
// start it with a fake Person ID, see the Worker complete its external task,
// complete the user task, see the timer fire and the instance end.
//
//   pnpm smoke                     full run (timer PT5S)
//   pnpm smoke --timer PT3M --hold stop with the timer pending and the user task open
//   pnpm smoke --resume <id>       finish a held instance (after an engine restart)

import { randomUUID } from "node:crypto";
import { readFile } from "node:fs/promises";
import { setTimeout as sleep } from "node:timers/promises";
import { parseArgs } from "node:util";
import { createEngineClient, requiredEnv } from "./engine-rest.ts";

const { values: args } = parseArgs({
  options: {
    timer: { type: "string", default: "PT5S" },
    hold: { type: "boolean", default: false },
    resume: { type: "string" },
  },
});

const engine = createEngineClient({
  url: requiredEnv("ENGINE_URL"),
  username: requiredEnv("ENGINE_OPS_USER"),
  password: requiredEnv("ENGINE_OPS_PASSWORD"),
});

const WORKER_WAIT_MS = 90_000;
const TIMER_WAIT_MS = 10 * 60_000;

function pass(message: string) {
  console.log(`✓ ${message}`);
}

async function waitFor<T>(what: string, timeoutMs: number, probe: () => Promise<T | undefined>): Promise<T> {
  const deadline = Date.now() + timeoutMs;
  for (;;) {
    const result = await probe();
    if (result !== undefined) return result;
    if (Date.now() > deadline) throw new Error(`Timed out after ${timeoutMs / 1000} s waiting for ${what}`);
    await sleep(2_000);
  }
}

async function deployTestProcess() {
  const xml = await readFile(new URL("../test-processes/smoke-test.bpmn", import.meta.url));
  const form = new FormData();
  form.set("deployment-name", "smoke-test");
  form.set("deployment-source", "smoke-command");
  form.set("deploy-changed-only", "true");
  form.set("smoke-test.bpmn", new Blob([xml], { type: "application/xml" }), "smoke-test.bpmn");
  await engine.post("/deployment/create", form);
  pass("test process deployed");
}

async function startInstance(timer: string) {
  const businessKey = `smoke-person-${randomUUID()}`;
  const instance = await engine.post<{ id: string }>("/process-definition/key/smoke-test/start", {
    businessKey,
    variables: { timerDuration: { value: timer, type: "String" } },
  });
  pass(`instance ${instance.id} started with fake Person ID ${businessKey}`);
  return { id: instance.id, businessKey };
}

async function openUserTask(instanceId: string) {
  return waitFor("the Worker to complete the external task", WORKER_WAIT_MS, async () => {
    const tasks = await engine.get<{ id: string }[]>(`/task?processInstanceId=${instanceId}&taskDefinitionKey=review`);
    return tasks[0];
  });
}

async function checkEcho(instanceId: string, businessKey: string) {
  const echo = await engine.get<{ value: unknown }>(`/process-instance/${instanceId}/variables/echo`);
  if (echo.value !== businessKey) throw new Error(`Worker echoed ${String(echo.value)}, expected ${businessKey}`);
  pass("Worker completed the external task and echoed the fake Person ID");
}

async function finish(instanceId: string, taskId: string) {
  await engine.post(`/task/${taskId}/complete`, {});
  pass("user task completed through the REST API");

  const timer = await waitFor("the timer to fire", TIMER_WAIT_MS, async () => {
    const [activity] = await engine.get<{ endTime: string | null }[]>(
      `/history/activity-instance?processInstanceId=${instanceId}&activityId=timer`,
    );
    return activity?.endTime ? activity : undefined;
  });
  pass(`timer fired at ${timer.endTime}`);

  await waitFor("the instance to end", WORKER_WAIT_MS, async () => {
    const instance = await engine.get<{ state: string }>(`/history/process-instance/${instanceId}`);
    return instance.state === "COMPLETED" ? instance : undefined;
  });
  pass(`instance ${instanceId} ended`);
}

async function main() {
  if (args.resume) {
    const instance = await engine.get<{ id: string; businessKey: string }>(`/process-instance/${args.resume}`);
    const task = await openUserTask(instance.id);
    pass("held instance still has its open user task");
    await checkEcho(instance.id, instance.businessKey);
    await finish(instance.id, task.id);
    return;
  }

  await deployTestProcess();
  const instance = await startInstance(args.timer);
  const task = await openUserTask(instance.id);
  await checkEcho(instance.id, instance.businessKey);

  if (args.hold) {
    console.log(`\nInstance ${instance.id} is held: timer ${args.timer} pending, user task open.`);
    console.log(`Restart the engine, then run: pnpm smoke --resume ${instance.id}`);
    return;
  }
  await finish(instance.id, task.id);
  console.log("\nSmoke test passed.");
}

main().catch((error: unknown) => {
  console.error(`✗ ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
