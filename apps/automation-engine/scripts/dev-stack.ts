// Park and unpark the development engine and Worker on Railway.
//
//   park    removes the running deployments; services and variables stay.
//           The Neon development compute then scales to zero by itself.
//   unpark  deploys both services from this checkout and waits until the
//           engine answers.

import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { setTimeout as sleep } from "node:timers/promises";
import { requiredEnv } from "./engine-rest.ts";

const ENVIRONMENT = "development";
const ENGINE_READY_WAIT_MS = 10 * 60_000;
const repoRoot = fileURLToPath(new URL("../../..", import.meta.url));
const engine = { service: "automation-engine", dir: "apps/automation-engine" };
const worker = { service: "automation-worker", dir: "apps/automation-worker" };

function railway(args: string[]) {
  console.log(`$ railway ${args.join(" ")}`);
  const result = spawnSync("railway", args, { cwd: repoRoot, stdio: "inherit" });
  if (result.status !== 0) throw new Error(`railway ${args[0]} failed (exit ${result.status})`);
}

async function waitForEngine(url: string) {
  const deadline = Date.now() + ENGINE_READY_WAIT_MS;
  while (Date.now() < deadline) {
    const response = await fetch(`${url}/engine-rest/engine`).catch(() => undefined);
    if (response?.ok) return;
    await sleep(5_000);
  }
  throw new Error(`Engine did not answer at ${url} within ${ENGINE_READY_WAIT_MS / 60_000} minutes`);
}

async function main() {
  const [command] = process.argv.slice(2);
  if (command === "park") {
    for (const { service } of [worker, engine]) {
      railway(["down", "--service", service, "--environment", ENVIRONMENT, "--yes"]);
    }
    console.log("✓ development engine and Worker parked");
  } else if (command === "unpark") {
    for (const { service, dir } of [engine, worker]) {
      railway(["up", dir, "--path-as-root", "--service", service, "--environment", ENVIRONMENT, "--ci"]);
    }
    await waitForEngine(requiredEnv("ENGINE_URL"));
    console.log("✓ development engine and Worker running; run pnpm automation:smoke to check");
  } else {
    throw new Error("Usage: dev-stack.ts park|unpark");
  }
}

main().catch((error: unknown) => {
  console.error(`✗ ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
