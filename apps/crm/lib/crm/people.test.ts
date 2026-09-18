import { beforeEach, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  staff: vi.fn(),
  database: vi.fn(),
  personRows: vi.fn(),
  submissionRows: vi.fn(),
}));

vi.mock("./auth", () => ({ requireStaff: mocks.staff }));
vi.mock("@/db/client", () => ({ database: mocks.database }));

import { getPersonWithAssessmentSubmissions } from "./people";

const person = {
  id: "20000000-0000-4000-8000-000000000001",
  firstName: "Jamie",
  lastName: "Veteran",
  email: "jamie@example.com",
  phone: null,
};

beforeEach(() => {
  vi.resetAllMocks();
  mocks.staff.mockResolvedValue({
    userId: "staff",
    email: "staff@example.com",
  });
  mocks.personRows.mockResolvedValue([person]);
  mocks.submissionRows.mockResolvedValue([
    {
      id: "10000000-0000-4000-8000-000000000001",
      environment: "live",
      assessmentVersion: "1",
      answers: { mortgage_goal: "purchase" },
      reportedScore: 82,
      actionPlan: "purchase_discussion",
      receivedAt: new Date("2026-09-18T14:30:00.000Z"),
      originBrand: "VALoansForVets.com",
    },
  ]);
  let selectCall = 0;
  mocks.database.mockReturnValue({
    select: () => {
      selectCall += 1;
      if (selectCall === 1) {
        return {
          from: () => ({
            where: () => ({ limit: mocks.personRows }),
          }),
        };
      }
      return {
        from: () => ({
          innerJoin: () => ({
            where: () => ({ orderBy: mocks.submissionRows }),
          }),
        }),
      };
    },
  });
});

it("authorizes before reading a Person or their submissions", async () => {
  mocks.staff.mockRejectedValue(new Error("Denied"));

  await expect(
    getPersonWithAssessmentSubmissions(person.id),
  ).rejects.toThrow("Denied");
  expect(mocks.database).not.toHaveBeenCalled();
});

it("treats an invalid Person ID as missing after authorization", async () => {
  await expect(
    getPersonWithAssessmentSubmissions("not-a-person-id"),
  ).resolves.toBeNull();
  expect(mocks.staff).toHaveBeenCalledOnce();
  expect(mocks.database).not.toHaveBeenCalled();
});

it("returns a Person with submission Origin Brands", async () => {
  await expect(getPersonWithAssessmentSubmissions(person.id)).resolves.toEqual({
    person,
    submissions: await mocks.submissionRows(),
  });
  expect(mocks.staff).toHaveBeenCalledOnce();
});

it("does not query submissions when the Person does not exist", async () => {
  mocks.personRows.mockResolvedValue([]);

  await expect(
    getPersonWithAssessmentSubmissions(person.id),
  ).resolves.toBeNull();
  expect(mocks.submissionRows).not.toHaveBeenCalled();
});
