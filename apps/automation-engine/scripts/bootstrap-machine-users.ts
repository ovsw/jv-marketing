// Creates or updates the engine's machine logins with the admin login.
// Safe to run again: it also resets each password to the value in the env
// file, which is how a rotated password reaches the engine.
//
//   ops     Ovi's tooling (smoke, promote). Member of camunda-admin.
//   worker  The Worker. Can only fetch, complete, and fail external tasks.

import { createEngineClient, requiredEnv, type EngineClient } from "./engine-rest.ts";

const PROCESS_DEFINITION = 6;
const GRANT = 1;

const admin = createEngineClient({
  url: requiredEnv("ENGINE_URL"),
  username: requiredEnv("ENGINE_ADMIN_USER"),
  password: requiredEnv("ENGINE_ADMIN_PASSWORD"),
});
const adminPassword = requiredEnv("ENGINE_ADMIN_PASSWORD");

async function ensureUser(engine: EngineClient, id: string, password: string, lastName: string) {
  const existing = await engine.get<unknown[]>(`/user?id=${id}`);
  if (existing.length === 0) {
    await engine.post("/user/create", {
      profile: { id, firstName: "Machine", lastName },
      credentials: { password },
    });
    console.log(`✓ created user ${id}`);
  } else {
    await engine.put(`/user/${id}/credentials`, { password, authenticatedUserPassword: adminPassword });
    console.log(`✓ user ${id} exists; password set from env file`);
  }
}

async function main() {
  const opsUser = requiredEnv("ENGINE_OPS_USER");
  const workerUser = requiredEnv("ENGINE_WORKER_USER");

  await ensureUser(admin, opsUser, requiredEnv("ENGINE_OPS_PASSWORD"), "Ops tooling");
  const isAdminMember = await admin.get<unknown[]>(`/user?id=${opsUser}&memberOfGroup=camunda-admin`);
  if (isAdminMember.length === 0) await admin.put(`/group/camunda-admin/members/${opsUser}`);
  console.log(`✓ ${opsUser} is in camunda-admin`);

  await ensureUser(admin, workerUser, requiredEnv("ENGINE_WORKER_PASSWORD"), "Automation Worker");
  const grants = await admin.get<unknown[]>(
    `/authorization?userIdIn=${workerUser}&resourceType=${PROCESS_DEFINITION}&resourceId=*`,
  );
  if (grants.length === 0) {
    await admin.post("/authorization/create", {
      type: GRANT,
      userId: workerUser,
      resourceType: PROCESS_DEFINITION,
      resourceId: "*",
      permissions: ["READ", "READ_INSTANCE", "UPDATE_INSTANCE"],
    });
  }
  console.log(`✓ ${workerUser} may fetch and complete external tasks on every process definition`);
}

main().catch((error: unknown) => {
  console.error(`✗ ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
});
