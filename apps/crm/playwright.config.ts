import { defineConfig } from "@playwright/test";

// CI points the smoke test at the Vercel deployment for the commit instead of
// rebuilding; locally Playwright still builds and serves the app itself.
// The Vercel protection bypass header is added per origin in e2e/fixtures.ts.
const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3200";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL,
    // Real Google Chrome. Clerk's browser handshake only runs during a
    // browser navigation, so the smoke gate must not fall back to an HTTP client.
    channel: "chrome",
    headless: true,
    trace: "off",
    screenshot: "off",
    video: "off",
  },
  webServer: process.env.PLAYWRIGHT_BASE_URL
    ? undefined
    : {
        // check:env fails fast on placeholder credentials before the build.
        command: process.env.PLAYWRIGHT_REUSE_BUILD
          ? "pnpm check:env && pnpm start --port 3200"
          : "pnpm check:env && pnpm build && pnpm start --port 3200",
        url: baseURL,
        reuseExistingServer: !process.env.CI && !process.env.PLAYWRIGHT_REUSE_BUILD,
        timeout: 180_000,
      },
});
