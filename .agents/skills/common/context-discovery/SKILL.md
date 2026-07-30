---
name: context-discovery
description: Load and reconcile the minimum authoritative context required for a task.
version: 1.0.0
status: stable
---

# context-discovery

## Triggers

- A task begins in an unfamiliar repository.
- The request references product behavior or architectural constraints.

## Required inputs

- User request
- PROJECT_CONTEXT.md
- Relevant specifications and decisions

## Outputs

- Context summary
- Source-of-truth list
- Open questions and explicit assumptions

## Procedure

1. Read the root agent guide and contract.
2. Identify the task domain and affected workflows.
3. Read only relevant specifications and accepted decisions.
4. Inspect existing code as implementation evidence.
5. List constraints, unknowns, and conflicts.
6. Create or update a task plan with source links.

## Validation

- [ ] Product terminology is preserved.
- [ ] Facts and assumptions are separated.
- [ ] Conflicts are surfaced rather than silently resolved.

## Anti-patterns

- Reading the entire repository without a reason.
- Treating existing code as automatically correct.
- Inventing missing business rules.
