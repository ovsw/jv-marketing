import type { FieldErrors, Resolver } from "react-hook-form";
import { validateDraft, type AssessmentDraft } from "@phx/assessment";

/**
 * React Hook Form resolver for the Assessment draft (ADR 0006).
 * `trigger(["answers.credit_range"])` validates one step; `handleSubmit`
 * passes no names and validates the whole draft. Error `type` is the
 * package field code, the same one the intake route returns.
 */
export const assessmentDraftResolver: Resolver<AssessmentDraft> = (
  values,
  _context,
  options,
) => {
  const fieldErrors = validateDraft(values, options.names);
  if (fieldErrors.length === 0) return { values, errors: {} };
  const errors: Record<string, unknown> = {};
  for (const error of fieldErrors) {
    let node = errors;
    const [last, ...parents] = [...error.path].reverse();
    for (const part of parents.reverse()) {
      node[part] ??= {};
      node = node[part] as Record<string, unknown>;
    }
    // Keep the first error for a path; later ones restate the same field.
    node[last] ??= { type: error.code, message: error.message };
  }
  return { values: {}, errors: errors as FieldErrors<AssessmentDraft> };
};
