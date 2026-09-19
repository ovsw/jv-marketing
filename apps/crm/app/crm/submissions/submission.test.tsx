import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { Submission } from "./submission";
import type { AssessmentSubmissionView } from "@/lib/crm/submissions";

const submission: AssessmentSubmissionView = {
  id: "10000000-0000-4000-8000-000000000001",
  personId: "20000000-0000-4000-8000-000000000001",
  contact: {
    firstName: "Jamie",
    lastName: "Veteran",
    email: "saved@example.com",
    phone: "+16025550123",
  },
  environment: "test",
  assessmentVersion: "1",
  answers: {
    mortgage_goal: "purchase",
    property_state: "AZ",
    purchase_budget: "from_250k_to_500k",
  },
  reportedScore: 82,
  actionPlan: "purchase_discussion",
  receivedAt: "2026-09-18T14:30:00.000000Z",
  originBrand: "PHX Home Loan",
  consent: {
    submissionId: "10000000-0000-4000-8000-000000000001",
    promiseText: "Keep this exact saved promise.",
    channels: ["email", "sms"],
    consentedAt: "2026-09-18T14:29:00.000Z",
    brand: "Original sender",
    environment: "test",
    assessmentVersion: "1",
  },
};

it("shows saved results and opens saved contact, labeled answers, and consent in place", async () => {
  const user = userEvent.setup();
  render(<Submission submission={submission} showPersonLink />);
  expect(screen.getByRole("heading", { name: "Jamie Veteran" })).toBeVisible();
  expect(screen.getByText("82")).toBeVisible();
  expect(screen.getByText("Discuss your purchase next step")).toBeVisible();
  expect(screen.getAllByText("Preview / test")[0]).toBeVisible();
  expect(screen.getByRole("link", { name: "View Person" })).toHaveAttribute(
    "href",
    `/crm/people/${submission.personId}`,
  );
  await user.click(
    screen.getByText("Contact, answers, and consent", { selector: "summary" }),
  );
  expect(screen.getByText("saved@example.com")).toBeVisible();
  expect(screen.getByText("What would you like to do?")).toBeVisible();
  expect(screen.getByText("I Want to Buy a Home")).toBeVisible();
  expect(screen.getByText("Arizona")).toBeVisible();
  expect(screen.getByText("$250,000-$500,000")).toBeVisible();
  const consent = screen.getByRole("region", {
    name: "Consent saved with this submission",
  });
  for (const value of [
    "Keep this exact saved promise.",
    "Email, SMS",
    "Original sender",
    "Preview / test",
  ]) {
    expect(within(consent).getByText(value)).toBeVisible();
  }
  expect(consent.querySelector("time")).toHaveAttribute(
    "datetime",
    submission.consent!.consentedAt,
  );
  expect(within(consent).getByText("1")).toBeVisible();
});

it("keeps raw values readable for an unavailable Assessment Version and score", async () => {
  const user = userEvent.setup();
  render(
    <Submission
      submission={{
        ...submission,
        assessmentVersion: "99",
        actionPlan: "future_plan",
        reportedScore: null,
        consent: null,
      }}
    />,
  );
  expect(screen.getByText("Not available")).toBeVisible();
  expect(screen.getByText("future_plan")).toBeVisible();
  await user.click(
    screen.getByText("Contact, answers, and consent", { selector: "summary" }),
  );
  expect(
    screen.getByText(/Answer labels are unavailable for Assessment Version 99/),
  ).toBeVisible();
  expect(screen.getByText("mortgage_goal")).toBeVisible();
  expect(screen.getByText("purchase")).toBeVisible();
  expect(screen.getByText("from_250k_to_500k")).toBeVisible();
  expect(screen.getByText("Consent record unavailable")).toBeVisible();
});

it("retains unknown answer values within a known version and displays a saved score of zero", async () => {
  const user = userEvent.setup();
  render(
    <Submission
      submission={{
        ...submission,
        answers: { ...submission.answers, future_question: "saved_value" },
        reportedScore: 0,
      }}
    />,
  );
  expect(screen.getByText("0")).toBeVisible();
  await user.click(
    screen.getByText("Contact, answers, and consent", { selector: "summary" }),
  );
  expect(screen.getByText("future_question")).toBeVisible();
  expect(screen.getByText("saved_value")).toBeVisible();
});
