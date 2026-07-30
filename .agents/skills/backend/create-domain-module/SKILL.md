---
name: backend-create-domain-module
description: Create a domain module with explicit invariants and infrastructure boundaries.
version: 1.0.0
status: stable
---

# backend-create-domain-module

## Triggers

- A new bounded business capability is introduced.

## Required inputs

- Domain language
- Use cases
- Invariants
- Persistence needs

## Outputs

- Domain model
- Use cases
- Ports/interfaces
- Tests

## Procedure

1. Define entities, value objects, policies, and invariants.
2. Define application commands/queries and outcomes.
3. Create ports for persistence and external services.
4. Implement domain tests before infrastructure.
5. Add adapters and integration tests.
6. Expose a narrow module interface.

## Validation

- [ ] Domain rules run without framework infrastructure.
- [ ] Invalid states are unrepresentable or rejected.
- [ ] Ports reflect business needs rather than vendor APIs.

## Anti-patterns

- Anemic domain models with all rules in controllers.
- ORM models as domain entities by default.
- Cross-module database access without an interface.
