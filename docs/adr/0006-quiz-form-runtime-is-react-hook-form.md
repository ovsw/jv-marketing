---
status: proposed
---

# The website quiz renders the Assessment with React Hook Form

On 2026-09-18 the marketing consultant proposed, for the owner's approval on
issue #95, that the PHXHomeLoan.com Assessment form runs on React Hook Form,
which the website already installs, and validates each step with the
per-question Zod schemas that the shared Assessment package exports. No new
form dependency is added. The shared package owns the questions, the branch
rules, the visible-question list, the scoring, and the submission contract;
the form library only holds the draft answers, validates the current step,
and reports errors next to the right input.

## Considered options

- **TanStack Form.** Capable, and it accepts Standard Schema validators such
  as Zod directly. Rejected because it adds a dependency and a second form
  idiom beside the shadcn form primitives already in the website, and its
  strengths, field-level schema validators and form-level composition,
  duplicate work the shared package already does. Nothing the quiz needs is
  missing from React Hook Form.
- **No form library, plain React state.** Rejected because the existing form
  primitives already wire labels, descriptions, and error messages to inputs
  with the right accessibility attributes, and rebuilding that by hand is
  more code for no gain.

## How the pieces fit

- One form instance holds the whole draft: the flat answers record the shared
  package expects, plus the contact and consent blocks. Answers to questions
  that later become hidden stay in the draft, so Back and path switches never
  lose input. The shared package strips hidden answers at submit time and
  its scoring ignores them, so retained answers are harmless.
- Moving to the next step validates only the questions on the current step.
  A small resolver reads the names React Hook Form asks it to check, looks up
  each question's schema from the shared package for the current draft, and
  returns the package's field codes as the error type. No static
  whole-form schema exists, because the visible questions depend on earlier
  answers, so the generic Zod resolver adapter is not used for the quiz.
- The final step parses the full submission with the shared package on the
  client, shows the Readiness Score and Action Plan at once, and sends the
  submission through a server action that calls the shared typed client.
  Field errors in a problem-details response map back onto the form by path.

## Consequences

- The website bumps react-hook-form to 7.87.0 or later before the quiz
  ships. That release fixes module resolution under a `react-server`
  condition in Next.js builds.
- Quiz placement, step layout, auto-advance, and keyboard behaviour are not
  decided here. They belong to issue #94.
