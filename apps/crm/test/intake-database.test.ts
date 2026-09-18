import { afterEach, describe, expect, it, vi } from "vitest";
import { intakeTestDatabaseUrl } from "./intake-database";

afterEach(() => vi.unstubAllEnvs());

const testHost = "ep-patient-shape-ay7l2w6s-pooler.c-5.us-east-2.aws.neon.tech";
const connection = (host: string) =>
  `postgresql://user:password@${host}/neondb?sslmode=require`;

describe("intake integration database boundary", () => {
  it.each([
    "ep-small-lab-ay9irkqt.c-5.us-east-2.aws.neon.tech",
    "ep-small-lab-ay9irkqt-pooler.c-5.us-east-2.aws.neon.tech",
    "ep-wandering-mud-ayz2xd29.c-5.us-east-2.aws.neon.tech",
    "ep-wandering-mud-ayz2xd29-pooler.c-5.us-east-2.aws.neon.tech",
    "unverified.example",
  ])("rejects %s even when the old host override matches", (host) => {
    vi.stubEnv("INTAKE_TEST_DATABASE_URL", connection(host));
    vi.stubEnv("INTAKE_TEST_DATABASE_HOST", host);
    expect(() => intakeTestDatabaseUrl()).toThrow(
      "verified test-intake-101 endpoint",
    );
  });

  it("accepts only the verified test endpoint in direct or pooled form", () => {
    for (const host of [testHost, testHost.replace("-pooler", "")]) {
      expect(intakeTestDatabaseUrl(connection(host))).toBe(connection(host));
    }
  });

  it("rejects missing, malformed, insecure, and rerouted URLs without exposing them", () => {
    for (const value of [
      "",
      "private credentials",
      connection(testHost).replace("postgresql:", "https:"),
      connection(testHost).replace("sslmode=require", "sslmode=disable"),
      `${connection(testHost)}&options=endpoint%3Dep-small-lab-ay9irkqt`,
    ]) {
      expect(() => intakeTestDatabaseUrl(value)).toThrow(
        "INTAKE_TEST_DATABASE_URL must use the verified test-intake-101 endpoint with TLS.",
      );
    }
  });
});
