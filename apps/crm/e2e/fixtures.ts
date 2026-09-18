import { test as base } from "@playwright/test";

export { expect } from "@playwright/test";

// Vercel deployment protection bypass, sent only to the app's own origin.
// A global `extraHTTPHeaders` setting would also send the secret to third
// parties such as Clerk's Frontend API during the browser handshake redirect.
export const test = base.extend<{ vercelBypass: void }>({
  vercelBypass: [
    async ({ context, baseURL }, use) => {
      const secret = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
      if (secret && baseURL) {
        const origin = new URL(baseURL).origin;
        await context.route(
          (url) => url.origin === origin,
          (route) =>
            route.continue({
              headers: {
                ...route.request().headers(),
                "x-vercel-protection-bypass": secret,
                "x-vercel-set-bypass-cookie": "true",
              },
            }),
        );
      }
      await use();
    },
    { auto: true },
  ],
});
