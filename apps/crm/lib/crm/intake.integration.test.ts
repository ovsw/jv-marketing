import { randomBytes, randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { eq, inArray } from "drizzle-orm";
import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
import { parseSubmission } from "@phx/assessment";
import { submitAssessment } from "@phx/assessment/client";
import fixture from "../../../../packages/assessment/test/fixtures/v1-purchase.json";
import {
  assessmentSubmissions,
  consentRecords,
  intakeCallers,
  people,
} from "@/db/schema";
import { createIntakeHandler, hashIntakeSecret } from "./intake";
import { POST } from "@/app/api/v1/assessment-submissions/route";

// Explicit opt-in: never fall back to either application database variable.
const url = process.env.INTAKE_TEST_DATABASE_URL;
const host = process.env.INTAKE_TEST_DATABASE_HOST;
if (!url || !host || new URL(url).hostname !== host) {
  throw new Error(
    "Set INTAKE_TEST_DATABASE_URL and its INTAKE_TEST_DATABASE_HOST to a dedicated Neon test branch.",
  );
}
const db = drizzle(neon(url));
const liveSecret = randomBytes(32).toString("hex");
const testSecret = randomBytes(32).toString("hex");
const liveId = randomUUID();
const testId = randomUUID();
const emails: string[] = [];
const ids: string[] = [];

function submission(email = `${randomUUID()}@example.com`) {
  const parsed = parseSubmission({
    ...fixture,
    submissionId: randomUUID(),
    contact: { ...fixture.contact, email },
  });
  if (!parsed.success) throw new Error("Invalid integration fixture");
  emails.push(email.toLowerCase());
  ids.push(parsed.data.submissionId);
  return parsed.data;
}
function request(body: unknown, secret = liveSecret) {
  return new Request("https://crm.example/api/v1/assessment-submissions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secret}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}
const handle = createIntakeHandler({
  database: () => db,
  dispatch: vi.fn(async () => {}),
});

beforeAll(async () => {
  await migrate(db, { migrationsFolder: "./drizzle" });
  await db.insert(intakeCallers).values([
    {
      id: liveId,
      secretHash: hashIntakeSecret(liveSecret),
      webProperty: "phxhomeloan.com",
      brand: "PHX Home Loan",
      environment: "live",
    },
    {
      id: testId,
      secretHash: hashIntakeSecret(testSecret),
      webProperty: "phxhomeloan.com",
      brand: "PHX Preview",
      environment: "test",
    },
  ]);
});
afterAll(async () => {
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
  await db
    .delete(intakeCallers)
    .where(inArray(intakeCallers.id, [liveId, testId]));
});

describe("intake route with a real Neon transaction", () => {
  it("rejects a missing secret at the exported route without database access", async () => {
    const response = await POST(
      new Request("https://crm.example/api/v1/assessment-submissions", {
        method: "POST",
      }),
    );
    expect(response.status).toBe(401);
    expect(response.headers.get("content-type")).toContain(
      "application/problem+json",
    );
  });

  it("does not report success or expose database errors when persistence is unavailable", async () => {
    const route = createIntakeHandler({
      database: () => {
        throw new Error("private database credentials");
      },
    });
    const response = await route(request(submission()));
    expect(response.status).toBe(503);
    expect(await response.text()).not.toContain("private database credentials");
  });

  it("rejects unknown secrets and browser requests without CORS headers", async () => {
    const body = submission();
    const response = await handle(request(body, "unknown"));
    expect(response.status).toBe(401);
    expect(response.headers.has("access-control-allow-origin")).toBe(false);
    const browser = request(body);
    browser.headers.set("origin", "https://website.example");
    expect((await handle(browser)).status).toBe(401);
    expect(
      await db
        .select()
        .from(people)
        .where(eq(people.email, body.contact.email)),
    ).toHaveLength(0);
  });

  it("commits all records before dispatch and returns only the receipt through the typed client", async () => {
    const body = submission();
    const dispatch = vi.fn(async (id: string) => {
      const saved = await db
        .select()
        .from(assessmentSubmissions)
        .where(eq(assessmentSubmissions.id, id));
      const consent = await db
        .select()
        .from(consentRecords)
        .where(eq(consentRecords.submissionId, id));
      expect(saved).toHaveLength(1);
      expect(consent).toHaveLength(1);
    });
    const route = createIntakeHandler({ database: () => db, dispatch });
    const result = await submitAssessment({
      baseUrl: "https://crm.example",
      secret: liveSecret,
      submission: body,
      fetch: async (input, init) => route(new Request(String(input), init)),
    });
    expect(result.ok).toBe(true);
    expect(result.status).toBe(201);
    if (!result.ok) throw new Error("Expected a receipt");
    expect(Object.keys(result.data).sort()).toEqual([
      "receivedAt",
      "submissionId",
    ]);
    expect(result.data.submissionId).toBe(body.submissionId);
    expect(dispatch).toHaveBeenCalledExactlyOnceWith(body.submissionId);
    expect(dispatch.mock.settledResults[0].type).toBe("fulfilled");
    const [saved] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, body.submissionId));
    expect(saved).toMatchObject({
      environment: "live",
      intakeCallerId: liveId,
      answers: body.answers,
      contact: body.contact,
      reportedScore: body.reportedScore,
      actionPlan: body.actionPlan,
      mortgageGoal: "purchase",
      state: "AZ",
      dispatchState: "pending",
    });
    expect(saved.requestHash).toMatch(/^[a-f0-9]{64}$/);
    expect(saved.receivedAt.toISOString()).toBe(result.data.receivedAt);
    const [consent] = await db
      .select()
      .from(consentRecords)
      .where(eq(consentRecords.submissionId, body.submissionId));
    expect(consent).toMatchObject({
      brand: "PHX Home Loan",
      environment: "live",
      assessmentVersion: "1",
      promiseText: body.consent.promiseText,
      channels: body.consent.channels,
      consentedAt: new Date(body.consent.timestamp),
    });
  });

  it("takes the test environment and brand from the caller", async () => {
    const body = submission();
    expect((await handle(request(body, testSecret))).status).toBe(201);
    const [saved] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, body.submissionId));
    const [consent] = await db
      .select()
      .from(consentRecords)
      .where(eq(consentRecords.submissionId, body.submissionId));
    expect(saved).toMatchObject({
      environment: "test",
      intakeCallerId: testId,
    });
    expect(consent).toMatchObject({
      environment: "test",
      brand: "PHX Preview",
    });
    expect(
      (
        await handle(
          request(
            { ...submission(), environment: "live", brand: "Other" },
            testSecret,
          ),
        )
      ).status,
    ).toBe(400);
  });

  it("links by lowercased email without changing an existing Person", async () => {
    const email = `${randomUUID()}@example.com`;
    const first = submission(email.toUpperCase());
    first.contact.phone = "555-0100";
    const second = submission(email);
    second.contact.firstName = "Changed";
    second.contact.phone = "555-0101";
    expect((await handle(request(first))).status).toBe(201);
    expect((await handle(request(second))).status).toBe(201);
    const found = await db.select().from(people).where(eq(people.email, email));
    expect(found).toHaveLength(1);
    expect(found[0]).toMatchObject({
      firstName: first.contact.firstName,
      phone: "555-0100",
    });
    const saved = await db
      .select()
      .from(assessmentSubmissions)
      .where(
        inArray(assessmentSubmissions.id, [
          first.submissionId,
          second.submissionId,
        ]),
      );
    expect(saved.map((row) => row.personId)).toEqual([
      found[0].id,
      found[0].id,
    ]);
    expect(
      saved.find((row) => row.id === second.submissionId)?.contact.firstName,
    ).toBe("Changed");
  });

  it("handles concurrent submissions for a new email", async () => {
    const email = `${randomUUID()}@example.com`;
    const bodies = [submission(email), submission(email)];
    const results = await Promise.all(
      bodies.map((body) => handle(request(body))),
    );
    expect(results.map((result) => result.status)).toEqual([201, 201]);
    expect(
      await db.select().from(people).where(eq(people.email, email)),
    ).toHaveLength(1);
  });

  it("rolls back a new Person if a later insert fails", async () => {
    const first = submission();
    expect((await handle(request(first))).status).toBe(201);
    const duplicate = { ...submission(), submissionId: first.submissionId };
    expect((await handle(request(duplicate))).status).toBe(409);
    expect(
      await db
        .select()
        .from(people)
        .where(eq(people.email, duplicate.contact.email)),
    ).toHaveLength(0);
  });

  it("keeps a committed submission pending when worker dispatch fails", async () => {
    const body = submission();
    const route = createIntakeHandler({
      database: () => db,
      dispatch: async () => {
        throw new Error("Worker offline");
      },
    });
    expect((await route(request(body))).status).toBe(201);
    const [saved] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, body.submissionId));
    expect(saved.dispatchState).toBe("pending");
  });
});
