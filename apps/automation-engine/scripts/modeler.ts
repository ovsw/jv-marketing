// Moves the promoted flows in processes/ between this repo and the development
// Modeler.
//
//   pnpm modeler:push [--force]  upload each file (overwrite); deploy the ones that changed
//   pnpm modeler:pull            write the Modeler's current XML back into processes/
//
// After an edit in the Modeler, pull before the next edit in the repo. Push
// refuses to overwrite Modeler edits that were never pulled, unless --force.

import { fileURLToPath } from "node:url";
import { parseArgs } from "node:util";
import { createEngineClient, requiredEnv } from "./engine-rest.ts";
import { createModelerClient, pullFromModeler, pushToModeler } from "./modeler-client.ts";

const { values: args, positionals } = parseArgs({
  allowPositionals: true,
  options: { force: { type: "boolean", default: false } },
});

const processesDir = fileURLToPath(new URL("../processes", import.meta.url));
const login = {
  url: requiredEnv("ENGINE_URL"),
  username: requiredEnv("ENGINE_OPS_USER"),
  password: requiredEnv("ENGINE_OPS_PASSWORD"),
};
const client = createModelerClient(login);

async function push() {
  for (const { file, deployment } of await pushToModeler(client, createEngineClient(login), processesDir, { force: args.force })) {
    console.log(`✓ ${file.fileName} → Modeler "${file.name}", ${deployment ? "deployed a new version" : "deployed version unchanged"}`);
  }
}

async function pull() {
  const result = await pullFromModeler(client, processesDir);
  for (const file of result.written) console.log(`✓ ${file.fileName} updated from the Modeler`);
  for (const file of result.unchanged) console.log(`  ${file.fileName} unchanged`);
  for (const file of result.notInModeler) console.log(`! ${file.fileName} is not in the Modeler (run modeler:push)`);
  for (const diagram of result.notInRepo) console.log(`  skipped Modeler diagram "${diagram.name}" (${diagram.processkey}): no file in processes/`);
}

const commands: Record<string, () => Promise<void>> = { push, pull };
const command = commands[positionals[0] ?? ""];
if (!command) {
  console.error("Usage: modeler.ts push [--force] | pull");
  process.exitCode = 2;
} else {
  command().catch((error: unknown) => {
    console.error(`✗ ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
  });
}
