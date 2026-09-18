// Fast environment contract check. Fails with a clear message before Next.js
// or Clerk turns an obviously broken value into a deeper runtime error such as
// "Handshake token verification failed". It only checks shape; a value that
// passes here may still be rejected by Clerk. Never print the values.

const SENSITIVE_PLACEHOLDER = "[SENSITIVE]";

const contracts = [
  { name: "CLERK_SECRET_KEY", pattern: /^sk_(test|live)_[A-Za-z0-9]+$/, shape: "sk_test_… or sk_live_…" },
  { name: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY", pattern: /^pk_(test|live)_[A-Za-z0-9=]+$/, shape: "pk_test_… or pk_live_…" },
] as const;

export function envProblems(env: Record<string, string | undefined>): string[] {
  const problems: string[] = [];
  for (const { name, pattern, shape } of contracts) {
    const value = env[name]?.trim().replace(/^["']|["']$/g, "");
    if (!value) {
      problems.push(`${name} is missing. Expected ${shape}.`);
    } else if (value === SENSITIVE_PLACEHOLDER) {
      problems.push(
        `${name} is the "${SENSITIVE_PLACEHOLDER}" placeholder that \`vercel env pull\` writes for Sensitive variables. ` +
          "Paste the real development value from the Clerk dashboard into apps/crm/.env.local.",
      );
    } else if (!pattern.test(value)) {
      problems.push(`${name} does not look like a Clerk key. Expected ${shape}.`);
    }
  }
  return problems;
}

if (process.argv[1] && import.meta.url === new URL(process.argv[1], "file://").href) {
  const problems = envProblems(process.env);
  if (problems.length > 0) {
    console.error("CRM environment check failed:");
    for (const problem of problems) console.error(`- ${problem}`);
    console.error("This check validates the shape only. It does not prove the key works with Clerk.");
    process.exit(1);
  }
}
