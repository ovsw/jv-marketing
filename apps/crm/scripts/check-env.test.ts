import { describe, expect, it } from "vitest";
import { envProblems } from "./check-env";

const valid = {
  CLERK_SECRET_KEY: "sk_test_abcDEF123",
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: "pk_test_abcDEF123=",
};

describe("envProblems", () => {
  it("accepts well-formed Clerk keys", () => {
    expect(envProblems(valid)).toEqual([]);
  });

  it("rejects the [SENSITIVE] placeholder with a specific message", () => {
    const problems = envProblems({ ...valid, CLERK_SECRET_KEY: '"[SENSITIVE]"' });
    expect(problems).toHaveLength(1);
    expect(problems[0]).toMatch(/CLERK_SECRET_KEY is the "\[SENSITIVE\]" placeholder/);
    expect(problems[0]).toMatch(/vercel env pull/);
  });

  it("rejects missing and malformed keys without echoing the value", () => {
    const problems = envProblems({ CLERK_SECRET_KEY: "changeme-secret-value" });
    expect(problems).toEqual([
      "CLERK_SECRET_KEY does not look like a Clerk key. Expected sk_test_… or sk_live_….",
      "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY is missing. Expected pk_test_… or pk_live_….",
    ]);
    expect(problems.join("\n")).not.toContain("changeme-secret-value");
  });
});
