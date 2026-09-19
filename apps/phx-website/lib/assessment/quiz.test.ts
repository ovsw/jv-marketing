import { describe, expect, it } from "vitest";
import {
  contactStepFieldNames,
  emptyQuizValues,
  expectedQuizSteps,
  firstUnansweredStep,
  hasAnswer,
  quizSteps,
  stepFieldNames,
  toDraft,
  type QuizValues,
} from "@/lib/assessment/quiz";

function values(overrides: Partial<QuizValues> = {}): QuizValues {
  return { ...emptyQuizValues(), ...overrides };
}

describe("quizSteps", () => {
  it("lists the visible questions for the path and ends with the contact step", () => {
    expect(quizSteps({})).toEqual(["mortgage_goal", "contact"]);
    const purchase = quizSteps({ mortgage_goal: "purchase" });
    expect(purchase[0]).toBe("mortgage_goal");
    expect(purchase.at(-1)).toBe("contact");
    expect(purchase).not.toContain("selling_home");
    expect(
      quizSteps({ mortgage_goal: "purchase", owns_home: "yes" }),
    ).toContain("selling_home");
  });
});

describe("expectedQuizSteps", () => {
  it("previews the purchase path until a path is chosen", () => {
    expect(expectedQuizSteps({})).toEqual(quizSteps({ mortgage_goal: "purchase" }));
    expect(expectedQuizSteps({ mortgage_goal: "" })).toEqual(
      quizSteps({ mortgage_goal: "purchase" }),
    );
  });

  it("follows the chosen path", () => {
    const refinance = { mortgage_goal: "refinance" };
    expect(expectedQuizSteps(refinance)).toEqual(quizSteps(refinance));
  });
});

describe("hasAnswer", () => {
  it("treats blank, undefined, and empty lists as unanswered", () => {
    expect(hasAnswer(undefined)).toBe(false);
    expect(hasAnswer("")).toBe(false);
    expect(hasAnswer("   ")).toBe(false);
    expect(hasAnswer([])).toBe(false);
    expect(hasAnswer({ month: "", year: "" })).toBe(false);
    expect(hasAnswer("purchase")).toBe(true);
    expect(hasAnswer(["cash_out"])).toBe(true);
    expect(hasAnswer({ month: "6", year: "" })).toBe(true);
  });
});

describe("firstUnansweredStep", () => {
  it("returns the first visible question with no answer", () => {
    expect(firstUnansweredStep({})).toBe("mortgage_goal");
    expect(
      firstUnansweredStep({ mortgage_goal: "purchase", property_state: "AZ" }),
    ).toBe("purchase_city");
  });

  it("returns the contact step when every visible question is answered", () => {
    const answers: Record<string, unknown> = { mortgage_goal: "refinance" };
    for (const id of quizSteps(answers)) {
      if (id !== "contact") answers[id] = "x";
    }
    expect(firstUnansweredStep(answers)).toBe("contact");
  });

  it("skips answers to questions that are no longer visible", () => {
    // A purchase answer stays in the draft after switching to refinance.
    expect(
      firstUnansweredStep({
        mortgage_goal: "refinance",
        purchase_city: "Phoenix",
        property_state: "AZ",
      }),
    ).toBe("refinance_goals");
  });
});

describe("stepFieldNames", () => {
  it("names the one question on a question step", () => {
    expect(stepFieldNames("credit_range")).toEqual(["answers.credit_range"]);
  });

  it("names every contact and consent field on the contact step", () => {
    expect(stepFieldNames("contact")).toEqual(contactStepFieldNames);
    expect(contactStepFieldNames).toContain("contact.email");
    expect(contactStepFieldNames).toContain("consent.channels");
  });
});

describe("toDraft", () => {
  it("drops a blank phone so the optional field validates", () => {
    const draft = toDraft(
      values({
        contact: { email: "a@b.co", firstName: "A", lastName: "B", phone: " " },
      }),
    );
    expect(draft.contact).toEqual({
      email: "a@b.co",
      firstName: "A",
      lastName: "B",
    });
  });

  it("omits blank contact fields so the package reports them as required", () => {
    expect(toDraft(values()).contact).toEqual({});
  });

  it("keeps a typed phone", () => {
    const draft = toDraft(
      values({
        contact: {
          email: "a@b.co",
          firstName: "A",
          lastName: "B",
          phone: "602-555-0100",
        },
      }),
    );
    expect(draft.contact.phone).toBe("602-555-0100");
  });

  it("turns a month and year into numbers and blanks into no answer", () => {
    expect(
      toDraft(values({ answers: { lease_end: { month: "6", year: "2027" } } }))
        .answers.lease_end,
    ).toEqual({ month: 6, year: 2027 });
    expect(
      toDraft(values({ answers: { lease_end: { month: "", year: "" } } }))
        .answers.lease_end,
    ).toBeUndefined();
    expect(
      toDraft(values({ answers: { lease_end: "no_fixed_end" } })).answers
        .lease_end,
    ).toBe("no_fixed_end");
  });

  it("turns blank text answers into no answer so the package reports required", () => {
    expect(
      toDraft(values({ answers: { monthly_rent: "" } })).answers.monthly_rent,
    ).toBeUndefined();
    expect(
      toDraft(values({ answers: { purchase_city: "Mesa" } })).answers
        .purchase_city,
    ).toBe("Mesa");
  });
});

describe("draft storage", () => {
  function memoryStorage(): Storage {
    const map = new Map<string, string>();
    return {
      get length() {
        return map.size;
      },
      clear: () => map.clear(),
      getItem: (key) => map.get(key) ?? null,
      key: (index) => [...map.keys()][index] ?? null,
      removeItem: (key) => void map.delete(key),
      setItem: (key, value) => void map.set(key, value),
    };
  }

  it("keys the draft by Assessment Version", async () => {
    const { draftStorageKey, loadDraft, saveDraft, clearDraft } = await import(
      "@/lib/assessment/quiz"
    );
    expect(draftStorageKey).toBe("phx-assessment-draft:v1");
    const storage = memoryStorage();
    const draft = values({ answers: { mortgage_goal: "purchase" } });
    saveDraft(storage, draft);
    expect(loadDraft(storage)).toEqual(draft);
    clearDraft(storage);
    expect(loadDraft(storage)).toBeNull();
  });

  it("ignores a draft it cannot read", async () => {
    const { draftStorageKey, loadDraft } = await import("@/lib/assessment/quiz");
    const storage = memoryStorage();
    storage.setItem(draftStorageKey, "{not json");
    expect(loadDraft(storage)).toBeNull();
    storage.setItem(draftStorageKey, JSON.stringify({ answers: {} }));
    expect(loadDraft(storage)).toBeNull();
  });

  it("drops contact and consent values of the wrong shape", async () => {
    const { draftStorageKey, loadDraft, toDraft } = await import("@/lib/assessment/quiz");
    const storage = memoryStorage();
    storage.setItem(
      draftStorageKey,
      JSON.stringify({
        answers: {},
        contact: { email: 42, firstName: "A", lastName: null, phone: ["x"] },
        consent: { channels: ["email", "fax", 7] },
      }),
    );
    const restored = loadDraft(storage);
    expect(restored?.contact).toEqual({
      email: "",
      firstName: "A",
      lastName: "",
      phone: "",
    });
    expect(restored?.consent.channels).toEqual(["email"]);
    expect(() => toDraft(restored!)).not.toThrow();
  });
});
