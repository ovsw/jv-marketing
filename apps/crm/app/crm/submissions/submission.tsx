import Link from "next/link";
import { ChevronDown, FlaskConical } from "lucide-react";
import { assessmentVersions } from "@phx/assessment";
import type { AssessmentSubmissionView } from "@/lib/crm/submissions";
import { Badge } from "@/components/ui/badge";
import { receivedTime } from "../format";

type AssessmentDefinition =
  (typeof assessmentVersions)[keyof typeof assessmentVersions];
type Question = ReturnType<AssessmentDefinition["getQuestion"]>;

/** The immutable Assessment Version a submission was rendered from, if released. */
function assessmentFor(version: string): AssessmentDefinition | undefined {
  return Object.hasOwn(assessmentVersions, version)
    ? assessmentVersions[version as keyof typeof assessmentVersions]
    : undefined;
}

/** Answers as raw values when no released version can label them. */
function rawAnswerRows(submission: AssessmentSubmissionView) {
  return Object.entries(submission.answers).map(([id, value]) => ({
    id,
    question: id,
    answer: rawValue(value),
  }));
}

function rawValue(value: unknown): string {
  if (Array.isArray(value)) return value.map(rawValue).join(", ");
  if (typeof value === "string") return value;
  return JSON.stringify(value) ?? "Not available";
}

function answerRows(submission: AssessmentSubmissionView) {
  const assessment = assessmentFor(submission.assessmentVersion);
  if (!assessment) return rawAnswerRows(submission);

  return Object.entries(submission.answers).flatMap(([id, value]) => {
    if (!Object.hasOwn(assessment.questions, id))
      return [{ id, question: id, answer: rawValue(value) }];
    const question = assessment.getQuestion(
      id as keyof AssessmentDefinition["questions"],
      submission.answers,
    );
    return [
      {
        id,
        question: question.label,
        answer: formatAnswer(question, value),
      },
    ];
  });
}

function formatAnswer(question: Question, value: unknown): string {
  const options = "options" in question ? question.options : undefined;
  const label = (item: unknown) => {
    if (typeof item === "string" && options && item in options) {
      return options[item as keyof typeof options];
    }
    if (typeof item === "string" || typeof item === "number") {
      if (question.kind === "money" && typeof item === "number") {
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 2,
        }).format(item);
      }
      if (question.kind === "rate" && typeof item === "number") {
        return `${item}%`;
      }
      return String(item);
    }
    if (
      question.kind === "month_year" &&
      item &&
      typeof item === "object" &&
      "month" in item &&
      "year" in item &&
      typeof item.month === "number" &&
      typeof item.year === "number"
    ) {
      const month = new Intl.DateTimeFormat("en-US", {
        month: "long",
        timeZone: "UTC",
      }).format(new Date(Date.UTC(2000, item.month - 1)));
      return `${month} ${item.year}`;
    }
    return rawValue(item);
  };

  return Array.isArray(value) ? value.map(label).join(", ") : label(value);
}

function actionPlanLabel(submission: AssessmentSubmissionView) {
  const plans = assessmentFor(submission.assessmentVersion)?.actionPlans;
  if (plans && Object.hasOwn(plans, submission.actionPlan)) {
    return plans[submission.actionPlan as keyof typeof plans].label;
  }
  return submission.actionPlan;
}

export function Submission({
  submission,
  showPersonLink = false,
}: {
  submission: AssessmentSubmissionView;
  showPersonLink?: boolean;
}) {
  const answers = answerRows(submission);
  const labeled = assessmentFor(submission.assessmentVersion) !== undefined;
  const consent = submission.consent;
  return (
    <article
      data-testid="assessment-submission"
      className="min-w-0 space-y-4 break-words py-6"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 space-y-1">
          <h3 className="font-semibold">
            {submission.contact.firstName} {submission.contact.lastName}
          </h3>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span>{submission.originBrand}</span>
            <Badge variant="outline">
              {submission.environment === "test" ? (
                <>
                  <FlaskConical aria-hidden="true" className="size-3" />
                  Preview / test
                </>
              ) : (
                "Live"
              )}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            <time dateTime={submission.receivedAt}>
              {receivedTime.format(new Date(submission.receivedAt))}
            </time>
          </p>
          {showPersonLink ? (
            <Link
              href={`/crm/people/${submission.personId}`}
              className="inline-block py-1 text-sm underline underline-offset-4 focus-ring"
            >
              View Person
            </Link>
          ) : null}
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-3 lg:max-w-xl">
          <div>
            <dt className="text-muted-foreground">Assessment Version</dt>
            <dd className="mt-0.5 font-medium">
              {submission.assessmentVersion}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Readiness Score</dt>
            <dd className="mt-0.5 font-medium tabular-nums">
              {submission.reportedScore ?? "Not available"}
            </dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="text-muted-foreground">Action Plan</dt>
            <dd className="mt-0.5 font-medium">
              {actionPlanLabel(submission)}
            </dd>
          </div>
        </dl>
      </div>
      <details className="group rounded-md border bg-muted/20 open:bg-muted/10">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium focus-ring [&::-webkit-details-marker]:hidden">
          Contact, answers, and consent
          <ChevronDown
            aria-hidden="true"
            className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 motion-reduce:transition-none"
          />
        </summary>
        <div className="space-y-6 border-t p-4">
          <section aria-label="Contact saved with this submission">
            <h4 className="font-medium">Contact saved with this submission</h4>
            <dl className="mt-2 space-y-2 text-sm">
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="[overflow-wrap:anywhere]">
                  {submission.contact.email}
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Phone</dt>
                <dd>{submission.contact.phone || "Not supplied"}</dd>
              </div>
            </dl>
          </section>
          <section aria-label="Saved answers">
            <h4 className="font-medium">Saved answers</h4>
            {!labeled ? (
              <p className="mt-2 text-sm text-muted-foreground">
                Answer labels are unavailable for Assessment Version{" "}
                {submission.assessmentVersion}. Raw answers are shown.
              </p>
            ) : null}
            {answers.length ? (
              <dl className="mt-2 divide-y">
                {answers.map((answer) => (
                  <div
                    key={answer.id}
                    className="grid gap-1 py-3 text-sm md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-6"
                  >
                    <dt className="text-muted-foreground">{answer.question}</dt>
                    <dd className="font-medium [overflow-wrap:anywhere] md:text-right">
                      {answer.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">
                No saved answers.
              </p>
            )}
          </section>
          <section aria-label="Consent saved with this submission">
            <h4 className="font-medium">Consent saved with this submission</h4>
            {consent ? (
              <>
                <p className="mt-2 whitespace-pre-wrap text-sm [overflow-wrap:anywhere]">
                  {consent.promiseText}
                </p>
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-muted-foreground">Agreed channels</dt>
                    <dd>
                      {consent.channels.length
                        ? consent.channels
                            .map((channel) =>
                              channel === "sms"
                                ? "SMS"
                                : channel === "email"
                                  ? "Email"
                                  : channel,
                            )
                            .join(", ")
                        : "None"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Consent time</dt>
                    <dd>
                      <time dateTime={consent.consentedAt}>
                        {receivedTime.format(new Date(consent.consentedAt))}
                      </time>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Sender brand</dt>
                    <dd>{consent.brand}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Environment</dt>
                    <dd>
                      {consent.environment === "test"
                        ? "Preview / test"
                        : "Live"}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">
                      Assessment Version
                    </dt>
                    <dd>{consent.assessmentVersion}</dd>
                  </div>
                </dl>
              </>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">
                Consent record unavailable
              </p>
            )}
          </section>
        </div>
      </details>
    </article>
  );
}
