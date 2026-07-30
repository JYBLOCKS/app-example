# AI Agent System

This directory contains a tool-neutral operating system for AI-assisted software development.

## Components

- `CONTRACT.md`: mandatory behavior for every agent.
- `agents/`: role boundaries and handoff expectations.
- `skills/`: repeatable execution procedures with triggers, inputs, outputs, and validation.
- `rules/`: non-negotiable engineering constraints.
- `workflows/`: multi-skill delivery sequences.
- `templates/`: copy-ready project artifacts.
- `registry/`: machine-readable discovery metadata.
- `harnesses/`: review and validation procedures.
- `reports/`: generated execution evidence.

## How to use

1. Complete `PROJECT_CONTEXT.md`.
2. Ask the AI to read `AGENTS.md` and `.agents/CONTRACT.md`.
3. Select a workflow or skill that matches the task.
4. Require a task plan before broad changes.
5. Require tests and a final report.

## Portability

Do not place vendor-only commands in global contracts. Vendor-specific adapters may be added later under `.agents/integration/` without changing the core system.
