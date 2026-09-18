// Sends one valid Assessment Submission to a deployed CRM through the shared
// client, exactly as a website server would. Use it to prove a provisioned
// Intake Caller works end to end.
//
//   CRM_INTAKE_URL=https://valoansforvets-crm.vercel.app \
//   CRM_INTAKE_SECRET=... SMOKE_EMAIL=you@example.com \
//   pnpm --filter crm smoke:intake
//
// It prints the HTTP status and the submission ID, never the secret.
import { randomUUID } from "node:crypto";
import { parseSubmission } from "@phx/assessment";
import { submitAssessment } from "@phx/assessment/client";
import fixture from "../../../packages/assessment/test/fixtures/v1-purchase.json";

const baseUrl = process.env.CRM_INTAKE_URL;
const secret = process.env.CRM_INTAKE_SECRET;
const email = process.env.SMOKE_EMAIL;
if (!baseUrl || !secret || !email) {
  console.error(
    "CRM_INTAKE_URL, CRM_INTAKE_SECRET, and SMOKE_EMAIL are required.",
  );
  process.exit(1);
}

const parsed = parseSubmission({
  ...fixture,
  submissionId: randomUUID(),
  contact: { ...fixture.contact, email },
  consent: { ...fixture.consent, timestamp: new Date().toISOString() },
});
if (!parsed.success) {
  console.error("The smoke fixture is not a valid submission.");
  process.exit(1);
}
const result = await submitAssessment({
  baseUrl,
  secret,
  submission: parsed.data,
});
if (result.ok) {
  console.log(
    `${result.status} submission ${result.data.submissionId} received at ${result.data.receivedAt}`,
  );
} else {
  console.error(`${result.status} ${result.problem.title}`);
  for (const error of result.problem.errors ?? [])
    console.error(`- ${error.path.join(".")} ${error.code}: ${error.message}`);
  process.exit(1);
}
