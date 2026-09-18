import { randomBytes, randomUUID } from "node:crypto";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { eq, inArray } from "drizzle-orm";
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
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
import { intakeTestDatabaseUrl } from "@/test/intake-database";

const worker = vi.hoisted(() => ({
  after: vi.fn<(callback: () => Promise<void>) => void>(),
  trigger: vi.fn(),
  key: vi.fn(),
  schemaTask: vi.fn(
    (definition: {
      run: (
        payload: { submissionId: string },
        options: { ctx: { run: { id: string } } },
      ) => Promise<unknown>;
    }) => definition,
  ),
}));
vi.mock("next/server", () => ({ after: worker.after }));
vi.mock("@trigger.dev/sdk", () => ({
  tasks: { trigger: worker.trigger },
  idempotencyKeys: { create: worker.key },
  schemaTask: worker.schemaTask,
}));
vi.mock("@/db/client", () => ({
  database: () => drizzle(neon(intakeTestDatabaseUrl())),
}));
import "../../trigger/assessment-submission";
const runAssessmentSubmission = worker.schemaTask.mock.calls[0][0].run;

// Explicit opt-in: never fall back to either application database variable.
const db = drizzle(neon(intakeTestDatabaseUrl()));
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

beforeEach(() => {
  vi.clearAllMocks();
  worker.key.mockImplementation(async (value) => value);
  worker.trigger.mockResolvedValue({ id: "run_assessment" });
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
  it("dispatches a saved submission only after the exported route has returned its receipt", async () => {
    const body = submission();
    const response = await POST(request(body));
    expect(response.status).toBe(201);
    expect(await response.json()).toMatchObject({
      submissionId: body.submissionId,
    });
    expect(worker.trigger).not.toHaveBeenCalled();
    expect(worker.after).toHaveBeenCalledTimes(1);
    const [saved] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, body.submissionId));
    expect(saved.dispatchState).toBe("pending");

    await worker.after.mock.calls[0][0]();
    expect(worker.key).toHaveBeenCalledExactlyOnceWith(
      `assessment-submission:${body.submissionId}`,
      { scope: "global" },
    );
    expect(worker.trigger).toHaveBeenCalledExactlyOnceWith(
      "assessment-submission",
      { submissionId: body.submissionId },
      { idempotencyKey: `assessment-submission:${body.submissionId}` },
    );
    expect((await POST(request(body))).status).toBe(201);
    expect(worker.after).toHaveBeenCalledTimes(1);
  });

  it("handles a submission once and preserves its contents and original worker run ID", async () => {
    const body = submission();
    expect((await handle(request(body))).status).toBe(201);
    const [before] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, body.submissionId));
    await runAssessmentSubmission(
      { submissionId: body.submissionId },
      { ctx: { run: { id: "run_first" } } },
    );
    await runAssessmentSubmission(
      { submissionId: body.submissionId },
      { ctx: { run: { id: "run_retry" } } },
    );
    const [after] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, body.submissionId));
    expect(after).toEqual({
      ...before,
      dispatchState: "handled",
      runId: "run_first",
    });
  });

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

  it.each([
    {
      name: "malformed JSON",
      contentType: "application/json",
      body: "{",
      code: "invalid_json",
    },
    {
      name: "non-JSON content",
      contentType: "text/plain",
      body: "{}",
      code: "invalid_content_type",
    },
  ])(
    "returns a stable body error for $name",
    async ({ contentType, body, code }) => {
      const response = await handle(
        new Request("https://crm.example/api/v1/assessment-submissions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${liveSecret}`,
            "Content-Type": contentType,
          },
          body,
        }),
      );
      expect(response.status).toBe(400);
      expect(response.headers.get("content-type")).toContain(
        "application/problem+json",
      );
      expect(response.headers.get("cache-control")).toBe("no-store");
      expect(await response.json()).toMatchObject({
        type: "about:blank",
        status: 400,
        errors: [{ path: [], code, message: expect.any(String) }],
      });
    },
  );

  it("rejects unknown secrets and browser requests without CORS headers", async () => {
    const body = submission();
    const response = await handle(request(body, "unknown"));
    expect(response.status).toBe(401);
    const missing = request(body);
    missing.headers.delete("authorization");
    const missingResponse = await handle(missing);
    expect(missingResponse.status).toBe(401);
    expect(await response.json()).toEqual(await missingResponse.json());
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

  it.each([
    { field: "email", code: "required" },
    { field: "firstName", code: "required" },
    { field: "lastName", code: "required" },
  ])(
    "reports missing contact.$field without saving a submission",
    async ({ field, code }) => {
      const body = submission();
      const contact = Object.fromEntries(
        Object.entries(body.contact).filter(([key]) => key !== field),
      );
      const response = await handle(request({ ...body, contact }));
      expect(response.status).toBe(400);
      expect(response.headers.get("content-type")).toContain(
        "application/problem+json",
      );
      expect(await response.json()).toMatchObject({
        status: 400,
        errors: [
          { path: ["contact", field], code, message: expect.any(String) },
        ],
      });
      expect(
        await db
          .select()
          .from(assessmentSubmissions)
          .where(eq(assessmentSubmissions.id, body.submissionId)),
      ).toHaveLength(0);
    },
  );

  it("reports SMS consent without a phone and an unsupported Assessment Version", async () => {
    const body = submission();
    const contact = {
      email: body.contact.email,
      firstName: body.contact.firstName,
      lastName: body.contact.lastName,
    };
    const sms = await handle(
      request({
        ...body,
        contact,
        consent: { ...body.consent, channels: ["sms"] },
      }),
    );
    expect(sms.status).toBe(400);
    expect(await sms.json()).toMatchObject({
      errors: [
        {
          path: ["contact", "phone"],
          code: "sms_requires_phone",
          message: expect.any(String),
        },
      ],
    });
    const version = await handle(
      request({ ...body, assessmentVersion: "unknown" }),
    );
    expect(version.status).toBe(400);
    expect(await version.json()).toMatchObject({
      errors: [
        {
          path: ["assessmentVersion"],
          code: "unsupported_version",
          message: expect.any(String),
        },
      ],
    });
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

  it("returns the original receipt for identical retries without repeating dispatch or consent", async () => {
    const body = submission();
    const dispatch = vi.fn(async () => {});
    const route = createIntakeHandler({ database: () => db, dispatch });
    const first = await route(request(body));
    expect(first.status).toBe(201);
    const receipt = await first.json();
    // JSON object key order does not change the request's identity.
    const retry = await route(
      request({
        ...body,
        contact: Object.fromEntries(Object.entries(body.contact).reverse()),
        answers: Object.fromEntries(Object.entries(body.answers).reverse()),
      }),
    );
    expect(retry.status).toBe(201);
    expect(await retry.json()).toEqual(receipt);
    expect(retry.headers.get("cache-control")).toBe("no-store");
    expect(dispatch).toHaveBeenCalledExactlyOnceWith(body.submissionId);
    expect(
      await db
        .select()
        .from(consentRecords)
        .where(eq(consentRecords.submissionId, body.submissionId)),
    ).toHaveLength(1);
  });

  it("rolls back a new Person if a later insert fails", async () => {
    const first = submission();
    expect((await handle(request(first))).status).toBe(201);
    const duplicate = { ...submission(), submissionId: first.submissionId };
    const before = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, first.submissionId));
    const conflict = await handle(request(duplicate));
    expect(conflict.status).toBe(409);
    expect(conflict.headers.get("content-type")).toContain(
      "application/problem+json",
    );
    expect(await conflict.json()).toEqual({
      type: "about:blank",
      status: 409,
      title: "Submission ID already exists",
    });
    expect(
      await db
        .select()
        .from(assessmentSubmissions)
        .where(eq(assessmentSubmissions.id, first.submissionId)),
    ).toEqual(before);
    expect(
      await db
        .select()
        .from(people)
        .where(eq(people.email, duplicate.contact.email)),
    ).toHaveLength(0);
  });

  it("returns one receipt for concurrent identical requests and dispatches once", async () => {
    const body = submission();
    const dispatch = vi.fn(async () => {});
    const route = createIntakeHandler({ database: () => db, dispatch });
    const responses = await Promise.all(
      Array.from({ length: 3 }, () => route(request(body))),
    );
    expect(responses.map((response) => response.status)).toEqual([
      201, 201, 201,
    ]);
    const receipts = await Promise.all(
      responses.map((response) => response.json()),
    );
    expect(receipts[1]).toEqual(receipts[0]);
    expect(receipts[2]).toEqual(receipts[0]);
    expect(dispatch).toHaveBeenCalledExactlyOnceWith(body.submissionId);
    expect(
      await db
        .select()
        .from(assessmentSubmissions)
        .where(eq(assessmentSubmissions.id, body.submissionId)),
    ).toHaveLength(1);
    expect(
      await db
        .select()
        .from(consentRecords)
        .where(eq(consentRecords.submissionId, body.submissionId)),
    ).toHaveLength(1);
    expect(
      await db
        .select()
        .from(people)
        .where(eq(people.email, body.contact.email)),
    ).toHaveLength(1);
  });

  it("does not replay another Intake Caller's receipt", async () => {
    const body = submission();
    expect((await handle(request(body))).status).toBe(201);
    const response = await handle(request(body, testSecret));
    expect(response.status).toBe(409);
    expect(await response.json()).toEqual({
      type: "about:blank",
      status: 409,
      title: "Submission ID already exists",
    });
    const [saved] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, body.submissionId));
    expect(saved.intakeCallerId).toBe(liveId);
    expect(saved.environment).toBe("live");
  });

  it("keeps the winning body when different requests race for one submission ID", async () => {
    const first = submission();
    const second = { ...submission(), submissionId: first.submissionId };
    const bodies = [first, second];
    const responses = await Promise.all(
      bodies.map((body) => handle(request(body))),
    );
    expect(responses.map((response) => response.status).sort()).toEqual([
      201, 409,
    ]);
    const winner =
      bodies[responses.findIndex((response) => response.status === 201)];
    const loser =
      bodies[responses.findIndex((response) => response.status === 409)];
    const [saved] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, first.submissionId));
    expect(saved.contact).toEqual(winner.contact);
    expect(
      await db
        .select()
        .from(people)
        .where(eq(people.email, loser.contact.email)),
    ).toHaveLength(0);
    expect((await handle(request(winner))).status).toBe(201);
    expect((await handle(request(loser))).status).toBe(409);
  });

  it("treats a changed consent channel order as a different body", async () => {
    const body = submission();
    body.contact.phone = "555-0100";
    body.consent.channels = ["email", "sms"];
    expect((await handle(request(body))).status).toBe(201);
    const response = await handle(
      request({
        ...body,
        consent: { ...body.consent, channels: ["sms", "email"] },
      }),
    );
    expect(response.status).toBe(409);
  });

  it("keeps a committed submission pending when worker dispatch fails", async () => {
    const body = submission();
    worker.trigger.mockRejectedValueOnce(
      new Error("Private worker credentials"),
    );
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    const response = await POST(request(body));
    expect(response.status).toBe(201);
    const receipt = await response.json();
    await expect(worker.after.mock.calls[0][0]()).resolves.toBeUndefined();
    const [saved] = await db
      .select()
      .from(assessmentSubmissions)
      .where(eq(assessmentSubmissions.id, body.submissionId));
    expect(saved.dispatchState).toBe("pending");
    expect(saved.runId).toBeNull();
    expect(log).toHaveBeenCalledExactlyOnceWith(
      "Assessment dispatch failed",
      body.submissionId,
    );
    log.mockRestore();
    const retry = await POST(request(body));
    expect(retry.status).toBe(201);
    expect(await retry.json()).toEqual(receipt);
    expect(worker.after).toHaveBeenCalledTimes(1);
    expect(worker.trigger).toHaveBeenCalledTimes(1);
  });
});
