---
name: test-driven-development
description: Drive behavior changes through failing tests, minimal implementation, and safe refactoring.
version: 1.0.0
status: stable
---

# test-driven-development

## Triggers

- New behavior is added.
- A defect is fixed.
- A refactor could alter observable behavior.

## Required inputs

- Acceptance criterion
- Test level decision
- Existing test setup

## Outputs

- Failing test
- Minimal implementation
- Passing regression suite

## Procedure

1. Choose the lowest test level that proves the behavior.
2. Write a test that fails for the correct reason.
3. Implement the smallest behavior that passes.
4. Refactor while tests remain green.
5. Add boundary and failure cases based on risk.
6. Run the relevant suite and record evidence.

## Validation

- [ ] The test failed before implementation.
- [ ] The test asserts behavior, not private structure.
- [ ] Regression tests pass.

## Anti-patterns

- Snapshot-only confidence.
- Mocking the unit under test.
- Deleting tests to remove failures.
