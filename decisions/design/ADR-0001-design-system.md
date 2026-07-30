# Design Decision: Establish Shared Tokens Before Shared Components

- Status: Proposed
- Date: <YYYY-MM-DD>

## Context

A new application needs visual consistency without prematurely building a large component library.

## Decision

Define foundational tokens in `src/theme/` for typography, spacing, color semantics, radius, elevation, motion, and breakpoints. Add shared components to `src/components/` only after at least two real use cases or an explicit design-system requirement.

## Consequences

- Early screens remain consistent.
- Shared abstractions are driven by demonstrated reuse.
- Accessibility states must be included in token and component decisions.
