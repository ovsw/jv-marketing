"use server";

import type { AssessmentSubmissionInput } from "@phx/assessment";
import { submitAssessmentFromWebsite } from "@/lib/assessment/submit";

/** Sends a completed Assessment to the Shared CRM as this website's Intake Caller. */
export async function submitAssessmentAction(
  submission: AssessmentSubmissionInput,
) {
  return submitAssessmentFromWebsite(submission, {
    baseUrl: process.env.CRM_INTAKE_URL,
    secret: process.env.CRM_INTAKE_SECRET,
  });
}
