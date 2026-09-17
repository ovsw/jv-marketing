import { describe, expect, expectTypeOf, it } from "vitest";
import {
  currentAssessment,
  type DraftAnswersV1,
  type AssessmentSubmission,
} from "@phx/assessment";

describe("shared Assessment package", () => {
  it("supplies the PHX renderer with typed option IDs and branch rules", () => {
    const draft: DraftAnswersV1 = {
      mortgage_goal: "refinance",
      mortgage_type: "none",
    };
    expect(
      currentAssessment.questions.mortgage_goal.options[draft.mortgage_goal!],
    ).toBe("I Want to  Refinance my Home");
    expect(currentAssessment.visibleQuestionIds(draft)).not.toContain(
      "mortgage_rate",
    );
    expect(
      currentAssessment.getQuestion("property_state", draft),
    ).not.toHaveProperty("options.not_decided");
    expectTypeOf<AssessmentSubmission["reportedScore"]>().toEqualTypeOf<
      number | null
    >();
    expectTypeOf<DraftAnswersV1["mortgage_goal"]>().toEqualTypeOf<
      "purchase" | "refinance" | undefined
    >();
  });
});
