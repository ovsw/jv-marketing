import { z } from "zod";

// Version-local rules: once released, retain this module and its fixtures unchanged.
// The scoring policy is a draft for Jimmy's review, not a lending standard.
const yesNo = { yes: "Yes", no: "No" } as const;
const unknown = { unknown: "I don’t know" } as const;
const mortgageOptions = {
  conventional: "Conventional",
  va: "VA",
  fha: "FHA",
  usda: "USDA",
  none: "No current mortgage",
  unknown: "I am Unsure",
} as const;
const creditOptions = {
  at_least_720: "Fantastic (720+)",
  from_680_to_719: "Great (680-719)",
  from_640_to_679: "Average (640-679)",
  from_620_to_639: "Below Average (620-639)",
  from_580_to_619: "580–619",
  under_580: "Under 580",
  unknown: "I am Unsure",
} as const;
const stateOptions = {
  AL: "Alabama",
  AK: "Alaska",
  AZ: "Arizona",
  AR: "Arkansas",
  CA: "California",
  CO: "Colorado",
  CT: "Connecticut",
  DE: "Delaware",
  DC: "District of Columbia",
  FL: "Florida",
  GA: "Georgia",
  HI: "Hawaii",
  ID: "Idaho",
  IL: "Illinois",
  IN: "Indiana",
  IA: "Iowa",
  KS: "Kansas",
  KY: "Kentucky",
  LA: "Louisiana",
  ME: "Maine",
  MD: "Maryland",
  MA: "Massachusetts",
  MI: "Michigan",
  MN: "Minnesota",
  MS: "Mississippi",
  MO: "Missouri",
  MT: "Montana",
  NE: "Nebraska",
  NV: "Nevada",
  NH: "New Hampshire",
  NJ: "New Jersey",
  NM: "New Mexico",
  NY: "New York",
  NC: "North Carolina",
  ND: "North Dakota",
  OH: "Ohio",
  OK: "Oklahoma",
  OR: "Oregon",
  PA: "Pennsylvania",
  RI: "Rhode Island",
  SC: "South Carolina",
  SD: "South Dakota",
  TN: "Tennessee",
  TX: "Texas",
  UT: "Utah",
  VT: "Vermont",
  VA: "Virginia",
  WA: "Washington",
  WV: "West Virginia",
  WI: "Wisconsin",
  WY: "Wyoming",
  other: "Another location",
} as const;
function choice<const T extends Record<string, string>>(
  label: string,
  options: T,
) {
  return {
    label,
    kind: "single_choice" as const,
    required: true,
    options,
    schema: z.enum(
      Object.keys(options) as [
        Extract<keyof T, string>,
        ...Extract<keyof T, string>[],
      ],
    ),
  };
}
function field<S extends z.ZodType>(
  label: string,
  kind: "text" | "money" | "rate" | "month_year",
  schema: S,
) {
  return { label, kind, required: true, schema };
}

/** Blank is never zero. Validate grouping and precision before removing formatting. */
function decimal(kind: "money" | "rate") {
  return z.union([z.string(), z.number()]).transform((input, ctx) => {
    const raw = String(input).trim();
    const pattern =
      kind === "money"
        ? /^\$?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d{1,2})?$/
        : /^\d+(?:\.\d{1,3})?%?$/;
    const value = Number(raw.replace(/[$,%]/g, ""));
    if (
      !pattern.test(raw) ||
      !Number.isFinite(value) ||
      value < 0 ||
      (kind === "rate" ? value > 100 : value > Number.MAX_SAFE_INTEGER / 100)
    ) {
      ctx.addIssue({
        code: "custom",
        message:
          kind === "money"
            ? "Enter a nonnegative amount with at most two decimal places."
            : "Enter a rate from 0 to 100 with at most three decimal places.",
        params: { fieldCode: "invalid_number" },
      });
      return z.NEVER;
    }
    return value;
  });
}
export const moneySchemaV1 = decimal("money");
export const rateSchemaV1 = decimal("rate");
const leaseSchema = z.union([
  z.enum(["no_fixed_end", "unknown"]),
  z.strictObject({
    month: z.number().int().min(1).max(12),
    year: z.number().int().min(1900).max(9999),
  }),
]);
const referral = {
  family_friends: "Family/Friends",
  agent: "Real Estate Agent",
  builder: "Home Builder",
  returning: "I’m a Returning Customer",
  search: "Internet Search",
  youtube: "Youtube",
  online_ad: "Online Advertisement",
  tv_radio: "TV or Radio Ad",
  direct_mail: "Direct Mail",
  other: "Other",
} as const;
const upfrontOptions = {
  own_funds: "I plan to use my own funds",
  needs_confirmation:
    "I expect assistance or financing that needs confirmation",
  no_plan: "I do not have a plan yet",
  ...unknown,
} as const;
const reservesOptions = {
  three_or_more: "At least three months of mortgage payments",
  less_than_three:
    "Some savings, but less than three months of mortgage payments",
  none: "No savings would remain",
  ...unknown,
} as const;

