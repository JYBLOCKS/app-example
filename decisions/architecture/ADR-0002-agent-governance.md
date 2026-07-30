# ADR-0002: Govern AI Work Through Specs, Skills, and Reports

- Status: Proposed
- Date: <YYYY-MM-DD>

## Context

Different AI tools produce inconsistent results when instructions are implicit, scattered, or coupled to one vendor.

## Decision

Use tool-neutral Markdown contracts, role definitions, skills, rules, workflows, registries, harnesses, and reports under `.agents/`. Product context and approved specifications remain the authoritative source of intended behavior.

## Consequences

- The system is portable between AI coding tools.
- Agent output becomes reviewable and traceable.
- Maintaining specifications and registries is part of normal engineering work.
