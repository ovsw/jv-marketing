import { describe, expect, it, vi } from "vitest";
import { IntakeTransportError, submitAssessment } from "../src/client";
import { submissionSchema } from "../src/contract";
import purchase from "./fixtures/v1-purchase.json";

const submission = submissionSchema.parse(purchase);
const receipt = {
  submissionId: submission.submissionId,
  receivedAt: "2026-09-17T11:00:00Z",
};
const secret = "test-only-caller-secret";
function reply(body: unknown, status = 201) {
  return new Response(JSON.stringify(body), { status });
}
function options(fetch: typeof globalThis.fetch) {
  return { baseUrl: "https://crm.example.com", secret, submission, fetch };
}

describe("website-server intake client", () => {
  it("posts the typed body with its bearer secret and returns the receipt", async () => {
    const fetch = vi.fn<typeof globalThis.fetch>(async (url, init) => {
      expect(String(url)).toBe(
        "https://crm.example.com/api/v1/assessment-submissions",
      );
      const request = new Request(url, init);
      expect(request.method).toBe("POST");
      expect(request.headers.get("Authorization")).toBe(`Bearer ${secret}`);
      expect(request.headers.get("Content-Type")).toBe("application/json");
      expect(await request.json()).toEqual(purchase);
      expect(init?.redirect).toBe("error");
      expect(init?.cache).toBe("no-store");
      return reply(receipt);
    });
    expect(await submitAssessment(options(fetch))).toEqual({
      ok: true,
      status: 201,
      data: receipt,
    });
  });
  it.each([400, 401, 409])(
    "returns typed problem details for %s",
    async (status) => {
      const problem = {
        type: "about:blank",
        title: "Request failed",
        status,
        ...(status === 400
          ? {
              errors: [
                {
                  path: ["answers", "property_state"],
                  code: "required",
                  message: "Select a state.",
                },
              ],
            }
          : {}),
      };
      const fetch = vi.fn<typeof globalThis.fetch>(async () =>
        reply(problem, status),
      );
      expect(await submitAssessment(options(fetch))).toEqual({
        ok: false,
        status,
        problem,
      });
    },
  );
  it("validates locally before sending personal data", async () => {
    const fetch = vi.fn<typeof globalThis.fetch>();
    const result = await submitAssessment({
      ...options(fetch),
      submission: {
        ...submission,
        contact: { ...submission.contact, email: "invalid" },
      },
    });
    expect(result.ok).toBe(false);
    expect(fetch).not.toHaveBeenCalled();
  });
  it("sends only relevant answers and normalizes number formatting", async () => {
    const fetch = vi.fn<typeof globalThis.fetch>(async (url, init) => {
      const body = await new Request(url, init).json();
      expect(body.answers).not.toHaveProperty("refinance_income");
      expect(body.answers.monthly_rent).toBe(2000);
      return reply(receipt);
    });
    await submitAssessment({
      ...options(fetch),
      submission: {
        ...submission,
        answers: {
          ...submission.answers,
          monthly_rent: "$2,000.00",
          refinance_income: "under_49999",
        },
      },
    });
  });
  it("keeps the ID, body, and caller draft unchanged across manual retries", async () => {
    const draft = structuredClone(submission);
    const bodies: unknown[] = [];
    const fetch = vi.fn<typeof globalThis.fetch>(async (url, init) => {
      bodies.push(await new Request(url, init).json());
      if (bodies.length === 1) throw new Error("timeout");
      return reply(receipt);
    });
    await expect(
      submitAssessment({ ...options(fetch), submission: draft }),
    ).rejects.toBeInstanceOf(IntakeTransportError);
    await submitAssessment({ ...options(fetch), submission: draft });
    expect(bodies).toEqual([purchase, purchase]);
    expect(draft).toEqual(purchase);
  });
  it.each([
    "http://crm.example.com",
    "https://user:pass@crm.example.com",
    "https://crm.example.com/path",
    "https://crm.example.com?token=abc",
  ])("rejects an unsafe or ambiguous origin %s", async (baseUrl) => {
    const fetch = vi.fn<typeof globalThis.fetch>();
    await expect(
      submitAssessment({ ...options(fetch), baseUrl }),
    ).rejects.toThrow("intake origin");
    expect(fetch).not.toHaveBeenCalled();
  });
  it.each([
    "http://localhost:3200",
    "http://127.0.0.1:3200",
    "http://[::1]:3200",
  ])("permits loopback development at %s", async (baseUrl) => {
    const fetch = vi.fn<typeof globalThis.fetch>(async () => reply(receipt));
    expect((await submitAssessment({ ...options(fetch), baseUrl })).ok).toBe(
      true,
    );
  });
  it("passes cancellation through and omits secrets, personal data, and fetch error causes", async () => {
    const controller = new AbortController();
    const fetch = vi.fn<typeof globalThis.fetch>(async (_, init) => {
      controller.abort();
      expect(init?.signal?.aborted).toBe(true);
      throw new Error(`${secret} ${submission.contact.email}`);
    });
    let thrown: unknown;
    try {
      await submitAssessment({ ...options(fetch), signal: controller.signal });
    } catch (error) {
      thrown = error;
    }
    expect(thrown).toBeInstanceOf(IntakeTransportError);
    expect(String(thrown)).not.toContain(secret);
    expect(String(thrown)).not.toContain(submission.contact.email);
    expect(thrown).not.toHaveProperty("cause");
  });
  it.each([
    [201, { submissionId: "different", receivedAt: receipt.receivedAt }],
    [201, { ...receipt, email: "private@example.com" }],
    [400, { type: "about:blank", title: "Error", status: 409 }],
    [401, {}],
    [500, { secret }],
    [302, { secret }],
  ])("rejects unexpected response %s", async (status, body) => {
    const fetch = vi.fn<typeof globalThis.fetch>(async () =>
      reply(body, status),
    );
    await expect(submitAssessment(options(fetch))).rejects.toBeInstanceOf(
      IntakeTransportError,
    );
  });
  it("keeps the timeout active when the caller also supplies cancellation", async () => {
    const timeout = new AbortController();
    const caller = new AbortController();
    const timeoutStub = vi
      .spyOn(AbortSignal, "timeout")
      .mockReturnValue(timeout.signal);
    const fetch = vi.fn<typeof globalThis.fetch>(async (_, init) => {
      timeout.abort();
      expect(init?.signal?.aborted).toBe(true);
      expect(caller.signal.aborted).toBe(false);
      throw new Error("timeout");
    });
    try {
      await expect(
        submitAssessment({ ...options(fetch), signal: caller.signal }),
      ).rejects.toBeInstanceOf(IntakeTransportError);
    } finally {
      timeoutStub.mockRestore();
    }
  });

  it("rejects malformed JSON without echoing the response", async () => {
    const fetch = vi.fn<typeof globalThis.fetch>(
      async () => new Response(secret, { status: 201 }),
    );
    await expect(submitAssessment(options(fetch))).rejects.toThrow(
      "invalid response",
    );
  });
});