export const questionsV1 = {
  mortgage_goal: choice("What would you like to do?", {
    purchase: "I Want to  Buy a Home",
    refinance: "I Want to  Refinance my Home",
  }),
  property_state: choice(
    "In which state is the property you want to buy or refinance?",
    { ...stateOptions, not_decided: "Not decided" },
  ),
  purchase_city: field(
    "In what city are you looking to have your new home?",
    "text",
    z.string().trim().min(1).max(200),
  ),
  purchase_budget: choice("What is your estimated new home’s budget?", {
    under_250k: "Under $250,000",
    from_250k_to_500k: "$250,000-$500,000",
    from_500k_to_750k: "$500,000-$750,000",
    over_750k: "Over $750,000",
    unknown: "Im Unsure",
  }),
  purchase_home_type: choice("What type of new home are you looking for?", {
    single_family: "Single-Family Home",
    new_construction: "New Construction",
    town_home: "Town Home",
    condo: "Condominium",
    manufactured: "Manufactured/Mobile",
    multi_family: "Multi-Family",
  }),
  purchase_occupancy: choice("How will you occupy your new home?", {
    primary: "Primary Residence",
    secondary: "Vacation/Secondary",
    investment: "Investment",
    other: "Other",
  }),
  purchase_timeline: choice(
    "How soon are you looking to purchase your new home?",
    {
      agreement_signed: "Now: I’ve Already Signed a Purchase Agreement",
      home_found: "Very Soon: I’ve Discovered My Dream Home",
      within_30_days: "30 days or Less",
      two_three_months: "2-3 Months",
      three_six_months: "3-6 Months",
      six_plus_months: "6 Months or More",
      unknown: "I am UnSure/Looking at My Options",
    },
  ),
  owns_home: choice("Do you presently own a home?", {
    yes: "I own a home",
    no: "No, I do not own a home",
    other: "Other living situation",
  }),
  selling_home: choice(
    "Will you purchase your new home by selling your current home?",
    yesNo,
  ),
  monthly_rent: {
    ...field(
      "As of now, what is your rent payment per month?",
      "money",
      z.union([moneySchemaV1, z.enum(["unknown", "not_applicable"])]),
    ),
    options: { ...unknown, not_applicable: "Does not apply" },
  },
  lease_end: {
    ...field("When does your lease end?", "month_year", leaseSchema),
    options: { no_fixed_end: "No fixed end date", ...unknown },
  },
  bought_before: choice("Have you ever bought a home before?", yesNo),
  credit_range: choice(
    "How would you estimate your present credit score?",
    creditOptions,
  ),
  late_payments: choice(
    "In the past 12 months, have any of your credit payments been 30 days or more past due?",
    { ...yesNo, ...unknown },
  ),
  marital_status: choice("What is your current marital status?", {
    married: "Married",
    unmarried: "Unmarried",
    separated: "Legally Separated",
    other: "Other",
  }),
  purchase_income: choice("What is your annual income (before taxes)?", {
    under_49999: "Under $49,999",
    from_50k_to_74999: "$50,000-$74,999",
    from_75k_to_99k: "$75,000-$99,000",
    from_100k_to_199999: "$100,000-$199,999",
    over_200k: "Greater than $200,000",
    ...unknown,
  }),
  mortgage_type: choice("What type is your current mortgage?", mortgageOptions),
  bankruptcy: choice(
    "In the past 7 years, have you filed or declared bankruptcy?",
    { ...yesNo, ...unknown },
  ),
  purchase_source: choice("How did you find PHXHomeLoan?", referral),
  refinance_source: choice("How did you find PHXHomeLoan?", {
    ...referral,
    returning: "I’m a Returning Client",
  }),
  refinance_goals: (() => {
    const question = choice("What are your refinance goals?", {
      lower_payment_rate: "Decrease Loan Payment/Rate",
      change_term: "Reevaluate My Loan Term",
      cash_out: "Cash-Out Refinance",
      repay_debt: "Debt Repayment",
      other: "Other",
    });
    return {
      ...question,
      kind: "multiple_choice" as const,
      schema: question.schema
        .array()
        .min(1)
        .max(5)
        .refine(
          (v) => new Set(v).size === v.length,
          "Select each goal only once.",
        ),
    };
  })(),
  refinance_home_type: choice("What type of new home are you looking for?", {
    single_family: "Single-Family",
    new_construction: "New Construction",
    town_home: "Town Home",
    condo: "Condo",
    manufactured: "Manufactured",
    multi_family: "Multi-Family",
  }),
  refinance_occupancy: choice("How will you be utilizing your new home?", {
    primary: "Primary Residence",
    secondary: "Vacation/Secondary",
    investment: "Investment Property",
    other: "Other",
  }),
  mortgage_balance: {
    ...field(
      "How much do you currently owe on your home mortgage?",
      "money",
      z.union([moneySchemaV1, z.literal("unknown")]),
    ),
    options: unknown,
  },
  mortgage_rate: {
    ...field(
      "What is your current mortgage interest rate?",
      "rate",
      z.union([rateSchemaV1, z.literal("unknown")]),
    ),
    options: unknown,
  },
  refinance_income: choice("What is your annual income (before taxes)?", {
    under_49999: "Under $49,999",
    from_50k_to_74999: "$50,000-$74,999",
    from_75k_to_99k: "$75,000-$99,000",
    from_100k_to_149k: "$100,000-$149,000",
    from_150k_to_199999: "$150,000-$199,999",
    over_200k: "Greater than $200,000",
    ...unknown,
  }),
  purchase_upfront: choice(
    "How do you plan to cover your down payment, if needed, and closing costs?",
    upfrontOptions,
  ),
  refinance_upfront: choice(
    "How do you plan to cover any refinance costs?",
    upfrontOptions,
  ),
  purchase_reserves: choice(
    "After buying the home, how much savings do you expect to have left for unexpected costs?",
    reservesOptions,
  ),
  refinance_reserves: choice(
    "After refinancing, how much savings do you expect to have left for unexpected costs?",
    reservesOptions,
  ),
} as const;

