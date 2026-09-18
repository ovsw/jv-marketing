import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import type { AssessmentSubmissionInput } from "@phx/assessment";
import AssessmentQuizClient, {
  quizCopy,
} from "@/components/blocks/assessment-quiz-client";
import type { AssessmentSubmitResult } from "@/lib/assessment/submit";
import {
  draftStorageKey,
  emptyQuizValues,
  type QuizValues,
} from "@/lib/assessment/quiz";

const promiseText = "Jimmy's team may contact me by the channels I check.";

const purchaseAnswers: QuizValues["answers"] = {
  mortgage_goal: "purchase",
  property_state: "AZ",
  purchase_city: "Mesa",
  purchase_budget: "from_250k_to_500k",
  purchase_home_type: "single_family",
  purchase_occupancy: "primary",
  purchase_timeline: "within_30_days",
  owns_home: "no",
  monthly_rent: "1500",
  lease_end: { month: "6", year: "2027" },
  bought_before: "no",
  credit_range: "at_least_720",
  late_payments: "no",
  marital_status: "married",
  purchase_income: "from_75k_to_99k",
  mortgage_type: "none",
  bankruptcy: "no",
  purchase_upfront: "own_funds",
  purchase_reserves: "three_or_more",
  purchase_source: "search",
};

function seedDraft(values: Partial<QuizValues>) {
  window.sessionStorage.setItem(
    draftStorageKey,
    JSON.stringify({ ...emptyQuizValues(), ...values }),
  );
}

function storedDraft(): QuizValues | null {
  const raw = window.sessionStorage.getItem(draftStorageKey);
  return raw ? (JSON.parse(raw) as QuizValues) : null;
}

function setup(submit = vi.fn<(s: AssessmentSubmissionInput) => Promise<AssessmentSubmitResult>>()) {
  const user = userEvent.setup();
  const view = render(
    <AssessmentQuizClient
      consultationHref="https://bookings.example.test/jimmy"
      promiseText={promiseText}
      submit={submit}
    />,
  );
  return { user, submit, ...view };
}

const heading = (name: RegExp | string) => screen.getByRole("heading", { name });
const next = () => screen.getByRole("button", { name: "Next" });
const back = () => screen.getByRole("button", { name: "Back" });

async function fillContact(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Email"), "vet@example.com");
  await user.type(screen.getByLabelText("First name"), "Pat");
  await user.type(screen.getByLabelText("Last name"), "Rivera");
}

beforeEach(() => {
  window.sessionStorage.clear();
});

describe("AssessmentQuizClient navigation", () => {
  it("opens on the first question with progress, Back disabled, and Next", () => {
    setup();
    expect(heading("What would you like to do?")).toBeInTheDocument();
    expect(screen.getByText("Question 1 of 1")).toBeInTheDocument();
    expect(back()).toBeDisabled();
    expect(next()).toBeEnabled();
  });

  it("advances on a pointer click of a single choice and moves focus to the new heading", async () => {
    const { user, container } = setup();
    await user.click(screen.getByLabelText(/Buy a Home/));

    const stateHeading = heading(/In which state/);
    expect(stateHeading).toHaveFocus();
    expect(screen.getByText("Question 2 of 19")).toBeInTheDocument();
    const live = container.querySelector('[aria-live="polite"]');
    expect(live).toHaveTextContent("Question 2 of 19");
    expect(live).toHaveTextContent(/In which state/);
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "2");
  });

  it("changes the selection with arrow keys without advancing, then Next moves on", async () => {
    const { user } = setup();
    const radios = screen.getAllByRole("radio");
    radios[0].focus();
    await user.keyboard("{ArrowDown}");

    expect(radios[1]).toBeChecked();
    expect(heading("What would you like to do?")).toBeInTheDocument();

    await user.click(next());
    expect(heading(/state is the property you want to refinance/)).toBeInTheDocument();
    expect(screen.getByText("Question 2 of 14")).toBeInTheDocument();
  });

  it("stops on a missing answer with a message instead of moving on", async () => {
    const { user } = setup();
    await user.click(next());
    expect(heading("What would you like to do?")).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent(
      "Please answer this question to continue.",
    );
  });

  it("keeps later answers on Back and lands on the first unanswered question on Next", async () => {
    const { user } = setup();
    await user.click(screen.getByLabelText(/Buy a Home/));
    await user.selectOptions(screen.getByRole("combobox"), "AZ");
    await user.click(next());
    await user.type(screen.getByRole("textbox"), "Mesa{Enter}");
    expect(heading(/budget/)).toBeInTheDocument();

    await user.click(back());
    expect(screen.getByRole("textbox")).toHaveValue("Mesa");
    await user.click(back());
    expect(screen.getByRole("combobox")).toHaveValue("AZ");
    await user.click(next());
    expect(heading(/budget/)).toBeInTheDocument();
  });

  it("restores a draft, keeps shared answers on a path switch, and reopens at the new path's first gap", async () => {
    seedDraft({
      answers: {
        mortgage_goal: "purchase",
        property_state: "AZ",
        purchase_city: "Mesa",
        credit_range: "at_least_720",
      },
    });
    const { user } = setup();
    await screen.findByText("Question 4 of 19");
    expect(heading(/budget/)).toBeInTheDocument();

    await user.click(back());
    await user.click(back());
    await user.click(back());
    const radios = screen.getAllByRole("radio");
    radios[0].focus();
    await user.keyboard("{ArrowDown}");
    await user.click(next());

    expect(heading(/refinance goals/)).toBeInTheDocument();
    expect(screen.getByText("Question 3 of 14")).toBeInTheDocument();
    expect(storedDraft()?.answers).toMatchObject({
      mortgage_goal: "refinance",
      credit_range: "at_least_720",
      purchase_city: "Mesa",
    });
  });

  it("saves the draft as the visitor answers so a refresh restores it", async () => {
    const { user, unmount } = setup();
    await user.click(screen.getByLabelText(/Buy a Home/));
    await user.selectOptions(screen.getByRole("combobox"), "AZ");
    expect(storedDraft()?.answers).toEqual({
      mortgage_goal: "purchase",
      property_state: "AZ",
    });
    unmount();

    setup();
    await screen.findByText("Question 3 of 19");
    expect(heading(/city/)).toBeInTheDocument();
  });
});

