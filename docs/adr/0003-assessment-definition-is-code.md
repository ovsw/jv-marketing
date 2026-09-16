---
status: accepted
---

# The Assessment Definition is code, not editable content

On 2026-09-16 the owner decided that the Assessment Definition lives as code in
this repository, and that no CRM interface lets Team Members edit questions,
options, or required fields. Changes are deliberate releases made by the
marketing consultant, who is also the developer. The website renders a
published artifact of the definition and never fetches it at runtime.

## Considered options

- **Editor-owned quiz in the CRM.** Needs a question editor, draft and
  publish, immutable versions, a live definition endpoint, cache
  invalidation, and a guard so a question referenced by a nurture rule cannot
  be deleted. That is a form builder: the general-purpose, multi-tenant
  product this project exists to replace.
- **Code-owned definition.** One schema that the intake validation, profile
  rules, and nurture selection all reference, so the type checker is the
  guard. Git is the draft, the publish, and the version history.

## Why

The client hired a marketing consultant to own funnel decisions. Self-serve
editing would invite reactive changes and remove the consultant from the
loop. With an agent as the developer, a question change is a small pull
request, so the cost that justifies a builder does not exist here.

## Consequences

- The CRM owns the meaning of every question and option; the website only
  renders and validates against the pinned artifact.
- If wording alone later needs frequent edits, wording can become editable
  content while structure stays in code. This ADR does not block that.
