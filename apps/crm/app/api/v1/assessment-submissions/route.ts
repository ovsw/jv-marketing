import { after } from "next/server";
import { dispatchAssessmentSubmission } from "@/lib/crm/assessment-dispatch";
import { createIntakeHandler } from "@/lib/crm/intake";

export const POST = createIntakeHandler({
  dispatch: async (submissionId) => {
    after(async () => {
      try {
        await dispatchAssessmentSubmission(submissionId);
      } catch {
        // The receipt is already sent. The scheduled task will retry pending
        // submissions. Do not log provider errors or submission contents.
        console.error("Assessment dispatch failed", submissionId);
      }
    });
  },
});
