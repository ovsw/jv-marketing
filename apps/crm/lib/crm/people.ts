import "server-only";

import { desc, eq } from "drizzle-orm";
import { z } from "zod";
import { previewDatabase as database } from "@/db/client";
import {
  assessmentSubmissions,
  intakeCallers,
  people,
} from "@/db/schema";
import { requireStaff } from "./auth";

export async function getPersonWithAssessmentSubmissions(personId: string) {
  await requireStaff();
  if (!z.uuid().safeParse(personId).success) return null;
  const db = database();
  const [person] = await db
    .select()
    .from(people)
    .where(eq(people.id, personId))
    .limit(1);

  if (!person) return null;

  const submissions = await db
    .select({
      id: assessmentSubmissions.id,
      environment: assessmentSubmissions.environment,
      assessmentVersion: assessmentSubmissions.assessmentVersion,
      answers: assessmentSubmissions.answers,
      reportedScore: assessmentSubmissions.reportedScore,
      actionPlan: assessmentSubmissions.actionPlan,
      receivedAt: assessmentSubmissions.receivedAt,
      originBrand: intakeCallers.brand,
    })
    .from(assessmentSubmissions)
    .innerJoin(
      intakeCallers,
      eq(assessmentSubmissions.intakeCallerId, intakeCallers.id),
    )
    .where(eq(assessmentSubmissions.personId, personId))
    .orderBy(desc(assessmentSubmissions.receivedAt));

  return { person, submissions };
}
