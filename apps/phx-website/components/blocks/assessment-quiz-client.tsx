"use client";

import {
  currentAssessment,
  type AssessmentResultV1,
  type AssessmentSubmissionInput,
  type FieldError as IntakeFieldError,
  type QuestionIdV1,
} from "@phx/assessment";
import type { FieldErrors, Resolver } from "react-hook-form";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { AssessmentSubmitResult } from "@/lib/assessment/submit";
import { assessmentDraftResolver } from "@/lib/assessment/resolver";
import {
  clearDraft,
  emptyQuizValues,
  firstUnansweredStep,
  hasAnswer,
  loadDraft,
  expectedQuizSteps,
  quizSteps,
  saveDraft,
  stepFieldNames,
  toDraft,
  type AnswerValue,
  type MonthYearValue,
  type QuizValues,
  type StepId,
} from "@/lib/assessment/quiz";
import { cn } from "@/lib/utils";

export const quizCopy = {
  pending: "Saving your assessment...",
  success:
    "We've saved your assessment. Jimmy's team will reach out only by the channels you chose.",
  failure:
    "We couldn't save your assessment just now. Your answers are still here. Try again, or call us at the number below.",
  promise:
    "It's okay for Jimmy's team to contact me about my home loan options by the channels I check below. I can opt out any time.",
  smsHint: "Add a phone number to allow texts",
  moreInformation: "More information needed",
} as const;

export type AssessmentQuizClientProps = {
  title?: string | null;
  /** The exact consent text sent with the submission. */
  promiseText: string;
  submit: (
    submission: AssessmentSubmissionInput,
  ) => Promise<AssessmentSubmitResult>;
  consultationHref?: string;
  dataAttributes?: { title?: string; promiseText?: string };
};

type Phase =
  | { kind: "quiz" }
  | {
      kind: "results";
      result: AssessmentResultV1;
      submission: AssessmentSubmissionInput;
      status: "pending" | "confirmed" | "failed";
    };

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const inputClassName =
  "min-h-12 w-full rounded-control border border-input bg-background px-4 py-3.5 text-base text-foreground outline-none transition-[border-color,box-shadow] motion-fast placeholder:text-muted-foreground focus-visible:border-primary focus-ring aria-invalid:border-destructive/60";
const optionClassName =
  "flex cursor-pointer items-start gap-3 rounded-control border border-border bg-background px-4 py-3.5 text-base text-foreground transition-[border-color,background-color] motion-fast hover:border-primary/40 has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:focus-visible]:border-primary has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50";
const labelClassName = "typo-fine-print font-semibold text-foreground";
const messageClassName = "typo-body-sm font-medium text-destructive";
/** Above this many options a list of radios is slower than a select. */
const selectThreshold = 10;

// The package draft accepts the form's shape; only the resolver's generic
// parameter differs, so the cast narrows nothing at runtime.
const resolver: Resolver<QuizValues> = async (values, context, options) => {
  const result = await assessmentDraftResolver(
    toDraft(values),
    context,
    options as Parameters<typeof assessmentDraftResolver>[2],
  );
  return {
    errors: result.errors as FieldErrors<QuizValues>,
    values: Object.keys(result.errors).length ? {} : values,
  };
};

function friendlyMessage(
  kind: string,
  error: { type?: string; message?: string },
) {
  switch (error.type) {
    case "required":
      return "Please answer this question to continue.";
    case "invalid_option":
      return "Choose one of the options.";
    case "invalid_answer":
      // The package's month and year message names Zod limits, not the form.
      return kind === "month_year"
        ? "Choose a month and enter a four-digit year, or pick an option."
        : error.message || "Please check this answer.";
    default:
      return error.message || "Please check this answer.";
  }
}

function contactMessage(field: string, error: { type?: string; message?: string }) {
  if (error.type === "sms_requires_phone") return "Add a phone number to allow texts.";
  if (error.type === "required" || error.type === "invalid_type") {
    return field === "email"
      ? "Enter the email address we should use."
      : "This field is needed so we can reach you.";
  }
  if (field === "email") return "Enter a valid email address.";
  return error.message || "Please check this field.";
}

