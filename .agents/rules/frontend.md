# Frontend Rules

- Follow `specs/frontend/FRONTEND_ARCHITECTURE.md`.
- Business code belongs to a feature; shared code must remain domain-neutral.
- Use React Hook Form for forms unless an accepted ADR states otherwise.
- Use feature public APIs; do not deep-import another feature.
- Model loading, empty, success, validation, unauthorized, forbidden, and service-error states.
- Prefer selectors for store subscriptions.
- Use memoization and lazy loading based on behavior or measurement, not habit.
- Interactive elements must be keyboard accessible and semantically correct.