export type QuestionIdV1 = keyof typeof questionsV1;
const refinanceStateQuestion = choice(
  "In which state is the property you want to refinance?",
  stateOptions,
);

/** Rendering and validation use the same options for the selected path. */
export function getQuestionV1(
  id: QuestionIdV1,
  draft: Readonly<Record<string, unknown>>,
) {
  return id === "property_state" && draft.mortgage_goal === "refinance"
    ? refinanceStateQuestion
    : questionsV1[id];
}

export type DraftAnswersV1 = {
  [K in QuestionIdV1]?: z.input<(typeof questionsV1)[K]["schema"]>;
};
export type AnswersV1 = {
  [K in QuestionIdV1]?: z.output<(typeof questionsV1)[K]["schema"]>;
} & {
  mortgage_goal: "purchase" | "refinance";
};

/** The draft remains owned by the form. This returns a new list without erasing it. */
export function visibleQuestionIdsV1(
  draft: Readonly<Record<string, unknown>>,
): QuestionIdV1[] {
  if (draft.mortgage_goal === "purchase") {
    const rent = questionsV1.monthly_rent.schema.safeParse(draft.monthly_rent);
    return [
      "mortgage_goal",
      "property_state",
      "purchase_city",
      "purchase_budget",
      "purchase_home_type",
      "purchase_occupancy",
      "purchase_timeline",
      "owns_home",
      ...(draft.owns_home === "yes" ? ["selling_home" as const] : []),
      "monthly_rent",
      ...(rent.success &&
      (rent.data === "unknown" ||
        (typeof rent.data === "number" && rent.data > 0))
        ? ["lease_end" as const]
        : []),
      "bought_before",
      "credit_range",
      "late_payments",
      "marital_status",
      "purchase_income",
      "mortgage_type",
      "bankruptcy",
      "purchase_upfront",
      "purchase_reserves",
      "purchase_source",
    ];
  }
  if (draft.mortgage_goal === "refinance") {
    return [
      "mortgage_goal",
      "property_state",
      "refinance_goals",
      "refinance_home_type",
      "refinance_occupancy",
      "mortgage_type",
      ...(draft.mortgage_type && draft.mortgage_type !== "none"
        ? ["mortgage_balance" as const, "mortgage_rate" as const]
        : []),
      "credit_range",
      "late_payments",
      "marital_status",
      "refinance_income",
      "bankruptcy",
      "refinance_upfront",
      "refinance_reserves",
      "refinance_source",
    ];
  }
  return ["mortgage_goal"];
}

