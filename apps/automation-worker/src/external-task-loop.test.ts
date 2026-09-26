import { once } from "node:events";
import { createServer, type IncomingMessage, type Server } from "node:http";
import type { AddressInfo } from "node:net";
import { afterEach, describe, expect, it } from "vitest";
import { runExternalTaskLoop, type LockedTask, type TaskHandler } from "./external-task-loop.ts";
import { handlers } from "./handlers.ts";

type Call = { path: string; authorization?: string; body: Record<string, unknown> };

// A fake engine REST API: hands out the queued tasks once, then answers
// every later fetchAndLock with an empty list, and records every call.
async function startFakeEngine(tasks: LockedTask[], fetchStatus = 200) {
  const calls: Call[] = [];
  const server: Server = createServer(async (request: IncomingMessage, response) => {
    let raw = "";
    for await (const chunk of request) raw += chunk;
    const path = request.url ?? "";
    calls.push({ path, authorization: request.headers.authorization, body: raw ? JSON.parse(raw) : {} });
    if (path.endsWith("/fetchAndLock")) {
      response.writeHead(fetchStatus, { "content-type": "application/json" });
      response.end(fetchStatus === 200 ? JSON.stringify(tasks.splice(0)) : "{}");
      return;
    }
    response.writeHead(204).end();
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const { port } = server.address() as AddressInfo;
  return { url: `http://127.0.0.1:${port}/engine-rest`, calls, close: () => server.close() };
}

const task: LockedTask = {
  id: "task-1",
  topicName: "smoke-echo",
  businessKey: "smoke-person-123",
  processInstanceId: "instance-1",
  retries: null,
};

let stop: () => void = () => {};
afterEach(() => stop());

function start(url: string, taskHandlers: Record<string, TaskHandler>) {
  const controller = new AbortController();
  const silent = { info: () => {}, error: () => {} };
  const done = runExternalTaskLoop({
    engineRestUrl: url,
    username: "worker",
    password: "secret",
    workerId: "worker-test",
    handlers: taskHandlers,
    signal: controller.signal,
    longPollMs: 0,
    maxBackoffMs: 20,
    log: silent,
  });
  return { stop: () => controller.abort(), done };
}

async function waitFor(check: () => boolean) {
  for (let i = 0; i < 200 && !check(); i++) await new Promise((r) => setTimeout(r, 10));
  expect(check()).toBe(true);
}

describe("external task loop", () => {
  it("completes a smoke-echo task with the business key echoed back", async () => {
    const engine = await startFakeEngine([{ ...task }]);
    const worker = start(engine.url, handlers);
    stop = () => (worker.stop(), engine.close());

    await waitFor(() => engine.calls.some((c) => c.path.endsWith("/task-1/complete")));
    const complete = engine.calls.find((c) => c.path.endsWith("/task-1/complete"))!;
    expect(complete.body).toEqual({
      workerId: "worker-test",
      variables: { echo: { value: "smoke-person-123", type: "String" } },
    });
    expect(complete.authorization).toBe(`Basic ${Buffer.from("worker:secret").toString("base64")}`);

    const fetch = engine.calls.find((c) => c.path.endsWith("/fetchAndLock"))!;
    expect(fetch.body).toMatchObject({ workerId: "worker-test", topics: [{ topicName: "smoke-echo" }] });
  });

  it("reports a handler failure to the engine with one retry fewer", async () => {
    const engine = await startFakeEngine([{ ...task, retries: 2 }]);
    const worker = start(engine.url, {
      "smoke-echo": async () => {
        throw new Error("vendor down");
      },
    });
    stop = () => (worker.stop(), engine.close());

    await waitFor(() => engine.calls.some((c) => c.path.endsWith("/task-1/failure")));
    const failure = engine.calls.find((c) => c.path.endsWith("/task-1/failure"))!;
    expect(failure.body).toMatchObject({ workerId: "worker-test", errorMessage: "vendor down", retries: 1 });
    expect(engine.calls.some((c) => c.path.endsWith("/complete"))).toBe(false);
  });

  it("keeps polling after the engine is unavailable and stops on abort", async () => {
    const engine = await startFakeEngine([], 503);
    const worker = start(engine.url, handlers);
    stop = () => engine.close();

    await waitFor(() => engine.calls.filter((c) => c.path.endsWith("/fetchAndLock")).length >= 3);
    worker.stop();
    await expect(worker.done).resolves.toBeUndefined();
  });
});
