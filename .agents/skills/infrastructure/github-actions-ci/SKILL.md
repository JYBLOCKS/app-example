---
name: infrastructure-github-actions-ci
description: Create a GitHub Actions pipeline that validates the project consistently.
version: 1.0.0
status: stable
---

# infrastructure-github-actions-ci

## Triggers

- The repository needs pull-request or branch validation.

## Required inputs

- Package manager and lockfile
- Test/build commands
- Branch policy

## Outputs

- Workflow YAML
- Cache strategy
- Validation evidence

## Procedure

1. Define least-privilege workflow permissions.
2. Trigger on pull requests and relevant protected branches.
3. Install dependencies with lockfile enforcement.
4. Run formatting, lint, types, tests, and build in fail-fast order.
5. Cache package manager data safely.
6. Upload only useful non-sensitive artifacts.
7. Document required secrets and branch protections.

## Validation

- [ ] The workflow runs on a clean hosted runner.
- [ ] Permissions are minimal.
- [ ] Failures clearly identify the broken quality gate.

## Anti-patterns

- Granting write permissions by default.
- Using mutable third-party action references without review.
- Masking failing checks with `continue-on-error`.
