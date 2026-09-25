import { hostname } from "node:os";
import { runExternalTaskLoop } from "./external-task-loop.ts";
import { handlers } from "./handlers.ts";

function required(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable ${name}`);
  return value;
}

const controller = new AbortController();
for (const signal of ["SIGTERM", "SIGINT"] as const) {
  process.once(signal, () => controller.abort());
}

await runExternalTaskLoop({
  engineRestUrl: required("ENGINE_REST_URL"),
  username: required("ENGINE_WORKER_USER"),
  password: required("ENGINE_WORKER_PASSWORD"),
  workerId: `automation-worker-${process.env.RAILWAY_REPLICA_ID ?? hostname()}`,
  handlers,
  signal: controller.signal,
});