describe("AssessmentQuizClient contact step", () => {
  it("shows the promise text and holds SMS consent until a phone is entered", async () => {
    seedDraft({ answers: purchaseAnswers });
    const { user } = setup();
    await screen.findByText("Last step of 21");
    expect(screen.getByText(promiseText)).toBeInTheDocument();

    const sms = screen.getByRole("checkbox", { name: /By text message/ });
    expect(sms).toBeDisabled();
    expect(sms).toHaveAccessibleDescription(quizCopy.smsHint);

    const phone = screen.getByLabelText("Phone (optional)");
    await user.type(phone, "6025550100");
    expect(sms).toBeEnabled();
    await user.click(sms);
    expect(sms).toBeChecked();

    await user.clear(phone);
    expect(sms).toBeDisabled();
    expect(sms).not.toBeChecked();
  });

  it("jumps to the step with a problem when the whole draft fails at the end", async () => {
    seedDraft({ answers: { ...purchaseAnswers, credit_range: undefined } });
    const { user, submit } = setup();
    // The restore lands on the gap; walk forward to the contact step.
    await screen.findByRole("heading", { name: /credit score/ });
    await user.click(screen.getByLabelText(/Fantastic/));
    await screen.findByText("Last step of 21");
    await user.click(screen.getByRole("button", { name: "See my results" }));

    expect(heading(/Where should we send/)).toBeInTheDocument();
    expect(screen.getAllByRole("alert")[0]).toHaveTextContent(
      "Enter the email address we should use.",
    );
    expect(submit).not.toHaveBeenCalled();
  });
});

