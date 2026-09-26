# Automation engine

The Automation Engine (spec #148): CIB seven Community Edition 2.2.0, Run
distribution with the webclient (Tasklist, Cockpit, Admin, Modeler), on
Railway, with its database on Neon. This app holds the engine image, its
configuration, the disposable smoke-test process, and the operations
commands. It has no business code. The Worker lives in `apps/automation-worker`.

## What runs where

| Piece | Where | Notes |
| --- | --- | --- |
| Engine (`automation-engine`) | Railway project `jv-automation`, US West | One replica. Health check `/engine-rest/engine` at deploy time. Restart on failure, 10 retries. |
| Worker (`automation-worker`) | Same project | Reaches the engine over the private network: `http://automation-engine.railway.internal:8080/engine-rest`. |
| Engine database | Neon organization "JV Automation", project `automation` (`green-star-37476368`, AWS us-west-2, Oregon, Postgres 17), Launch plan | One branch per environment, database `engine` owned by one role per environment. Direct (non-pooled) endpoint over TLS. Branch `development`: 0.25–1 CU, suspends after 5 idle minutes. |

Environments: `development` only so far. Staging and production follow in #153 and #156.

The engine starts in CIB seven's production mode with
`configuration/production.yml`, which replaces the stock file: authorization
checks and the password policy are on, the REST API needs a login
(`composite`: webclient tokens or Basic auth), the example process and CORS
are off, and the Modeler is on. The AI agent is off (`AI_AGENT_ENABLED=false`).

Railway service settings and non-secret variables are in `.railway/railway.ts`
at the repository root. Secret values are never in Git; the file keeps them
with `preserve()`.

## Commands

Run from the repository root. They read `apps/automation-engine/.env.development.local`
(written by the setup wizard, gitignored; keys listed in `.env.development.example`).
The Railway and Neon CLIs must be logged in, and the repository root linked:
`railway link --project jv-automation --environment development`.

| Command | What it does |
| --- | --- |
| `railway config plan` / `railway config apply` | Show / apply the service settings in `.railway/railway.ts` to the linked environment. |
| `pnpm automation:unpark` | Deploy the engine and the Worker to development from this checkout; wait until the engine answers. |
| `pnpm automation:park` | Remove the development deployments. Services and variables stay; the Neon compute scales to zero by itself after 5 idle minutes. |
| `pnpm automation:bootstrap` | Create or update the machine logins `ops` and `worker` with the admin login. Run after the first boot and after changing a machine password. |
| `pnpm automation:smoke` | End-to-end check: deploy the test process, start it with a fake Person ID, Worker completes the external task, complete the user task, timer fires, instance ends. |
| `pnpm automation:smoke --timer PT3M --hold` then `--resume <id>` | Restart drill: hold an instance with the timer pending and the user task open, restart the engine, then finish it. |

Until the Cloudflare Access seam exists (#151), `ENGINE_URL` is the
Railway-generated domain and the smoke command uses the `ops` machine login.

## Set up an environment

1. Create the Railway environment and apply `.railway/railway.ts` to it.
2. Create the Neon branch, the `engine` database, and its role
   (`engine_<environment>`); set `DB_URL`
   (`jdbc:postgresql://<direct host>/engine?sslmode=verify-full&sslfactory=org.postgresql.ssl.DefaultJavaSSLFactory`)
   and `DB_USERNAME` on the engine service.
3. Run the secrets wizard. It shows each generated value once for the
   password manager and writes it to Railway. Every secret must be set
   **before the first boot**: the admin login is created only on first start,
   and without it the engine writes the well-known `demo` login.
4. Deploy (`pnpm automation:unpark` for development), generate the public
   domain (`railway domain --service automation-engine`), then run
   `pnpm automation:bootstrap` and `pnpm automation:smoke`.

## Credentials inventory

Names, owners, and places only. Never write a value here, in an issue, or in a log.
Rotate every 90 days and on any staff change.

| Credential | Used by | Owner | Stored in | How to rotate |
| --- | --- | --- | --- | --- |
| Neon role `engine_development` password | Engine (development) | Ovi | Railway `automation-engine` → `DB_PASSWORD`; password manager; Neon console | Reset the role password in Neon, rerun the wizard's database stage, redeploy the engine. |
| Engine admin login `ovi` | Ovi; `automation:bootstrap` | Ovi | Password manager; local env file (`ENGINE_ADMIN_*`); Railway `CAMUNDA_BPM_ADMINUSER_*` (read on first boot only) | Change it in the webclient Admin, then update the password manager and the local env file. Changing the Railway variable later has no effect. |
| Webclient token secret | Engine | Ovi | Railway `automation-engine` → `CIBSEVEN_WEBCLIENT_AUTHENTICATION_JWTSECRET`; password manager | New value in Railway, redeploy. Signs everyone out. |
| Engine machine login `ops` | Smoke and promote commands | Ovi | Password manager; local env file (`ENGINE_OPS_*`) | New value in the env file, run `pnpm automation:bootstrap`. |
| Engine machine login `worker` | Worker | Ovi | Railway `automation-worker` → `ENGINE_WORKER_PASSWORD`; password manager; local env file | New value in Railway and the env file, run `pnpm automation:bootstrap`, redeploy the Worker. |
| Railway CLI login | Ovi's machine | Ovi | `~/.railway/config.json` | `railway logout`, `railway login`. |
| Neon CLI login | Ovi's machine | Ovi | `~/.config/neon/` | `neonctl auth`. |

## Known limits

- Railway runs the health check only while a deploy goes live. A crashed
  engine is restarted; a hung engine that keeps running is not. Detection of a
  hung engine belongs to the monitoring work in #158.
- Neon is not on CIB seven's list of tested databases. The first boot on the
  development branch is the compatibility test.
- Drill results (restart with a pending timer, killed process, park and
  unpark) are recorded as dated comments on #149.
