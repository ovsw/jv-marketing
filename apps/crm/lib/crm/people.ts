import "server-only";

import { desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
// People and Assessment Submissions live in the intake database, so staff read
// the same rows the intake route wrote: production in Production, development
// in Preview.
import { database } from "@/db/client";
import {
  assessmentSubmissions,
  intakeCallers,
  people,
} from "@/db/schema";
import { requireStaff } from "./auth";
import { listAssessmentSubmissions } from "./submissions";

function submissionCount(environment: "test" | "live") {
  return sql<number>`count(*) filter (where ${assessmentSubmissions.environment} = ${environment})`.mapWith(
    Number,
  );
}

/**
 * Every Person with at least one Assessment Submission, newest submission
 * first. Persons only exist through a submission, so the join hides nobody.
 * The Origin Brand comes from the newest submission of either environment;
 * the counts let the page hide Persons who only ever sent test submissions.
 */
export async function listPeople() {
  await requireStaff();
  const db = database();
  const latestSubmission = db
    .selectDistinctOn([assessmentSubmissions.personId], {
      personId: assessmentSubmissions.personId,
      originBrand: intakeCallers.brand,
    })
    .from(assessmentSubmissions)
    .innerJoin(
      intakeCallers,
      eq(assessmentSubmissions.intakeCallerId, intakeCallers.id),
    )
    .orderBy(
      assessmentSubmissions.personId,
      desc(assessmentSubmissions.receivedAt),
    )
    .as("latest_submission");
  // max() would type this as nullable; the inner join guarantees one row.
  const lastReceivedAt = sql<Date>`max(${assessmentSubmissions.receivedAt})`.mapWith(
    assessmentSubmissions.receivedAt,
  );

  return db
    .select({
      id: people.id,
      firstName: people.firstName,
      lastName: people.lastName,
      email: people.email,
      phone: people.phone,
      latestOriginBrand: latestSubmission.originBrand,
      liveSubmissionCount: submissionCount("live"),
      testSubmissionCount: submissionCount("test"),
      lastReceivedAt,
    })
    .from(people)
    .innerJoin(
      assessmentSubmissions,
      eq(assessmentSubmissions.personId, people.id),
    )
    .innerJoin(latestSubmission, eq(latestSubmission.personId, people.id))
    .groupBy(people.id, latestSubmission.originBrand)
    .orderBy(desc(lastReceivedAt));
}

export async function getPersonWithAssessmentSubmissions(
  personId: string,
  filters: { environment?: unknown; cursor?: unknown } = {},
) {
  await requireStaff();
  if (!z.uuid().safeParse(personId).success) return null;
  const db = database();
  const [person] = await db
    .select()
    .from(people)
    .where(eq(people.id, personId))
    .limit(1);

  if (!person) return null;

  const page = await listAssessmentSubmissions({ ...filters, personId });
  return { person, submissions: page.items, nextCursor: page.nextCursor };
}
