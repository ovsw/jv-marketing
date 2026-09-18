// Stores one Intake Caller in the database named by DATABASE_URL.
//
// The raw secret arrives only through INTAKE_CALLER_SECRET in the process
// environment and is never printed. Generate it in the same shell that stores
// it in Vercel, for example:
//
//   INTAKE_CALLER_SECRET="$(openssl rand -hex 32)"
//   pnpm --filter crm db:provision:caller \
//     --web-property phxhomeloan.com --brand "PHX Home Loan" --environment live
//   printf '%s' "$INTAKE_CALLER_SECRET" | vercel env add CRM_INTAKE_SECRET production
//
// The script prints only the caller ID. Re-running it with the same secret
// returns the existing caller instead of creating a duplicate.
import { parseArgs } from "node:util";
import { database } from "../db/client";
import { createIntakeCaller } from "../lib/crm/intake-callers";

const { values } = parseArgs({
  options: {
    "web-property": { type: "string" },
    brand: { type: "string" },
    environment: { type: "string" },
  },
});

const secret = process.env.INTAKE_CALLER_SECRET ?? "";
if (!secret) {
  console.error("INTAKE_CALLER_SECRET is required in the process environment.");
  process.exit(1);
}
if (values.environment !== "test" && values.environment !== "live") {
  console.error("--environment must be test or live.");
  process.exit(1);
}

const caller = await createIntakeCaller(database(), {
  secret,
  webProperty: values["web-property"] ?? "",
  brand: values.brand ?? "",
  environment: values.environment,
});
console.log(
  `${caller.created ? "Created" : "Found existing"} ${values.environment} Intake Caller ${caller.id} for ${values["web-property"]}.`,
);
