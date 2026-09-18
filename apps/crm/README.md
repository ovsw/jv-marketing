# VALoansForVets CRM

The Shared CRM is one private internal CRM for the team behind
PHXHomeLoan.com and VALoansForVets.com. This repository owns the staff
interface, database integration, and Trigger.dev worker.

The CRM is the `apps/crm` workspace in the family monorepo. The root
[`CONTEXT.md`](../../CONTEXT.md) and [`docs/adr`](../../docs/adr) directory own
the shared language and architecture decisions.

The current application supports staff-only test inquiries. It does not yet
provide a quiz, an intake API, appointment booking, or marketing funnels.

## Local development

Use Node.js 24.x and pnpm 11.10.0. Run commands from the monorepo root.

```bash
pnpm install --frozen-lockfile
pnpm dev:crm
```

Copy `apps/crm/.env.local.example` to `apps/crm/.env.local` and fill in
the development values before starting the app.

`pnpm dev:crm` starts two processes together: the Next.js app on port 3200
and the Trigger.dev worker. They start at the same time; the app can be
ready a few seconds before the worker connects. Test inquiries finish only
while the worker is connected. The worker needs a one-time
`pnpm trigger:login`. To run the worker on its own, use `pnpm trigger:dev`.

Open <http://localhost:3200/crm> and sign in with a verified address in the
`CRM_STAFF_EMAILS` allowlist. Both processes read `apps/crm/.env.local`;
restart after changing a value. Keep secrets server-only and do not commit
the file.

Useful checks are `pnpm typecheck`, `pnpm lint`, `pnpm test`,
`pnpm test:smoke`, and `pnpm build`. The full test suite is `pnpm test` and
`pnpm test:smoke` together: `pnpm test` covers unit and Node tests only, and
`pnpm test:smoke` opens `/crm` in headless Google Chrome so that Clerk's
browser handshake really runs. `pnpm check:env` (run automatically before the
smoke test and `pnpm dev`) rejects a missing, malformed, or `[SENSITIVE]`
Clerk key with a clear message. `vercel env pull` writes `[SENSITIVE]` for
Sensitive variables, so paste the Clerk development secret key by hand.

## Services

- Clerk authenticates staff. Only verified identities listed in
  `CRM_STAFF_EMAILS` can use the CRM.
- Neon provides the database. Test work uses the pinned development branch;
  the application rejects the production host for this flow.
- Trigger.dev runs the test inquiry worker.
- Resend sends email only to the configured test allowlist when enabled. SMS
  is simulated and never contacts a provider.

The hosted test application is <https://valoansforvets-crm.vercel.app/crm>.
The Vercel project is `prj_YY6MeizqVoVEnsg7MRI41oD572D5` in the paid Studio
ROVST team. The old Vercel alias redirects to the new address.

See [CRM development flow](docs/crm-preview-setup.md) and
[deployment](docs/deployment.md).

## History

The old CRM repository history is part of this monorepo. See
[migration status and verification](docs/plans/crm-migration.md) for the
earlier standalone cutover.
