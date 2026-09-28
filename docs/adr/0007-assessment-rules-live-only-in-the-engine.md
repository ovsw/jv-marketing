---
status: accepted
---

# Assessment rules live only in the engine's DMN tables

On 2026-09-28 the owner decided that the rules that turn Assessment answers
into an Action Plan (Audience Segment, Readiness Factors, Comfortable Payment
Range, Next Step, and concrete steps) live only as DMN decision tables in the
Automation Engine. The website never calculates a result. After the intake app
stores a submission, it asks the engine, through the Worker, to evaluate the
decisions and returns the Action Plan to the website in the same request, so
the person sees it on screen. If the engine does not answer, the screen says
the plan is on its way by email, and the engine evaluates and sends it when it
is back. The Readiness Score is retired.

## Considered options

- **The website calculates the result in code, and the engine runs only the
  follow-up.** Rejected: the rules would exist twice and drift apart, so the
  screen and the emails could disagree.
- **The website runs the same DMN files with a JavaScript DMN library.**
  Rejected: a second runtime can read FEEL differently, and it adds a
  dependency for a call the engine already answers quickly.

## Consequences

- Changing a rule is one table change, promoted like any flow; the screen and
  the emails change together.
- The intake handoff in the automation spec (#148, #155) is no longer only
  asynchronous: it also needs a synchronous evaluation that returns the
  Action Plan. The intake app still stores first (ADR 0005).
- The result no longer comes from the website, so the intake app stops
  checking a website-reported score and plan.
- As with ADR 0003, the tables change only through a deliberate release by
  the marketing consultant. Jimmy Vercellino reads them and supplies the
  values; he does not edit them in the Modeler. The first thresholds are
  plausible drafts, marked for his confirmation.
- Assessment Version 1 was never used by a real person (the only live
  submission, on 2026-09-18, was a setup test), so it gets no tables. The
  new questions are version 2.
