import "server-only";
import { createHash, randomUUID } from "node:crypto";
import { and, eq, sql } from "drizzle-orm";
import { parseSubmission, type FieldError } from "@phx/assessment";
import { database } from "@/db/client";
import {
  assessmentSubmissions,
  consentRecords,
  intakeCallers,
  people,
} from "@/db/schema";

export function hashIntakeSecret(secret: string) {
  return createHash("sha256").update(secret).digest("hex");
}

function canonicalJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value !== null && typeof value === "object") {
    return `{${Object.entries(value)
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
      .map(([key, entry]) => `${JSON.stringify(key)}:${canonicalJson(entry)}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

function problem(status: number, title: string, errors?: FieldError[]) {
  return Response.json(
    { type: "about:blank", title, status, ...(errors && { errors }) },
    {
      status,
      headers: {
        "Content-Type": "application/problem+json",
        "Cache-Control": "no-store",
      },
    },
  );
}

function isUniqueViolation(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;
  return (
    ("code" in error && error.code === "23505") ||
    ("cause" in error && isUniqueViolation(error.cause))
  );
}

export function createIntakeHandler(
  dependencies: {
    database?: typeof database;
    // The HTTP route schedules this work after sending the response.
    dispatch?: (submissionId: string) => Promise<void>;
  } = {},
) {
  return async function POST(request: Request) {
    // This route is for website servers. It never grants browser CORS access.
    if (
      request.headers.has("origin") ||
      request.headers.has("sec-fetch-site")
    ) {
      return problem(401, "Server authentication required");
    }
    const bearer = /^Bearer ([^\s]+)$/i.exec(
      request.headers.get("authorization") ?? "",
    );
    if (!bearer) return problem(401, "Invalid Intake Caller");

    try {
      const db = (dependencies.database ?? database)();
      const [caller] = await db
        .select()
        .from(intakeCallers)
        .where(eq(intakeCallers.secretHash, hashIntakeSecret(bearer[1])))
        .limit(1);
      if (!caller) return problem(401, "Invalid Intake Caller");

      if (
        request.headers.get("content-type")?.split(";")[0].trim() !==
        "application/json"
      ) {
        return problem(400, "A JSON submission is required", [
          {
            path: [],
            code: "invalid_content_type",
            message: "Send the submission as application/json.",
          },
        ]);
      }
      let input: unknown;
      try {
        input = await request.json();
      } catch {
        return problem(400, "Invalid JSON", [
          {
            path: [],
            code: "invalid_json",
            message: "Send a valid JSON body.",
          },
        ]);
      }
      const parsed = parseSubmission(input);
      if (!parsed.success)
        return problem(400, "Invalid Assessment Submission", parsed.errors);
      const submission = parsed.data;
      const requestHash = hashIntakeSecret(canonicalJson(submission));
      const email = submission.contact.email.toLowerCase();
      const state = submission.answers.property_state;
      if (!state)
        return problem(400, "Property state is required", [
          {
            path: ["answers", "property_state"],
            code: "required",
            message: "Property state is required.",
          },
        ]);

      // Neon HTTP batches run as one transaction. The second statement sees the
      // winning Person insert, including when another request inserts it first.
      // No conflict path updates an existing Person's contact details.
      const { receipt, inserted } = await db
        .batch([
          db
            .insert(people)
            .values({
              id: randomUUID(),
              email,
              firstName: submission.contact.firstName,
              lastName: submission.contact.lastName,
              phone: submission.contact.phone,
            })
            .onConflictDoNothing({ target: people.email }),
          db
            .insert(assessmentSubmissions)
            .values({
              id: submission.submissionId,
              personId: sql`(select ${people.id} from ${people} where ${people.email} = ${email})`,
              intakeCallerId: caller.id,
              environment: caller.environment,
              assessmentVersion: submission.assessmentVersion,
              contact: submission.contact,
              answers: submission.answers,
              reportedScore: submission.reportedScore,
              actionPlan: submission.actionPlan,
              requestHash,
              mortgageGoal: submission.answers.mortgage_goal,
              state,
            })
            .returning({
              submissionId: assessmentSubmissions.id,
              receivedAt: assessmentSubmissions.receivedAt,
            }),
          db.insert(consentRecords).values({
            submissionId: submission.submissionId,
            promiseText: submission.consent.promiseText,
            channels: submission.consent.channels,
            consentedAt: new Date(submission.consent.timestamp),
            brand: caller.brand,
            environment: caller.environment,
            assessmentVersion: submission.assessmentVersion,
          }),
        ])
        .then(([, receipts]) => ({ receipt: receipts[0], inserted: true }))
        .catch(async (error: unknown) => {
          if (!isUniqueViolation(error)) throw error;
          // The failed transaction has rolled back. A competing insert has
          // committed before its unique constraint can reject this request.
          // Only the original caller can replay the stored receipt.
          const [receipt] = await db
            .select({
              submissionId: assessmentSubmissions.id,
              receivedAt: assessmentSubmissions.receivedAt,
            })
            .from(assessmentSubmissions)
            .where(
              and(
                eq(assessmentSubmissions.id, submission.submissionId),
                eq(assessmentSubmissions.intakeCallerId, caller.id),
                eq(assessmentSubmissions.requestHash, requestHash),
              ),
            )
            .limit(1);
          if (!receipt) throw error;
          return { receipt, inserted: false };
        });
      if (inserted && dependencies.dispatch) {
        try {
          await dependencies.dispatch(receipt.submissionId);
        } catch {
          // The durable submission remains pending. Do not expose worker errors
          // or make the website mistake a committed write for a failed write.
        }
      }
      return Response.json(receipt, {
        status: 201,
        headers: { "Cache-Control": "no-store" },
      });
    } catch (error) {
      if (isUniqueViolation(error))
        return problem(409, "Submission ID already exists");
      // Database errors may contain credentials, SQL parameters, or contact data.
      return problem(503, "Intake is temporarily unavailable");
    }
  };
}
