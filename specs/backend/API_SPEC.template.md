# API Specification: <Capability>

- Status: Draft
- Version: <version>
- Owner: <owner>

## Endpoint

`<METHOD> <PATH>`

## Authorization

- Required actor/role: <role>
- Resource-level policy: <policy>

## Request

### Headers

| Header | Required | Description |
|---|---|---|
| <header> | Yes/No | <description> |

### Path/query parameters

| Name | Type | Required | Validation |
|---|---|---|---|
| <name> | <type> | Yes/No | <rule> |

### Body

```json
{}
```

## Responses

| Status | Code | Meaning |
|---|---|---|
| 200 | OK | <meaning> |
| 400 | VALIDATION_ERROR | <meaning> |
| 401 | UNAUTHENTICATED | <meaning> |
| 403 | FORBIDDEN | <meaning> |
| 404 | NOT_FOUND | <meaning> |
| 409 | CONFLICT | <meaning> |

## Idempotency and retries

<Define retry and duplicate-request behavior.>

## Observability

- Logs: <fields>
- Metrics: <metrics>
- Traces: <spans>

## Acceptance tests

- [ ] <contract behavior>
