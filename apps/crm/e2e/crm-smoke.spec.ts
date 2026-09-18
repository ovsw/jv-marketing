import { expect, test } from "./fixtures";

// Clerk puts handshake tokens in the query string. Keep them out of test logs.
function withoutQuery(url: string) {
  const { origin, pathname } = new URL(url);
  return `${origin}${pathname}`;
}

// Real-browser smoke gate. The HTTP `request` fixture never runs Clerk's
// browser handshake, so an invalid CLERK_SECRET_KEY only surfaces when a
// browser navigates to a Clerk-protected route. This test must stay on the
// `page` fixture and must stay in `test:smoke`.
test("opens /crm in Chrome without a server error or uncaught browser error", async ({
  page,
}) => {
  const pageErrors: string[] = [];
  const serverErrors: string[] = [];
  page.on("pageerror", (error) => pageErrors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 500) {
      serverErrors.push(`${response.status()} ${withoutQuery(response.url())}`);
    }
  });

  const response = await page.goto("/crm");

  expect(response, "navigation to /crm produced no document response").not.toBeNull();
  expect(response!.status(), `document response for ${withoutQuery(response!.url())}`).toBeLessThan(
    500,
  );

  // Signed out, the CRM either lands on the Clerk sign-in page or renders
  // /crm itself. Both are acceptable; a human login is never required.
  await expect(page).toHaveURL(/\/(sign-in|crm)(\/|\?|$)/);
  if (new URL(page.url()).pathname.startsWith("/sign-in")) {
    // clerk-js must load and mount the sign-in form in the browser.
    await expect(page.locator(".cl-rootBox").first()).toBeVisible({ timeout: 30_000 });
  } else {
    await expect(page.getByRole("main")).toBeVisible();
  }

  expect(serverErrors, "5xx responses during navigation").toEqual([]);
  expect(pageErrors, "uncaught browser errors").toEqual([]);
});
