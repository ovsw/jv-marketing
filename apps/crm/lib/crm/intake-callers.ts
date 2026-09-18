import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import type { NeonHttpDatabase } from "drizzle-orm/neon-http";
import { intakeCallers } from "../../db/schema";
import { hashIntakeSecret } from "./intake";

export type IntakeCallerInput = {
  secret: string;
  webProperty: string;
  brand: string;
  environment: "test" | "live";
};

// 32 random bytes encoded as hex or base64url are at least 43 characters.
const MIN_SECRET_LENGTH = 43;

/** Builds the row the CRM stores. The raw secret never leaves this function. */
export function intakeCallerRow(input: IntakeCallerInput) {
  const secret = input.secret;
  if (/\s/.test(secret)) {
    throw new Error("The Intake Caller secret must not contain whitespace.");
  }
  if (secret.length < MIN_SECRET_LENGTH) {
    throw new Error(
      "The Intake Caller secret must come from at least 32 random bytes.",
    );
  }
  if (input.environment !== "test" && input.environment !== "live") {
    throw new Error("The Intake Caller environment must be test or live.");
  }
  const webProperty = input.webProperty.trim();
  const brand = input.brand.trim();
  if (!webProperty) throw new Error("webProperty is required.");
  if (!brand) throw new Error("brand is required.");
  return {
    id: randomUUID(),
    secretHash: hashIntakeSecret(secret),
    webProperty,
    brand,
    environment: input.environment,
  };
}

/**
 * Stores a new Intake Caller. A repeated run with the same secret is a no-op
 * and returns the existing caller's ID, so provisioning is safe to retry.
 */
export async function createIntakeCaller(
  db: NeonHttpDatabase,
  input: IntakeCallerInput,
) {
  const row = intakeCallerRow(input);
  const [created] = await db
    .insert(intakeCallers)
    .values(row)
    .onConflictDoNothing({ target: intakeCallers.secretHash })
    .returning({ id: intakeCallers.id });
  if (created) return { id: created.id, created: true };
  const [existing] = await db
    .select({ id: intakeCallers.id })
    .from(intakeCallers)
    .where(eq(intakeCallers.secretHash, row.secretHash))
    .limit(1);
  return { id: existing.id, created: false };
}
