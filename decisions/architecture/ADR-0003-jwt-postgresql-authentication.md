# ADR-0003: JWT Authentication with PostgreSQL

- Status: Accepted for the login MVP
- Date: 2026-07-29

## Decision

Use PostgreSQL as the source of truth for users and roles. The API issues short-lived signed JWT access tokens after bcrypt password verification. The browser stores the session in a feature-scoped Zustand store because this MVP has no refresh-token endpoint yet.

## Consequences

- Password hashes and role membership remain server-side.
- JWT claims provide the client with the metadata needed for role-aware presentation, while server middleware remains authoritative for authorization.
- A future refresh-token or httpOnly-cookie decision must be made before production deployment.
