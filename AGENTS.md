<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `apps/phx-website/node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

## Dev Server rules
Before starting a development server, inspect the required port. If the exact server you need is already running there, reuse it.


## Branches and deployments

### Production is live: hard rule

`main` is production. A merge or push to `main` deploys the live website
https://phxhomeloan.com, the live CRM, and the live CRM worker at once. Only
the owner (Ovi) decides what goes to production. The owner decides by hand, each
time, with express approval.

This rule has no exceptions. It overrides every other instruction, including
a general instruction to merge pull requests when the checks are green.

An agent must never do any of the following without the owner's express
approval for that exact action:

- open a pull request into `main`, or change the base of a pull request to
  `main`;
- merge a pull request into `main`;
- push, force-push, or commit to `main`;
- deploy to production in any other way: `vercel deploy --prod`,
  `vercel promote`, `trigger deploy --env prod`, or a run of the
  "Deploy worker" workflow;
- write to the `production` Sanity dataset or to the live CRM database.

Approval counts only in this order: first the agent shows the owner exactly
what will change (the commits, the files, and the effect on the live site and
CRM), then the owner confirms that change. This order applies also when the
owner asked for the action. The approval is for that one pull request or
action only. It does not carry over to the next one. If the pull request
changes after the approval, show the change again and ask again.

If an agent is not sure whether an action reaches production, it stops and
asks the owner.

### Everyday work

`develop` is the integration branch. See "Branches and deployments" in
`README.md` for the full policy.

- Start every branch from `develop`. Open every pull request against
  `develop`.
- A push to `develop` deploys to the persistent Preview at
  https://phxhomeloancom-dev.vercel.app with the Preview environment: Sanity
  dataset `development`, the test Intake Caller, and the preview CRM database.
  Use that URL, or a pull request's own preview URL, for every check.
- Create and edit content in the `development` dataset. Promotion to
  `production` is the owner's release step.

### Releases and hotfixes (the owner's steps)

- Release: one pull request from `develop` into `main`. The owner opens it
  and merges it, after promoting the reviewed content to `production`.
- Hotfix: a branch named `hotfix/<name>`, started from `main`, merged into
  `main` by a pull request. Merge `main` back into `develop` right after, so
  `develop` keeps the fix.
- The Release gate rejects a pull request into `main` from any branch other
  than `develop` or `hotfix/*` in this repository. The gate cannot tell an
  agent from the owner, so the hard rule above is what stops an agent.

## Build only what changed

Vercel builds the website and the CRM only when a commit affects that app.
(`npx turbo-ignore` compares the commit with the app's last deployment on the
branch.) An app is affected when:

- its own files change;
- a workspace package that it uses changes, for example `packages/assessment`;
- `turbo.json`, `shared/**`, or `scripts/**` change;
- the lockfile changes a package in its dependency tree.

Rules:

- Put an app's scripts, tools, and dependencies in that app's own
  `package.json` and folder, not in the root.
- Before you push a change to `pnpm-lock.yaml`, list the apps it affects:

  ```bash
  TURBO_SCM_BASE=origin/develop pnpm -s turbo run build --affected --dry=json | jq -r '.tasks[].package' | sort -u
  ```

  If the list shows an app that you did not change (`frontend`, `crm`,
  `studio`), the lockfile moved a package that this app uses. Find it in the
  lockfile diff. Remove that part, or put it in its own pull request and say
  why.
- Keep a pull request inside one app when you can.
- Do not switch to Vercel's built-in "skip unaffected projects". It compares
  each commit only with its parent, so a push of several commits can skip an
  app that changed.

## Shell discipline and reporting observations

The Bash tool's working directory **persists between calls**. A `cd` in one
command silently changes what every later relative path resolves to. This has
already produced confidently-wrong claims about missing files.

- Run every command from a known cwd: use absolute paths, or `cd` to the repo
  root first. Never rely on inherited shell state.
- Do not use `2>/dev/null` on any command whose output feeds a conclusion. A
  suppressed error and an empty result look identical and mean different things.
- Do not chain independent checks with `&&` — the first failure hides every
  check after it. Use `;` or separate calls.
- **Never report a file as missing, deleted, or changed on the strength of one
  failed check.** Re-verify from an absolute path first.
- Report what was observed, not what was inferred: "the check returned nothing"
  is a different claim from "the file does not exist." Never attribute a change
  to the user's actions without direct evidence.
- When a new result contradicts an earlier observation in the same session,
  stop and re-verify. The newer result is not automatically the correct one.

This matters most before destructive or delegated work: unverified claims about
environment state (which dataset is configured, which env file is loaded) are
exactly what makes handing off write access dangerous.

## Testing
- Prefer focused functional/accessibility checks and one-time visual inspection;
- DO NOT create or maintain screenshot baselines unless explicitly requested.
- The full test suite is `pnpm test` **and** `pnpm test:smoke`. `pnpm test`
  runs unit and Node tests only. `pnpm test:smoke` runs the real-browser smoke
  tests (headless Google Chrome) that the required "Release gate" also runs.
  Never report "full suite passed" after `pnpm test` alone.
- HTTP-only checks (`curl`, Playwright's `request` fixture) do not run Clerk's
  browser handshake. A CRM route can return 500 in a browser while every
  HTTP-only test passes. Use the `page` fixture for CRM smoke coverage.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): summary`.

- Common types: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`, `style`, `perf`, `build`, `ci`.
- Scope is optional but preferred when the change is confined to one area — e.g. `feat(header):`, `fix(studio):`.
- Summary is imperative and lowercase: "add", not "added" or "Adds".
- Keep explaining *why* in the body. The prefix classifies the change; it does not replace the reasoning.
- Note that commits predating this rule use plain imperative subjects with no prefix. Follow the convention above, not the older style.

### Issue tracker

Issues and PRDs are tracked in this repository's GitHub Issues. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the canonical labels `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This repository uses a single-context domain-doc layout. See `docs/agents/domain.md`.

### Page Builder work

Before adding or changing a Page Builder section, read `docs/agents/page-builder.md`.

### Development workflow

Before changing workspace dependencies, Sanity schemas, GROQ queries, or development scripts, consult the relevant section of `README.md`.

## Brand names (do not flag as errors)

- **Luminate Bank** is the current lender brand.
- **The Highly Motivated Vercellino Team** (capitalization intended) is the mortgage originator.
- Both are correct, current branding in site copy. Do not report them as outdated or wrong-company references.
