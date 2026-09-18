import { describe, expect, it } from "vitest";
import { hashIntakeSecret } from "./intake";
import { intakeCallerRow } from "./intake-callers";

const secret = "a".repeat(64);
const input = {
  secret,
  webProperty: "phxhomeloan.com",
  brand: "PHX Home Loan",
  environment: "live" as const,
};

describe("intakeCallerRow", () => {
  it("stores only the SHA-256 hash of the secret", () => {
    const row = intakeCallerRow(input);
    expect(row.secretHash).toBe(hashIntakeSecret(secret));
    expect(JSON.stringify(row)).not.toContain(secret);
    expect(row.id).toMatch(/^[0-9a-f-]{36}$/);
    expect(row).toMatchObject({
      webProperty: "phxhomeloan.com",
      brand: "PHX Home Loan",
      environment: "live",
    });
  });

  it("rejects a short secret without echoing it", () => {
    let message = "";
    try {
      intakeCallerRow({ ...input, secret: "short-secret" });
    } catch (error) {
      message = (error as Error).message;
    }
    expect(message).toMatch(/at least 32 random bytes/);
    expect(message).not.toContain("short-secret");
  });

  it("rejects a secret with whitespace", () => {
    expect(() =>
      intakeCallerRow({ ...input, secret: `${"a".repeat(40)} ${"b".repeat(40)}` }),
    ).toThrow(/whitespace/);
  });

  it("rejects an unknown environment", () => {
    expect(() =>
      intakeCallerRow({ ...input, environment: "staging" as never }),
    ).toThrow(/test or live/);
  });

  it("rejects an empty web property or brand", () => {
    expect(() => intakeCallerRow({ ...input, webProperty: " " })).toThrow(
      /webProperty/,
    );
    expect(() => intakeCallerRow({ ...input, brand: "" })).toThrow(/brand/);
  });
});
