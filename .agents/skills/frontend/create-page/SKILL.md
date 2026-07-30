---
name: frontend-create-page
description: Create a route-level page that composes feature capabilities and all required states.
version: 1.0.0
status: stable
---

# frontend-create-page

## Triggers

- A route or top-level feature screen is added.

## Required inputs

- Route contract
- Feature specification
- Layout contract

## Outputs

- Page component
- Route integration
- Page-level tests

## Procedure

1. Confirm actor, route parameters, and authorization behavior.
2. Compose the approved layout and feature public APIs.
3. Establish lazy-loading and error boundaries where useful.
4. Handle document title, navigation, and focus restoration.
5. Represent loading, empty, success, and error states.
6. Add route-level tests for critical behavior.

## Validation

- [ ] The page does not deep-import feature internals.
- [ ] Unauthorized and not-found states are deliberate.
- [ ] Focus and title behavior are verified.

## Anti-patterns

- Embedding reusable business logic directly in the route.
- Using a spinner as the only error strategy.
- Duplicating layout dimensions across pages.
