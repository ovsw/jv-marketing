import "server-only";
import {
  parseSubmission,
  receiptSchema,
  problemSchema,
  type AssessmentSubmissionInput,
  type IntakeProblem,
  type SubmissionReceipt,
} from "./contract";

export const intakePath = "/api/v1/assessment-submissions";
export type IntakeResponse =
  | { ok: true; status: 201; data: SubmissionReceipt }
  | { ok: false; status: 400 | 401 | 409; problem: IntakeProblem };

export class IntakeTransportError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
  ) {
    super(message);
    this.name = "IntakeTransportError";
  }
}

/** Call only from a website server. Caller retains the same ID/body for safe retries. */
export async function submitAssessment(options: {
  baseUrl: string;
  secret: string;
  submission: AssessmentSubmissionInput;
  signal?: AbortSignal;
  fetch?: typeof globalThis.fetch;
}): Promise<IntakeResponse> {
  const base = new URL(options.baseUrl);
  const loopback = ["localhost", "127.0.0.1", "[::1]"].includes(base.hostname);
  if (
    (base.protocol !== "https:" && !(base.protocol === "http:" && loopback)) ||
    base.username ||
    base.password ||
    base.search ||
    base.hash ||
    base.pathname !== "/"
  ) {
    throw new Error(
      "Use an HTTPS intake origin, or HTTP on a loopback address for local development.",
    );
  }
  if (!options.secret.trim() || /[\r\n]/.test(options.secret))
    throw new Error("An Intake Caller secret is required.");
  const parsed = parseSubmission(options.submission);
  if (!parsed.success) {
    return {
      ok: false,
      status: 400,
      problem: {
        type: "about:blank",
        title: "Invalid Assessment Submission",
        status: 400,
        errors: parsed.errors,
      },
    };
  }
  let response: Response;
  try {
    response = await (options.fetch ?? globalThis.fetch)(
      new URL(intakePath, base),
      {
        method: "POST",
        redirect: "error",
        cache: "no-store",
        signal: options.signal
          ? AbortSignal.any([options.signal, AbortSignal.timeout(30000)])
          : AbortSignal.timeout(30000),
        headers: {
          Authorization: `Bearer ${options.secret}`,
          "Content-Type": "application/json",
          Accept: "application/json, application/problem+json",
        },
        body: JSON.stringify(parsed.data),
      },
    );
  } catch {
    // Do not include a fetch error/cause: third-party clients may embed headers or the request body.
    throw new IntakeTransportError(
      "The intake request did not complete. Retain the submission for retry.",
    );
  }
  if (![201, 400, 401, 409].includes(response.status)) {
    throw new IntakeTransportError(
      "The intake service returned an unexpected status.",
      response.status,
    );
  }
  let body: unknown;
  try {
    body = await response.json();
  } catch {
    throw new IntakeTransportError(
      "The intake service returned an invalid response.",
      response.status,
    );
  }
  if (response.status === 201) {
    const receipt = receiptSchema.safeParse(body);
    if (
      !receipt.success ||
      receipt.data.submissionId !== parsed.data.submissionId
    ) {
      throw new IntakeTransportError(
        "The intake receipt did not match the submission.",
        201,
      );
    }
    return { ok: true, status: 201, data: receipt.data };
  }
  const problem = problemSchema.safeParse(body);
  if (!problem.success || problem.data.status !== response.status) {
    throw new IntakeTransportError(
      "The intake service returned invalid problem details.",
      response.status,
    );
  }
  // The unexpected-status guard above leaves only the three supported problem responses.
  return {
    ok: false,
    status: response.status as 400 | 401 | 409,
    problem: problem.data,
  };
}
