import { describe, expect, it } from "vitest";
import purchase from "./fixtures/v1-purchase.json";
import refinance from "./fixtures/v1-refinance.json";
import {
  answersSchemaV1,
  visibleQuestionIdsV1,
  relevantAnswersV1,
  scoreV1,
  moneySchemaV1,
  rateSchemaV1,
  leaseWarningsV1,
  questionsV1,
  getQuestionV1,
} from "../src/versions/v1";
import { parseSubmission } from "../src/contract";

function expectField(input: unknown, path: (string | number)[], code: string) {
  const result = parseSubmission(input);
  expect(result.success).toBe(false);
  if (!result.success)
    expect(result.errors).toEqual(
      expect.arrayContaining([expect.objectContaining({ path, code })]),
    );
}

describe("version one contract", () => {
  it.each([purchase, refinance])(
    "accepts the released fixture and produces its recorded result",
    (fixture) => {
      expect(parseSubmission(fixture)).toEqual({
        success: true,
        data: fixture,
      });
      expect(scoreV1(fixture.answers)).toEqual({
        readinessScore: 100,
        band: "stronger",
        actionPlan: fixture.actionPlan,
        steps: [
          fixture.answers.mortgage_goal === "purchase"
            ? "purchase_next_step"
            : "refinance_next_step",
        ],
        missingInformation: [],
      });
    },
  );
  it("rejects unknown versions, questions, options, and empty multiselects with stable paths", () => {
    expectField(
      { ...purchase, assessmentVersion: "future" },
      ["assessmentVersion"],
      "unsupported_version",
    );
    expectField(
      { ...purchase, answers: { ...purchase.answers, invented: true } },
      ["answers", "invented"],
      "unknown_question",
    );
    expectField(
      { ...purchase, answers: { ...purchase.answers, credit_range: "good" } },
      ["answers", "credit_range"],
      "invalid_option",
    );
    expectField(
      { ...refinance, answers: { ...refinance.answers, refinance_goals: [] } },
      ["answers", "refinance_goals"],
      "invalid_option",
    );
  });
  it.each(["email", "firstName", "lastName"])(
    "requires contact %s",
    (field) => {
      const contact: Record<string, unknown> = { ...purchase.contact };
      delete contact[field];
      expectField({ ...purchase, contact }, ["contact", field], "required");
    },
  );
  it("requires a nonblank phone for SMS but accepts email-only or no marketing consent without it", () => {
    expectField(
      { ...purchase, consent: { ...purchase.consent, channels: ["sms"] } },
      ["contact", "phone"],
      "sms_requires_phone",
    );
    expect(
      parseSubmission({
        ...purchase,
        contact: { ...purchase.contact, phone: " " },
        consent: { ...purchase.consent, channels: ["sms"] },
      }).success,
    ).toBe(false);
    expect(
      parseSubmission({
        ...purchase,
        contact: { ...purchase.contact, phone: "602-555-0100" },
        consent: { ...purchase.consent, channels: ["sms"] },
      }).success,
    ).toBe(true);
    expect(
      parseSubmission({
        ...purchase,
        consent: { ...purchase.consent, channels: [] },
      }).success,
    ).toBe(true);
  });
  it("rejects malformed and extra identity fields rather than trusting caller metadata in the body", () => {
    expect(parseSubmission(null).success).toBe(false);
    expectField(
      { ...purchase, brand: "another_brand" },
      ["brand"],
      "unknown_field",
    );
    expectField(
      { ...purchase, consent: { ...purchase.consent, environment: "live" } },
      ["consent", "environment"],
      "unknown_field",
    );
    expect(
      parseSubmission({
        ...purchase,
        consent: { ...purchase.consent, timestamp: "yesterday" },
      }).success,
    ).toBe(false);
    expect(
      parseSubmission({
        ...purchase,
        consent: { ...purchase.consent, channels: ["email", "email"] },
      }).success,
    ).toBe(false);
  });
  it("does not accept a different reported score or Action Plan", () => {
    expectField(
      { ...purchase, reportedScore: 0 },
      ["reportedScore"],
      "result_mismatch",
    );
    expectField(
      { ...purchase, actionPlan: "team_review" },
      ["actionPlan"],
      "result_mismatch",
    );
  });
});

