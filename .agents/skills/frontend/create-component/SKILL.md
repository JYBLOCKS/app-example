---
name: frontend-create-component
description: Create an accessible, typed, testable React component at the correct ownership level.
version: 1.0.0
status: stable
---

# frontend-create-component

## Triggers

- A UI behavior requires a new component.

## Required inputs

- Component specification
- Design tokens
- Owner feature

## Outputs

- Component implementation
- Behavior tests
- Public exports when applicable

## Procedure

1. Confirm whether the component is feature-owned or genuinely shared.
2. Define a minimal typed public API.
3. Implement semantic markup and keyboard behavior.
4. Represent required visual and async states.
5. Write interaction and accessibility tests.
6. Export only through the owning module public API.

## Validation

- [ ] Accessible name and focus behavior are verified.
- [ ] The component has one clear responsibility.
- [ ] No feature-specific logic leaks into shared components.

## Anti-patterns

- Premature generic abstraction.
- Using divs for interactive controls.
- Memoizing without a stable-input need.
