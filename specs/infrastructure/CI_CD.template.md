# CI/CD Specification

- Status: Draft
- Owner: <owner>

## Pull request checks

- Dependency installation with lockfile enforcement
- Formatting check
- Lint/static analysis
- Type checking
- Unit and component tests
- Integration tests where practical
- Build verification
- Security and dependency scanning

## Deployment flow

| Branch/tag | Environment | Approval | Rollback |
|---|---|---|---|
| <branch> | <environment> | <rule> | <mechanism> |

## Artifact policy

- Build once and promote the same artifact where possible.
- Record source commit, build metadata, and dependencies.
- Prevent secret values from entering logs or artifacts.
