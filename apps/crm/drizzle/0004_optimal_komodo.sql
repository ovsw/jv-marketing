CREATE TABLE "crm_assessment_submissions" (
	"id" uuid PRIMARY KEY NOT NULL,
	"person_id" uuid NOT NULL,
	"intake_caller_id" uuid NOT NULL,
	"environment" text NOT NULL,
	"assessment_version" text NOT NULL,
	"contact" jsonb NOT NULL,
	"answers" jsonb NOT NULL,
	"reported_score" integer,
	"action_plan" text NOT NULL,
	"request_hash" text NOT NULL,
	"mortgage_goal" text NOT NULL,
	"state" text NOT NULL,
	"dispatch_state" text DEFAULT 'pending' NOT NULL,
	"received_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "submission_environment" CHECK ("crm_assessment_submissions"."environment" in ('test', 'live')),
	CONSTRAINT "submission_dispatch_state" CHECK ("crm_assessment_submissions"."dispatch_state" in ('pending', 'handled')),
	CONSTRAINT "submission_score_range" CHECK ("crm_assessment_submissions"."reported_score" between 0 and 100)
);
--> statement-breakpoint
CREATE TABLE "crm_consent_records" (
	"submission_id" uuid PRIMARY KEY NOT NULL,
	"promise_text" text NOT NULL,
	"channels" jsonb NOT NULL,
	"consented_at" timestamp with time zone NOT NULL,
	"brand" text NOT NULL,
	"environment" text NOT NULL,
	"assessment_version" text NOT NULL,
	CONSTRAINT "consent_environment" CHECK ("crm_consent_records"."environment" in ('test', 'live'))
);
--> statement-breakpoint
CREATE TABLE "crm_intake_callers" (
	"id" uuid PRIMARY KEY NOT NULL,
	"secret_hash" text NOT NULL,
	"web_property" text NOT NULL,
	"brand" text NOT NULL,
	"environment" text NOT NULL,
	CONSTRAINT "crm_intake_callers_secret_hash_unique" UNIQUE("secret_hash"),
	CONSTRAINT "caller_environment" CHECK ("crm_intake_callers"."environment" in ('test', 'live'))
);
--> statement-breakpoint
CREATE TABLE "crm_people" (
	"id" uuid PRIMARY KEY NOT NULL,
	"email" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"phone" text,
	CONSTRAINT "crm_people_email_unique" UNIQUE("email"),
	CONSTRAINT "people_email_lowercase" CHECK ("crm_people"."email" = lower("crm_people"."email"))
);
--> statement-breakpoint
ALTER TABLE "crm_assessment_submissions" ADD CONSTRAINT "crm_assessment_submissions_person_id_crm_people_id_fk" FOREIGN KEY ("person_id") REFERENCES "public"."crm_people"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "crm_assessment_submissions" ADD CONSTRAINT "crm_assessment_submissions_intake_caller_id_crm_intake_callers_id_fk" FOREIGN KEY ("intake_caller_id") REFERENCES "public"."crm_intake_callers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "crm_consent_records" ADD CONSTRAINT "crm_consent_records_submission_id_crm_assessment_submissions_id_fk" FOREIGN KEY ("submission_id") REFERENCES "public"."crm_assessment_submissions"("id") ON DELETE no action ON UPDATE no action;