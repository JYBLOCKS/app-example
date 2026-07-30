# Backend Architecture Specification

- Status: Draft until approved for the project

## Objectives

- Keep domain rules independent from transport and persistence details.
- Make authorization, validation, idempotency, and error behavior explicit.
- Preserve clear boundaries between application, domain, and infrastructure concerns.

## Recommended module responsibilities

- Domain: entities, value objects, policies, invariants, domain events.
- Application: use cases, commands, queries, transaction boundaries.
- Interface: HTTP/GraphQL/event handlers and serialization.
- Infrastructure: repositories, third-party clients, persistence, queues.

## API rules

- Define request and response schemas before handler implementation.
- Validate at system boundaries.
- Use stable error codes and avoid exposing internal stack traces.
- Enforce authorization in the use-case boundary, not only in routes.
- Define idempotency behavior for retryable mutations.
- Include pagination and filtering semantics for collections.

## Persistence rules

- Domain code must not depend directly on ORM-specific models.
- Schema changes require migration, rollback consideration, and data compatibility analysis.
- Transactions must align with business consistency boundaries.

## Testing

- Domain unit tests for invariants and policies.
- Application tests for use-case orchestration.
- Integration tests for repositories and external adapters.
- Contract tests for API shape and error semantics.
