---
name: qa-acceptance-validation
description: Independently verify delivered behavior against acceptance criteria.
version: 1.0.0
status: stable
---

# qa-acceptance-validation

## Triggers

- Implementation is ready for acceptance.

## Required inputs

- Approved criteria
- Build or environment
- Test evidence

## Outputs

- Acceptance matrix
- Defects
- Release recommendation

## Procedure

1. Translate each criterion into observable verification steps.
2. Validate the primary happy path.
3. Validate high-risk boundaries and failure states.
4. Confirm accessibility, authorization, and data integrity expectations.
5. Record exact evidence and environment.
6. Classify defects by user impact and release risk.

## Validation

- [ ] Every criterion has pass/fail/not-tested status.
- [ ] Untested criteria are not marked complete.
- [ ] Defects include reproducible steps.

## Anti-patterns

- Relying only on developer statements.
- Treating unit coverage as full acceptance.
- Ignoring environment differences.
