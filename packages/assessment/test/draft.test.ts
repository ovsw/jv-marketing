import { describe, expect, it } from "vitest";
import purchase from "./fixtures/v1-purchase.json";
import { validateDraft, type AssessmentDraft } from "../src/contract";

const complete: AssessmentDraft = {
  answers: purchase.answers,
  contact: purchase.contact,
  consent: { channels: purchase.consent.channels },
};

function codes(errors: { path: (string | number)[]; code: string }[]) {
  return errors.map((e) => `${e.path.join(".")}:${e.code}`);
}

describe("validateDraft", () => {
  it("returns no errors for a complete draft", () => {
    expect(validateDraft(complete)).toEqual([]);
  });

  it("reports only the named fields, so one step can be checked at a time", () => {
    const draft: AssessmentDraft = {
      answers: { mortgage_goal: "purchase" },
      contact: {},
      consent: { channels: [] },
    };
    expect(codes(validateDraft(draft, ["answers.mortgage_goal"]))).toEqual([]);
    expect(codes(validateDraft(draft, ["answers.credit_range"]))).toEqual([
      "answers.credit_range:required",
    ]);
  });

  it("uses the package field codes for answers, contact, and consent", () => {
    const draft: AssessmentDraft = {
      answers: { ...purchase.answers, credit_range: "good" },
      contact: { ...purchase.contact, email: "not-an-email" },
      consent: { channels: ["sms", "sms"] },
    };
    const all = codes(validateDraft(draft));
    expect(all).toContain("answers.credit_range:invalid_option");
    expect(all).toContain("contact.email:invalid_value");
    expect(all).toContain("consent.channels:invalid_value");
  });

  it("requires a phone when SMS consent is chosen", () => {
    const draft: AssessmentDraft = {
      ...complete,
      contact: { ...purchase.contact, phone: undefined },
      consent: { channels: ["sms"] },
    };
    expect(codes(validateDraft(draft, ["contact.phone"]))).toEqual([
      "contact.phone:sms_requires_phone",
    ]);
    expect(codes(validateDraft(draft, ["consent.channels"]))).toEqual([]);
  });

  it("ignores answers to questions hidden by the current path", () => {
    const draft: AssessmentDraft = {
      ...complete,
      answers: { ...purchase.answers, refinance_goals: [] },
    };
    expect(validateDraft(draft)).toEqual([]);
  });

  it("reports every visible unanswered question when no names are given", () => {
    const draft: AssessmentDraft = {
      answers: { mortgage_goal: "refinance" },
      contact: {},
      consent: { channels: [] },
    };
    const all = codes(validateDraft(draft));
    expect(all).toContain("answers.refinance_goals:required");
    expect(all).toContain("contact.email:required");
    expect(all).not.toContain("answers.purchase_timeline:required");
  });
});
