import { render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { SubmissionList } from "./submission-list";
import { SubmissionListError } from "./list-error";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

it.each([
  {
    liveOnly: false,
    hasCursor: false,
    message: "No Assessment Submissions yet",
  },
  {
    liveOnly: true,
    hasCursor: false,
    message: "No live Assessment Submissions",
  },
  {
    liveOnly: false,
    hasCursor: true,
    message: "No older Assessment Submissions",
  },
])(
  "distinguishes an empty page: $message",
  ({ liveOnly, hasCursor, message }) => {
    render(
      <SubmissionList
        page={{ items: [], nextCursor: null }}
        basePath="/crm"
        liveOnly={liveOnly}
        hasCursor={hasCursor}
      />,
    );
    expect(screen.getByText(message)).toBeVisible();
    expect(
      screen.queryByRole("link", { name: "Older submissions" }),
    ).not.toBeInTheDocument();
    if (hasCursor)
      expect(
        screen.getByRole("link", { name: "Back to newest" }),
      ).toHaveAttribute("href", "/crm");
  },
);

it("offers a reset for invalid links", () => {
  render(<SubmissionListError invalid basePath="/crm" />);
  expect(screen.getByRole("alert")).toHaveTextContent(
    "Invalid submission list link",
  );
  expect(screen.getByRole("link", { name: "Reset list" })).toHaveAttribute(
    "href",
    "/crm",
  );
});

it("offers a retry after a failed read instead of showing an empty list", () => {
  render(<SubmissionListError invalid={false} basePath="/crm" />);
  expect(screen.getByRole("alert")).toHaveTextContent(
    "Could not load Assessment Submissions",
  );
  expect(screen.getByRole("button", { name: "Refresh results" })).toBeVisible();
  expect(
    screen.queryByText("No Assessment Submissions yet"),
  ).not.toBeInTheDocument();
});
