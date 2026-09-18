"use client";

import { useMemo, useState } from "react";
import { ChevronDown, FlaskConical, Mail, Phone } from "lucide-react";
import { assessmentVersions } from "@phx/assessment";
import { Badge } from "@/components/ui/badge";

export type PersonSummary = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string | null;
};

export type PersonAssessmentSubmission = {
  id: string;
  environment: "test" | "live";
  assessmentVersion: string;
  answers: Record<string, unknown>;
  reportedScore: number | null;
  actionPlan: string;
  receivedAt: string;
  originBrand: string;
};

const receivedTime = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "America/Phoenix",
});

type AssessmentDefinition =
  (typeof assessmentVersions)[keyof typeof assessmentVersions];
type Question = ReturnType<AssessmentDefinition["getQuestion"]>;

/** The immutable Assessment Version a submission was rendered from, if released. */
function assessmentFor(version: string): AssessmentDefinition | undefined {
  return Object.hasOwn(assessmentVersions, version)
    ? assessmentVersions[version as keyof typeof assessmentVersions]
    : undefined;
}

function answerRows(submission: PersonAssessmentSubmission) {
  const assessment = assessmentFor(submission.assessmentVersion);
  if (!assessment) return null;

  return Object.entries(submission.answers).flatMap(([id, value]) => {
    if (!Object.hasOwn(assessment.questions, id)) return [];
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
    if (
      typeof item === "string" &&
      options &&
      item in options
    ) {
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
    return "Not available";
  };

  return Array.isArray(value) ? value.map(label).join(", ") : label(value);
}

function actionPlanLabel(submission: PersonAssessmentSubmission) {
  const plans = assessmentFor(submission.assessmentVersion)?.actionPlans;
  if (plans && Object.hasOwn(plans, submission.actionPlan)) {
    return plans[submission.actionPlan as keyof typeof plans].label;
  }
  return submission.actionPlan;
}

export function PersonSubmissions({
  person,
  submissions,
}: {
  person: PersonSummary;
  submissions: PersonAssessmentSubmission[];
}) {
  const [showTest, setShowTest] = useState(false);
  const orderedSubmissions = useMemo(
    () =>
      [...submissions].sort(
        (left, right) =>
          Date.parse(right.receivedAt) - Date.parse(left.receivedAt),
      ),
    [submissions],
  );
  const testCount = orderedSubmissions.filter(
    (submission) => submission.environment === "test",
  ).length;
  const visibleSubmissions = showTest
    ? orderedSubmissions
    : orderedSubmissions.filter(
        (submission) => submission.environment === "live",
      );

  return (
    <div className="space-y-8">
      <section aria-labelledby="person-name" className="space-y-3">
        <div>
          <h1 id="person-name" className="text-2xl font-semibold tracking-tight">
            {person.firstName} {person.lastName}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">Person record</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a
            href={`mailto:${person.email}`}
            className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-ring"
          >
            <Mail aria-hidden="true" className="size-4 text-muted-foreground" />
            {person.email}
          </a>
          {person.phone ? (
            <a
              href={`tel:${person.phone}`}
              className="inline-flex items-center gap-2 underline-offset-4 hover:underline focus-ring"
            >
              <Phone aria-hidden="true" className="size-4 text-muted-foreground" />
              {person.phone}
            </a>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="assessment-submissions-heading">
        <div className="flex flex-col gap-4 border-b pb-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="assessment-submissions-heading"
              className="text-lg font-semibold"
            >
              Assessment Submissions
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Received answers and results, resolved against the Assessment
              Version the visitor saw.
            </p>
          </div>
          {testCount > 0 ? (
            <label className="inline-flex min-h-9 cursor-pointer items-center gap-2 text-sm font-medium">
              <input
                type="checkbox"
                checked={showTest}
                onChange={(event) => setShowTest(event.currentTarget.checked)}
                className="size-4 rounded border-input accent-primary focus-ring"
              />
              Show test submissions ({testCount})
            </label>
          ) : null}
        </div>

        {visibleSubmissions.length === 0 ? (
          <div className="py-12 text-center">
            <p className="font-medium">No live Assessment Submissions</p>
            <p className="mt-1 text-sm text-muted-foreground">
              This Person has no live submissions to review.
            </p>
          </div>
        ) : (
          <ol className="divide-y">
            {visibleSubmissions.map((submission) => {
              const answers = answerRows(submission);
              return (
                <li
                  key={submission.id}
                  data-testid="assessment-submission"
                  className="py-6 first:pt-5"
                >
                  <article className="space-y-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-semibold">
                            {submission.originBrand}
                          </h3>
                          {submission.environment === "test" ? (
                            <Badge variant="outline" className="gap-1">
                              <FlaskConical aria-hidden="true" className="size-3" />
                              Test
                            </Badge>
                          ) : null}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          <time dateTime={submission.receivedAt}>
                            {receivedTime.format(new Date(submission.receivedAt))}
                          </time>
                        </p>
                      </div>
                      <dl className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
                        <div>
                          <dt className="text-muted-foreground">
                            Assessment Version
                          </dt>
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

                    {answers ? (
                      <details className="group rounded-md border bg-muted/20 open:bg-muted/10">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-sm font-medium focus-ring [&::-webkit-details-marker]:hidden">
                          Show {answers.length} answers
                          <ChevronDown
                            aria-hidden="true"
                            className="size-4 text-muted-foreground transition-transform group-open:rotate-180"
                          />
                        </summary>
                        <dl className="divide-y border-t px-4">
                          {answers.map((answer) => (
                            <div
                              key={answer.id}
                              className="grid gap-1 py-3 text-sm md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:gap-6"
                            >
                              <dt className="text-muted-foreground">
                                {answer.question}
                              </dt>
                              <dd className="font-medium md:text-right">
                                {answer.answer}
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </details>
                    ) : (
                      <p className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
                        Answer labels are unavailable for Assessment Version {" "}
                        {submission.assessmentVersion}.
                      </p>
                    )}
                  </article>
                </li>
              );
            })}
          </ol>
        )}
      </section>
    </div>
  );
}