describe("AssessmentQuizClient results", () => {
  async function reachResults(
    submit: ReturnType<typeof vi.fn<(s: AssessmentSubmissionInput) => Promise<AssessmentSubmitResult>>>,
  ) {
    seedDraft({ answers: purchaseAnswers });
    const view = setup(submit);
    await screen.findByText("Last step of 21");
    await fillContact(view.user);
    await view.user.click(screen.getByRole("checkbox", { name: "By email" }));
    await view.user.click(screen.getByRole("button", { name: "See my results" }));
    return view;
  }

  it("shows the score and Action Plan at once, then confirms only after the receipt", async () => {
    let resolve!: (value: AssessmentSubmitResult) => void;
    const submit = vi.fn<(s: AssessmentSubmissionInput) => Promise<AssessmentSubmitResult>>(
      () => new Promise<AssessmentSubmitResult>((r) => (resolve = r)),
    );
    await reachResults(submit);

    expect(heading("Your Readiness Score is 100 out of 100")).toHaveFocus();
    expect(heading("Discuss your purchase next step")).toBeInTheDocument();
    expect(screen.getByText(/Confirm your purchase next step/)).toBeInTheDocument();
    expect(screen.getByText(quizCopy.pending)).toBeInTheDocument();
    expect(screen.queryByText(quizCopy.success)).not.toBeInTheDocument();
    expect(screen.queryByText(/Apply Now/i)).not.toBeInTheDocument();
    const consultation = screen.getByRole("link", { name: "Schedule a Consultation" });
    expect(consultation).toHaveAttribute("href", "https://bookings.example.test/jimmy");
    expect(consultation).toHaveAttribute("target", "_blank");
    expect(consultation).toHaveAttribute("rel", "noopener noreferrer");

    const submission = submit.mock.calls[0]![0];
    expect(submission.consent.promiseText).toBe(promiseText);
    expect(submission.consent.channels).toEqual(["email"]);
    expect(submission.reportedScore).toBe(100);
    expect(submission.actionPlan).toBe("purchase_discussion");
    expect(submission.contact).toEqual({
      email: "vet@example.com",
      firstName: "Pat",
      lastName: "Rivera",
    });
    expect(submission.answers).not.toHaveProperty("refinance_goals");

    resolve({ ok: true, receivedAt: new Date().toISOString() });
    await screen.findByText(quizCopy.success);
    expect(storedDraft()).toBeNull();
  });

  it("reports missing information instead of a score", async () => {
    seedDraft({ answers: { ...purchaseAnswers, credit_range: "unknown" } });
    const submit = vi.fn(async () => ({ ok: true, receivedAt: "" }) as const);
    const { user } = setup(submit);
    await screen.findByText("Last step of 21");
    await fillContact(user);
    await user.click(screen.getByRole("button", { name: "See my results" }));
    // The score line and the Action Plan label both read "More information needed".
    expect(screen.getAllByRole("heading", { name: quizCopy.moreInformation })).toHaveLength(2);
    expect(screen.getByText(/Confirm missing information/)).toBeInTheDocument();
  });

  it("keeps the score and answers on a failure and retries with the same ID", async () => {
    const submit = vi
      .fn<(s: AssessmentSubmissionInput) => Promise<AssessmentSubmitResult>>()
      .mockResolvedValueOnce({ ok: false, kind: "retry" })
      .mockResolvedValueOnce({ ok: true, receivedAt: "" });
    const { user } = await reachResults(submit);

    await screen.findByText(quizCopy.failure);
    expect(heading("Your Readiness Score is 100 out of 100")).toBeInTheDocument();
    expect(storedDraft()).not.toBeNull();

    await user.click(screen.getByRole("button", { name: "Try again" }));
    await screen.findByText(quizCopy.success);
    expect(submit).toHaveBeenCalledTimes(2);
    expect(submit.mock.calls[1]![0]).toEqual(submit.mock.calls[0]![0]);
  });

  it("shows the failure line when the CRM is unavailable", async () => {
    const submit = vi
      .fn<(s: AssessmentSubmissionInput) => Promise<AssessmentSubmitResult>>()
      .mockResolvedValue({ ok: false, kind: "unavailable" });
    await reachResults(submit);
    await screen.findByText(quizCopy.failure);
    expect(screen.getByRole("button", { name: "Try again" })).toBeInTheDocument();
  });

  it("retries a conflict once with a new ID", async () => {
    const submit = vi
      .fn<(s: AssessmentSubmissionInput) => Promise<AssessmentSubmitResult>>()
      .mockResolvedValueOnce({ ok: false, kind: "conflict" })
      .mockResolvedValueOnce({ ok: true, receivedAt: "" });
    await reachResults(submit);

    await screen.findByText(quizCopy.success);
    expect(submit).toHaveBeenCalledTimes(2);
    const [first, second] = submit.mock.calls.map((call) => call[0]!);
    expect(second!.submissionId).not.toBe(first!.submissionId);
    expect({ ...second, submissionId: null }).toEqual({ ...first, submissionId: null });
  });

  it("jumps back to the field the CRM rejected and shows its message", async () => {
    const submit = vi
      .fn<(s: AssessmentSubmissionInput) => Promise<AssessmentSubmitResult>>()
      .mockResolvedValue({
        ok: false,
        kind: "invalid",
        errors: [
          { path: ["answers", "purchase_city"], code: "invalid_answer", message: "Unknown city." },
        ],
      });
    await reachResults(submit);

    await waitFor(() => expect(heading(/city/)).toBeInTheDocument());
    expect(screen.getByRole("alert")).toHaveTextContent("Unknown city.");
    expect(screen.getByRole("textbox")).toHaveValue("Mesa");
  });
});
