---
name: backend-database-migration
description: Design and validate a safe schema or data migration.
version: 1.0.0
status: stable
---

# backend-database-migration

## Triggers

- Persistence schema or stored data must change.

## Required inputs

- Data model specification
- Current schema
- Compatibility constraints

## Outputs

- Migration
- Rollback/forward-fix plan
- Validation evidence

## Procedure

1. Classify the change as additive, destructive, or transformational.
2. Plan backward-compatible application sequencing.
3. Implement migration and any required backfill.
4. Test against representative data volumes and constraints.
5. Define rollback or forward-fix behavior.
6. Record deployment ordering and observability.

## Validation

- [ ] Existing application versions remain compatible during rollout.
- [ ] Data integrity checks pass.
- [ ] Locking and runtime impact are understood.

## Anti-patterns

- Dropping data in the same release as code removal.
- Unbounded synchronous backfills.
- Assuming rollback is always possible.