describe("paths and retained draft answers", () => {
  it("requires selling only for owners, and neither selling answer skips rent", () => {
    const owner = { ...purchase.answers, owns_home: "yes" };
    expect(answersSchemaV1.safeParse(owner).success).toBe(false);
    for (const selling_home of ["yes", "no"]) {
      expect(
        answersSchemaV1.safeParse({ ...owner, selling_home }).success,
      ).toBe(true);
      expect(visibleQuestionIdsV1({ ...owner, selling_home })).toContain(
        "monthly_rent",
      );
    }
    expect(
      answersSchemaV1.safeParse({
        ...purchase.answers,
        selling_home: "invalid hidden value",
      }).success,
    ).toBe(true);
  });
  it.each([0, "0", "not_applicable"])(
    "skips lease for rent %s",
    (monthly_rent) => {
      const a = {
        ...purchase.answers,
        monthly_rent,
        lease_end: "invalid hidden value",
      };
      expect(visibleQuestionIdsV1(a)).not.toContain("lease_end");
      expect(answersSchemaV1.parse(a)).not.toHaveProperty("lease_end");
      expect(visibleQuestionIdsV1(a)).toEqual(
        expect.arrayContaining(["bought_before", "mortgage_type"]),
      );
    },
  );
  it.each([1, "$2,000.50", "unknown"])(
    "requires lease for rent %s",
    (monthly_rent) => {
      const a = { ...purchase.answers, monthly_rent, lease_end: undefined };
      expect(answersSchemaV1.safeParse(a).success).toBe(false);
      expect(
        answersSchemaV1.safeParse({ ...a, lease_end: "no_fixed_end" }).success,
      ).toBe(true);
      expect(
        answersSchemaV1.safeParse({ ...a, lease_end: "unknown" }).success,
      ).toBe(true);
    },
  );
  it("skips refinance balance/rate without a mortgage and permits completion for team follow-up", () => {
    const a = {
      ...refinance.answers,
      mortgage_type: "none",
      mortgage_balance: "bad",
      mortgage_rate: "bad",
    };
    expect(answersSchemaV1.parse(a)).not.toHaveProperty("mortgage_balance");
    expect(scoreV1(a).actionPlan).toBe("team_review");
    expect(scoreV1(a).steps).toContain("mortgage_review");
  });
  it("accepts all refinance goals together and unknown balance/rate, without goal-specific skips", () => {
    const a = {
      ...refinance.answers,
      mortgage_balance: "unknown",
      mortgage_rate: "unknown",
      refinance_goals: Object.keys(questionsV1.refinance_goals.options),
    };
    expect(answersSchemaV1.safeParse(a).success).toBe(true);
    expect(visibleQuestionIdsV1(a)).toEqual(
      visibleQuestionIdsV1(refinance.answers),
    );
    expect(visibleQuestionIdsV1(a).indexOf("mortgage_type")).toBeLessThan(
      visibleQuestionIdsV1(a).indexOf("mortgage_rate"),
    );
    expect(
      answersSchemaV1.safeParse({ ...a, refinance_goals: ["other", "other"] })
        .success,
    ).toBe(false);
  });
  it("retains both paths in the draft but submits only the final path", () => {
    const draft = { ...purchase.answers, ...refinance.answers };
    const original = structuredClone(draft);
    const refi = relevantAnswersV1(draft);
    expect(refi).not.toHaveProperty("purchase_income");
    expect(refi.refinance_income).toBe("from_100k_to_149k");
    const buy = relevantAnswersV1({ ...draft, mortgage_goal: "purchase" });
    expect(buy.purchase_income).toBe("from_75k_to_99k");
    expect(buy).not.toHaveProperty("refinance_income");
    expect(draft).toEqual(original);
    expect(
      scoreV1({
        ...purchase.answers,
        refinance_reserves: "none",
        refinance_upfront: "no_plan",
      }),
    ).toEqual(scoreV1(purchase.answers));
  });
  it("accepts an undecided purchase state but requires the refinance property location", () => {
    expect(getQuestionV1("property_state", purchase.answers)).toHaveProperty(
      "options.not_decided",
    );
    expect(
      getQuestionV1("property_state", refinance.answers),
    ).not.toHaveProperty("options.not_decided");

    expect(
      answersSchemaV1.safeParse({
        ...purchase.answers,
        property_state: "not_decided",
      }).success,
    ).toBe(true);
    expect(
      answersSchemaV1.safeParse({
        ...refinance.answers,
        property_state: "not_decided",
      }).success,
    ).toBe(false);
  });
});

describe("numbers and lease dates", () => {
  it.each([
    ["$2,000.50", 2000.5],
    ["0", 0],
    [0, 0],
    ["123.45", 123.45],
  ])("parses money %s without losing decimals", (input, expected) => {
    expect(moneySchemaV1.parse(input)).toBe(expected);
  });
  it.each([
    "",
    " ",
    "-1",
    -1,
    "2,00",
    "1.234",
    "1e3",
    Infinity,
    null,
    "abc",
    "9007199254740992",
  ])("rejects money %s", (input) => {
    expect(moneySchemaV1.safeParse(input).success).toBe(false);
  });
  it.each([
    ["6.125%", 6.125],
    ["6.123", 6.123],
    [0, 0],
    [100, 100],
  ])("parses rate %s without an increment rule", (input, expected) => {
    expect(rateSchemaV1.parse(input)).toBe(expected);
  });
  it.each(["", "6.1234", "100.001", "-0.1", "6,125%"])(
    "rejects invalid rate %s",
    (input) => {
      expect(rateSchemaV1.safeParse(input).success).toBe(false);
    },
  );
  it("allows past lease dates with a warning and rejects invalid dates", () => {
    const a = { ...purchase.answers, lease_end: { month: 1, year: 1900 } };
    expect(answersSchemaV1.safeParse(a).success).toBe(true);
    expect(leaseWarningsV1(a, { month: 9, year: 2026 })).toEqual([
      expect.objectContaining({ code: "past_lease_end" }),
    ]);
    expect(
      leaseWarningsV1({ ...a, monthly_rent: 0 }, { month: 9, year: 2026 }),
    ).toEqual([]);
    expect(
      leaseWarningsV1(
        { ...a, lease_end: { month: 9, year: 2026 } },
        { month: 9, year: 2026 },
      ),
    ).toEqual([]);
    for (const lease_end of [
      { month: 0, year: 2026 },
      { month: 13, year: 2026 },
      { month: 1, year: 1899 },
      { month: 1, year: 10000 },
    ]) {
      expect(answersSchemaV1.safeParse({ ...a, lease_end }).success).toBe(
        false,
      );
    }
  });
});

