---
name: backend-create-endpoint
description: Implement a secure, tested endpoint from an approved API specification.
version: 1.0.0
status: stable
---

# backend-create-endpoint

## Triggers

- A new API operation or changed contract is required.

## Required inputs

- API specification
- Authorization policy
- Use-case contract

## Outputs

- Handler
- Schemas
- Use case integration
- Contract tests

## Procedure

1. Define boundary schemas and stable error codes.
2. Authenticate the caller and enforce resource authorization.
3. Invoke an application use case rather than embedding domain logic in the handler.
4. Handle idempotency, transaction, and retry semantics.
5. Emit structured observability data without sensitive values.
6. Add success, validation, authorization, conflict, and failure tests.

## Validation

- [ ] The implementation matches the API specification.
- [ ] Authorization is tested server-side.
- [ ] Internal errors do not leak.

## Anti-patterns

- Putting business rules in controllers.
- Trusting client-provided ownership identifiers.
- Returning raw exceptions.
