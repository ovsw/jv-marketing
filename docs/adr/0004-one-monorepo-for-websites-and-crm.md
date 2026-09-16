---
status: accepted
---

# One monorepo for both websites and the CRM

On 2026-09-16 the owner decided that PHXHomeLoan.com, VALoansForVets.com, and
the Shared CRM live in one pnpm workspace with Turborepo, hosted in the
existing PHXHomeLoan.com repository. The CRM moves in with its history. The
layout is `apps/*` for the five deployable apps (two Next.js sites, two Sanity
studios, the CRM) and `packages/*` for shared code, starting with the
Assessment Definition schema.

This supersedes the "separate repository" part of ADR 0002. The CRM remains
its own deployed app with its own Vercel project, worker, and database.

## Why

- The CRM owns the Assessment Definition (ADR 0003) and both websites must
  render it. In one workspace the schema is an imported package and the type
  checker spans all three apps. Across repos it would be a published artifact
  that can drift.
- CRM decisions were already split across two repositories. The
  PHXHomeLoan.com repo held seven CRM ADRs from an August prototype.
- The two websites will share page-builder and section code, which needs a
  `packages/` home.

## Consequences

- Turborepo is included from the merge, so tests and Vercel builds run only
  for affected apps. Every task must declare the environment variables it
  reads, or the cache can serve stale results.
- The seven August 2026 CRM ADRs of the PHXHomeLoan.com repo are an abandoned
  prototype. They are moved to an archive folder outside the project, labelled
  as not to be used, and are not carried into this repo's decisions.
- This repo's `CONTEXT.md` becomes the single root glossary of the monorepo.
  The PHXHomeLoan.com glossary is retired; its funnel concepts are already
  present here under the canonical terms.
