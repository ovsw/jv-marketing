import { z } from "zod";
import { assessmentV1, actionPlanIdsV1 } from "./versions/v1";

export const assessmentVersions = { "1": assessmentV1 } as const;
export const currentAssessment = assessmentV1;
const requiredText = z.string().trim().min(1);
export const contactSchema = z.strictObject({
  email: z.email().max(254),
  firstName: requiredText.max(100),
  lastName: requiredText.max(100),
  phone: requiredText.max(50).optional(),
});
export const consentSchema = z.strictObject({
  promiseText: requiredText.max(10000),
  channels: z
    .enum(["email", "sms"])
    .array()
    .max(2)
    .refine(
      (v) => new Set(v).size === v.length,
      "Select each channel only once.",
    ),
  timestamp: z.iso.datetime({ offset: true }),
});
export const submissionSchema = z
  .strictObject({
    submissionId: z.uuid(),
    assessmentVersion: z.literal("1"),
    contact: contactSchema,
    consent: consentSchema,
    answers: assessmentV1.answersSchema,
    reportedScore: z.number().int().min(0).max(100).nullable(),
    actionPlan: z.enum(actionPlanIdsV1),
  })
  .superRefine((submission, ctx) => {
    if (
      submission.consent.channels.includes("sms") &&
      !submission.contact.phone
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["contact", "phone"],
        message: "Phone is required for SMS consent.",
        params: { fieldCode: "sms_requires_phone" },
      });
    }
    const result = assessmentV1.score(submission.answers);
    if (submission.reportedScore !== result.readinessScore) {
      ctx.addIssue({
        code: "custom",
        path: ["reportedScore"],
        message:
          "Score does not match this Assessment Version and its answers.",
        params: { fieldCode: "result_mismatch" },
      });
    }
    if (submission.actionPlan !== result.actionPlan) {
      ctx.addIssue({
        code: "custom",
        path: ["actionPlan"],
        message:
          "Action Plan does not match this Assessment Version and its answers.",
        params: { fieldCode: "result_mismatch" },
      });
    }
  });
export type AssessmentSubmission = z.output<typeof submissionSchema>;
export type AssessmentSubmissionInput = z.input<typeof submissionSchema>;
export type Contact = z.output<typeof contactSchema>;
export type Consent = z.output<typeof consentSchema>;

export const receiptSchema = z.strictObject({
  submissionId: z.uuid(),
  receivedAt: z.iso.datetime({ offset: true }),
});
export type SubmissionReceipt = z.output<typeof receiptSchema>;
export const fieldErrorSchema = z.object({
  path: z.union([z.string(), z.number()]).array(),
  code: z.string(),
  message: z.string(),
});
export type FieldError = z.output<typeof fieldErrorSchema>;
// RFC 9457 permits additional members. Do not require field errors for 401/409.
export const problemSchema = z.object({
  type: z.string(),
  title: z.string(),
  status: z.number().int(),
  detail: z.string().optional(),
  instance: z.string().optional(),
  errors: fieldErrorSchema.array().optional(),
});
export type IntakeProblem = z.output<typeof problemSchema>;

/** Stable application codes, independent of Zod's messages and issue names. */
function toFieldErrors(issues: z.core.$ZodIssue[], input: unknown) {
  return issues.flatMap((issue): FieldError[] => {
    const path = issue.path.map((part) =>
      typeof part === "number" ? part : String(part),
    );
    if (issue.code === "unrecognized_keys") {
      return issue.keys.map((key) => ({
        path: [...path, key],
        code: "unknown_field",
        message: "Unknown field.",
      }));
    }
    const customCode = issue.code === "custom" && issue.params?.fieldCode;
    const value = path.reduce<unknown>(
      (parent, part) =>
        parent !== null &&
        typeof parent === "object" &&
        Object.hasOwn(parent, part)
          ? Reflect.get(parent, part)
          : undefined,
      input,
    );
    return [
      {
        path,
        code:
          path[0] === "assessmentVersion"
            ? "unsupported_version"
            : typeof customCode === "string"
              ? customCode
              : issue.code === "invalid_type" && value === undefined
                ? "required"
                : "invalid_value",
        message: issue.message,
      },
    ];
  });
}

export function parseSubmission(
  input: unknown,
):
  | { success: true; data: AssessmentSubmission }
  | { success: false; errors: FieldError[] } {
  const parsed = submissionSchema.safeParse(input);
  if (parsed.success) return { success: true, data: parsed.data };
  return { success: false, errors: toFieldErrors(parsed.error.issues, input) };
}

/**
 * What a website form holds while a visitor works through the Assessment.
 * Promise text, timestamp, score, and IDs are added when the submission is built.
 */
export type AssessmentDraft = {
  answers: Readonly<Record<string, unknown>>;
  contact: Partial<Record<keyof Contact, unknown>>;
  consent: { channels?: unknown };
};
const draftSchema = z
  .object({
    answers: assessmentV1.answersSchema,
    contact: contactSchema,
    consent: z.object({ channels: consentSchema.shape.channels }),
  })
  .check((ctx) => {
    if (
      ctx.value.consent.channels.includes("sms") &&
      !ctx.value.contact.phone
    ) {
      ctx.issues.push({
        code: "custom",
        input: ctx.value.contact.phone,
        path: ["contact", "phone"],
        message: "Phone is required for SMS consent.",
        params: { fieldCode: "sms_requires_phone" },
      });
    }
  });

/**
 * Field errors for a draft, with the same paths and codes the intake route
 * returns. Pass `names` (dot paths such as `answers.credit_range`) to check
 * one step at a time; omit it to check the whole draft before submitting.
 */
export function validateDraft(
  draft: AssessmentDraft,
  names?: readonly string[],
): FieldError[] {
  const parsed = draftSchema.safeParse(draft);
  if (parsed.success) return [];
  const errors = toFieldErrors(parsed.error.issues, draft);
  if (!names) return errors;
  return errors.filter((error) => {
    const path = error.path.join(".");
    return names.some((name) => path === name || path.startsWith(`${name}.`));
  });
}
