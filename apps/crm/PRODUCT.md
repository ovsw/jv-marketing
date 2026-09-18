# Shared CRM

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Team Members use the private CRM to review and act on information that people
submit through the team’s Web Properties.

## Product Purpose

The Shared CRM keeps one durable Person record across PHXHomeLoan.com and
VALoansForVets.com. It lets staff review each Person’s history, including the
Assessment Submissions that led to follow-up.

## Operating Context

Staff use the CRM as an authenticated internal workspace. Assessment
Submissions can come from live or test environments. Live records are the
normal working set; test records stay available for explicit inspection.

## Capabilities and Constraints

- Clerk authenticates staff. Only verified identities in `CRM_STAFF_EMAILS`
  can use the CRM.
- The CRM owns intake and stored Person records. Web Properties never share
  the CRM database.
- Assessment labels, scoring, and Action Plans come from the immutable shared
  Assessment Version that rendered the submission.
- An Assessment Submission is immutable after receipt.
- Test-environment submissions are hidden from staff views by default.
- Use the project glossary in the repository root for domain terms.

## Brand Commitments

The CRM is the internal workspace for The Highly Motivated Vercellino Team.
Luminate Bank is the current lender brand. PHXHomeLoan.com and
VALoansForVets.com are distinct Origin Brands.

## Evidence on Hand

The repository contains the shared domain glossary, architecture decision
records, Assessment Version one contract, intake route, database schema, and
existing CRM workspace components. Do not invent customer claims or lending
outcomes.

## Product Principles

- Keep a Person’s history together across Origin Brands.
- Preserve the exact meaning of every submitted Assessment Version.
- Keep live work prominent and test data available by deliberate choice.
- Enforce staff access before reading CRM data.

## Accessibility & Inclusion

Use semantic HTML, visible keyboard focus, descriptive controls, and layouts
that work on small and large screens.
