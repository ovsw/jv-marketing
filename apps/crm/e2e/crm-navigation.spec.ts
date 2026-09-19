import { expect, test } from "./fixtures";

// Supply a development staff session. Never bypass the app's access checks.
// From apps/crm, with the dev server running:
// CRM_E2E_AUTH_STATE=/secure/staff-state.json PLAYWRIGHT_BASE_URL=http://localhost:3200 \
//   pnpm exec playwright test e2e/crm-navigation.spec.ts --workers=1
test.use({ storageState: process.env.CRM_E2E_AUTH_STATE });
test.skip(!process.env.CRM_E2E_AUTH_STATE, "Requires a development staff session");

test("closes the mobile menu after navigation without replacing the header", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/crm");
  await expect(page.getByRole("heading", { name: "Inquiries", exact: true })).toBeVisible();
  const header = page.locator("header");
  const headerNode = await header.elementHandle();
  await header.getByRole("button", { name: "Toggle Sidebar", exact: true }).click();
  const menu = page.getByRole("dialog", { name: "Sidebar", exact: true });
  await menu.getByRole("link", { name: "People", exact: true }).click();
  await expect(menu).not.toBeVisible();
  await expect(page.getByRole("heading", { name: "People", exact: true })).toBeVisible();
  expect(await headerNode!.evaluate((node) => node.isConnected)).toBe(true);
  await header.getByRole("button", { name: "Toggle Sidebar", exact: true }).click();
  await expect(menu.getByRole("link", { name: "People", exact: true })).toHaveAttribute("aria-current", "page");
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
});

test("keeps the shell when opening a Person and returning to People", async ({ page }) => {
  await page.goto("/crm");
  await expect(page.getByRole("heading", { name: "Inquiries", exact: true })).toBeVisible();
  await page.getByRole("link", { name: "People", exact: true }).click();
  await expect(page.getByRole("heading", { name: "People", exact: true })).toBeVisible();
  const liveOnly = page.getByRole("checkbox", { name: "Live only", exact: true });
  if (await liveOnly.count()) await expect(liveOnly).not.toBeChecked();
  const personLink = page.locator('main a[href^="/crm/people/"]').first();
  test.skip(await personLink.count() === 0, "Requires an existing development Person");
  const sidebar = page.locator('[data-sidebar="sidebar"]');
  const shellNode = await sidebar.elementHandle();
  await personLink.click();
  await expect(page).toHaveURL(/\/crm\/people\/[^/]+$/);
  await expect(page.locator("header")).toContainText("Person");
  await expect(page.getByRole("heading", { name: "Assessment Submissions", exact: true })).toBeVisible();
  await expect(sidebar).toHaveCount(1);
  expect(await shellNode!.evaluate((node) => node.isConnected)).toBe(true);
  await sidebar.getByRole("link", { name: "People", exact: true }).click();
  await expect(page.getByRole("heading", { name: "People", exact: true })).toBeVisible();
  await expect(sidebar).toHaveCount(1);
  expect(await shellNode!.evaluate((node) => node.isConnected)).toBe(true);
});

test("keeps the shell mounted when staff navigate between workspaces", async ({ page }) => {
  await page.goto("/crm");
  await expect(page.getByRole("heading", { name: "Inquiries", exact: true })).toBeVisible();
  const sidebar = page.locator('[data-sidebar="sidebar"]');
  const shellNode = await sidebar.elementHandle();
  const headerNode = await page.locator("header").elementHandle();
  const documents: string[] = [];
  page.on("request", (request) => {
    if (request.isNavigationRequest() && request.frame() === page.mainFrame()) {
      documents.push(new URL(request.url()).pathname);
    }
  });

  await sidebar.getByRole("link", { name: "People", exact: true }).click();
  await expect(page.getByRole("heading", { name: "People", exact: true })).toBeVisible();
  expect(documents, "sidebar navigation must not load a new document").toEqual([]);
  await expect(sidebar, "navigation must reuse one sidebar").toHaveCount(1);
  await expect(page.locator("header"), "navigation must reuse one header").toHaveCount(1);
  expect(await shellNode!.evaluate((node) => node.isConnected), "sidebar must stay mounted").toBe(true);
  expect(await headerNode!.evaluate((node) => node.isConnected), "header must stay mounted").toBe(true);
  await expect(sidebar.getByRole("link", { name: "People", exact: true })).toHaveAttribute("aria-current", "page");
  await expect(page.locator("header")).toContainText("People");

  await page.locator("header").getByRole("button", { name: "Toggle Sidebar", exact: true }).click();
  await expect(page.locator('[data-state="collapsed"][data-side="left"]')).toHaveCount(1);
  await page.goBack();
  await expect(page.getByRole("heading", { name: "Inquiries", exact: true })).toBeVisible();
  await expect(page.locator('[data-state="collapsed"][data-side="left"]')).toHaveCount(1);
  await expect(page.locator("header")).toContainText("Inquiries");
  await page.goForward();
  await expect(page.getByRole("heading", { name: "People", exact: true })).toBeVisible();
  await expect(page.locator('[data-state="collapsed"][data-side="left"]')).toHaveCount(1);
  expect(documents).toEqual([]);
  expect(await shellNode!.evaluate((node) => node.isConnected)).toBe(true);
  await page.locator("header").getByRole("button", { name: "Toggle Sidebar", exact: true }).click();
  await sidebar.getByRole("link", { name: "Inquiries", exact: true }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("heading", { name: "Inquiries", exact: true })).toBeVisible();
  await expect(sidebar.getByRole("link", { name: "Inquiries", exact: true })).toHaveAttribute("aria-current", "page");
  await expect(sidebar).toHaveCount(1);
  expect(await shellNode!.evaluate((node) => node.isConnected)).toBe(true);
  expect(documents).toEqual([]);
});
