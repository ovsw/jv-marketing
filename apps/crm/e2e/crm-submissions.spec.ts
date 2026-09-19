import { randomUUID } from "node:crypto";
import { loadEnvFile } from "node:process";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq, inArray } from "drizzle-orm";
import { parseSubmission } from "@phx/assessment";
import {
  assessmentSubmissions,
  consentRecords,
  intakeCallers,
  people,
  testInquiries,
} from "../db/schema";
import { previewDatabaseUrl } from "../lib/crm/policy";
import fixture from "../../../packages/assessment/test/fixtures/v1-purchase.json" with { type: "json" };
import { expect, test } from "./fixtures";

// Explicit development-only fixture writes. The pinned host guard rejects production.
// CRM_E2E_AUTH_STATE=/secure/staff.json CRM_E2E_SUBMISSIONS=1 \
// PLAYWRIGHT_BASE_URL=http://localhost:3200 pnpm --filter crm test:e2e e2e/crm-submissions.spec.ts
test.use({ storageState: process.env.CRM_E2E_AUTH_STATE });
test.skip(
  !process.env.CRM_E2E_AUTH_STATE || process.env.CRM_E2E_SUBMISSIONS !== "1",
  "Requires a verified development staff session and fixture opt-in",
);
test.describe.configure({ mode: "serial" });

const personId = randomUUID();
const callerId = randomUUID();
const testInquiryId = randomUUID();
const ids = Array.from({ length: 54 }, () => randomUUID());
let db: ReturnType<typeof drizzle>;

test.beforeAll(async () => {
  loadEnvFile(".env.local");
  db = drizzle(neon(previewDatabaseUrl()));
  const parsed = parseSubmission(fixture);
  if (!parsed.success) throw new Error("Invalid assessment fixture");
  const saved = parsed.data;
  await db
    .insert(intakeCallers)
    .values({
      id: callerId,
      secretHash: randomUUID(),
      webProperty: "example.com",
      brand: "Browser test fixture",
      environment: "test",
    });
  await db
    .insert(testInquiries)
    .values({
      id: testInquiryId,
      createdBy: "browser-test",
      recipient: "crm-135-fixture@example.com",
      jobStatus: "failed",
      lastError: "Test fixture: no worker was called.",
    });
  const contact = {
    ...saved.contact,
    email: `crm-135-${personId}@example.com`,
    firstName: "CRM",
    lastName: "Pagination check",
  };
  await db.insert(people).values({ id: personId, ...contact });
  await db.insert(assessmentSubmissions).values(
    ids.map((id, i) => ({
      id,
      personId,
      intakeCallerId: callerId,
      contact,
      environment: i < 3 ? ("live" as const) : ("test" as const),
      assessmentVersion: "1",
      answers: saved.answers,
      reportedScore: saved.reportedScore,
      actionPlan: saved.actionPlan,
      requestHash: randomUUID(),
      mortgageGoal: "purchase",
      state: "AZ",
      dispatchState: "handled" as const,
      receivedAt: new Date(Date.UTC(2030, 0, 1, 0, 0, i)),
    })),
  );
  await db.insert(consentRecords).values(
    ids.map((id, i) => ({
      submissionId: id,
      promiseText: `Saved browser-test consent ${i}.`,
      channels: ["email" as const],
      consentedAt: new Date("2026-09-19T10:00:00.000Z"),
      brand: "Saved browser-test sender",
      environment: i < 3 ? ("live" as const) : ("test" as const),
      assessmentVersion: "1",
    })),
  );
});

