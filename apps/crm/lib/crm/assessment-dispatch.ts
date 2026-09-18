import { idempotencyKeys, tasks } from "@trigger.dev/sdk";
import type { assessmentSubmission } from "../../trigger/assessment-submission";

// Shared by the HTTP route and the scheduled task. A global key also applies
// outside the parent run that starts a scheduled retry.
export async function dispatchAssessmentSubmission(submissionId: string) {
  const idempotencyKey = await idempotencyKeys.create(
    `assessment-submission:${submissionId}`,
    { scope: "global" },
  );
  await tasks.trigger<typeof assessmentSubmission>(
    "assessment-submission",
    { submissionId },
    { idempotencyKey },
  );
}
