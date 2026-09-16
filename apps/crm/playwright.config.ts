import { defineConfig } from "@playwright/test";

const baseURL = process.env.PLAYWRIGHT_BASE_URL ?? "http://localhost:3200";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL,
    channel: "chrome",
    trace: "off",
  },
  webServer: {
    command: process.env.PLAYWRIGHT_REUSE_BUILD
      ? "pnpm start --port 3200"
      : "pnpm build && pnpm start --port 3200",
    url: "http://localhost:3200",
    reuseExistingServer:
      !process.env.CI && !process.env.PLAYWRIGHT_REUSE_BUILD,
    timeout: 180_000,
  },
});
