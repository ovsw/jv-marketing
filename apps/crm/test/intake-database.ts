// Verified through Neon: test-intake-101 (br-steep-lake-ayb4bqf6),
// endpoint ep-patient-shape-ay7l2w6s. This is not an operator-supplied allowlist.
const testHosts = new Set([
  "ep-patient-shape-ay7l2w6s.c-5.us-east-2.aws.neon.tech",
  "ep-patient-shape-ay7l2w6s-pooler.c-5.us-east-2.aws.neon.tech",
]);

export function intakeTestDatabaseUrl(
  value = process.env.INTAKE_TEST_DATABASE_URL,
) {
  const message =
    "INTAKE_TEST_DATABASE_URL must use the verified test-intake-101 endpoint with TLS.";
  let url: URL;
  try {
    if (!value) throw new Error(message);
    url = new URL(value);
  } catch {
    // URL parsing errors can include credentials. Return only a fixed message.
    throw new Error(message);
  }
  if (
    !["postgres:", "postgresql:"].includes(url.protocol) ||
    !testHosts.has(url.hostname) ||
    (url.port !== "" && url.port !== "5432") ||
    url.searchParams.get("sslmode") !== "require" ||
    // Forbid connection options that could override endpoint routing.
    [...url.searchParams.keys()].some(
      (key) => key !== "sslmode" && key !== "channel_binding",
    )
  ) {
    throw new Error(message);
  }
  return value;
}
