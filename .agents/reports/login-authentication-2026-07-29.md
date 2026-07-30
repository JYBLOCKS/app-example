# Login Authentication Delivery Report

## Objective and scope

Implemented the login MVP on branch `login`: PostgreSQL persistence, bcrypt password verification, JWT access tokens, role-aware authorization, API tests, and a feature-first React authentication flow using Zustand and React Hook Form.

## Specifications and decisions

- `specs/backend/AUTHENTICATION_SPEC.md`
- `specs/frontend/AUTH_FEATURE_SPEC.md`
- `decisions/architecture/ADR-0003-jwt-postgresql-authentication.md`

## Acceptance evidence

- Valid `test/test` credentials return a JWT, expiry, user identity, roles, and metadata.
- Invalid and malformed credentials return stable safe API errors.
- Missing tokens return `UNAUTHENTICATED`.
- A non-admin token is rejected by the admin route with `FORBIDDEN`.
- Login form validates required fields, prevents duplicate submission, persists the session, redirects, and announces success.
- Logout clears the persisted Zustand session.
- PostgreSQL migration and local fixture seed are idempotent.

## Validation performed

- `pnpm test`: 8 API tests and 6 web tests passed.
- `pnpm build`: API and web builds passed.
- `pnpm lint`: API TypeScript lint and web Oxlint passed.
- `docker compose config`: passed.
- `docker compose up -d --build`: PostgreSQL, API, and web started healthy.
- Live HTTP check: `POST /api/v1/auth/login` followed by authenticated `GET /api/v1/auth/me` passed.

## Risks and assumptions

- The browser stores a JWT in local storage for this MVP. A production release needs an explicit refresh-token or httpOnly-cookie decision.
- The seeded `test/test` user is intended only for local development and acceptance testing.
- The compose JWT secret is a local placeholder and must be replaced through deployment secrets.
- The web image uses `--no-frozen-lockfile` because the current Docker build context copies a workspace lockfile without workspace importer metadata.

## Follow-up

- Add refresh-token rotation and production secret management before deployment.
- Add end-to-end browser coverage for the full login and logout journey.
