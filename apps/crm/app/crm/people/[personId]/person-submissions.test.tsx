import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { PersonSubmissions } from "./person-submissions";

const person = {
  id: "20000000-0000-4000-8000-000000000001",
  firstName: "Jamie",
  lastName: "Veteran",
  email: "jamie@example.com",
  phone: "+16025550123",
};

const liveSubmission = {
  id: "10000000-0000-4000-8000-000000000001",
  environment: "live" as const,
  assessmentVersion: "1",
  answers: {
    mortgage_goal: "purchase",
    property_state: "AZ",
    purchase_budget: "from_250k_to_500k",
  },
  reportedScore: 82,
  actionPlan: "purchase_discussion",
  receivedAt: "2026-09-18T14:30:00.000Z",
  originBrand: "VALoansForVets.com",
};

const olderSubmission = {
  ...liveSubmission,
  id: "10000000-0000-4000-8000-000000000002",
  receivedAt: "2026-09-17T14:30:00.000Z",
  originBrand: "PHXHomeLoan.com",
  reportedScore: null,
  actionPlan: "information_needed",
};

const testSubmission = {
  ...liveSubmission,
  id: "10000000-0000-4000-8000-000000000003",
  environment: "test" as const,
  receivedAt: "2026-09-19T14:30:00.000Z",
  originBrand: "Test Caller",
};

it("renders a Person's live Assessment Submissions newest first with canonical labels", async () => {
  const user = userEvent.setup();
  render(
    <PersonSubmissions
      person={person}
      submissions={[olderSubmission, liveSubmission]}
    />,
  );

  expect(
    screen.getByRole("heading", { name: "Jamie Veteran" }),
  ).toBeInTheDocument();
  expect(screen.getByText("jamie@example.com")).toBeInTheDocument();

  const submissions = screen.getAllByTestId("assessment-submission");
  expect(submissions).toHaveLength(2);
  expect(submissions[0]).toHaveTextContent("VALoansForVets.com");
  expect(submissions[1]).toHaveTextContent("PHXHomeLoan.com");
  expect(within(submissions[0]).getByText("Assessment Version")).toBeVisible();
  expect(within(submissions[0]).getByText("1", { selector: "dd" })).toBeVisible();
  expect(submissions[0]).toHaveTextContent("82");
  expect(submissions[0]).toHaveTextContent("Discuss your purchase next step");
  expect(submissions[1]).toHaveTextContent("Not available");

  await user.click(
    within(submissions[0]).getByText("Show 3 answers", { selector: "summary" }),
  );
  expect(within(submissions[0]).getByText("What would you like to do?")).toBeVisible();
  expect(within(submissions[0]).getByText("I Want to Buy a Home")).toBeVisible();
  expect(
    within(submissions[0]).getByText(
      "In which state is the property you want to buy or refinance?",
    ),
  ).toBeVisible();
  expect(within(submissions[0]).getByText("Arizona")).toBeVisible();
  expect(
    within(submissions[0]).getByText("$250,000-$500,000"),
  ).toBeVisible();
});

it("hides test submissions by default and reveals them with the labeled control", async () => {
  const user = userEvent.setup();
  render(
    <PersonSubmissions
      person={person}
      submissions={[testSubmission, liveSubmission]}
    />,
  );

  expect(screen.queryByText("Test Caller")).not.toBeInTheDocument();
  const control = screen.getByRole("checkbox", {
    name: "Show test submissions (1)",
  });
  expect(control).not.toBeChecked();

  await user.click(control);

  expect(control).toBeChecked();
  expect(screen.getByText("Test Caller")).toBeInTheDocument();
  expect(screen.getByText("Test", { selector: "div" })).toBeInTheDocument();
});

it("keeps raw values and says labels are unavailable for an unknown Assessment Version", () => {
  render(
    <PersonSubmissions
      person={person}
      submissions={[
        { ...liveSubmission, assessmentVersion: "99", actionPlan: "future_plan" },
      ]}
    />,
  );

  const [submission] = screen.getAllByTestId("assessment-submission");
  expect(submission).toHaveTextContent(
    "Answer labels are unavailable for Assessment Version 99.",
  );
  expect(submission).toHaveTextContent("future_plan");
  expect(
    within(submission).queryByText("Show 3 answers", { selector: "summary" }),
  ).not.toBeInTheDocument();
});
