import {
  currentAssessment,
  type AssessmentDraft,
  type QuestionIdV1,
} from "@phx/assessment";

/**
 * What the quiz form holds while a Visitor answers. Text inputs keep strings;
 * `toDraft` turns them into the shape the shared package validates.
 */
export type MonthYearValue = { month: string; year: string };
export type AnswerValue = string | string[] | MonthYearValue;
export type QuizValues = {
  answers: Partial<Record<QuestionIdV1, AnswerValue>>;
  contact: { email: string; firstName: string; lastName: string; phone: string };
  consent: { channels: ("email" | "sms")[] };
};

export type StepId = QuestionIdV1 | "contact";

export const contactStepFieldNames = [
  "contact.email",
  "contact.firstName",
  "contact.lastName",
  "contact.phone",
  "consent.channels",
] as const;

export function emptyQuizValues(): QuizValues {
  return {
    answers: {},
    contact: { email: "", firstName: "", lastName: "", phone: "" },
    consent: { channels: [] },
  };
}

/** The visible questions for the current path, then the contact step. */
export function quizSteps(answers: Readonly<Record<string, unknown>>): StepId[] {
  return [...currentAssessment.visibleQuestionIds(answers), "contact"];
}

export function hasAnswer(value: unknown): boolean {
  if (value === undefined || value === null) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") {
    return Object.values(value).some((part) => hasAnswer(part));
  }
  return true;
}

/** Where the quiz opens after a restore or a path switch. */
export function firstUnansweredStep(
  answers: Readonly<Record<string, unknown>>,
): StepId {
  return (
    quizSteps(answers).find(
      (step) => step === "contact" || !hasAnswer(answers[step]),
    ) ?? "contact"
  );
}

/** The form field names a step validates before it moves forward. */
export function stepFieldNames(step: StepId): readonly string[] {
  return step === "contact" ? contactStepFieldNames : [`answers.${step}`];
}

function toDraftAnswer(value: AnswerValue | undefined): unknown {
  if (value === undefined || !hasAnswer(value)) return undefined;
  if (typeof value === "string") return value.trim();
  if (Array.isArray(value)) return value;
  return {
    month: Number(value.month) || 0,
    year: Number(value.year) || 0,
  };
}

/**
 * The package draft: blank text is no answer, so the package reports
 * `required` rather than a format error, and a blank phone is omitted.
 */
export function toDraft(values: QuizValues): AssessmentDraft & {
  contact: Partial<Record<"email" | "firstName" | "lastName" | "phone", string>>;
  consent: { channels: ("email" | "sms")[] };
} {
  const answers: Record<string, unknown> = {};
  for (const [id, value] of Object.entries(values.answers)) {
    const answer = toDraftAnswer(value as AnswerValue | undefined);
    if (answer !== undefined) answers[id] = answer;
  }
  const contact: Partial<Record<"email" | "firstName" | "lastName" | "phone", string>> = {};
  for (const key of ["email", "firstName", "lastName", "phone"] as const) {
    const text = values.contact[key].trim();
    if (text) contact[key] = text;
  }
  return { answers, contact, consent: { channels: values.consent.channels } };
}

/**
 * Session storage keeps the draft through a refresh or a browser Back and
 * forgets it when the tab closes. The key names the Assessment Version, so a
 * draft from an older version never restores into a newer quiz.
 */
export const draftStorageKey = `phx-assessment-draft:v${currentAssessment.version}`;

export function loadDraft(storage: Storage): QuizValues | null {
  let raw: string | null;
  try {
    raw = storage.getItem(draftStorageKey);
  } catch {
    return null;
  }
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (
      !parsed ||
      typeof parsed !== "object" ||
      !("answers" in parsed) ||
      !("contact" in parsed) ||
      !("consent" in parsed)
    ) {
      return null;
    }
    const stored = parsed as Partial<QuizValues>;
    const empty = emptyQuizValues();
    // Storage is outside the app, so every field is checked before use.
    const contact = { ...empty.contact };
    for (const key of ["email", "firstName", "lastName", "phone"] as const) {
      const value: unknown = stored.contact?.[key];
      if (typeof value === "string") contact[key] = value;
    }
    const channels: unknown = stored.consent?.channels;
    return {
      answers: { ...empty.answers, ...stored.answers },
      contact,
      consent: {
        channels: Array.isArray(channels)
          ? channels.filter(
              (channel): channel is "email" | "sms" =>
                channel === "email" || channel === "sms",
            )
          : [],
      },
    };
  } catch {
    return null;
  }
}

export function saveDraft(storage: Storage, values: QuizValues): void {
  try {
    storage.setItem(draftStorageKey, JSON.stringify(values));
  } catch {
    // Private mode or a full quota: the quiz still works for this page view.
  }
}

export function clearDraft(storage: Storage): void {
  try {
    storage.removeItem(draftStorageKey);
  } catch {
    // Nothing to clear when storage is unavailable.
  }
}
