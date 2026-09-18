# Assessment intake

The website server calls `POST /api/v1/assessment-submissions` through
`@phx/assessment/client`. It sends an Intake Caller bearer secret over HTTPS.
The CRM stores only the SHA-256 hash of each secret. Generate caller secrets
from at least 32 random bytes. Do not use passwords as caller secrets.

Each caller row owns its Web Property, brand, and `test` or `live` environment.
The body cannot override those fields. The route has no CORS headers and rejects
requests with browser Origin or Fetch Metadata headers. Clerk sessions do not
authenticate this route.

The CRM validates the shared Assessment contract, then uses one Neon HTTP batch
transaction to create or find the Person, insert the submission, and record
consent. Email matching uses the exact lowercased address. Later submissions
preserve the Person's name and phone; each submission retains its own contact
snapshot. The route returns only the submission ID and database receipt time,
after the transaction commits. It does not update existing submissions.

## Database configuration

`DATABASE_URL` controls intake. Require TLS in the URL. In Vercel, Production
must use the named Neon `production` branch and Preview must use `development`.
Caller provisioning and the first live deployment belong to #105. Do not set a
live secret in Preview. The staff test inquiry flow and its worker continue to
use `PREVIEW_DATABASE_URL`, which rejects any host other than the verified
development endpoint.

With `DATABASE_URL` supplied securely in the process environment, run from the
repository root:

```sh
pnpm --filter crm db:migrate:intake
```

Migration `0004` adds four tables. Migration `0005` adds a nullable worker
`run_id` to Assessment Submissions. Apply migrations before enabling the intake
worker. Neither migration changes the existing test tables. To roll back the
application, retain the column and all intake records.

## Integration tests

Set `INTAKE_TEST_DATABASE_URL` to the connection string for the dedicated
`test-intake-101` branch (`br-steep-lake-ayb4bqf6`). The test helper permits only
its verified endpoint, `ep-patient-shape-ay7l2w6s`, in direct or pooled form.
It rejects other hosts before connecting or running migrations. It does not use
`DATABASE_URL`, `PREVIEW_DATABASE_URL`, or an environment-based host override.

If this branch is replaced, verify the replacement's branch and endpoint through
Neon before updating the allowlist in `test/intake-database.ts`. Never add a
development or production endpoint to that list.

With the test connection string supplied securely, run:

```sh
pnpm --filter crm test:intake
```

The suite applies migrations, creates random caller secrets and fixture rows,
invokes the HTTP handler in process, and removes only its own rows. It checks
caller authentication, environment and consent attribution, receipt timing,
Person reuse, concurrent submissions, rollback, and pending state after worker
failure. It also checks validation errors, identical retries, conflicting
requests, and receipt isolation between callers. Normal `pnpm --filter crm test`
does not connect to Neon.

## Validation and retries

Missing or unknown caller secrets return the same 401 problem response.
Invalid submissions return 400 with an RFC 9457 `application/problem+json`
body. Each entry in `errors` has a `path`, `code`, and `message`. Invalid JSON
uses `invalid_json`; an incorrect content type uses `invalid_content_type`.
Both use an empty path because the error applies to the whole body. Field
errors use the shared contract's stable codes and paths.

A retry from the same Intake Caller with the same submission ID and validated
body returns 201 with the original ID and receipt time. Object key order does
not change request identity. Changing array order, such as reordering consent
channels, changes the body. A changed body or different caller returns 409
without changing saved data or revealing the original receipt.
Concurrent identical requests create one submission and one Consent Record.
Only the request that creates the submission dispatches work.

## Worker dispatch and recovery

The route uses Next.js `after()` to dispatch `assessment-submission` after
sending the 201 receipt. It sends only the submission ID. Both the route and
the recovery task use the global key `assessment-submission:<submissionId>`.
A dispatch failure does not change the receipt or clear the pending state.
An identical HTTP retry returns the original receipt without another dispatch.

The worker changes `pending` to `handled` and stores its run ID in one update.
It does not change answers, contact details, consent, or the receipt time, and
it sends no messages. A repeated run preserves the first handling run ID,
including after Trigger.dev's idempotency retention window expires.

`redispatch-assessment-submissions` runs every five minutes. It selects pending
submissions more than one minute old in batches of 100. It advances past failed
dispatches and tries them again on the next scheduled run. A submitted job stays
pending until the worker handles it. The task output reports `dispatched` and
`failed` counts. If `DATABASE_URL` is absent, it reports
`skipped: intake_not_configured` and does no work.

The intake worker must use the same `DATABASE_URL` as the sending CRM deployment.
Its Trigger environment must match that deployment's `TRIGGER_SECRET_KEY`.
The existing staff test tasks keep using `PREVIEW_DATABASE_URL`. The deployment
workflow still migrates that test database; provisioning and migrating the live
intake database, setting its worker variables, and approving the first live
deployment belong to #105.
