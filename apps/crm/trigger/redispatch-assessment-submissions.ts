import { schedules } from "@trigger.dev/sdk";
import { and, eq, gt, lt } from "drizzle-orm";
import { database } from "../db/client";
import { assessmentSubmissions } from "../db/schema";
import { dispatchAssessmentSubmission } from "../lib/crm/assessment-dispatch";

export const redispatchAssessmentSubmissions = schedules.task({
  id: "redispatch-assessment-submissions",
  cron: "*/5 * * * *",
  queue: { concurrencyLimit: 1 },
  run: async () => {
    // The existing hosted test worker also serves the staff test inquiry flow.
    // Intake stays inactive there until its separate database is provisioned.
    if (!process.env.DATABASE_URL) return { skipped: "intake_not_configured" };
    // Give a new request time to send its receipt and dispatch through after().
    const before = new Date(Date.now() - 60_000);
    const db = database();
    let cursor: string | undefined;
    let dispatched = 0;
    let failed = 0;
    while (true) {
      const pending = await db
        .select({ id: assessmentSubmissions.id })
        .from(assessmentSubmissions)
        .where(
          and(
            eq(assessmentSubmissions.dispatchState, "pending"),
            lt(assessmentSubmissions.receivedAt, before),
            cursor ? gt(assessmentSubmissions.id, cursor) : undefined,
          ),
        )
        .orderBy(assessmentSubmissions.id)
        .limit(100);
      if (pending.length === 0) break;
      const results = await Promise.allSettled(
        pending.map(({ id }) => dispatchAssessmentSubmission(id)),
      );
      for (const result of results) {
        if (result.status === "fulfilled") dispatched++;
        else failed++;
      }
      // Advance even if a dispatch fails or the worker has not handled it yet.
      // Each invocation tries each eligible submission at most once.
      cursor = pending[pending.length - 1].id;
    }
    return { dispatched, failed };
  },
});
