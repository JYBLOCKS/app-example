---
name: frontend-create-store
description: Create a feature-scoped client state store with narrow selectors and predictable updates.
version: 1.0.0
status: stable
---

# frontend-create-store

## Triggers

- State must persist across sibling components or routes and is not server cache.

## Required inputs

- State ownership decision
- State transitions
- Persistence requirements

## Outputs

- Store
- Selectors
- Actions
- Store tests

## Procedure

1. Prove local component state or URL state is insufficient.
2. Define minimal normalized state and explicit actions.
3. Implement immutable transitions.
4. Expose narrow selectors and stable actions.
5. Add persistence only when required and version stored data.
6. Test transitions, rollback, and reset behavior.

## Validation

- [ ] Components subscribe only to required slices.
- [ ] Server truth is not duplicated without a reconciliation policy.
- [ ] Reset/logout behavior is defined.

## Anti-patterns

- One global store for all features.
- Subscribing to the full store.
- Storing derived values that can be computed cheaply.
