import type { TaskHandler } from "./external-task-loop.ts";

// One handler per external-task topic. The smoke test process uses
// "smoke-echo" to prove the engine-to-Worker path end to end.
export const handlers: Record<string, TaskHandler> = {
  "smoke-echo": async (task) => ({
    echo: { value: task.businessKey, type: "String" },
  }),
};
