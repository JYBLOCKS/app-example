# Frontend Architecture Specification

- Status: Draft until approved for the project
- Default style: feature-first modular architecture

## Objectives

- Keep business capabilities isolated by feature.
- Expose stable public interfaces through feature barrel files.
- Keep shared primitives generic and business-agnostic.
- Preserve testability, accessibility, predictable data flow, and incremental loading.

## Base source structure

```text
src/
├── assets/         # Static assets owned by the application
├── components/     # Reusable, domain-neutral UI components
├── config/         # Typed runtime and build configuration
├── context/        # Truly global React contexts
├── db/             # Client persistence and local database adapters
├── features/       # Business capabilities
├── integration/    # External SDK and service integration boundaries
├── layouts/        # Reusable page/application layouts
├── lib/            # Framework-independent utilities
├── locale/         # Localization resources and setup
├── pages/          # Top-level composition pages when not feature-owned
├── providers/      # Application-wide providers
├── test/           # Shared test setup, factories, and utilities
├── theme/          # Design tokens and theme configuration
└── main.tsx        # Composition root
```

## Feature structure

```text
src/features/<feature>/
├── __test__/       # Feature integration and behavior tests
├── adapters/       # Mapping between external and internal models
├── api/            # Feature API clients, query keys, and contracts
├── components/     # Feature-owned presentation components
├── forms/          # Form schemas, fields, and React Hook Form composition
├── hooks/          # Feature-owned orchestration hooks
├── middlewares/    # Feature request/route/state middleware
├── models/         # Domain models, schemas, and types
├── pages/          # Route-level feature pages
├── providers/      # Feature-scoped providers
├── store/          # Feature state stores and selectors
└── index.ts         # Public feature API
```

## Dependency rules

1. Shared folders must not depend on feature internals.
2. Features may depend on shared modules and explicitly approved feature public APIs.
3. Deep imports into another feature are prohibited.
4. API transport models must be adapted before reaching UI components.
5. Pages compose feature capabilities; components should not own navigation policy.
6. Global state is allowed only for cross-route, cross-feature, or session-level concerns.
7. Server state and client state should not be mixed without an explicit decision.

## Forms

- Use React Hook Form for interactive forms unless an approved ADR states otherwise.
- Define validation schemas near the feature models or forms.
- Map server validation errors to field and form errors.
- Prevent duplicate submissions and communicate pending, success, and failure states.

## Performance

- Lazy-load route-level feature modules where useful.
- Use `Suspense` only with a deliberate fallback and error boundary strategy.
- Use memoization only when profiling or stable identity is required; do not use it as decoration.
- Avoid broad store subscriptions. Prefer selectors and stable derived values.
- Keep expensive transformations outside render or memoize them with correct dependencies.

## Testing

- Test public behavior rather than implementation details.
- Use unit tests for pure models and adapters.
- Use component tests for interactive behavior and accessibility.
- Use integration tests for feature workflows.
- Add end-to-end tests for critical happy paths.
