# Project Agent Operating Guide

This repository is designed to be developed by humans and AI agents using Specification-Driven Development (SDD), Test-Driven Development (TDD), explicit architectural decisions, and auditable workflows.

## Required reading order

Before changing code, every agent must read:

1. `PROJECT_CONTEXT.md`
2. `.agents/CONTRACT.md`
3. The relevant files under `specs/`
4. The relevant decision records under `decisions/`
5. The role definition under `.agents/agents/`
6. The selected skill under `.agents/skills/`
7. The applicable rules under `.agents/rules/`

If required context is missing, do not silently invent product behavior. Create a documented assumption, mark it as unresolved, and request a decision through the appropriate specification or ADR.

## Source-of-truth precedence

When instructions conflict, use this order:

1. Approved product and legal constraints in `PROJECT_CONTEXT.md`
2. Approved specifications in `specs/`
3. Accepted decisions in `decisions/`
4. `.agents/CONTRACT.md`
5. Applicable rules in `.agents/rules/`
6. Workflow instructions
7. Skill instructions
8. Agent role guidance
9. Existing implementation patterns

Existing code is evidence, not automatically the source of truth.

## Default delivery loop

Every implementation must follow this sequence:

1. Discover context and constraints.
2. Identify the approved specification and acceptance criteria.
3. Confirm or create a task plan.
4. Write or update tests first when behavior changes.
5. Implement the smallest coherent change.
6. Run validation and quality checks.
7. Review the diff against the specification.
8. Record decisions, risks, deviations, and follow-up work.

## Project initialization

A new project owner should begin by completing `PROJECT_CONTEXT.md`. The agent system should then run `.agents/workflows/new-project.md` to produce or refine the initial specifications and decision records.

## Frontend structure

The default frontend structure is:

```text
src/
├── assets/
├── components/
├── config/
├── context/
├── db/
├── features/
├── integration/
├── layouts/
├── lib/
├── locale/
├── pages/
├── providers/
├── test/
├── theme/
└── main.tsx
```

Each business feature should be isolated under `src/features/<feature-name>/`:

```text
<feature-name>/
├── __test__/
├── adapters/
├── api/
├── components/
├── forms/
├── hooks/
├── middlewares/
├── models/
├── pages/
├── providers/
├── store/
└── index.ts
```

The public API of a feature must be exported from its `index.ts`. Cross-feature imports should use public feature exports and must avoid importing private internals.

## Definition of done

A task is complete only when:

- Acceptance criteria are traceable to tests or explicit verification evidence.
- Relevant tests pass.
- Static analysis and formatting checks pass.
- Security, accessibility, performance, and observability implications were considered.
- Public interfaces and important decisions are documented.
- No hidden TODO is required for the delivered behavior to work.
- The final report identifies changed files, validation performed, risks, and follow-up items.