describe("provisional readiness policy", () => {
  it.each([
    ["under_580", 60],
    ["from_580_to_619", 70],
    ["from_620_to_639", 80],
    ["from_640_to_679", 90],
    ["from_680_to_719", 95],
    ["at_least_720", 100],
  ])("scores credit %s deterministically", (credit_range, expected) => {
    const input = { ...purchase.answers, credit_range };
    expect(scoreV1(input).readinessScore).toBe(expected);
    expect(scoreV1(input)).toEqual(scoreV1(input));
  });
  it("keeps a credit-first plan and all other known concerns even when the total is unavailable", () => {
    const result = scoreV1({
      ...purchase.answers,
      credit_range: "under_580",
      purchase_upfront: "unknown",
      purchase_reserves: "none",
      late_payments: "yes",
    });
    expect(result).toEqual({
      readinessScore: null,
      band: "information_needed",
      actionPlan: "credit_preparation",
      steps: [
        "credit_preparation",
        "payment_review",
        "confirm_information",
        "build_reserves",
      ],
      missingInformation: ["purchase_upfront"],
    });
  });
  it.each([
    "credit_range",
    "late_payments",
    "purchase_upfront",
    "purchase_reserves",
  ])(
    "withholds the total for unknown %s but accepts the submission",
    (field) => {
      const answers = { ...purchase.answers, [field]: "unknown" };
      expect(scoreV1(answers).readinessScore).toBeNull();
      expect(
        parseSubmission({
          ...purchase,
          answers,
          reportedScore: null,
          actionPlan: "information_needed",
        }).success,
      ).toBe(true);
    },
  );
  it("uses timing only for guidance", () => {
    for (const purchase_timeline of ["three_six_months", "six_plus_months"]) {
      const result = scoreV1({ ...purchase.answers, purchase_timeline });
      expect(result.readinessScore).toBe(100);
      expect(result.actionPlan).toBe("purchase_later");
      expect(result.steps).toEqual(["plan_later"]);
    }
    expect(
      scoreV1({ ...purchase.answers, purchase_timeline: "unknown" })
        .readinessScore,
    ).toBe(100);
  });
  it("does not score income, marital status, source, location, or loan amount", () => {
    expect(
      scoreV1({
        ...purchase.answers,
        purchase_income: "under_49999",
        marital_status: "other",
        property_state: "other",
        purchase_budget: "under_250k",
        purchase_source: "other",
      }),
    ).toEqual(scoreV1(purchase.answers));
    expect(scoreV1({ ...refinance.answers, mortgage_balance: 0 })).toEqual(
      scoreV1(refinance.answers),
    );
  });
  it.each(["yes", "unknown"])(
    "uses bankruptcy %s for review, not an invented numerical penalty",
    (bankruptcy) => {
      const result = scoreV1({ ...purchase.answers, bankruptcy });
      expect(result.readinessScore).toBe(100);
      expect(result.actionPlan).toBe("team_review");
      expect(result.steps).not.toContain("purchase_next_step");
    },
  );
  it("does not recommend proceeding when assistance is unconfirmed, reserves are low, or payments were late", () => {
    for (const fields of [
      { purchase_upfront: "needs_confirmation" },
      { purchase_reserves: "less_than_three" },
      { late_payments: "yes" },
    ]) {
      expect(scoreV1({ ...purchase.answers, ...fields }).actionPlan).not.toBe(
        "purchase_discussion",
      );
    }
  });
  it("shows every known preparation step at zero", () => {
    const result = scoreV1({
      ...purchase.answers,
      credit_range: "under_580",
      late_payments: "yes",
      purchase_upfront: "no_plan",
      purchase_reserves: "none",
    });
    expect(result.readinessScore).toBe(0);
    expect(result.actionPlan).toBe("credit_preparation");
    expect(result.steps).toEqual([
      "credit_preparation",
      "payment_review",
      "upfront_plan",
      "build_reserves",
    ]);
  });
});