export function relevantAnswersV1(
  draft: Readonly<Record<string, unknown>>,
): Record<string, unknown> {
  return Object.fromEntries(
    visibleQuestionIdsV1(draft)
      .filter((id) => Object.hasOwn(draft, id))
      .map((id) => [id, draft[id]]),
  );
}

export const answersSchemaV1 = z
  .record(z.string(), z.unknown())
  .transform((draft, ctx): AnswersV1 => {
    const result: Record<string, unknown> = {};
    for (const id of Object.keys(draft)) {
      if (!Object.hasOwn(questionsV1, id)) {
        ctx.addIssue({
          code: "custom",
          path: [id],
          message: "Unknown question.",
          params: { fieldCode: "unknown_question" },
        });
      }
    }
    for (const id of visibleQuestionIdsV1(draft)) {
      const question = getQuestionV1(id, draft);
      const parsed = question.schema.safeParse(draft[id]);
      if (!parsed.success) {
        ctx.addIssue({
          code: "custom",
          path: [id],
          message: parsed.error.issues[0].message,
          params: {
            fieldCode:
              draft[id] === undefined || draft[id] === ""
                ? "required"
                : question.kind === "single_choice" ||
                    question.kind === "multiple_choice"
                  ? "invalid_option"
                  : "invalid_answer",
          },
        });
      } else {
        result[id] = parsed.data;
      }
    }
    // All visible keys have been parsed above. Zod discards this output on any issue.
    return result as AnswersV1;
  });

export function leaseWarningsV1(
  draft: Readonly<Record<string, unknown>>,
  today: { year: number; month: number },
) {
  if (!visibleQuestionIdsV1(draft).includes("lease_end")) return [];
  const parsed = leaseSchema.safeParse(draft.lease_end);
  if (!parsed.success || typeof parsed.data === "string") return [];
  return parsed.data.year * 12 + parsed.data.month <
    today.year * 12 + today.month
    ? [
        {
          path: ["answers", "lease_end"],
          code: "past_lease_end",
          message: "This lease end date is in the past. You can continue.",
        },
      ]
    : [];
}

