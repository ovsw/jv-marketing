import { beforeEach, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  staff: vi.fn(),
  database: vi.fn(),
  queries: [] as Array<() => Promise<unknown[]>>,
}));

vi.mock("./auth", () => ({ requireStaff: mocks.staff }));
vi.mock("@/db/client", () => ({ database: mocks.database }));

import { getPersonWithAssessmentSubmissions, listPeople } from "./people";

const person = {
  id: "20000000-0000-4000-8000-000000000001",
  firstName: "Jamie",
  lastName: "Veteran",
  email: "jamie@example.com",
  phone: null,
};

const submission = {
  id: "10000000-0000-4000-8000-000000000001",
  environment: "live",
  assessmentVersion: "1",
  answers: { mortgage_goal: "purchase" },
  reportedScore: 82,
  actionPlan: "purchase_discussion",
  receivedAt: new Date("2026-09-18T14:30:00.000Z"),
  originBrand: "VALoansForVets.com",
};

const personListRow = {
  ...person,
  latestOriginBrand: "VALoansForVets.com",
  liveSubmissionCount: 2,
  testSubmissionCount: 1,
  lastReceivedAt: new Date("2026-09-18T14:30:00.000Z"),
};

// Every query builder method returns the same chain. Awaiting a chain runs
// the next queued query, in the order the helper awaits them, so the tests
// describe results and never the builder calls. Subqueries are never awaited
// and so never consume a queued result.
function queueQuery(rows: unknown[]) {
  const run = vi.fn<() => Promise<unknown[]>>().mockResolvedValue(rows);
  mocks.queries.push(run);
  return run;
}

beforeEach(() => {
  vi.resetAllMocks();
  mocks.queries.length = 0;
  mocks.staff.mockResolvedValue({
    userId: "staff",
    email: "staff@example.com",
  });
  const startQuery = () => {
    const chain: Record<string, unknown> = {
      then: (
        resolve: (rows: unknown) => unknown,
        reject?: (error: unknown) => unknown,
      ) => {
        const run = mocks.queries.shift();
        return (run ? run() : Promise.resolve([])).then(resolve, reject);
      },
    };
    for (const method of [
      "from",
      "where",
      "limit",
      "innerJoin",
      "leftJoin",
      "orderBy",
      "groupBy",
      "as",
    ]) {
      chain[method] = () => chain;
    }
    return chain;
  };
  mocks.database.mockReturnValue({
    select: startQuery,
    selectDistinctOn: startQuery,
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
  queueQuery([person]);
  queueQuery([submission]);

  await expect(getPersonWithAssessmentSubmissions(person.id)).resolves.toEqual({
    person,
    submissions: [submission],
  });
  expect(mocks.staff).toHaveBeenCalledOnce();
});

it("does not query submissions when the Person does not exist", async () => {
  queueQuery([]);
  const submissionRows = queueQuery([submission]);

  await expect(
    getPersonWithAssessmentSubmissions(person.id),
  ).resolves.toBeNull();
  expect(submissionRows).not.toHaveBeenCalled();
});

it("authorizes before listing People", async () => {
  mocks.staff.mockRejectedValue(new Error("Denied"));

  await expect(listPeople()).rejects.toThrow("Denied");
  expect(mocks.database).not.toHaveBeenCalled();
});

it("lists People with their latest Origin Brand and submission counts", async () => {
  queueQuery([personListRow]);

  await expect(listPeople()).resolves.toEqual([personListRow]);
  expect(mocks.staff).toHaveBeenCalledOnce();
});
