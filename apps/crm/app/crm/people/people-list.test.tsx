import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import { PeopleList } from "./people-list";

const jamie = {
  id: "20000000-0000-4000-8000-000000000001",
  firstName: "Jamie",
  lastName: "Veteran",
  email: "jamie@example.com",
  latestOriginBrand: "VALoansForVets.com",
  liveSubmissionCount: 2,
  testSubmissionCount: 0,
  lastReceivedAt: "2026-09-18T14:30:00.000Z",
};

const alex = {
  id: "20000000-0000-4000-8000-000000000002",
  firstName: "Alex",
  lastName: "Older",
  email: "alex@example.com",
  latestOriginBrand: "PHXHomeLoan.com",
  liveSubmissionCount: 1,
  testSubmissionCount: 1,
  lastReceivedAt: "2026-09-17T14:30:00.000Z",
};

const tester = {
  id: "20000000-0000-4000-8000-000000000003",
  firstName: "Taylor",
  lastName: "Tester",
  email: "taylor@example.com",
  latestOriginBrand: "Test Caller",
  liveSubmissionCount: 0,
  testSubmissionCount: 3,
  lastReceivedAt: "2026-09-19T14:30:00.000Z",
};

it("lists People newest first with a link to each Person page", () => {
  render(<PeopleList people={[jamie, alex]} />);

  const rows = screen.getAllByTestId("person");
  expect(rows).toHaveLength(2);

  const first = within(rows[0]);
  expect(first.getByRole("link", { name: "Jamie Veteran" })).toHaveAttribute(
    "href",
    `/crm/people/${jamie.id}`,
  );
  expect(first.getByText("jamie@example.com")).toBeVisible();
  expect(first.getByText("VALoansForVets.com")).toBeVisible();
  expect(first.getByText("2", { selector: "td" })).toBeVisible();
  expect(first.getByText("Sep 18, 2026, 7:30 AM")).toBeVisible();

  const second = within(rows[1]);
  expect(second.getByRole("link", { name: "Alex Older" })).toHaveAttribute(
    "href",
    `/crm/people/${alex.id}`,
  );
  expect(second.getByText("PHXHomeLoan.com")).toBeVisible();
});

it("hides People with only test submissions until the labeled control is checked", async () => {
  const user = userEvent.setup();
  render(<PeopleList people={[tester, jamie]} />);

  expect(screen.queryByText("Taylor Tester")).not.toBeInTheDocument();
  const control = screen.getByRole("checkbox", {
    name: "Show test-only People (1)",
  });
  expect(control).not.toBeChecked();

  await user.click(control);

  expect(control).toBeChecked();
  const rows = screen.getAllByTestId("person");
  expect(rows).toHaveLength(2);
  expect(rows[0]).toHaveTextContent("Taylor Tester");
  expect(within(rows[0]).getByText("Test")).toBeVisible();
});

it("offers no test control and an empty state when there are no People", () => {
  render(<PeopleList people={[]} />);

  expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  expect(screen.getByText("No People yet")).toBeVisible();
});