export const actionStepsV1 = {
  credit_preparation: {
    label: "Review your credit",
    text: "Review your credit reports for errors and discuss steps to improve your credit with the team before deciding when to apply.",
  },
  payment_review: {
    label: "Review recent late payments",
    text: "Confirm which payments were late and when. The team can help you understand what to check before applying.",
  },
  bankruptcy_review: {
    label: "Discuss your bankruptcy history",
    text: "Discuss the type and dates of your bankruptcy with the team. This quiz cannot decide which mortgage options may be available.",
  },
  confirm_information: {
    label: "Confirm missing information",
    text: "Check the answers marked unknown so you can get a more useful readiness result. You can still discuss your situation with the team.",
  },
  upfront_plan: {
    label: "Plan for upfront costs",
    text: "List your available funds and discuss the costs for your mortgage goal. Confirm any assistance or financed costs before relying on them.",
  },
  build_reserves: {
    label: "Plan a savings buffer",
    text: "Review what savings would remain after the transaction. Consider how you would cover unexpected costs and work toward a buffer of at least three months of mortgage payments.",
  },
  clarify_timing: {
    label: "Choose a purchase window",
    text: "Choose an approximate move date so you can plan when to discuss an application.",
  },
  plan_later: {
    label: "Prepare for your later purchase",
    text: "Use the time before your planned move to review your budget and savings. Discuss application timing with the team as your purchase gets closer.",
  },
  mortgage_review: {
    label: "Discuss your mortgage goal",
    text: "Discuss your goals and current situation with the team. With no current mortgage, this quiz cannot establish whether refinance is the right path.",
  },
  purchase_next_step: {
    label: "Confirm your purchase next step",
    text: "Based on what you shared, you may be ready to discuss your purchase. Review a comfortable monthly budget and confirm your options with the team.",
  },
  refinance_next_step: {
    label: "Confirm your refinance next step",
    text: "Based on what you shared, you may be ready to discuss refinancing. Compare costs, expected benefits, and your goals with the team before deciding.",
  },
} as const;
export type ActionStepIdV1 = keyof typeof actionStepsV1;
export const actionPlanIdsV1 = [
  "credit_preparation",
  "information_needed",
  "team_review",
  "financial_preparation",
  "purchase_later",
  "purchase_discussion",
  "refinance_discussion",
] as const;
export type ActionPlanIdV1 = (typeof actionPlanIdsV1)[number];
export const actionPlansV1: Record<
  ActionPlanIdV1,
  { label: string; description: string }
> = {
  credit_preparation: {
    label: "Start with credit preparation",
    description:
      "Your answers suggest that reviewing your credit is a useful first step.",
  },
  information_needed: {
    label: "More information needed",
    description:
      "Confirm the unknown details shown below to plan your next step.",
  },
  team_review: {
    label: "Review your situation with the team",
    description:
      "Some details need an individual discussion before deciding how to proceed.",
  },
  financial_preparation: {
    label: "Prepare your finances",
    description:
      "Review the preparation steps below before deciding when to apply.",
  },
  purchase_later: {
    label: "Plan for a later purchase",
    description:
      "Use your planned purchase window to prepare and choose when to discuss an application.",
  },
  purchase_discussion: {
    label: "Discuss your purchase next step",
    description:
      "Based on what you shared, you may be ready for a purchase discussion.",
  },
  refinance_discussion: {
    label: "Discuss your refinance next step",
    description:
      "Based on what you shared, you may be ready to review refinance options.",
  },
};
const creditPoints = {
  under_580: 0,
  from_580_to_619: 10,
  from_620_to_639: 20,
  from_640_to_679: 30,
  from_680_to_719: 35,
  at_least_720: 40,
} as const;
const upfrontPoints = {
  own_funds: 15,
  needs_confirmation: 5,
  no_plan: 0,
} as const;
const reservePoints = {
  three_or_more: 15,
  less_than_three: 5,
  none: 0,
} as const;

export type AssessmentResultV1 = {
  readinessScore: number | null;
  band: "information_needed" | "preparation" | "developing" | "stronger";
  actionPlan: ActionPlanIdV1;
  steps: ActionStepIdV1[];
  missingInformation: QuestionIdV1[];
};

