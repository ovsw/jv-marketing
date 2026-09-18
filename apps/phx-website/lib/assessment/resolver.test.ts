import { describe, expect, it } from "vitest";
import type { AssessmentDraft } from "@phx/assessment";
import { assessmentDraftResolver } from "@/lib/assessment/resolver";

const draft: AssessmentDraft = {
  answers: { mortgage_goal: "purchase", credit_range: "good" },
  contact: { email: "vet@example.com" },
  consent: { channels: [] },
};

async function resolve(names?: string[]) {
  return assessmentDraftResolver(draft, undefined, {
    fields: {},
    names: names as never,
    shouldUseNativeValidation: false,
  });
}

describe("assessmentDraftResolver", () => {
  it("passes the values through when the named step is valid", async () => {
    expect(await resolve(["answers.mortgage_goal"])).toEqual({
      values: draft,
      errors: {},
    });
  });

  it("nests errors by path and keeps the package field code as the type", async () => {
    const result = await resolve(["answers.credit_range", "contact.firstName"]);
    expect(result.values).toEqual({});
    expect(result.errors).toEqual({
      answers: {
        credit_range: { type: "invalid_option", message: expect.any(String) },
      },
      contact: {
        firstName: { type: "required", message: expect.any(String) },
      },
    });
  });

  it("checks the whole draft when no names are given", async () => {
    const result = await resolve();
    expect(result.errors).toHaveProperty("answers.purchase_timeline");
    expect(result.errors).toHaveProperty("contact.lastName");
  });
});
