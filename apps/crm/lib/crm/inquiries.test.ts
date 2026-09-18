import { beforeEach, expect, it, vi } from "vitest";

const mocks = vi.hoisted(() => ({
  staff: vi.fn(),
  database: vi.fn(),
  insert: vi.fn(),
  row: vi.fn(),
  update: vi.fn(),
  deleteWhere: vi.fn(),
  trigger: vi.fn(),
  key: vi.fn(),
  retrieve: vi.fn(),
  list: vi.fn(),
}));
vi.mock("./auth", () => ({ requireStaff: mocks.staff }));
vi.mock("./policy", () => ({
  isTestRecipient: (email: string) => email === "ovi@ovswebsites.com",
}));
vi.mock("@/db/client", () => ({ previewDatabase: mocks.database }));
vi.mock("@trigger.dev/sdk", () => ({
  tasks: { trigger: mocks.trigger },
  idempotencyKeys: { create: mocks.key },
  runs: { retrieve: mocks.retrieve },
}));
import {
  deleteTestInquiries,
  listTestInquiries,
  submitTestInquiry,
} from "./inquiries";

beforeEach(() => {
  vi.resetAllMocks();
  mocks.staff.mockResolvedValue({
    userId: "staff",
    email: "ovi@ovswebsites.com",
  });
  mocks.row.mockResolvedValue([
    { id: "inquiry", createdBy: "staff", jobStatus: "pending" },
  ]);
  mocks.key.mockImplementation(async (value) => value);
  mocks.trigger.mockResolvedValue({ id: "run" });
  mocks.database.mockReturnValue({
    insert: () => ({
      values: mocks.insert.mockReturnValue({ onConflictDoNothing: vi.fn() }),
    }),
    select: () => ({
      from: () => ({
        where: mocks.row,
        leftJoin: () => ({ orderBy: () => ({ limit: mocks.list }) }),
      }),
    }),
    update: () => ({ set: mocks.update.mockReturnValue({ where: vi.fn() }) }),
    delete: () => ({ where: mocks.deleteWhere }),
  });
  mocks.deleteWhere.mockReturnValue({
    returning: vi.fn().mockResolvedValue([{ id: "a" }, { id: "b" }]),
  });
});

it("uses one global dispatch key for concurrent submissions of an inquiry", async () => {
  await Promise.all([
    submitTestInquiry("inquiry"),
    submitTestInquiry("inquiry"),
  ]);
  expect(mocks.key).toHaveBeenCalledTimes(2);
  for (const call of mocks.key.mock.calls)
    expect(call).toEqual(["test-inquiry:inquiry", { scope: "global" }]);
  expect(mocks.trigger).toHaveBeenCalledWith(
    "test-inquiry",
    { inquiryId: "inquiry" },
    { idempotencyKey: "test-inquiry:inquiry" },
  );
  expect(mocks.update).toHaveBeenCalledWith({
    runId: "run",
    updatedAt: expect.any(Date),
  });
});

it("stops before database access when staff authorization fails", async () => {
  mocks.staff.mockRejectedValue(new Error("Denied"));
  await expect(submitTestInquiry("inquiry")).rejects.toThrow("Denied");
  expect(mocks.database).not.toHaveBeenCalled();
});

it("lets any staff member retry another staff member's inquiry", async () => {
  mocks.row.mockResolvedValue([
    { createdBy: "another-staff", jobStatus: "pending" },
  ]);
  await submitTestInquiry("inquiry");
  expect(mocks.trigger).toHaveBeenCalled();
});

it("refuses a staff member whose address is not a test recipient", async () => {
  mocks.staff.mockResolvedValue({ userId: "staff", email: "new@example.com" });
  await expect(submitTestInquiry("inquiry")).rejects.toThrow("test email list");
  expect(mocks.database).not.toHaveBeenCalled();
});

it("does not dispatch a completed inquiry", async () => {
  mocks.row.mockResolvedValue([{ createdBy: "staff", jobStatus: "complete" }]);
  await submitTestInquiry("inquiry");
  expect(mocks.trigger).not.toHaveBeenCalled();
});

