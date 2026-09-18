import { afterEach, beforeEach, expect, it, vi } from "vitest";
import { PgDialect } from "drizzle-orm/pg-core";
import type { SQL } from "drizzle-orm";

const mocks = vi.hoisted(() => ({
  database: vi.fn(),
  set: vi.fn(),
  where: vi.fn<(condition: SQL) => { returning: () => Promise<unknown[]> }>(),
  returning: vi.fn(),
  pendingWhere: vi.fn(),
  pending: vi.fn(),
  trigger: vi.fn(),
  key: vi.fn(),
  scheduledTask: vi.fn(
    (definition: { run: () => Promise<unknown> }) => definition,
  ),
  schemaTask: vi.fn(
    (definition: {
      schema: { parse: (value: unknown) => unknown };
      run: (
        payload: { submissionId: string },
        options: { ctx: { run: { id: string } } },
      ) => Promise<unknown>;
    }) => definition,
  ),
}));
vi.mock("../../db/client", () => ({ database: mocks.database }));
vi.mock("@trigger.dev/sdk", () => ({
  schemaTask: mocks.schemaTask,
  schedules: { task: mocks.scheduledTask },
  tasks: { trigger: mocks.trigger },
  idempotencyKeys: { create: mocks.key },
}));
import "../../trigger/assessment-submission";
import "../../trigger/redispatch-assessment-submissions";

const submissionId = "123e4567-e89b-42d3-a456-426614174000";
const task = mocks.schemaTask.mock.calls[0][0];
const scheduledTask = mocks.scheduledTask.mock.calls[0][0];

beforeEach(() => {
  vi.stubEnv("DATABASE_URL", "postgresql://test.invalid/neondb?sslmode=require");
  mocks.database.mockClear();
  mocks.set.mockClear();
  mocks.where.mockClear();
  mocks.pendingWhere.mockClear();
  mocks.pending.mockReset().mockResolvedValue([]);
  mocks.trigger.mockReset().mockResolvedValue({ id: "run_assessment" });
  mocks.key.mockReset().mockImplementation(async (value) => value);
  mocks.returning.mockResolvedValue([{ id: submissionId }]);
  mocks.where.mockReturnValue({ returning: mocks.returning });
  mocks.set.mockReturnValue({ where: mocks.where });
  mocks.pendingWhere.mockReturnValue({
    orderBy: () => ({ limit: mocks.pending }),
  });
  mocks.database.mockReturnValue({
    update: () => ({ set: mocks.set }),
    select: () => ({ from: () => ({ where: mocks.pendingWhere }) }),
  });
});

afterEach(() => vi.unstubAllEnvs());

it("leaves intake disabled on a worker that has no intake database configured", async () => {
  vi.stubEnv("DATABASE_URL", "");
  await expect(scheduledTask.run()).resolves.toEqual({
    skipped: "intake_not_configured",
  });
  expect(mocks.database).not.toHaveBeenCalled();
  expect(mocks.trigger).not.toHaveBeenCalled();
});

it("re-dispatches pending submissions with the same global keys as the HTTP route", async () => {
  mocks.pending.mockResolvedValueOnce([{ id: submissionId }]);
  await scheduledTask.run();
  expect(mocks.key).toHaveBeenCalledExactlyOnceWith(
    `assessment-submission:${submissionId}`,
    { scope: "global" },
  );
  expect(mocks.trigger).toHaveBeenCalledExactlyOnceWith(
    "assessment-submission",
    { submissionId },
    { idempotencyKey: `assessment-submission:${submissionId}` },
  );
  const query = new PgDialect().sqlToQuery(
    mocks.pendingWhere.mock.calls[0][0],
  );
  expect(query.params).toContain("pending");
  expect(query.sql).toContain('"dispatch_state" =');
  expect(mocks.set).not.toHaveBeenCalled();
});

it("continues to later batches after a dispatch failure without marking work handled", async () => {
  const secondId = "223e4567-e89b-42d3-a456-426614174000";
  mocks.pending
    .mockResolvedValueOnce([{ id: submissionId }])
    .mockResolvedValueOnce([{ id: secondId }]);
  mocks.trigger.mockRejectedValueOnce(new Error("Worker unavailable"));
  await expect(scheduledTask.run()).resolves.toEqual({
    dispatched: 1,
    failed: 1,
  });
  expect(mocks.trigger).toHaveBeenCalledTimes(2);
  expect(mocks.trigger).toHaveBeenLastCalledWith(
    "assessment-submission",
    { submissionId: secondId },
    { idempotencyKey: `assessment-submission:${secondId}` },
  );
  const nextPage = new PgDialect().sqlToQuery(
    mocks.pendingWhere.mock.calls[1][0],
  );
  expect(nextPage.params).toContain(submissionId);
  expect(nextPage.sql).toContain('"id" >');
  expect(mocks.set).not.toHaveBeenCalled();
});

it("marks only the pending submission handled and records the worker run ID together", async () => {
  await task.run({ submissionId }, { ctx: { run: { id: "run_assessment" } } });
  expect(mocks.set).toHaveBeenCalledExactlyOnceWith({
    dispatchState: "handled",
    runId: "run_assessment",
  });
  const query = new PgDialect().sqlToQuery(mocks.where.mock.calls[0][0]);
  expect(query.params).toEqual([submissionId, "pending"]);
  expect(query.sql).toContain('"crm_assessment_submissions"."id" =');
  expect(query.sql).toContain('"dispatch_state" =');
});
