# Authentication Feature Specification

- Status: Approved for the login MVP
- Product specification: `specs/backend/AUTHENTICATION_SPEC.md`
- Owner: Application team

## Route

`/login` is public. A successful login redirects to `/` and shows a success notification. The home route shows the authenticated user's display name and roles and offers logout.

## UI states

- Initial: empty username and password fields.
- Loading: submit is disabled and reports progress.
- Success: session is stored and a success notification is announced.
- Validation error: required fields show accessible field errors.
- Service error: a recoverable generic authentication error is shown.
- Unauthorized: protected content redirects to `/login`.

## State and transport

The feature-owned Zustand store persists the access token and user metadata in local storage and clears all session data on logout. The API adapter maps transport data to the stable `AuthSession` model.

## Acceptance criteria

- [ ] React Hook Form validates required credentials and prevents duplicate submissions.
- [ ] A valid login stores JWT and complete user metadata.
- [ ] A failed login shows a safe error and retains editable fields.
- [ ] Login success is announced through an accessible notification.
- [ ] Logout clears persisted state.
