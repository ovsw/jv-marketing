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
  latestOriginBrand: "PHX Preview",
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

it("shows preview People and their submission count by default, with an optional live-only filter", async () => {
  const user = userEvent.setup();
  render(<PeopleList people={[tester, jamie]} />);

  const rows = screen.getAllByTestId("person");
  expect(rows).toHaveLength(2);
  expect(rows[0]).toHaveTextContent("Taylor Tester");
  expect(within(rows[0]).getByText("Preview / test")).toBeVisible();
  expect(within(rows[0]).getByText("3", { selector: "td" })).toBeVisible();
  const control = screen.getByRole("checkbox", {
    name: "Live only",
  });
  expect(control).not.toBeChecked();

  await user.click(control);

  expect(control).toBeChecked();
  expect(screen.queryByText("Taylor Tester")).not.toBeInTheDocument();
  expect(screen.getByText("Jamie Veteran")).toBeVisible();
  await user.click(control);
  expect(screen.getByText("Taylor Tester")).toBeVisible();
});

it("offers no test control and an empty state when there are no People", () => {
  render(<PeopleList people={[]} />);

  expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  expect(screen.getByText("No People yet")).toBeVisible();
});

it("counts both environments for a mixed Person and only live submissions when filtered", async () => {
  const user = userEvent.setup();
  render(<PeopleList people={[alex]} />);

  const row = screen.getByTestId("person");
  expect(within(row).getByText("2", { selector: "td" })).toBeVisible();
  await user.click(screen.getByRole("checkbox", { name: "Live only" }));
  expect(within(row).getByText("1", { selector: "td" })).toBeVisible();
  expect(within(row).getByRole("link", { name: "Alex Older" })).toBeVisible();
});