/** Product heuristic, not an underwriting model. Every call validates and ignores hidden answers. */
export function scoreV1(input: unknown): AssessmentResultV1 {
  const a = answersSchemaV1.parse(input);
  const purchase = a.mortgage_goal === "purchase";
  const costsId = purchase ? "purchase_upfront" : "refinance_upfront";
  const reservesId = purchase ? "purchase_reserves" : "refinance_reserves";
  const costs = a[costsId];
  const reserves = a[reservesId];
  const missingInformation = (
    ["credit_range", "late_payments", costsId, reservesId] as const
  ).filter((id) => a[id] === "unknown");
  const credit = a.credit_range;
  const payments = a.late_payments;
  const readinessScore =
    !credit ||
    credit === "unknown" ||
    !payments ||
    payments === "unknown" ||
    !costs ||
    costs === "unknown" ||
    !reserves ||
    reserves === "unknown"
      ? null
      : creditPoints[credit] +
        (payments === "no" ? 30 : 0) +
        upfrontPoints[costs] +
        reservePoints[reserves];
  const steps: ActionStepIdV1[] = [];
  if (
    credit === "under_580" ||
    credit === "from_580_to_619" ||
    credit === "from_620_to_639"
  )
    steps.push("credit_preparation");
  if (payments === "yes") steps.push("payment_review");
  if (a.bankruptcy === "yes" || a.bankruptcy === "unknown")
    steps.push("bankruptcy_review");
  if (missingInformation.length) steps.push("confirm_information");
  if (costs === "no_plan" || costs === "needs_confirmation")
    steps.push("upfront_plan");
  if (reserves === "none" || reserves === "less_than_three")
    steps.push("build_reserves");
  const later =
    purchase &&
    (a.purchase_timeline === "three_six_months" ||
      a.purchase_timeline === "six_plus_months");
  if (purchase && a.purchase_timeline === "unknown")
    steps.push("clarify_timing");
  if (later) steps.push("plan_later");
  const noMortgage = !purchase && a.mortgage_type === "none";
  if (noMortgage) steps.push("mortgage_review");
  const review = payments === "yes" || a.bankruptcy !== "no" || noMortgage;
  let actionPlan: ActionPlanIdV1;
  if (credit === "under_580") actionPlan = "credit_preparation";
  else if (readinessScore === null) actionPlan = "information_needed";
  else if (review) actionPlan = "team_review";
  else if (
    readinessScore < 80 ||
    costs !== "own_funds" ||
    reserves !== "three_or_more"
  )
    actionPlan = "financial_preparation";
  else if (later) actionPlan = "purchase_later";
  else if (purchase && a.purchase_timeline === "unknown")
    actionPlan = "information_needed";
  else actionPlan = purchase ? "purchase_discussion" : "refinance_discussion";
  if (actionPlan === "purchase_discussion") steps.push("purchase_next_step");
  if (actionPlan === "refinance_discussion") steps.push("refinance_next_step");
  return {
    readinessScore,
    band:
      readinessScore === null
        ? "information_needed"
        : readinessScore < 50
          ? "preparation"
          : readinessScore < 80
            ? "developing"
            : "stronger",
    actionPlan,
    steps,
    missingInformation,
  };
}

export const assessmentV1 = {
  version: "1",
  reviewStatus: "pending_jimmy_review",
  questions: questionsV1,
  visibleQuestionIds: visibleQuestionIdsV1,
  getQuestion: getQuestionV1,
  relevantAnswers: relevantAnswersV1,
  answersSchema: answersSchemaV1,
  score: scoreV1,
  actionSteps: actionStepsV1,
  actionPlans: actionPlansV1,
  scorePolicy: {
    creditPoints,
    paymentPoints: { no: 30, yes: 0 },
    upfrontPoints,
    reservePoints,
    bands: { preparationBelow: 50, strongerAtLeast: 80 },
  },
} as const;
