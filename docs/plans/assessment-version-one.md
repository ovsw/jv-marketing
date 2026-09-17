# Assessment Version one: design decisions

Implementation: [issue #100](https://github.com/ovsw/jv-marketing/issues/100).
The owner authorized the agent to choose the remaining defaults on 2026-09-17. The policy below is implemented as a provisional model for Jimmy to review; the weights and proposed interpretations are not Jimmy-approved lending rules. Version one has not been released.

## Sources

- [Jimmy's strategy transcript, 2026-09-08](https://docs.google.com/document/d/1x73NKt1UOE4__fag5T2PbO2ajVHsSNIIh1AWdBSx2Q0/edit?tab=t.el6j6ywzm36u): readiness discussion at 01:08:59–01:13:46.
- [Issue #92](https://github.com/ovsw/jv-marketing/issues/92): approved branch, draft-retention, and numeric-input rules.
- Owner decisions in the 2026-09-17 design interview.

Jimmy's statements are canonical source material. The owner has directed that this Assessment is for PHXHomeLoan.com and must serve everyone, rather than only veterans. VA-specific statements must not silently become rules for all Mortgage Products. The transcript does not supply point weights or score bands.

## Approved question changes

- Split the old credit option below 620 into below 580 and 580–619. Preserve the higher bands and unknown answer.
- Add late payments in the past 12 months, closing-cost funds, and mortgage reserves. The provisional choices and use on both paths are specified below.
- Collect the property's state on both paths: intended purchase location or existing refinance property. Purchase permits “Not decided.” Location does not reduce the score.

## Approved result rules

- Both purchase and refinance are in scope, for veterans and non-veterans.
- The Readiness Score measures potential financial readiness on a 0–100 scale, not loan eligibility or approval.
- Credit below 580 prevents the strongest readiness result, even with otherwise strong answers. The Action Plan starts with credit preparation; the person can still contact Jimmy. This is guidance, not an application rejection.
- Purchase timing does not reduce the financial Readiness Score. It changes the Action Plan and follow-up priority instead.
- If essential scoring information is unknown, show “More information needed” instead of a numeric total. An unknown answer is not zero, and an otherwise complete submission remains valid.
- Results use conditional wording and do not provide loan estimates, loan amounts, or approval promises.

## Provisional policy for Jimmy's review

The owner delegated the remaining domain choices to the agent. These are proposed product rules, distinct from Jimmy's statements in the transcript.

### Questions

- Recent late payments means credit payments at least 30 days past due within the past 12 months. Answers: Yes, No, I don’t know. The 30-day definition is a proposal, not a transcript quote.
- Purchase upfront costs include a down payment if needed and closing costs. Refinance asks about refinance costs. Each asks how the person plans to cover costs: own funds; expected assistance or financing needing confirmation; no plan yet; unknown. This does not assert eligibility for assistance or cost financing.
- Both paths ask about savings expected to remain after the transaction: at least three months of mortgage payments; some but less than three months; none; unknown. These are estimates made by the person; the Assessment does not compute a required reserve amount.
- The existing bankruptcy question remains. Yes or unknown prompts team review, without a numerical deduction or an eligibility decision.
- Other existing questions and options remain, including their original income ranges. The ranges have gaps in their wording; unknown is available. Jimmy can correct those ranges before release.
- The state list covers all 50 states, DC, another location, and (purchase only) not decided. It records location, not service availability.

### Points

| Input | Answer | Points |
| --- | --- | ---: |
| Credit | Under 580 | 0 |
| Credit | 580–619 | 10 |
| Credit | 620–639 | 20 |
| Credit | 640–679 | 30 |
| Credit | 680–719 | 35 |
| Credit | 720+ | 40 |
| Recent late payments | No | 30 |
| Recent late payments | Yes | 0 |
| Upfront costs | Own funds | 15 |
| Upfront costs | Assistance or financing needs confirmation | 5 |
| Upfront costs | No plan | 0 |
| Reserves | At least three months | 15 |
| Reserves | Some, less than three months | 5 |
| Reserves | None | 0 |

Unknown credit, recent payments, upfront-cost plan, or reserves makes the total unavailable. These four inputs are essential for scoring. Known concerns still produce guidance. The request uses a required `reportedScore` field with either a number or `null`; null is not zero and does not invalidate a submission.

Bands: 0–49 preparation, 50–79 developing, 80–100 stronger. These describe the total, not permission to apply. The Action Plan checks concerns separately so a high total cannot hide an unresolved concern. Credit below 580 can score at most 60 and always starts with credit preparation.

Income, loan amount, property value/budget, marital status, property location, source, and purchase timing earn no points. The Assessment lacks the verified information needed to determine affordability. Refinance balance and rate are useful discussion context, not a calculation of potential savings.

### Action Plan selection

Choose the first applicable main plan in this order; retain all applicable guidance steps:

1. Credit below 580: credit preparation, even if another scoring input is unknown.
2. Essential scoring input unknown: more information needed.
3. Recent late payments, bankruptcy yes/unknown, or refinance with no current mortgage: team review.
4. Score below 80, upfront costs not covered by the person's own planned funds, or reserves below three months: financial preparation.
5. Purchase in 3–6 months or 6 months or more: plan for a later purchase. These existing range answers are used without pretending to know an exact date.
6. Purchase timing unknown: more information needed; retain the known financial score.
7. Otherwise: purchase discussion or refinance discussion, depending on the path.

Guidance order is credit, recent payments, bankruptcy, missing information, upfront costs, reserves, purchase timing, and mortgage-path review. Credit preparation guidance also appears for 580–639, without presenting those ranges as universal eligibility cutoffs. The result offers practical next steps before an invitation to contact the team. Published text must remain conditional.

### Review and release

Jimmy should review the question interpretations, the point table, band boundaries, guidance wording, and generalization to refinance and non-VA purchases. Agent-selected weights are not presented as approved industry standards. This implementation does not publish a quiz or send guidance to real prospects.

After version one is released, later changes require a new Assessment Version and new fixtures. Preserve prior versions and their behavior for existing submissions.

These decisions amend the veteran-only scope and always-numeric result assumptions in the original #96/#100 specification. The shared package and downstream intake/storage work must use the amended contract.

## Implementation checks

- Package typecheck, ESLint, and 85 unit tests passed.
- PHX website typecheck and its shared-package integration test passed.
- A frozen-lockfile install passed. No unrelated dependency versions were changed.
- One CodeRabbit review completed. Three findings were applied: state options now follow the active path, the client retains its timeout when supplied a cancellation signal, and the test alias uses portable file-URL conversion.
- The fourth finding proposed changing the original refinance labels that refer to a “new home.” Those canonical labels remain from the source inventory under #92's preservation rule. Jimmy should review that wording; the website may rephrase it without changing question meaning under ADR 0003.
- No UI, live intake route, deployment, or browser visual inspection was part of this package change.
