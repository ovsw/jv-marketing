function emailList(value: string) {
  return value
    .split(",")
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
}

export function isStaffEmail(
  email: string,
  verified: boolean,
  allowlist = process.env.CRM_STAFF_EMAILS ?? "",
) {
  return verified && emailList(allowlist).includes(email.toLowerCase());
}

export function databaseUrl() {
  const value = process.env.DATABASE_URL;
  if (!value) throw new Error("DATABASE_URL is required for intake.");
  // Never include the supplied URL in errors: it contains database credentials.
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    throw new Error("DATABASE_URL must be a PostgreSQL URL with TLS.");
  }
  if (
    !["postgres:", "postgresql:"].includes(url.protocol) ||
    !["require", "verify-full"].includes(url.searchParams.get("sslmode") ?? "")
  ) {
    throw new Error("DATABASE_URL must be a PostgreSQL URL with TLS.");
  }
  return value;
}

export function previewDatabaseUrl() {
  const value = process.env.PREVIEW_DATABASE_URL;
  if (!value) throw new Error("PREVIEW_DATABASE_URL is required.");
  const url = new URL(value);
  // This first test flow is pinned to the verified development branch.
  if (
    url.hostname !==
      "ep-wandering-mud-ayz2xd29-pooler.c-5.us-east-2.aws.neon.tech" ||
    url.searchParams.get("sslmode") !== "require"
  ) {
    throw new Error(
      "The CRM test flow requires the verified development database with TLS.",
    );
  }
  return value;
}

// Test email goes only to a staff address on this list. Never to a borrower.
export function isTestRecipient(
  email: string,
  allowlist = process.env.TEST_EMAIL_ALLOWLIST ?? "",
) {
  return emailList(allowlist).includes(email.toLowerCase());
}

export function canRetryEmail(createdAt: Date, now = Date.now()) {
  // Resend keeps idempotency keys for 24 hours. Leave a one-hour margin.
  return now - createdAt.getTime() < 23 * 60 * 60 * 1000;
}
