import { beforeEach, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({ staff: vi.fn(), database: vi.fn() }));
vi.mock("./auth", () => ({ requireStaff: mocks.staff }));
vi.mock("@/db/client", () => ({ database: mocks.database }));

import {
  InvalidSubmissionList,
  listAssessmentSubmissions,
} from "./submissions";

beforeEach(() => vi.resetAllMocks());

it("rejects non-staff access before opening the database", async () => {
  mocks.staff.mockRejectedValue(new Error("Staff access is required."));
  await expect(listAssessmentSubmissions()).rejects.toThrow(
    "Staff access is required.",
  );
  expect(mocks.database).not.toHaveBeenCalled();
});

it.each([
  { personId: "" },
  { personId: "not-a-uuid" },
  { personId: null },
  { environment: "test" },
  { environment: ["all", "live"] },
  { cursor: "" },
  { cursor: "not-a-cursor" },
  { cursor: ["a", "b"] },
  {
    cursor: Buffer.from(
      JSON.stringify({
        receivedAt: "2026-02-30T00:00:00.000000Z",
        id: "10000000-0000-4000-8000-000000000001",
        personId: null,
        environment: "all",
      }),
    ).toString("base64url"),
  },
])(
  "rejects malformed filters and cursors before reading: %j",
  async (options) => {
    await expect(listAssessmentSubmissions(options)).rejects.toBeInstanceOf(
      InvalidSubmissionList,
    );
    expect(mocks.database).not.toHaveBeenCalled();
  },
);

it("keeps a database failure distinct from an empty list", async () => {
  mocks.database.mockImplementation(() => {
    throw new Error("Database unavailable");
  });
  await expect(listAssessmentSubmissions()).rejects.toThrow(
    "Database unavailable",
  );
});
