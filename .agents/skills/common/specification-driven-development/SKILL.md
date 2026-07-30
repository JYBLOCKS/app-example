---
name: specification-driven-development
description: Convert an approved requirement into traceable implementation work.
version: 1.0.0
status: stable
---

# specification-driven-development

## Triggers

- A feature, behavior change, or architectural change is requested.

## Required inputs

- Approved specification
- Acceptance criteria
- Relevant decisions

## Outputs

- Implementation plan
- Requirement-to-test traceability
- Updated specification when needed

## Procedure

1. Extract observable behavior and constraints.
2. Break behavior into independently verifiable slices.
3. Map each acceptance criterion to test evidence.
4. Identify decisions that require ADRs.
5. Implement only approved slices.
6. Reconcile implementation and specification before completion.

## Validation

- [ ] Every behavior maps to a requirement.
- [ ] Every acceptance criterion has evidence.
- [ ] Deviations are documented.

## Anti-patterns

- Writing code before understanding acceptance criteria.
- Changing requirements to match implementation.
- Using vague completion statements.
