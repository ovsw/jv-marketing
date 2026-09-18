# The Highly Motivated Vercellino Team monorepo

**Monorepo:** The project uses a pnpm workspace with Turborepo. Deployable applications live under `apps/`; shared workspace packages live under `packages/`. Root commands run the matching task across the workspace. Turborepo limits release checks and Vercel builds to affected applications.

[![Next.js][next-js]][next-js-url] [![Sanity][sanity]][sanity-url] [![React][react]][react-url] [![Typescript][typescript]][typescript-url] [![Tailwind][tailwind]][tailwind-url] [![Shadcn][shadcn]][shadcn-url]


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fserge-0v%2Fnext-js-sanity-starter&env=NEXT_PUBLIC_SITE_URL,NEXT_PUBLIC_SITE_ENV,NEXT_PUBLIC_SANITY_API_VERSION,NEXT_PUBLIC_SANITY_PROJECT_ID,NEXT_PUBLIC_SANITY_DATASET,SANITY_API_READ_TOKEN,RESEND_API_KEY,RESEND_AUDIENCE_ID,YOUTUBE_API_KEY&demo-title=Next.js%20Sanity%20Starter&demo-description=Next.js%20Sanity%20Starter%20by%20Schema%20UI&demo-url=https%3A%2F%2Fstarter.schemaui.com)

Set the PHX website Vercel project **Root Directory** to `apps/phx-website` and its **Ignored Build Step** to `npx turbo-ignore`. Add `NEXT_PUBLIC_STUDIO_URL` and the other variables from `apps/phx-website/.env.local.example` in the project settings.

## Monorepo layout

| Path                | Role                                                                |
| ------------------- | ------------------------------------------------------------------- |
| `apps/phx-website/` | PHX Next.js app (pages, API routes, `sanity.types.ts` from TypeGen) |
| `apps/phx-studio/`  | PHX Sanity Studio (`sanity dev`, deploy, and schema extraction)     |
| `apps/crm/`         | Shared CRM Next.js app, database migrations, and Trigger.dev tasks  |
| `packages/`         | Shared workspace packages                                           |

Install and dev commands are meant to be run from the **repository root** unless noted.

## Getting Started

### Installing the project

#### Clone the monorepo

If you prefer not to use the CLI bootstrap:

```bash
git clone https://github.com/ovsw/phxhomeloancom-2026
cd phxhomeloancom-2026
pnpm install
```

