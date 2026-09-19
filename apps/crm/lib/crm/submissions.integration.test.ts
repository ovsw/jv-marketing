import { randomBytes, randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { eq, inArray, sql } from "drizzle-orm";
import { afterAll, afterEach, beforeAll, expect, it, vi } from "vitest";
import fixture from "../../../../packages/assessment/test/fixtures/v1-purchase.json";
import {
  assessmentSubmissions,
  consentRecords,
  intakeCallers,
  people,
} from "@/db/schema";
import { intakeTestDatabaseUrl } from "@/test/intake-database";
import { createIntakeHandler, hashIntakeSecret } from "./intake";

vi.mock("./auth", () => ({
  requireStaff: vi.fn(async () => ({ userId: "staff" })),
}));
vi.mock("@/db/client", () => ({
  database: () => drizzle(neon(intakeTestDatabaseUrl())),
}));
import {
  InvalidSubmissionList,
  listAssessmentSubmissions,
} from "./submissions";

const db = drizzle(neon(intakeTestDatabaseUrl()));
const callers = ["live", "test"].map((environment) => ({
  id: randomUUID(),
  secret: randomBytes(32).toString("hex"),
  environment: environment as "live" | "test",
}));
const ids: string[] = [];
const emails: string[] = [];
const handle = createIntakeHandler({
  database: () => db,
  dispatch: async () => {
    throw new Error("Worker offline");
  },
});

function body(email = `${randomUUID()}@example.com`) {
  const submission = {
    ...fixture,
    submissionId: randomUUID(),
    contact: { ...fixture.contact, email },
  };
  ids.push(submission.submissionId);
  emails.push(email);
  return submission;
}

async function receive(
  submission: ReturnType<typeof body>,
  caller = callers[0],
) {
  const response = await handle(
    new Request("https://crm.example/api/v1/assessment-submissions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${caller.secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    }),
  );
  expect(response.status).toBe(201);
}

beforeAll(async () => {
  await migrate(db, { migrationsFolder: "./drizzle" });
  await db.insert(intakeCallers).values(
    callers.map((caller) => ({
      id: caller.id,
      secretHash: hashIntakeSecret(caller.secret),
      webProperty: "phxhomeloan.com",
      brand:
        caller.environment === "live"
          ? "Saved live brand"
          : "Saved preview brand",
      environment: caller.environment,
    })),
  );
});

it("filters before paging and retains exact timestamp and ID order across newer arrivals", async () => {
  const seed = body();
  await receive(seed);
  const [template] = await db
    .select()
    .from(assessmentSubmissions)
    .where(eq(assessmentSubmissions.id, seed.submissionId));
  const idPrefix = randomUUID().slice(0, 24);
  const liveIds = Array.from(
    { length: 54 },
    (_, i) => `${idPrefix}${String(i + 1).padStart(12, "0")}`,
  );
  const testIds = Array.from({ length: 55 }, () => randomUUID());
  ids.push(...liveIds, ...testIds);
  await db
    .insert(assessmentSubmissions)
    .values([
      ...liveIds.map((id, i) => ({
        ...template,
        id,
        receivedAt: sql`'2099-01-01T00:00:00.000100Z'::timestamptz + ${i >= 3 ? 1 : 0} * interval '0.0001 seconds'`,
      })),
      ...testIds.map((id) => ({
        ...template,
        id,
        environment: "test" as const,
        receivedAt: sql`'2100-01-01T00:00:00Z'::timestamptz`,
      })),
    ]);
  const all = await listAssessmentSubmissions();
  expect(all.items).toHaveLength(50);
  expect(all.items.every((item) => item.environment === "test")).toBe(true);
  const first = await listAssessmentSubmissions({
    personId: template.personId,
    environment: "live",
  });
  expect(first.items.map((item) => item.id)).toEqual(
    liveIds.slice(4).reverse(),
  );
  expect(first.items[49].receivedAt).toBe("2099-01-01T00:00:00.000200Z");
  expect(first.nextCursor).toEqual(expect.any(String));
  const newer = body();
  await receive(newer);
  await db
    .update(assessmentSubmissions)
    .set({ receivedAt: new Date("2101-01-01") })
    .where(eq(assessmentSubmissions.id, newer.submissionId));
  const second = await listAssessmentSubmissions({
    personId: template.personId,
    environment: "live",
    cursor: first.nextCursor,
  });
  expect(second.items.map((item) => item.id)).toEqual([
    ...liveIds.slice(0, 4).reverse(),
    seed.submissionId,
  ]);
  expect(second.nextCursor).toBeNull();
  for (const filters of [
    { environment: "live" },
    { personId: template.personId },
    { personId: randomUUID(), environment: "live" },
  ]) {
    await expect(
      listAssessmentSubmissions({ ...filters, cursor: first.nextCursor }),
    ).rejects.toBeInstanceOf(InvalidSubmissionList);
  }
  expect(
    (await listAssessmentSubmissions({ personId: randomUUID() })).items,
  ).toEqual([]);
});

it("returns each submission's own consent and keeps submissions with missing consent", async () => {
  const first = body();
  const second = body(first.contact.email);
  second.consent = {
    ...second.consent,
    promiseText: "A different saved promise.",
    channels: ["email"],
    timestamp: "2026-09-19T10:01:00.000Z",
  };
  await receive(first);
  await receive(second, callers[1]);
  // Attribution on the Consent Record must not be replaced by the caller's current brand.
  await db
    .update(consentRecords)
    .set({ brand: "Saved sender" })
    .where(eq(consentRecords.submissionId, first.submissionId));
  const result = await listAssessmentSubmissions();
  expect(
    result.items.find((s) => s.id === first.submissionId)?.consent,
  ).toMatchObject({
    promiseText: first.consent.promiseText,
    channels: first.consent.channels,
    brand: "Saved sender",
    environment: "live",
    assessmentVersion: "1",
  });
  expect(
    result.items.find((s) => s.id === second.submissionId)?.consent,
  ).toMatchObject({
    promiseText: second.consent.promiseText,
    channels: ["email"],
    consentedAt: second.consent.timestamp,
    brand: "Saved preview brand",
    environment: "test",
  });
  await db
    .delete(consentRecords)
    .where(eq(consentRecords.submissionId, first.submissionId));
  expect(
    (await listAssessmentSubmissions()).items.find(
      (s) => s.id === first.submissionId,
    )?.consent,
  ).toBeNull();
});

afterEach(async () => {
  if (ids.length) {
    await db
      .delete(consentRecords)
      .where(inArray(consentRecords.submissionId, ids));
    await db
      .delete(assessmentSubmissions)
      .where(inArray(assessmentSubmissions.id, ids));
  }
  if (emails.length)
    await db.delete(people).where(inArray(people.email, emails));
  ids.length = 0;
  emails.length = 0;
});
afterAll(async () => {
  await db.delete(intakeCallers).where(
    inArray(
      intakeCallers.id,
      callers.map((c) => c.id),
    ),
  );
});

it("reads distinct saved submissions across People, including retries and failed dispatch", async () => {
  const first = body();
  const second = body(first.contact.email);
  second.contact.firstName = "Later snapshot";
  const third = body();
  await receive(first);
  await receive(second, callers[1]);
  await receive(third);
  await receive(first);
  const result = await listAssessmentSubmissions();
  const saved = result.items.filter((item) => ids.includes(item.id));
  expect(saved.map((item) => item.id)).toEqual([
    third.submissionId,
    second.submissionId,
    first.submissionId,
  ]);
  expect(saved[1]).toMatchObject({
    contact: second.contact,
    environment: "test",
    originBrand: "Saved preview brand",
  });
  expect(saved[2]).toMatchObject({
    contact: first.contact,
    environment: "live",
    answers: first.answers,
    reportedScore: first.reportedScore,
    actionPlan: first.actionPlan,
  });
  expect(saved[1].personId).toBe(saved[2].personId);
  expect(saved[0].personId).not.toBe(saved[1].personId);
  for (const key of ["secretHash", "requestHash", "runId"])
    expect(saved[0]).not.toHaveProperty(key);
});
