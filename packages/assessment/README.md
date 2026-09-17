# Shared Assessment

`@phx/assessment` owns the PHX purchase/refinance definition, validation, provisional scoring, and intake types. Next.js consumes its TypeScript source directly. There is no build task.

The scoring policy is **pending Jimmy's review**. Its weights are a product heuristic chosen during development, not lending rules or an eligibility model. See [the reviewable policy](../../docs/plans/assessment-version-one.md). This package adds no live form, route, database write, or deployment.

## Website form

Import `currentAssessment` and `DraftAnswersV1` from `@phx/assessment`. Stable question IDs are the keys of `currentAssessment.questions`; option IDs are the keys of each choice question's `options`. Use `getQuestion(id, draft)` when rendering a visible question; it returns the label, kind, schema, required status, and the options allowed on that path. For example, refinance excludes “Not decided” from property state. The static questions catalogue retains all canonical options for historical label lookup. Required means required when returned by `visibleQuestionIds(draft)`.

The form owns the full draft. Keep it when users go back, change an answer, switch paths, or encounter a failed submission. `relevantAnswers(draft)` returns a new object with only visible answers. The answer schema also discards known hidden answers. It rejects unknown question IDs rather than silently accepting them. Purchase and refinance income, occupancy, property type, funding plans, reserves, and source answers stay separate. Credit, recent payment history, marital status, bankruptcy, current mortgage type, and property state share meaning across paths.

Call `score(answers)` with a complete answer set. It validates before scoring and returns the numeric score or `null`, the score band, an Action Plan ID, ordered step IDs, and missing-information question IDs. Resolve labels and guidance from `actionPlans` and `actionSteps`. Display the plan and steps with the score; a high total alone does not mean the person is ready to apply. Unknown purchase timing can require guidance even when the financial total is known.

Money inputs accept `$2,000.50`; rate inputs accept `6.125%`. Blank is not zero. Known zero, unknown, inapplicable, and unanswered are distinct. Lease dates are `{month, year}` or an allowed option ID. `leaseWarningsV1` accepts the current local month/year explicitly so past-date warnings do not change validation or scoring.

## Website server

Import `submitAssessment` from `@phx/assessment/client`. This entry uses Next.js's `server-only` guard; never import it into a form component. The client posts to `/api/v1/assessment-submissions` at the configured CRM origin with a bearer secret. HTTPS is required except on loopback development addresses. Redirects are rejected.

The website server generates a UUID once per submission. Retain that ID, the consent timestamp, and the body for retries. A changed submission needs a new ID. The client does not auto-retry or clear drafts. Clear the form only after its returned `ok: true` receipt. Network failures throw `IntakeTransportError`; HTTP 400, 401, and 409 return typed problem details. Unexpected statuses, malformed responses, and mismatched receipts throw. Cancellation is supported; the timeout is 30 seconds, including when a caller also supplies a cancellation signal.

The request has `submissionId`, `assessmentVersion`, `contact`, `consent`, `answers`, `reportedScore`, and `actionPlan`. `reportedScore: null` means essential scoring information is unknown. The score and plan must match the versioned answers. The package stores no personal data.

Contact requires email, first name, and last name; phone is optional except with SMS consent. Consent carries the exact displayed promise, selected email/SMS channels, and an ISO timestamp with time zone. Empty channels are allowed. This package defines the evidence format, not approved consent copy. The website must supply the actual text shown. Brand, environment, and form-source fields are not accepted from the body; the CRM resolves them from its Intake Caller.

Success contains only `submissionId` and `receivedAt`. Problem details follow RFC 9457 with optional `errors`, each containing `path`, `code`, and `message`. `parseSubmission` exposes stable application error codes for mapping errors to form steps. The CRM route and persistence are separate work in #101 and #102.

## Versions and checks

Version one is under development and has not been released. After release, keep its definition, contract behavior, and fixture files unchanged. Add a new version and fixtures for later changes, retaining support for every prior version. API path version and Assessment Version are separate concepts.

Run from the repository root:

```sh
pnpm --filter @phx/assessment typecheck
pnpm --filter @phx/assessment lint
pnpm --filter @phx/assessment test
pnpm --filter frontend exec vitest run lib/assessment.test.ts
pnpm --filter frontend typecheck
```
