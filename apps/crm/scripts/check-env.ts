// Fast environment contract check. Fails with a clear message before Next.js
// or Clerk turns an obviously broken value into a deeper runtime error such as
// "Handshake token verification failed". It only checks shape; a value that
// passes here may still be rejected by Clerk. Never print the values.

const SENSITIVE_PLACEHOLDER = "[SENSITIVE]";

// A publishable key is `pk_<env>_` + base64("<frontend api host>$").
function isPublishableKey(value: string) {
  const match = /^pk_(test|live)_([A-Za-z0-9+/=]+)$/.exec(value);
  if (!match) return false;
  const decoded = Buffer.from(match[2], "base64").toString("utf8");
  return /^[a-z0-9.-]+\.[a-z]+\$$/.test(decoded);
}

const contracts = [
  {
    name: "CLERK_SECRET_KEY",
    isValid: (value: string) => /^sk_(test|live)_[A-Za-z0-9]+$/.test(value),
    shape: "sk_test_… or sk_live_…",
  },
  {
    name: "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
    isValid: isPublishableKey,
    shape: "pk_test_… or pk_live_… ending in an encoded Frontend API host",
  },
] as const;

export function envProblems(env: Record<string, string | undefined>): string[] {
  const problems: string[] = [];
  for (const { name, isValid, shape } of contracts) {
    const value = env[name]?.trim().replace(/^["']|["']$/g, "");
    if (!value) {
      problems.push(`${name} is missing. Expected ${shape}.`);
    } else if (value === SENSITIVE_PLACEHOLDER) {
      problems.push(
        `${name} is the "${SENSITIVE_PLACEHOLDER}" placeholder that \`vercel env pull\` writes for Sensitive variables. ` +
          "Paste the real development value from the Clerk dashboard into apps/crm/.env.local.",
      );
    } else if (!isValid(value)) {
      problems.push(`${name} does not look like a Clerk key. Expected ${shape}.`);
    }
  }
  const secretEnvironment = /^sk_(test|live)_/.exec(
    env.CLERK_SECRET_KEY?.trim().replace(/^["']|["']$/g, "") ?? "",
  )?.[1];
  const publishableEnvironment = /^pk_(test|live)_/.exec(
    env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY?.trim().replace(/^["']|["']$/g, "") ?? "",
  )?.[1];
  if (
    secretEnvironment &&
    publishableEnvironment &&
    secretEnvironment !== publishableEnvironment
  ) {
    problems.push(
      "CLERK_SECRET_KEY and NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY target different Clerk environments.",
    );
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
