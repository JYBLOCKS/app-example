# ADR-0001: Use a Feature-First Frontend Architecture

- Status: Proposed
- Date: <YYYY-MM-DD>

## Context

The application is starting from a small codebase but is expected to grow across multiple business capabilities. AI agents and human contributors need predictable ownership boundaries and a consistent way to add behavior.

## Decision

Use the root source structure documented in `specs/frontend/FRONTEND_ARCHITECTURE.md`. Business behavior belongs under `src/features/<feature>/`, and each feature exposes a public API through `index.ts`.

## Alternatives considered

- Organize all code by technical type only.
- Use route folders as the only ownership boundary.
- Adopt a micro-frontend architecture from the beginning.

## Consequences

- Features are easier to discover, test, and evolve independently.
- Shared modules require discipline to avoid becoming unowned dumping grounds.
- Cross-feature behavior must be modeled through explicit public interfaces.
