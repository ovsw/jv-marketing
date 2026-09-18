import "server-only";
import { idempotencyKeys, runs, tasks } from "@trigger.dev/sdk";
import { desc, eq, inArray } from "drizzle-orm";
import { previewDatabase as database } from "@/db/client";
import { simulatedSms, testInquiries } from "@/db/schema";
import type { testInquiry } from "@/trigger/test-inquiry";
import { requireStaff } from "./auth";
import { isTestRecipient } from "./policy";
import { describeWorkflow, type RunSnapshot } from "./workflow";

// Trigger.dev is asked only about jobs that have not finished. A lookup
// failure must not hide the list, so it degrades to "no snapshot".
async function runSnapshot(runId: string): Promise<RunSnapshot> {
  try {
    const run = await runs.retrieve(runId);
    return { status: run.status, error: run.error?.message ?? null };
  } catch (error) {
    console.error("Trigger.dev run lookup failed for run", runId, error);
    return null;
  }
}

export async function listTestInquiries() {
  await requireStaff();
  const rows = await database()
    .select()
    .from(testInquiries)
    .leftJoin(simulatedSms, eq(simulatedSms.inquiryId, testInquiries.id))
    .orderBy(desc(testInquiries.createdAt))
    .limit(20);
  const now = Date.now();
  return Promise.all(
    rows.map(async (row) => {
      const inquiry = row.crm_test_inquiries;
      const run =
        inquiry.jobStatus !== "complete" && inquiry.runId
          ? await runSnapshot(inquiry.runId)
          : null;
      return {
        ...inquiry,
        sms: row.crm_simulated_sms,
        workflow: describeWorkflow(inquiry, run, now),
      };
    }),
  );
}

// Any staff member can submit or retry. The first submission fixes the
// recipient; a retry must not mutate the saved inquiry or redirect its email.
export async function submitTestInquiry(id: string) {
  const staff = await requireStaff();
  if (!isTestRecipient(staff.email))
    throw new Error("Your address is not on the test email list.");
  const db = database();
  await db
    .insert(testInquiries)
    .values({ id, createdBy: staff.userId, recipient: staff.email })
    // Preserve the original creator and recipient when another staff member
    // retries the same inquiry ID.
    .onConflictDoNothing();
  const [row] = await db
    .select()
    .from(testInquiries)
    .where(eq(testInquiries.id, id));
  if (!row) throw new Error("Test inquiry is not available.");
  if (row.jobStatus === "complete") return;
  const idempotencyKey = await idempotencyKeys.create(`test-inquiry:${id}`, {
    scope: "global",
  });
  let run: { id: string };
  try {
    run = await tasks.trigger<typeof testInquiry>(
      "test-inquiry",
      { inquiryId: id },
      { idempotencyKey },
    );
  } catch (error) {
    console.error("Trigger.dev dispatch failed for inquiry", id, error);
    // Record the failure on the row. Without this, a saved row with no run ID
    // looks exactly like a job in progress, and nothing will ever finish it.
    // Only a failed dispatch reaches here, so no worker can be running yet.
    try {
      await db
        .update(testInquiries)
        .set({
          jobStatus: "failed",
          lastError: "The job was not dispatched. Retry this inquiry.",
          updatedAt: new Date(),
        })
        .where(eq(testInquiries.id, id));
    } catch (updateError) {
      console.error(
        "Could not record the dispatch failure for inquiry",
        id,
        updateError,
      );
    }
    throw new Error(
      "The inquiry was saved, but the job could not be confirmed. Retry this inquiry.",
    );
  }
  // The job exists now. Do not overwrite a completion if the worker finishes
  // before this update; only the run ID is written.
  await db
    .update(testInquiries)
    .set({ runId: run.id, updatedAt: new Date() })
    .where(eq(testInquiries.id, id));
}

// Any staff member can delete any inquiry. The simulated SMS row cascades.
// A running job for a deleted inquiry fails with "not found" and writes nothing.
export async function deleteTestInquiries(ids: string[]) {
  await requireStaff();
  if (ids.length === 0) return 0;
  const deleted = await database()
    .delete(testInquiries)
    .where(inArray(testInquiries.id, ids))
    .returning({ id: testInquiries.id });
  return deleted.length;
}
