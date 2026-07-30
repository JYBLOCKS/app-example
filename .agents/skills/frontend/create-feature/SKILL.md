---
name: frontend-create-feature
description: Create a complete frontend feature slice using the standard feature-first structure.
version: 1.0.0
status: stable
---

# frontend-create-feature

## Triggers

- A new business capability needs a frontend module.

## Required inputs

- Approved product story
- Frontend feature specification
- API contract
- Design requirements

## Outputs

- Feature folder
- Public feature API
- Tests
- Feature report

## Procedure

1. Create `src/features/<feature>/` using only needed standard subfolders.
2. Define feature models and boundary schemas.
3. Create API clients and adapters that map transport models to domain models.
4. Implement hooks/store only for required state.
5. Build accessible components, forms, and pages.
6. Export supported entry points from `index.ts`.
7. Add unit, component, and workflow tests.
8. Validate loading, empty, success, validation, authorization, and service-error states.

## Validation

- [ ] No deep imports are required by consumers.
- [ ] Acceptance criteria are tested.
- [ ] Forms use React Hook Form unless an ADR says otherwise.
- [ ] Feature state subscriptions are narrow and stable.

## Anti-patterns

- Creating every subfolder when unused.
- Exposing internal implementation through the barrel file.
- Putting business logic in generic shared components.