function stepForErrorPath(path: (string | number)[]): StepId | null {
  if (path[0] === "answers" && typeof path[1] === "string") {
    return path[1] in currentAssessment.questions
      ? (path[1] as QuestionIdV1)
      : null;
  }
  if (path[0] === "contact" || path[0] === "consent") return "contact";
  return null;
}

export default function AssessmentQuizClient({
  title,
  promiseText,
  submit,
  consultationHref = "/contact/",
  dataAttributes,
}: AssessmentQuizClientProps) {
  const form = useForm<QuizValues>({
    defaultValues: emptyQuizValues(),
    resolver,
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });
  const { control, getValues, handleSubmit, reset, setError, trigger } = form;
  const answers = useWatch({ control, name: "answers" });
  const [step, setStep] = useState<StepId>("mortgage_goal");
  const [phase, setPhase] = useState<Phase>({ kind: "quiz" });
  const [ready, setReady] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const resultsHeadingRef = useRef<HTMLHeadingElement>(null);
  const sendingRef = useRef(false);
  const skipFocusRef = useRef(true);
  const id = useId();

  const steps = quizSteps(answers);
  const expectedSteps = expectedQuizSteps(answers);
  const currentStep = steps.includes(step) ? step : firstUnansweredStep(answers);
  const stepIndex = steps.indexOf(currentStep);

  // Restore the draft after hydration, then keep it saved on every change.
  useEffect(() => {
    const stored = loadDraft(window.sessionStorage);
    if (stored) {
      // A restore is not a step change the visitor made: leave focus alone.
      skipFocusRef.current = true;
      reset(stored);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- Session storage is only readable after hydration, and the server must render the first question.
      setStep(firstUnansweredStep(stored.answers));
    }
    // Saving starts only after the restore, so an empty first render never
    // overwrites the draft.
    setReady(true);
  }, [reset]);
  useEffect(() => {
    if (!ready) return;
    return form.subscribe({
      formState: { values: true },
      callback: ({ values }) => saveDraft(window.sessionStorage, values),
    });
  }, [form, ready]);

  // Focus the new heading on each step change, but not on page load.
  useEffect(() => {
    if (skipFocusRef.current) {
      skipFocusRef.current = false;
      return;
    }
    (phase.kind === "results" ? resultsHeadingRef : headingRef).current?.focus();
  }, [currentStep, phase.kind]);

  const goNext = useCallback(async () => {
    const valid = await trigger(
      stepFieldNames(currentStep) as Parameters<typeof trigger>[0],
    );
    if (!valid) return;
    setStep(firstUnansweredStep(getValues("answers")));
  }, [currentStep, getValues, trigger]);

  const goBack = () => {
    if (stepIndex > 0) setStep(steps[stepIndex - 1]);
  };

  const showFieldErrors = useCallback(
    (errors: IntakeFieldError[]) => {
      let target: StepId | null = null;
      for (const error of errors) {
        const errorStep = stepForErrorPath(error.path);
        if (!errorStep) continue;
        target ??= errorStep;
        setError(error.path.join(".") as Parameters<typeof setError>[0], {
          type: error.code,
          message: error.message,
        });
      }
      return target;
    },
    [setError],
  );

  const send = useCallback(
    async (result: AssessmentResultV1, initial: AssessmentSubmissionInput) => {
      if (sendingRef.current) return;
      sendingRef.current = true;
      let submission = initial;
      setPhase({ kind: "results", result, submission, status: "pending" });
      let outcome: AssessmentSubmitResult;
      // A conflict means the CRM holds another body under this ID: mint a new
      // one and send once more. Every other failure keeps the ID for a retry.
      for (let attempt = 0; ; attempt++) {
        try {
          outcome = await submit(submission);
        } catch {
          outcome = { ok: false, kind: "retry" };
        }
        if (!outcome.ok && outcome.kind === "conflict" && attempt === 0) {
          submission = { ...submission, submissionId: crypto.randomUUID() };
          continue;
        }
        break;
      }
      sendingRef.current = false;
      if (outcome.ok) {
        clearDraft(window.sessionStorage);
        setPhase({ kind: "results", result, submission, status: "confirmed" });
        return;
      }
      if (outcome.kind === "invalid") {
        const target = showFieldErrors(outcome.errors);
        if (target) {
          setPhase({ kind: "quiz" });
          setStep(target);
          return;
        }
      }
      setPhase({ kind: "results", result, submission, status: "failed" });
    },
    [showFieldErrors, submit],
  );

  const onValid = (values: QuizValues) => {
    const draft = toDraft(values);
    const relevant = currentAssessment.relevantAnswers(draft.answers);
    const result = currentAssessment.score(relevant);
    const submission: AssessmentSubmissionInput = {
      submissionId: crypto.randomUUID(),
      assessmentVersion: "1",
      // The whole draft passed validation, so the required fields are present.
      contact: draft.contact as AssessmentSubmissionInput["contact"],
      consent: {
        promiseText,
        channels: draft.consent.channels,
        timestamp: new Date().toISOString(),
      },
      answers: relevant,
      reportedScore: result.readinessScore,
      actionPlan: result.actionPlan,
    };
    return send(result, submission);
  };

  const onInvalid = (errors: Record<string, unknown>) => {
    const contactErrors = errors.contact || errors.consent;
    const answerErrors = (errors.answers ?? {}) as Record<string, unknown>;
    const target = steps.find((candidate) =>
      candidate === "contact" ? Boolean(contactErrors) : candidate in answerErrors,
    );
    if (target) setStep(target);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (currentStep === "contact") {
      void handleSubmit(onValid, onInvalid)(event);
    } else {
      void goNext();
    }
  };

  const questionCount = expectedSteps.length - 1;
  const progressLabel =
    currentStep === "contact"
      ? `Last step of ${expectedSteps.length}`
      : `Question ${stepIndex + 1} of ${questionCount}`;
  const Heading = title ? "h3" : "h2";

  return (
    <FormProvider {...form}>
      <section className="section-pad surface-cream">
        <div className="container max-w-3xl">
          {title ? (
            <h2
              className="mb-8 text-balance typo-section-heading text-foreground"
              data-sanity={dataAttributes?.title}
            >
              {title}
            </h2>
          ) : null}
          {phase.kind === "results" ? (
            <Results
              consultationHref={consultationHref}
              headingRef={resultsHeadingRef}
              onRetry={() => void send(phase.result, phase.submission)}
              phase={phase}
            />
          ) : (
            <form
              className="rounded-card border border-border bg-card p-(--space-inset) shadow-ambient-feature"
              noValidate
              onSubmit={onSubmit}
            >
              <div
                aria-label="Assessment progress"
                aria-valuemax={expectedSteps.length}
                aria-valuemin={1}
                aria-valuenow={stepIndex + 1}
                className="mb-6 h-1.5 w-full overflow-hidden rounded-full bg-border"
                role="progressbar"
              >
                <div
                  className="h-full rounded-full bg-primary transition-[width] motion-base"
                  style={{
                    width: `${((stepIndex + 1) / expectedSteps.length) * 100}%`,
                  }}
                />
              </div>
              <div aria-atomic="true" aria-live="polite">
                <p className="typo-eyebrow text-primary">{progressLabel}</p>
                <Heading
                  className="mt-3 text-balance typo-subsection-heading text-card-foreground outline-none"
                  id={`${id}-heading`}
                  ref={headingRef}
                  tabIndex={-1}
                >
                  {currentStep === "contact"
                    ? "Where should we send your results?"
                    : currentAssessment.getQuestion(currentStep, answers).label}
                </Heading>
              </div>

              <div className="mt-6">
                {currentStep === "contact" ? (
                  <ContactStep
                    dataAttributes={dataAttributes}
                    idPrefix={id}
                    promiseText={promiseText}
                  />
                ) : (
                  <QuestionStep
                    answers={answers}
                    headingId={`${id}-heading`}
                    idPrefix={id}
                    onAutoAdvance={() => void goNext()}
                    questionId={currentStep}
                  />
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <Button
                  disabled={stepIndex === 0}
                  onClick={goBack}
                  type="button"
                  variant="outline"
                >
                  Back
                </Button>
                <Button type="submit">
                  {currentStep === "contact" ? "See my results" : "Next"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </section>
    </FormProvider>
  );
}

function QuestionStep({
  answers,
  headingId,
  idPrefix,
  onAutoAdvance,
  questionId,
}: {
  answers: QuizValues["answers"];
  headingId: string;
  idPrefix: string;
  onAutoAdvance: () => void;
  questionId: QuestionIdV1;
}) {
  const question = currentAssessment.getQuestion(questionId, answers);
  const name = `answers.${questionId}` as const;
  const options =
    "options" in question
      ? (question.options as Record<string, string>)
      : undefined;

  return (
    <Controller
      key={questionId}
      name={name}
      render={({ field, fieldState }) => {
        const messageId = `${idPrefix}-message`;
        const value = field.value as AnswerValue | undefined;
        const message = fieldState.error
          ? friendlyMessage(question.kind, fieldState.error)
          : null;
        const describedBy = message ? messageId : undefined;
        const optionKeys = options ? Object.keys(options) : [];
        const groupProps = {
          "aria-describedby": describedBy,
          "aria-invalid": Boolean(message) || undefined,
          "aria-labelledby": headingId,
        };
        // Keyboard activation reports a click with no pointer detail, so only
        // a real click on a single choice moves to the next question.
        const optionRadio = (key: string, checked: boolean) => (
          <label className={optionClassName} key={key}>
            <input
              checked={checked}
              className="mt-1 size-4 shrink-0 accent-primary"
              name={field.name}
              onBlur={field.onBlur}
              onChange={() => field.onChange(key)}
              onClick={(event) => {
                if (event.detail === 0) return;
                field.onChange(key);
                if (question.kind === "single_choice") onAutoAdvance();
              }}
              ref={checked ? field.ref : undefined}
              type="radio"
              value={key}
            />
            <span>{options?.[key]}</span>
          </label>
        );
        const textInput = (
          extra: React.InputHTMLAttributes<HTMLInputElement>,
        ) => {
          const isOption = typeof value === "string" && optionKeys.includes(value);
          return (
            <input
              aria-describedby={describedBy}
              aria-invalid={Boolean(message) || undefined}
              aria-labelledby={headingId}
              className={inputClassName}
              id={`${idPrefix}-input`}
              name={field.name}
              onBlur={field.onBlur}
              onChange={(event) => field.onChange(event.target.value)}
              ref={field.ref}
              value={isOption || typeof value !== "string" ? "" : value}
              {...extra}
            />
          );
        };

        let control: React.ReactNode;
        if (question.kind === "single_choice" && options) {
          control =
            optionKeys.length > selectThreshold ? (
              <select
                {...groupProps}
                className={cn(inputClassName, "appearance-auto")}
                name={field.name}
                onBlur={field.onBlur}
                onChange={(event) => field.onChange(event.target.value)}
                ref={field.ref}
                value={typeof value === "string" ? value : ""}
              >
                <option value="">Choose one</option>
                {optionKeys.map((key) => (
                  <option key={key} value={key}>
                    {options[key]}
                  </option>
                ))}
              </select>
            ) : (
              <div className="grid gap-3" role="radiogroup" {...groupProps}>
                {optionKeys.map((key) => optionRadio(key, value === key))}
              </div>
            );
        } else if (question.kind === "multiple_choice" && options) {
          const selected = Array.isArray(value) ? value : [];
          control = (
            <div className="grid gap-3" role="group" {...groupProps}>
              {optionKeys.map((key) => (
                <label className={optionClassName} key={key}>
                  <input
                    checked={selected.includes(key)}
                    className="mt-1 size-4 shrink-0 accent-primary"
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={(event) =>
                      field.onChange(
                        event.target.checked
                          ? [...selected, key]
                          : selected.filter((item) => item !== key),
                      )
                    }
                    type="checkbox"
                    value={key}
                  />
                  <span>{options[key]}</span>
                </label>
              ))}
            </div>
          );
        } else if (question.kind === "text") {
          control = textInput({ autoComplete: "address-level2", type: "text" });
        } else if (question.kind === "money" || question.kind === "rate") {
          control = (
            <div className="grid gap-4">
              <div className="relative">
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-y-0 flex items-center text-muted-foreground",
                    question.kind === "money" ? "left-4" : "right-4",
                  )}
                >
                  {question.kind === "money" ? "$" : "%"}
                </span>
                {textInput({
                  className: cn(inputClassName, question.kind === "money" ? "pl-8" : "pr-8"),
                  inputMode: "decimal",
                  placeholder: question.kind === "money" ? "1,500" : "6.5",
                  type: "text",
                })}
              </div>
              {options ? (
                <div className="grid gap-3" role="radiogroup" aria-label="Or choose">
                  {optionKeys.map((key) => optionRadio(key, value === key))}
                </div>
              ) : null}
            </div>
          );
        } else {
          const date =
            typeof value === "object" && !Array.isArray(value) && value
              ? (value as MonthYearValue)
              : { month: "", year: "" };
          const isOption = typeof value === "string";
          control = (
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className={labelClassName}>Month</span>
                  <select
                    aria-describedby={describedBy}
                    aria-invalid={Boolean(message) || undefined}
                    className={cn(inputClassName, "appearance-auto")}
                    onBlur={field.onBlur}
                    onChange={(event) =>
                      field.onChange({ ...(isOption ? { year: "" } : date), month: event.target.value })
                    }
                    ref={field.ref}
                    value={isOption ? "" : date.month}
                  >
                    <option value="">Choose a month</option>
                    {months.map((label, index) => (
                      <option key={label} value={String(index + 1)}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="grid gap-2">
                  <span className={labelClassName}>Year</span>
                  <input
                    aria-describedby={describedBy}
                    aria-invalid={Boolean(message) || undefined}
                    className={inputClassName}
                    inputMode="numeric"
                    onBlur={field.onBlur}
                    onChange={(event) =>
                      field.onChange({ ...(isOption ? { month: "" } : date), year: event.target.value })
                    }
                    placeholder="2027"
                    type="text"
                    value={isOption ? "" : date.year}
                  />
                </label>
              </div>
              {options ? (
                <div className="grid gap-3" role="radiogroup" aria-label="Or choose">
                  {optionKeys.map((key) => optionRadio(key, value === key))}
                </div>
              ) : null}
            </div>
          );
        }

        return (
          <div className="grid gap-3">
            {control}
            {message ? (
              <p className={messageClassName} id={messageId} role="alert">
                {message}
              </p>
            ) : null}
          </div>
        );
      }}
    />
  );
}

function ContactStep({
  dataAttributes,
  idPrefix,
  promiseText,
}: {
  dataAttributes?: AssessmentQuizClientProps["dataAttributes"];
  idPrefix: string;
  promiseText: string;
}) {
  const { getValues, setValue } = useFormContext<QuizValues>();
  const phone = useWatch({ name: "contact.phone" }) as string;
  const hasPhone = hasAnswer(phone);
  // A phone that is emptied takes SMS consent with it.
  useEffect(() => {
    if (hasPhone) return;
    const channels = getValues("consent.channels");
    if (channels.includes("sms")) {
      setValue(
        "consent.channels",
        channels.filter((channel) => channel !== "sms"),
      );
    }
  }, [getValues, hasPhone, setValue]);
  const fields = [
    { name: "email", label: "Email", autoComplete: "email", type: "email" },
    { name: "firstName", label: "First name", autoComplete: "given-name", type: "text" },
    { name: "lastName", label: "Last name", autoComplete: "family-name", type: "text" },
    { name: "phone", label: "Phone (optional)", autoComplete: "tel", type: "tel" },
  ] as const;

  return (
    <div className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        {fields.map((item) => (
          <Controller
            key={item.name}
            name={`contact.${item.name}`}
            render={({ field, fieldState }) => {
              const inputId = `${idPrefix}-${item.name}`;
              const message = fieldState.error
                ? contactMessage(item.name, fieldState.error)
                : null;
              return (
                <div className="grid gap-2">
                  <label className={labelClassName} htmlFor={inputId}>
                    {item.label}
                  </label>
                  <input
                    aria-describedby={message ? `${inputId}-message` : undefined}
                    aria-invalid={Boolean(message) || undefined}
                    autoComplete={item.autoComplete}
                    className={inputClassName}
                    id={inputId}
                    name={field.name}
                    onBlur={field.onBlur}
                    onChange={(event) => field.onChange(event.target.value)}
                    ref={field.ref}
                    type={item.type}
                    value={(field.value as string) ?? ""}
                  />
                  {message ? (
                    <p className={messageClassName} id={`${inputId}-message`} role="alert">
                      {message}
                    </p>
                  ) : null}
                </div>
              );
            }}
          />
        ))}
      </div>

      <Controller
        name="consent.channels"
        render={({ field, fieldState }) => {
          const selected = (field.value as ("email" | "sms")[]) ?? [];
          const toggle = (channel: "email" | "sms", checked: boolean) =>
            field.onChange(
              checked
                ? [...selected, channel]
                : selected.filter((item) => item !== channel),
            );
          return (
            <fieldset className="grid gap-3">
              <legend
                className="mb-3 typo-body-sm text-foreground"
                data-sanity={dataAttributes?.promiseText}
              >
                {promiseText}
              </legend>
              <label className={optionClassName}>
                <input
                  checked={selected.includes("email")}
                  className="mt-1 size-4 shrink-0 accent-primary"
                  onChange={(event) => toggle("email", event.target.checked)}
                  type="checkbox"
                />
                <span>By email</span>
              </label>
              <label className={optionClassName}>
                <input
                  aria-describedby={`${idPrefix}-sms-hint`}
                  checked={selected.includes("sms")}
                  className="mt-1 size-4 shrink-0 accent-primary"
                  disabled={!hasPhone}
                  onChange={(event) => toggle("sms", event.target.checked)}
                  type="checkbox"
                />
                <span className="grid gap-1">
                  <span>By text message</span>
                  {!hasPhone ? (
                    <span
                      className="typo-fine-print text-muted-foreground"
                      id={`${idPrefix}-sms-hint`}
                    >
                      {quizCopy.smsHint}
                    </span>
                  ) : null}
                </span>
              </label>
              {fieldState.error ? (
                <p className={messageClassName} role="alert">
                  {fieldState.error.message}
                </p>
              ) : null}
            </fieldset>
          );
        }}
      />
    </div>
  );
}

function Results({
  consultationHref,
  headingRef,
  onRetry,
  phase,
}: {
  consultationHref: string;
  headingRef: React.RefObject<HTMLHeadingElement | null>;
  onRetry: () => void;
  phase: Extract<Phase, { kind: "results" }>;
}) {
  const { result, status } = phase;
  const plan = currentAssessment.actionPlans[result.actionPlan];
  return (
    <div className="rounded-card border border-border bg-card p-(--space-inset) shadow-ambient-feature">
      <p className="typo-eyebrow text-primary">Your results</p>
      <h2
        className="mt-3 text-balance typo-subsection-heading text-card-foreground outline-none"
        ref={headingRef}
        tabIndex={-1}
      >
        {result.readinessScore === null
          ? quizCopy.moreInformation
          : `Your Readiness Score is ${result.readinessScore} out of 100`}
      </h2>
      <p className="mt-4 typo-body text-muted-foreground">
        This score reflects what you shared with us. Use it as a guide for your
        next step, not as a loan decision or an approval.
      </p>

      <h3 className="mt-8 typo-card-title text-card-foreground">{plan.label}</h3>
      <p className="mt-2 typo-body text-muted-foreground">{plan.description}</p>
      {result.steps.length ? (
        <ol className="mt-5 grid gap-4">
          {result.steps.map((stepId, index) => {
            const item = currentAssessment.actionSteps[stepId];
            return (
              <li className="grid gap-1 border-l-2 border-primary pl-4" key={stepId}>
                <span className="typo-fine-print font-semibold text-foreground">
                  {index + 1}. {item.label}
                </span>
                <span className="typo-body-sm text-muted-foreground">{item.text}</span>
              </li>
            );
          })}
        </ol>
      ) : null}

      <div aria-live="polite" className="mt-8 border-t border-border pt-6">
        {status === "pending" ? (
          <p className="flex items-center gap-3 typo-body-sm text-muted-foreground">
            <span
              aria-hidden="true"
              className="size-4 shrink-0 animate-spin rounded-full border-2 border-primary border-t-transparent"
            />
            {quizCopy.pending}
          </p>
        ) : status === "confirmed" ? (
          <p className="typo-body-sm text-foreground">{quizCopy.success}</p>
        ) : (
          <div className="grid gap-4">
            <p className="typo-body-sm text-destructive">{quizCopy.failure}</p>
            <div>
              <Button onClick={onRetry} type="button" variant="outline">
                Try again
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <Button asChild>
          {/^https?:\/\//.test(consultationHref) ? (
            <a href={consultationHref} rel="noopener noreferrer" target="_blank">
              Schedule a Consultation
            </a>
          ) : (
            <Link href={consultationHref}>Schedule a Consultation</Link>
          )}
        </Button>
      </div>
    </div>
  );
}
