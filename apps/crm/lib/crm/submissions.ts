import "server-only";
import { and, desc, eq, sql } from "drizzle-orm";
import { z } from "zod";
import { database } from "@/db/client";
import {
  assessmentSubmissions,
  consentRecords,
  intakeCallers,
} from "@/db/schema";
import { requireStaff } from "./auth";

const filtersSchema = z.strictObject({
  personId: z
    .uuid()
    .transform((id) => id.toLowerCase())
    .optional(),
  environment: z.enum(["all", "live"]).default("all"),
  cursor: z
    .string()
    .min(1)
    .max(1024)
    .regex(/^[A-Za-z0-9_-]+$/)
    .optional(),
});
const cursorSchema = z.strictObject({
  version: z.literal(1),
  receivedAt: z.iso.datetime({ precision: 6 }),
  id: z.uuid(),
  personId: z.uuid().nullable(),
  environment: z.enum(["all", "live"]),
});

export class InvalidSubmissionList extends Error {
  constructor() {
    super("Invalid submission list link.");
  }
}

/** Staff-only, read-only history in the deployment's intake database. */
export async function listAssessmentSubmissions(options: unknown = {}) {
  await requireStaff();
  const parsed = filtersSchema.safeParse(options);
  if (!parsed.success) throw new InvalidSubmissionList();
  const { personId, environment, cursor } = parsed.data;
  let after: z.infer<typeof cursorSchema> | undefined;
  if (cursor !== undefined) {
    try {
      const decoded = Buffer.from(cursor, "base64url");
      if (decoded.toString("base64url") !== cursor)
        throw new InvalidSubmissionList();
      after = cursorSchema.parse(JSON.parse(decoded.toString("utf8")));
      if (
        after.personId !== (personId ?? null) ||
        after.environment !== environment
      )
        throw new InvalidSubmissionList();
    } catch {
      throw new InvalidSubmissionList();
    }
  }
  const rows = await database()
    .select({
      id: assessmentSubmissions.id,
      personId: assessmentSubmissions.personId,
      contact: assessmentSubmissions.contact,
      environment: assessmentSubmissions.environment,
      assessmentVersion: assessmentSubmissions.assessmentVersion,
      // Historical versions can carry fields outside the current intake type.
      answers: sql<Record<string, unknown>>`${assessmentSubmissions.answers}`,
      reportedScore: assessmentSubmissions.reportedScore,
      actionPlan: assessmentSubmissions.actionPlan,
      // A Date loses PostgreSQL's microseconds. Keep an exact UTC string for paging.
      receivedAt: sql<string>`to_char(${assessmentSubmissions.receivedAt} at time zone 'UTC', 'YYYY-MM-DD"T"HH24:MI:SS.US"Z"')`,
      originBrand: intakeCallers.brand,
      consent: {
        submissionId: consentRecords.submissionId,
        promiseText: consentRecords.promiseText,
        channels: consentRecords.channels,
        consentedAt: consentRecords.consentedAt,
        brand: consentRecords.brand,
        environment: consentRecords.environment,
        assessmentVersion: consentRecords.assessmentVersion,
      },
    })
    .from(assessmentSubmissions)
    .innerJoin(
      intakeCallers,
      eq(assessmentSubmissions.intakeCallerId, intakeCallers.id),
    )
    .leftJoin(
      consentRecords,
      eq(assessmentSubmissions.id, consentRecords.submissionId),
    )
    .where(
      and(
        personId ? eq(assessmentSubmissions.personId, personId) : undefined,
        environment === "live"
          ? eq(assessmentSubmissions.environment, "live")
          : undefined,
        after
          ? sql`(${assessmentSubmissions.receivedAt}, ${assessmentSubmissions.id}) < (${after.receivedAt}::timestamptz, ${after.id}::uuid)`
          : undefined,
      ),
    )
    .orderBy(
      desc(assessmentSubmissions.receivedAt),
      desc(assessmentSubmissions.id),
    )
    .limit(51);
  const items = rows
    .slice(0, 50)
    .map((item) => ({
      ...item,
      consent: item.consent
        ? {
            ...item.consent,
            consentedAt: item.consent.consentedAt.toISOString(),
          }
        : null,
    }));
  const last = items.at(-1);
  const nextCursor =
    rows.length > 50 && last
      ? Buffer.from(
          JSON.stringify({
            version: 1,
            receivedAt: last.receivedAt,
            id: last.id,
            personId: personId ?? null,
            environment,
          }),
        ).toString("base64url")
      : null;
  return { items, nextCursor };
}

export type AssessmentSubmissionView = Awaited<
  ReturnType<typeof listAssessmentSubmissions>
>["items"][number];
export type AssessmentSubmissionPage = Awaited<
  ReturnType<typeof listAssessmentSubmissions>
>;