test.afterAll(async () => {
  if (!db) return;
  await db
    .delete(consentRecords)
    .where(inArray(consentRecords.submissionId, ids));
  await db
    .delete(assessmentSubmissions)
    .where(inArray(assessmentSubmissions.id, ids));
  await db.delete(people).where(eq(people.id, personId));
  await db.delete(intakeCallers).where(eq(intakeCallers.id, callerId));
  await db.delete(testInquiries).where(eq(testInquiries.id, testInquiryId));
});

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 390, height: 844 },
]) {
  test(`reads saved submissions and preserves URL state at ${viewport.width}px`, async ({
    page,
  }) => {
    await page.setViewportSize(viewport);
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto("/crm");
    await expect(
      page.getByRole("heading", {
        name: "Assessment Submissions",
        exact: true,
      }),
    ).toBeVisible();
    const rows = page
      .getByTestId("assessment-submission")
      .filter({ visible: true });
    await expect(rows).toHaveCount(50);
    const first = rows.first();
    await expect(first).toContainText("CRM Pagination check");
    await expect(first).toContainText("Preview / test");
    const disclosure = first.locator("summary");
    await disclosure.focus();
    await page.keyboard.press("Enter");
    await expect(
      first.getByRole("region", { name: "Saved answers" }),
    ).toContainText("I Want to Buy a Home");
    await expect(
      first.getByRole("region", { name: "Consent saved with this submission" }),
    ).toContainText("Saved browser-test consent 53.");
    await expect(first).toContainText("Saved browser-test sender");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    await page
      .getByRole("link", { name: "Older submissions", exact: true })
      .click();
    await expect(page).toHaveURL(/cursor=/);
    await expect(rows.first()).toContainText("CRM Pagination check");
    const olderUrl = page.url();
    await rows
      .first()
      .getByRole("link", { name: "View Person", exact: true })
      .click();
    await expect(page).toHaveURL(new RegExp(`/crm/people/${personId}$`));
    await expect(rows).toHaveCount(50);
    await page
      .getByRole("link", { name: "Older submissions", exact: true })
      .click();
    await expect(rows).toHaveCount(4);
    await page
      .getByRole("link", { name: "Back to newest", exact: true })
      .click();
    await expect(rows).toHaveCount(50);
    await page
      .getByRole("checkbox", { name: "Live only", exact: true })
      .check();
    await expect(page).toHaveURL(/environment=live$/);
    await expect(rows).toHaveCount(3);
    await expect(
      page.getByRole("link", { name: "Older submissions", exact: true }),
    ).toHaveCount(0);
    await page.goto(olderUrl);
    await page
      .getByRole("checkbox", { name: "Live only", exact: true })
      .check();
    await expect(page).toHaveURL(/\/crm\?environment=live$/);
    await expect(
      page.getByRole("checkbox", { name: "Live only" }),
    ).toBeChecked();
    await expect(rows.filter({ hasText: "Preview / test" })).toHaveCount(0);
    await page.goBack();
    await expect(page).toHaveURL(olderUrl);
    await expect(
      page.getByRole("checkbox", { name: "Live only" }),
    ).not.toBeChecked();
    await page
      .getByRole("link", { name: "Back to newest", exact: true })
      .click();
    await page
      .getByRole("button", { name: "Refresh results", exact: true })
      .click();
    await expect(rows).toHaveCount(50);
    expect(errors).toEqual([]);
  });
}

test("resets invalid links and keeps sample controls on Test inquiries", async ({
  page,
}) => {
  // Let the development Clerk session refresh before testing a deep link.
  await page.goto("/crm");
  await expect(
    page.getByRole("heading", { name: "Assessment Submissions", exact: true }),
  ).toBeVisible();
  await page.goto("/crm?environment=invalid");
  await expect(page).toHaveURL(/environment=invalid$/);
  await expect(
    page.getByRole("heading", { name: "Invalid submission list link" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Reset list" }).click();
  await expect(
    page.getByRole("heading", { name: "Assessment Submissions", exact: true }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "New test inquiry", exact: true }),
  ).toHaveCount(0);
  await page.getByRole("link", { name: "Test inquiries", exact: true }).click();
  await expect(page).toHaveURL(/\/crm\/test-inquiries$/);
  await expect(
    page.getByRole("heading", { name: "Test inquiries", exact: true }),
  ).toBeVisible();
  await expect(page.locator("header")).toContainText("Test inquiries");
  await expect(
    page
      .locator('[data-sidebar="sidebar"]')
      .getByRole("link", { name: "Test inquiries", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  await page
    .getByRole("button", { name: "New test inquiry", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Submit test inquiry", exact: true }),
  ).toBeVisible();
  // Opening the sample workflow must not send an email or run a worker.
  await page.keyboard.press("Escape");
  await page
    .getByRole("button", { name: `View inquiry ${testInquiryId}`, exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Retry this inquiry", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Delete this inquiry", exact: true })
    .click();
  await page
    .getByRole("alertdialog")
    .getByRole("button", { name: "Delete this inquiry", exact: true })
    .click();
  await expect(
    page.getByRole("button", {
      name: `View inquiry ${testInquiryId}`,
      exact: true,
    }),
  ).toHaveCount(0);
});
