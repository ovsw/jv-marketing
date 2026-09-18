# Trigger.dev setup

The shared CRM uses Trigger.dev project `proj_zufesthoajsdxpvfeqsr`. Tasks and
`trigger.config.ts` live in `apps/crm/`. They support Assessment intake,
test inquiries, and simulated SMS.

## Local worker

1. Run `pnpm install --frozen-lockfile`.
2. Run `pnpm trigger:login` and complete CLI login.
3. Run `pnpm trigger:dev` and keep the worker running.
4. In the Development tasks page, test `infrastructure-check` with `{}`. It
   should return `status: "ok"` and `environment: "DEVELOPMENT"`.

The worker reads `apps/crm/.env.local` at startup. Keep secrets out of
`NEXT_PUBLIC_*` variables.

## Hosted worker

The hosted `prod` worker is a TEST worker. The single owner is
`.github/workflows/deploy-crm-worker.yml`, which deploys on `main` pushes that
touch worker or database files. If a manual deployment is required:

```sh
pnpm --dir apps/crm exec trigger deploy --env prod
```

Set `PREVIEW_DATABASE_URL`, `PREVIEW_EMAIL_ENABLED`, `RESEND_API_KEY`,
`RESEND_FROM`, and `TEST_EMAIL_ALLOWLIST` in the Trigger.dev `prod`
environment. Vercel `TRIGGER_SECRET_KEY` must be the matching `prod` secret.
Keep the worker on the pinned Neon development branch.

`test-inquiry` receives only an inquiry ID, sends an allowlisted test email,
and records simulated SMS. `simulate-sms` accepts no borrower data and makes
no provider call. These tasks are not an intake API, booking system, or
production messaging integration.

## Assessment intake tasks

`assessment-submission` accepts only a submission ID. It marks that saved
submission handled and records the worker run ID without sending messages.
`redispatch-assessment-submissions` retries pending dispatches every five minutes.
It reports a skipped run until `DATABASE_URL` is set in the worker environment.
It never falls back to `PREVIEW_DATABASE_URL`.

Apply intake migrations before setting `DATABASE_URL`. Use the same database
as the CRM deployment that dispatches to this Trigger environment. The existing
workflow deploys both intake tasks and their shared dispatch code. Live intake
configuration remains part of #105. See [intake setup](intake.md).