Then create a project in [Sanity Manage](https://www.sanity.io/manage), add CORS origins for `http://localhost:3000` and `http://localhost:3333`, and copy `apps/phx-website/.env.local.example` to `apps/phx-website/.env.local` and `apps/phx-studio/.env.local.example` to `apps/phx-studio/.env.local`. Fill in the project ID, dataset, and tokens (see [Environment variables](#environment-variables)).

This project uses [pnpm](https://pnpm.io). To install pnpm globally:

```bash
npm install -g pnpm
```

For dataset import and Studio deploy, log in to the CLI:

```bash
pnpm install --global sanity@latest
sanity login
```

#### 2. Run the project locally

From the **repository root**:

```bash
pnpm dev
```

This starts all applications. To run only one workspace:

```bash
pnpm dev:phx-website # PHX website only
pnpm dev:phx-studio  # PHX Studio only
pnpm dev:crm         # Shared CRM only, on port 3200
```

T3 Code runs **Setup Worktree** when it creates a worktree. This copies local
env files from `T3CODE_PROJECT_ROOT`, then installs dependencies with the frozen
lockfile. To repeat setup from a worktree terminal, run:

```bash
pnpm setup:worktree /absolute/path/to/main-checkout
pnpm install --frozen-lockfile
```

Setup keeps existing destination env files. It prefers source files under
`apps/`, but can copy PHX files left in `frontend/` and `studio/` by the
monorepo move. It also copies `apps/phx-studio/.env.local` and
`apps/crm/.env.local` when present. Missing CRM config does not block PHX setup.

From a Git worktree, use:

```bash
pnpm dev:worktree
```

This assigns and remembers a separate frontend and Studio port pair for that worktree in
`.worktree-ports.json`. The ten available pairs use frontend ports `3100`–`3109` and Studio
ports `4100`–`4109`. Set both `FRONTEND_PORT` and `STUDIO_PORT` before the command to
override the assigned pair; the override is saved to the same file. Both servers listen on all local network interfaces, and the
command prints the frontend's current LAN URL.

To get a clickable Studio Presentation URL for a document (for example after a content edit), run
`pnpm presentation:url <documentType> [slug]`. It uses the Studio port assigned to the current
checkout or worktree, so in a worktree run `pnpm dev:worktree` first.

When Tailscale is connected, the same command also publishes only the frontend through a
private HTTPS Tailscale Serve URL. Its HTTPS ports are `5100`–`5109`—for example, frontend
port `3103` is published on Tailscale port `5103`. Use the exact `Phone HTTPS` URL printed by
the command. The Serve rule is removed when the development servers stop. Tailscale failure
does not prevent local or LAN development. The launcher also allows the discovered LAN and
Tailscale hostnames through Next.js's development-origin protection so hot reload works.
Remote preview does not add Sanity CORS origins automatically. Server-rendered content still
works, but using Draft Mode or Sanity Live directly from a phone requires adding that exact LAN
or `Phone HTTPS` origin with credentials in Sanity Manage; `pnpm setup:sanity-cors` registers
only the bounded localhost origins below.

Register all twenty exact localhost origins with Sanity once:

```bash
pnpm setup:sanity-cors
```

All twenty origins allow credentials. The Next.js app needs them because Draft Mode sends a
Viewer token from `SanityLive` in the browser; Studio needs them for authentication. The token
in `apps/phx-studio/.env` must be able to read, create, and delete the project's CORS origins.

#### 3. Open the app and sign in to the Studio

- Open the Next.js app at [http://localhost:3000](http://localhost:3000)
- Open the Studio and sign in. In this monorepo, Studio runs at [http://localhost:3333](http://localhost:3333) when you use `pnpm dev` from the root (not at `/studio` inside Next.js). Use the same service (Google, GitHub, or email) that you used when you logged in to the CLI.

Set `NEXT_PUBLIC_STUDIO_URL` in `apps/phx-website/.env.local` to `http://localhost:3333` locally, and `SANITY_STUDIO_PREVIEW_URL` in `apps/phx-studio/.env.local` to `http://localhost:3000`, so draft mode and Presentation previews resolve correctly.

Copy `apps/crm/.env.local.example` to `apps/crm/.env.local` before you run the
CRM. Open it at [http://localhost:3200/crm](http://localhost:3200/crm). See the
[CRM development flow](apps/crm/docs/crm-preview-setup.md) for its worker and
test-inquiry steps.

### Adding content with Sanity

#### 1. Extending the Sanity schema

The schema for the `Page` document type lives at `apps/phx-studio/schemas/documents/page.ts` (legacy single-repo path: `sanity/schemas/document/page.ts`). You can [add more document types](https://www.sanity.io/docs/schema-types) to the schema to suit your needs.

#### 2. Adding new components

This project includes components aligned with the [Schema UI](https://schemaui.com/docs/components) library. Visit [Schema UI Docs](https://schemaui.com/docs/how-to-use) to learn how to add new components.

### Deploying your application

#### 1. Configure CORS settings

Add your production URL to the CORS Origins in your Sanity project settings to allow your deployed site to communicate with Sanity. Also add your deployed Studio origin (for example `https://your-hostname.sanity.studio`) if you host Studio separately.

#### 2. Deploy to Vercel

Deploy your website to Vercel:

1. Create a new repository on [GitHub](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github).
2. Push your code to GitHub
3. Create a [new Vercel project](https://vercel.com/new)
4. Connect your GitHub repository and import the project. Set **Root Directory** to `apps/phx-website` and **Ignored Build Step** to `npx turbo-ignore`.
5. Copy the environment variables from `apps/phx-website/.env.local` and paste them to your Vercel project settings. Vercel supports pasting all variables at once. Include `NEXT_PUBLIC_STUDIO_URL` pointing at your hosted Studio URL (no trailing slash).
6. Deploy

#### 3. Deploy Sanity Studio (`sanity deploy`)

Recommended: host Studio on `*.sanity.studio`.

1. Set production values in `apps/phx-studio/.env.local` (or in CI — see below).
2. From `apps/phx-studio`:

```bash
cd apps/phx-studio
sanity deploy
```

After the first deploy, set `SANITY_STUDIO_APP_ID` from the CLI output so later deploys skip the hostname prompt.

#### 4. Production Studio releases

The GitHub `release-gate.yml` workflow checks `main` and pull requests. It does not deploy Studio.
Deploy Studio from `apps/phx-studio/` with the reviewed dataset and the live preview origin:

```bash
SANITY_STUDIO_DATASET=production SANITY_STUDIO_PREVIEW_URL=https://phxhomeloan.com pnpm exec sanity deploy
```

Keep local preview values in local env files. The live site currently uses Sanity project
`hv0545v9`, dataset `production`. Vercel Preview and local development use `development`.
The datasets are separate; edits to development do not change the live site.

#### 5. Deploy Studio to Vercel (optional)

Create a separate Vercel project with **Root Directory** `apps/phx-studio`, **Ignored Build Step** `npx turbo-ignore`, and the Studio environment variables from `apps/phx-studio/.env.local`.

#### 6. Deploy the Shared CRM

The existing CRM Vercel project uses **Root Directory** `apps/crm` and
**Ignored Build Step** `npx turbo-ignore`. The root
`.github/workflows/deploy-crm-worker.yml` workflow migrates the test database
and deploys the Trigger.dev worker when its inputs change. See
[CRM deployment](apps/crm/docs/deployment.md).

### Inviting collaborators

Now that you've deployed your Next.js application and Sanity Studio, you can optionally invite a collaborator to your Studio. Open up [Manage](https://www.sanity.io/manage), select your project and click "Invite project members"

They will be able to access the deployed Studio, where you can collaborate together on creating content.

### Contact form and optional newsletter

The contact form uses Formspark through `apps/phx-website/app/actions/submit-contact-form.ts`.
Its recipient and delivery settings are managed in Formspark. The old
`NEXT_RESEND_TO_EMAIL` and `NEXT_RESEND_FROM_EMAIL` variables do not control contact delivery.

### Configuring Resend (optional)

To use the newsletter form, you need to configure Resend.

1. Create a new [Resend account](https://resend.com/signup)
2. Create a new [API key](https://resend.com/api-keys)
3. Copy the [audience](https://resend.com/audiences) id
4. Set the API key and audience ID in `apps/phx-website/.env.local` as `RESEND_API_KEY` and `RESEND_AUDIENCE_ID` (or in Vercel project settings)

## Sanity TypeGen

To generate the types, run the following commands from **`apps/phx-studio`** (where `sanity.cli.ts` lives):

```bash
cd apps/phx-studio
npx sanity schema extract
```

This generates `schema.json` in `apps/phx-studio`.

```bash
npx sanity typegen generate
```

This generates `apps/phx-website/sanity.types.ts` (output paths are set in `apps/phx-studio/sanity.cli.ts`).

**From the repository root** you can use the workspace shortcut:

```bash
pnpm typegen
```

Run TypeGen whenever you change schemas or queries so the frontend stays in sync.

## Workspace commands

Run the main checks from the repository root:

```bash
pnpm build
pnpm lint
pnpm typecheck
pnpm test
pnpm test:smoke
```

The full test suite is `pnpm test` **and** `pnpm test:smoke`. `pnpm test` runs
only unit and Node tests. `pnpm test:smoke` runs the real-browser smoke tests in
headless Google Chrome (the PHX website footer and the CRM `/crm` route). The
required GitHub "Release gate" runs both, so a result reported after
`pnpm test` alone is not a full-suite result.

Locally, `pnpm test:smoke` builds and serves each app itself. The CRM smoke test
first runs `pnpm --dir apps/crm check:env`, which fails fast when
`CLERK_SECRET_KEY` or `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` is missing, malformed,
or the `[SENSITIVE]` placeholder that `vercel env pull` writes for Sensitive
variables. Set `PLAYWRIGHT_BASE_URL` to run the smoke tests against a
deployment instead. In CI the smoke lane waits for each app's own Vercel
deployment and uses that app's protection bypass secret
(`VERCEL_AUTOMATION_BYPASS_SECRET` for the website,
`CRM_VERCEL_AUTOMATION_BYPASS_SECRET` for the CRM).

The release gate sets `TURBO_SCM_BASE` and `TURBO_SCM_HEAD`, then runs each task with `--affected`. To inspect the same package selection locally, set those revisions and run, for example:

```bash
TURBO_SCM_BASE=origin/main TURBO_SCM_HEAD=HEAD pnpm turbo run test --affected
```

Each task's environment inputs are declared in `turbo.json`. Update that declaration when a task starts reading another environment variable.

### Installing packages

**Frontend:**

```bash
pnpm add <package-name> --filter frontend
```

**Studio:**

```bash
pnpm add <package-name> --filter studio
```

**CRM:**

```bash
pnpm add <package-name> --filter crm
```

**Root:**

```bash
pnpm add -w <package-name>
```

### Updating dependencies

**Update all packages in all workspaces:**

```bash
pnpm up --latest --recursive
```

**Update specific workspace:**

```bash
pnpm up --latest --filter frontend
pnpm up --latest --filter studio
pnpm up --latest --filter crm
```

## Environment variables

SEO title ownership and the future content-cleanup process are documented in
[`docs/seo-title-system.md`](docs/seo-title-system.md).

All environment variables and their descriptions:

**Next.js (`apps/phx-website/.env.local`):**

- `NEXT_PUBLIC_SITE_URL` - your website url. For example, `https://yourwebsite.com` without trailing slash. Used for sitemap.ts , robots.ts , and for client.ts
- `NEXT_PUBLIC_SITE_ENV` - specifies the environment type (development/production) and affects metadata configuration. Setting this to "development" prevents search engine indexing, which is useful for staging environments (e.g., `staging.yourwebsite.com`).
- `NEXT_PUBLIC_STUDIO_URL` - your Sanity Studio url. For example, `https://your-sanity-hostname.sanity.studio` or `http://localhost:3333` locally, without trailing slash. Used for Draft Mode (Open in Studio URL).
- `NEXT_PUBLIC_SANITY_API_VERSION` - your Sanity API version. You don't have to use specific dates, any past or present date is valid, and today's date will always give you the latest version - no need to check release history. For example: YYYY-MM-DD.
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - your Sanity project ID. For example, abc12345.
- `NEXT_PUBLIC_SANITY_DATASET` - your Sanity dataset name. For example, production.
- `SANITY_API_READ_TOKEN` - your Sanity read token for Next.js to fetch data.
- `OG_IMAGE_SECRET` - a required, long random server-only value used to authorize generated sharing images for posts and pages. Local development, previews, and production must each define it. Missing values fail explicitly; there is no development fallback.
- `RESEND_API_KEY` - your RESEND api key for the newsletter form.
- `RESEND_AUDIENCE_ID` - your RESEND audience id for the newsletter form to store contacts.
- `YOUTUBE_API_KEY` - a YouTube Data API v3 key (restrict it to that API in the Google Cloud console). Used at build/revalidate time to fetch video metadata for automatic VideoObject JSON-LD. Optional: when absent, pages render normally without video schema. Remember to add it to the Vercel project settings too.

**Studio (`apps/phx-studio/.env.local`):**

- `SANITY_STUDIO_PREVIEW_URL` - your Next.js site url for preview. For example, `https://yourwebsite.com` or `http://localhost:3000` locally, without trailing slash. Used for Draft Mode in Presentation Tool or iframe preview.
- `SANITY_STUDIO_PROJECT_ID` - your Sanity project ID. For example, abc12345.
- `SANITY_STUDIO_DATASET` - your Sanity dataset name. For example, production.
- `SANITY_STUDIO_HOSTNAME` - your Sanity Studio hostname for `sanity deploy` (unique on `.sanity.studio`).
- `SANITY_STUDIO_API_VERSION` - your Sanity API version (same guidance as above). For example: YYYY-MM-DD.
- `SANITY_AUTH_TOKEN` - your Sanity auth token for Studio deploy via GitHub Actions. Generate in Sanity Manage → API → Tokens with deploy permission.
- `SANITY_STUDIO_APP_ID` - your Sanity Studio app ID from the first `sanity deploy`; avoids repeated hostname prompts.

**Shared CRM (`apps/crm/.env.local`):**

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` - the Clerk application credentials.
- `CRM_STAFF_EMAILS` - verified email addresses that can use the staff CRM.
- `PREVIEW_DATABASE_URL` - the pinned Neon development branch used by the test-inquiry flow.
- `DATABASE_URL` - the CRM intake database, with TLS. Production uses the named
  Neon `production` branch; Preview uses `development`. The websites never receive
  this credential. See [intake setup and tests](apps/crm/docs/intake.md).
- `TRIGGER_SECRET_KEY` - the Trigger.dev environment secret.
- `TEST_EMAIL_ALLOWLIST` - staff addresses that can receive test email.
- `PREVIEW_EMAIL_ENABLED`, `RESEND_API_KEY`, and `RESEND_FROM` - test-email controls.

[react-url]: https://reactjs.org/
[next-js-url]: https://nextjs.org/
[typescript-url]: https://www.typescriptlang.org/
[tailwind-url]: https://tailwindcss.com/
[shadcn-url]: https://ui.shadcn.com/
[sanity-url]: https://www.sanity.io/
[react]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[next-js]: https://img.shields.io/badge/Next.js-20232A?style=for-the-badge&logo=Next.js
[typescript]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[tailwind]: https://img.shields.io/badge/Tailwind_CSS-20232A?style=for-the-badge&logo=tailwindcss&logoColor=319795
[shadcn]: https://img.shields.io/badge/shadcn/ui-20232A?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBjbGFzcz0iaC02IHctNiI+PHJlY3Qgd2lkdGg9IjI1NiIgaGVpZ2h0PSIyNTYiIGZpbGw9Im5vbmUiPjwvcmVjdD48bGluZSB4MT0iMjA4IiB5MT0iMTI4IiB4Mj0iMTI4IiB5Mj0iMjA4IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMzIiPjwvbGluZT48bGluZSB4MT0iMTkyIiB5MT0iNDAiIHgyPSI0MCIgeTI9IjE5MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjMyIj48L2xpbmU+PC9zdmc+&logoColor=ffffff
[sanity]: https://img.shields.io/badge/Sanity-20232A?style=for-the-badge&logo=sanity&logoColor=F97316
