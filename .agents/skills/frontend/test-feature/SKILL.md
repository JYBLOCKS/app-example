---
name: frontend-test-feature
description: Build a layered test suite for a frontend feature workflow.
version: 1.0.0
status: stable
---

# frontend-test-feature

## Triggers

- A frontend feature is created or materially changed.

## Required inputs

- Acceptance criteria
- Feature public API
- Risk assessment

## Outputs

- Test matrix
- Automated tests
- Coverage gaps

## Procedure

1. Map criteria to unit, component, integration, or E2E tests.
2. Test pure models and adapters at unit level.
3. Test user interaction through accessible queries.
4. Test API boundaries with realistic contract fixtures.
5. Cover loading, empty, validation, authorization, success, and failure states.
6. Add an E2E happy path for critical workflows.

## Validation

- [ ] Tests fail for meaningful regressions.
- [ ] Queries resemble user access patterns.
- [ ] Mocks stay at system boundaries.

## Anti-patterns

- Testing private hook implementation details.
- Overusing snapshots.
- Mocking every dependency.
