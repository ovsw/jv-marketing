import { sql } from "drizzle-orm";
import {
  check,
  index,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";
import type { AssessmentSubmission } from "@phx/assessment";

export const people = pgTable(
  "crm_people",
  {
    id: uuid("id").primaryKey(),
    email: text("email").notNull().unique(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    phone: text("phone"),
  },
  (table) => [
    check(
      "people_email_lowercase",
      sql`${table.email} = lower(${table.email})`,
    ),
  ],
);

export const intakeCallers = pgTable(
  "crm_intake_callers",
  {
    id: uuid("id").primaryKey(),
    secretHash: text("secret_hash").notNull().unique(),
    webProperty: text("web_property").notNull(),
    brand: text("brand").notNull(),
    environment: text("environment", { enum: ["test", "live"] }).notNull(),
  },
  (table) => [
    check("caller_environment", sql`${table.environment} in ('test', 'live')`),
  ],
);

export const assessmentSubmissions = pgTable(
  "crm_assessment_submissions",
  {
    id: uuid("id").primaryKey(),
    personId: uuid("person_id")
      .notNull()
      .references(() => people.id),
    intakeCallerId: uuid("intake_caller_id")
      .notNull()
      .references(() => intakeCallers.id),
    environment: text("environment", { enum: ["test", "live"] }).notNull(),
    assessmentVersion: text("assessment_version").notNull(),
    contact: jsonb("contact")
      .$type<AssessmentSubmission["contact"]>()
      .notNull(),
    answers: jsonb("answers")
      .$type<AssessmentSubmission["answers"]>()
      .notNull(),
    reportedScore: integer("reported_score"),
    actionPlan: text("action_plan").notNull(),
    requestHash: text("request_hash").notNull(),
    mortgageGoal: text("mortgage_goal").notNull(),
    state: text("state").notNull(),
    dispatchState: text("dispatch_state", { enum: ["pending", "handled"] })
      .default("pending")
      .notNull(),
    runId: text("run_id"),
    receivedAt: timestamp("received_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    check(
      "submission_environment",
      sql`${table.environment} in ('test', 'live')`,
    ),
    check(
      "submission_dispatch_state",
      sql`${table.dispatchState} in ('pending', 'handled')`,
    ),
    check(
      "submission_score_range",
      sql`${table.reportedScore} between 0 and 100`,
    ),
    index("submission_received_id_idx").on(table.receivedAt, table.id),
  ],
);

export const consentRecords = pgTable(
  "crm_consent_records",
  {
    submissionId: uuid("submission_id")
      .primaryKey()
      .references(() => assessmentSubmissions.id),
    promiseText: text("promise_text").notNull(),
    channels: jsonb("channels")
      .$type<AssessmentSubmission["consent"]["channels"]>()
      .notNull(),
    consentedAt: timestamp("consented_at", { withTimezone: true }).notNull(),
    brand: text("brand").notNull(),
    environment: text("environment", { enum: ["test", "live"] }).notNull(),
    assessmentVersion: text("assessment_version").notNull(),
  },
  (table) => [
    check("consent_environment", sql`${table.environment} in ('test', 'live')`),
  ],
);

export const testInquiries = pgTable("crm_test_inquiries", {
  id: uuid("id").primaryKey(),
  createdBy: text("created_by").notNull(),
  recipient: text("recipient").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  emailId: text("email_id"),
  smsStatus: text("sms_status").notNull().default("pending"),
  jobStatus: text("job_status").notNull().default("pending"),
  runId: text("run_id"),
  lastError: text("last_error"),
  // Bumped on every write. The CRM polls while a pending row is recent.
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// One simulated text per inquiry. Nothing here reaches a messaging provider.
export const simulatedSms = pgTable("crm_simulated_sms", {
  inquiryId: uuid("inquiry_id")
    .primaryKey()
    .references(() => testInquiries.id, { onDelete: "cascade" }),
  recipient: text("recipient").notNull(),
  message: text("message").notNull(),
  simulatedAt: timestamp("simulated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
