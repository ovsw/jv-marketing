import { schemaTask } from "@trigger.dev/sdk";
import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { database } from "../db/client";
import { assessmentSubmissions } from "../db/schema";

export const assessmentSubmission = schemaTask({
  id: "assessment-submission",
  schema: z.object({ submissionId: z.uuid() }).strict(),
  run: async ({ submissionId }, { ctx }) => {
    // This task sends no messages. Retries cannot change the original run ID
    // or the immutable answers, contact details, and consent.
    const updated = await database()
      .update(assessmentSubmissions)
      .set({ dispatchState: "handled", runId: ctx.run.id })
      .where(
        and(
          eq(assessmentSubmissions.id, submissionId),
          eq(assessmentSubmissions.dispatchState, "pending"),
        ),
      )
      .returning({ id: assessmentSubmissions.id });
    return { submissionId, handled: updated.length === 1 };
  },
});
