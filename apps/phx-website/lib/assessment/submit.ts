import "server-only";
import {
  IntakeTransportError,
  submitAssessment,
} from "@phx/assessment/client";
import type { AssessmentSubmissionInput, FieldError } from "@phx/assessment";

/** What the quiz needs to know to show the next state. Never carries the secret. */
export type AssessmentSubmitResult =
  | { ok: true; receivedAt: string }
  /** Fix the listed fields and send again with the same submission ID. */
  | { ok: false; kind: "invalid"; errors: FieldError[] }
  /** The request did not complete. Send again with the same submission ID. */
  | { ok: false; kind: "retry" }
  /** The CRM holds a different body under this ID. Start a new submission ID. */
  | { ok: false; kind: "conflict" }
  /** Configuration or CRM fault. Nothing the visitor can change. */
  | { ok: false; kind: "unavailable" };

export async function submitAssessmentFromWebsite(
  submission: AssessmentSubmissionInput,
  intake: {
    baseUrl: string | undefined;
    secret: string | undefined;
    fetch?: typeof globalThis.fetch;
  },
): Promise<AssessmentSubmitResult> {
  if (!intake.baseUrl || !intake.secret) {
    console.error("CRM_INTAKE_URL and CRM_INTAKE_SECRET are not both set.");
    return { ok: false, kind: "unavailable" };
  }
  let result;
  try {
    result = await submitAssessment({
      baseUrl: intake.baseUrl,
      secret: intake.secret,
      submission,
      fetch: intake.fetch,
    });
  } catch (error) {
    if (error instanceof IntakeTransportError && error.status === undefined) {
      return { ok: false, kind: "retry" };
    }
    console.error("Assessment intake failed.", error);
    return { ok: false, kind: "unavailable" };
  }
  if (result.ok) return { ok: true, receivedAt: result.data.receivedAt };
  if (result.status === 400)
    return { ok: false, kind: "invalid", errors: result.problem.errors ?? [] };
  if (result.status === 409) return { ok: false, kind: "conflict" };
  console.error("Assessment intake rejected this website's Intake Caller.");
  return { ok: false, kind: "unavailable" };
}