it("marks a saved inquiry failed after a dispatch error", async () => {
  mocks.trigger.mockRejectedValue(new Error("Offline"));
  await expect(submitTestInquiry("inquiry")).rejects.toThrow(
    "inquiry was saved",
  );
  expect(mocks.insert).toHaveBeenCalledWith({
    id: "inquiry",
    createdBy: "staff",
    recipient: "ovi@ovswebsites.com",
  });
  expect(mocks.update).toHaveBeenCalledTimes(1);
  expect(mocks.update).toHaveBeenCalledWith({
    jobStatus: "failed",
    lastError: "The job was not dispatched. Retry this inquiry.",
    updatedAt: expect.any(Date),
  });
});

// The default database mock re-applies its own `set` return value on every
// `database()` call, so a failing write needs its own database object.
function failWrites(message: string) {
  const db = mocks.database();
  mocks.database.mockReturnValue({
    ...db,
    update: () => ({
      set: (values: unknown) => {
        mocks.update(values);
        return {
          where: () => {
            throw new Error(message);
          },
        };
      },
    }),
  });
}

it("keeps the dispatch error when recording the failure also fails", async () => {
  mocks.trigger.mockRejectedValue(new Error("Offline"));
  failWrites("Database offline");
  await expect(submitTestInquiry("inquiry")).rejects.toThrow(
    "inquiry was saved",
  );
});

it("does not mark the inquiry failed when only the run ID write fails", async () => {
  failWrites("Database offline");
  await expect(submitTestInquiry("inquiry")).rejects.toThrow("Database offline");
  expect(mocks.trigger).toHaveBeenCalledTimes(1);
  expect(mocks.update).toHaveBeenCalledTimes(1);
  expect(mocks.update).toHaveBeenCalledWith({
    runId: "run",
    updatedAt: expect.any(Date),
  });
});

function listedRow(inquiry: Record<string, unknown>) {
  return {
    crm_test_inquiries: {
      id: "inquiry",
      runId: "run",
      emailId: null,
      lastError: null,
      updatedAt: new Date(),
      ...inquiry,
    },
    crm_simulated_sms: null,
  };
}

it("looks up Trigger.dev only for unfinished jobs and attaches a workflow step", async () => {
  mocks.list.mockResolvedValue([
    listedRow({ id: "done", jobStatus: "complete" }),
    listedRow({ id: "waiting", jobStatus: "pending" }),
    listedRow({ id: "unsent", jobStatus: "pending", runId: null }),
  ]);
  mocks.retrieve.mockResolvedValue({ status: "QUEUED", error: null });
  const rows = await listTestInquiries();
  expect(mocks.retrieve).toHaveBeenCalledTimes(1);
  expect(mocks.retrieve).toHaveBeenCalledWith("run");
  expect(rows.map((row) => [row.id, row.workflow.step])).toEqual([
    ["done", "complete"],
    ["waiting", "queued"],
    ["unsent", "saved"],
  ]);
});

it("still lists inquiries when the Trigger.dev lookup fails", async () => {
  mocks.list.mockResolvedValue([listedRow({ jobStatus: "pending" })]);
  mocks.retrieve.mockRejectedValue(new Error("Trigger.dev offline"));
  const [row] = await listTestInquiries();
  expect(row.workflow.step).toBe("dispatched");
});

it("deletes the given inquiries and reports how many were removed", async () => {
  await expect(deleteTestInquiries(["a", "b", "missing"])).resolves.toBe(2);
  expect(mocks.deleteWhere).toHaveBeenCalledTimes(1);
});

it("does not touch the database for an empty delete", async () => {
  await expect(deleteTestInquiries([])).resolves.toBe(0);
  expect(mocks.database).not.toHaveBeenCalled();
});

it("stops a delete before database access when staff authorization fails", async () => {
  mocks.staff.mockRejectedValue(new Error("Denied"));
  await expect(deleteTestInquiries(["a"])).rejects.toThrow("Denied");
  expect(mocks.database).not.toHaveBeenCalled();
});
