---
name: frontend-create-form
description: Build a resilient React Hook Form workflow with schema validation and server-error handling.
version: 1.0.0
status: stable
---

# frontend-create-form

## Triggers

- A feature needs data entry, editing, or submission.

## Required inputs

- Field requirements
- Validation rules
- Submission contract
- UX states

## Outputs

- Form component
- Validation schema
- Submission adapter
- Tests

## Procedure

1. Define the form value model separately from transport models.
2. Create the validation schema and default values.
3. Compose the form with React Hook Form.
4. Map values to the API command through an adapter.
5. Prevent duplicate submission.
6. Map field and global server errors.
7. Handle success, reset, navigation, and optimistic rollback as specified.
8. Test validation, submission, errors, and accessibility.

## Validation

- [ ] Required and cross-field validation are covered.
- [ ] Pending state is visible and duplicate submission is prevented.
- [ ] Server errors are understandable and recoverable.

## Anti-patterns

- Using API DTOs directly as uncontrolled UI models.
- Swallowing submission failures.
- Disabling submit without explaining why.
