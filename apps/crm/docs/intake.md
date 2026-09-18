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

Migration `0004` adds four tables. It does not change the existing test tables.
Roll back the application before removing tables. Preserve any intake records;
do not drop tables with submissions to undo an application deployment.

## Integration tests

Create a dedicated Neon branch from development. Set
`INTAKE_TEST_DATABASE_URL` to its connection string and
`INTAKE_TEST_DATABASE_HOST` to that branch's exact endpoint hostname. These
variables are explicit test opt-ins; the suite does not use `DATABASE_URL` or
`PREVIEW_DATABASE_URL`. Never point them at development or production.

With both test variables supplied securely, run:

```sh
pnpm --filter crm test:intake
```

The suite applies migrations, creates random caller secrets and fixture rows,
invokes the HTTP handler in process, and removes only its own rows. It checks
caller authentication, environment and consent attribution, receipt timing,
Person reuse, concurrent submissions, rollback, and pending state after worker
failure. Normal `pnpm --filter crm test` does not connect to Neon.

## Follow-up issues

The handler accepts an injected dispatch function for integration tests.
Production submissions remain `pending` until #103 connects the worker and adds
re-dispatch. #102 adds identical-request replay and the full error-case suite.
For now, a repeated submission ID returns 409 and does not change saved data.
The stored request hash uses the validated request with object keys sorted
recursively; array order is preserved.
