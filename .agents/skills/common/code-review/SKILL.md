---
name: code-review
description: Perform a specification-aware, risk-prioritized review.
version: 1.0.0
status: stable
---

# code-review

## Triggers

- A pull request or implementation diff is ready for review.

## Required inputs

- Diff
- Specifications
- Decisions
- Test evidence

## Outputs

- Prioritized findings
- Approval recommendation
- Missing evidence list

## Procedure

1. Review requirements and risk areas first.
2. Inspect changed behavior and dependency boundaries.
3. Verify tests cover acceptance criteria and regressions.
4. Check security, accessibility, performance, and failure handling.
5. Classify findings as blocking, important, or suggestion.
6. Avoid style-only noise already handled by automation.

## Validation

- [ ] Every blocking finding includes evidence and remediation direction.
- [ ] Review distinguishes defects from preferences.
- [ ] Approval status matches remaining risk.

## Anti-patterns

- Reviewing only formatting.
- Requesting unrelated refactors.
- Approving without reading tests.
