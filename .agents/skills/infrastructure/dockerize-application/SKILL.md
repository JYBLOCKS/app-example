---
name: infrastructure-dockerize-application
description: Create reproducible, secure containers and local orchestration.
version: 1.0.0
status: stable
---

# infrastructure-dockerize-application

## Triggers

- The application needs Docker development or deployment support.

## Required inputs

- Runtime requirements
- Build commands
- Environment contract

## Outputs

- Dockerfile(s)
- Compose configuration when needed
- .dockerignore
- Validation report

## Procedure

1. Choose minimal supported base images and pin major/runtime versions.
2. Use multi-stage builds where it reduces runtime size.
3. Run as a non-root user when feasible.
4. Copy lockfiles before dependency installation to improve cache use.
5. Keep secrets out of images and compose files.
6. Add health checks and graceful shutdown behavior.
7. Build and run the container in validation.

## Validation

- [ ] The container starts from a clean checkout.
- [ ] No development-only secret is embedded.
- [ ] Health and shutdown behavior work.

## Anti-patterns

- Using `latest` tags.
- Running package managers at container startup in production.
- Copying the entire repository before dependency installation.
