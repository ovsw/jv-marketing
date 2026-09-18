import { afterEach, describe, expect, it, vi } from "vitest";
import {
  canRetryEmail,
  databaseUrl,
  isStaffEmail,
  previewDatabaseUrl,
  isTestRecipient,
} from "./policy";

afterEach(() => vi.unstubAllEnvs());

describe("CRM trust boundaries", () => {
  it("requires a separate TLS database URL for intake", () => {
    vi.stubEnv("DATABASE_URL", "");
    expect(databaseUrl).toThrow("DATABASE_URL is required");
    for (const url of [
      "not-a-url",
      "https://example.com?sslmode=require",
      "postgresql://user:password@host/db",
    ]) {
      vi.stubEnv("DATABASE_URL", url);
      expect(databaseUrl).toThrow("PostgreSQL URL with TLS");
    }
    const production =
      "postgresql://user:password@production.example/db?sslmode=require";
    vi.stubEnv("DATABASE_URL", production);
    expect(databaseUrl()).toBe(production);
    vi.stubEnv("PREVIEW_DATABASE_URL", production);
    expect(previewDatabaseUrl).toThrow("verified development database");
  });
  it("denies unverified, unlisted, and empty-list access", () => {
    expect(
      isStaffEmail("ovi@ovswebsites.com", false, "ovi@ovswebsites.com"),
    ).toBe(false);
    expect(isStaffEmail("other@example.com", true, "ovi@ovswebsites.com")).toBe(
      false,
    );
    expect(isStaffEmail("ovi@ovswebsites.com", true, "")).toBe(false);
    expect(
      isStaffEmail("Ovi@ovswebsites.com", true, " ovi@ovswebsites.com "),
    ).toBe(true);
  });
  it("rejects production and missing database configuration", () => {
    vi.stubEnv("PREVIEW_DATABASE_URL", "");
    expect(previewDatabaseUrl).toThrow();
    vi.stubEnv(
      "PREVIEW_DATABASE_URL",
      "postgresql://user:password@ep-small-lab-ay9irkqt-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require",
    );
    expect(previewDatabaseUrl).toThrow();
  });
  it("sends test email only to listed staff addresses", () => {
    const list = "ovi@ovswebsites.com, jamesvercellino@gmail.com";
    expect(isTestRecipient("borrower@example.com", list)).toBe(false);
    expect(isTestRecipient("JamesVercellino@gmail.com", list)).toBe(true);
    expect(isTestRecipient("ovi@ovswebsites.com", "")).toBe(false);
  });
  it("stops retries before provider idempotency expires", () => {
    const start = new Date("2026-09-10T00:00:00Z");
    expect(canRetryEmail(start, start.getTime() + 22 * 3600000)).toBe(true);
    expect(canRetryEmail(start, start.getTime() + 23 * 3600000)).toBe(false);
  });
});
