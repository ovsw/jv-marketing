import { randomUUID } from "node:crypto";
import { describe, expect, it, vi } from "vitest";
import { parseSubmission } from "@phx/assessment";
import fixture from "../../../../packages/assessment/test/fixtures/v1-purchase.json";
import { submitAssessmentFromWebsite } from "@/lib/assessment/submit";

const parsed = parseSubmission({
  ...fixture,
  submissionId: randomUUID(),
  consent: { ...fixture.consent, timestamp: new Date().toISOString() },
});
if (!parsed.success) throw new Error("Invalid test fixture");
const submission = parsed.data;
const env = { baseUrl: "https://crm.example", secret: "test-secret" };

function json(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("submitAssessmentFromWebsite", () => {
  it("returns the receipt on 201", async () => {
    const receivedAt = new Date().toISOString();
    const fetch = vi.fn().mockResolvedValue(
      json(201, { submissionId: submission.submissionId, receivedAt }),
    );
    await expect(
      submitAssessmentFromWebsite(submission, { ...env, fetch }),
    ).resolves.toEqual({ ok: true, receivedAt });
    const [url, init] = fetch.mock.calls[0];
    expect(String(url)).toBe("https://crm.example/api/v1/assessment-submissions");
    expect(init.headers.Authorization).toBe("Bearer test-secret");
  });

  it("returns field errors on 400 so the form can show them", async () => {
    const errors = [
      { path: ["contact", "phone"], code: "sms_requires_phone", message: "x" },
    ];
    const fetch = vi.fn().mockResolvedValue(
      json(400, { type: "about:blank", title: "Invalid", status: 400, errors }),
    );
    await expect(
      submitAssessmentFromWebsite(submission, { ...env, fetch }),
    ).resolves.toEqual({ ok: false, kind: "invalid", errors });
  });

  it("reports a conflict on 409 so the caller starts a new submission ID", async () => {
    const fetch = vi.fn().mockResolvedValue(
      json(409, { type: "about:blank", title: "Conflict", status: 409 }),
    );
    await expect(
      submitAssessmentFromWebsite(submission, { ...env, fetch }),
    ).resolves.toEqual({ ok: false, kind: "conflict" });
  });

  it("reports unavailable on 401 without exposing the cause", async () => {
    const fetch = vi.fn().mockResolvedValue(
      json(401, { type: "about:blank", title: "Unauthorized", status: 401 }),
    );
    await expect(
      submitAssessmentFromWebsite(submission, { ...env, fetch }),
    ).resolves.toEqual({ ok: false, kind: "unavailable" });
  });

  it("asks for a retry with the same ID when the request does not complete", async () => {
    const fetch = vi.fn().mockRejectedValue(new TypeError("network down"));
    await expect(
      submitAssessmentFromWebsite(submission, { ...env, fetch }),
    ).resolves.toEqual({ ok: false, kind: "retry" });
  });

  it("reports unavailable when the intake environment is not configured", async () => {
    const fetch = vi.fn();
    await expect(
      submitAssessmentFromWebsite(submission, { baseUrl: undefined, secret: undefined, fetch }),
    ).resolves.toEqual({ ok: false, kind: "unavailable" });
    expect(fetch).not.toHaveBeenCalled();
  });
});
