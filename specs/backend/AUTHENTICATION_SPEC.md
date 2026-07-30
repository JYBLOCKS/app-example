# Authentication Specification

- Status: Approved for the login MVP
- Version: 1.0
- Owner: Application team

## Scope

The application authenticates users with username and password, returns a signed JWT, and exposes user metadata required by the client for role-aware UI behavior.

## Endpoint

`POST /api/v1/auth/login`

Request body:

```json
{ "username": "test", "password": "test" }
```

The response contains `accessToken`, `expiresIn`, and `user` metadata: `id`, `username`, `displayName`, `email`, `roles`, and `metadata`.

`GET /api/v1/auth/me` requires a bearer token and returns the verified JWT claims. `GET /api/v1/auth/admin` additionally requires the `admin` role and exists to verify server-side role enforcement.

## Security and authorization

- Passwords are stored as bcrypt hashes and are never returned.
- JWTs use the configured secret and expiry and contain `sub`, `username`, `roles`, and `metadata`.
- Invalid credentials return `401 INVALID_CREDENTIALS` without revealing which field failed.
- Protected resources require `Authorization: Bearer <token>`.
- Roles are enforced server-side by middleware when a route requires them.

## Persistence

PostgreSQL stores users and roles in `users`, `roles`, and `user_roles`. Startup runs an idempotent schema migration and seeds the local-only `test/test` user with the `user` role.

## Acceptance criteria

- [ ] Valid credentials return a JWT and complete user metadata.
- [ ] Invalid credentials return a stable safe error.
- [ ] Missing or invalid bearer tokens are rejected.
- [ ] Role middleware rejects users without the required role.
- [ ] The frontend persists session state with Zustand, submits via React Hook Form, and announces successful login.
