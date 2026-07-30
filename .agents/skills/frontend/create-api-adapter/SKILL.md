---
name: frontend-create-api-adapter
description: Create a typed API boundary and map external contracts to stable feature models.
version: 1.0.0
status: stable
---

# frontend-create-api-adapter

## Triggers

- A frontend feature communicates with an API or external SDK.

## Required inputs

- API specification
- Transport schemas
- Feature models

## Outputs

- API client
- Runtime validation
- Adapters
- Contract tests

## Procedure

1. Define request and response transport types from the API contract.
2. Validate untrusted response data at the boundary when required.
3. Map DTOs to feature models through pure adapters.
4. Normalize errors into stable application error types.
5. Define cancellation, retry, and idempotency behavior.
6. Test mapping and failure semantics.

## Validation

- [ ] UI components do not consume raw transport objects.
- [ ] Errors are normalized.
- [ ] Cancellation and stale-response behavior are handled.

## Anti-patterns

- Leaking Axios/fetch response objects into UI code.
- Blind type assertions on external data.
- Retrying non-idempotent mutations automatically.
