# Frontend Feature Specification: <Feature Name>

- Status: Draft
- Product specification: <link>
- Owner: <owner>

## Purpose

<What user capability this frontend feature provides.>

## Routes and entry points

| Route/entry | Actor | Preconditions | Result |
|---|---|---|---|
| <route> | <actor> | <condition> | <result> |

## UI states

- Initial: <state>
- Loading: <state>
- Empty: <state>
- Success: <state>
- Validation error: <state>
- Service error: <state>
- Unauthorized/forbidden: <state>

## Components

| Component | Responsibility | Inputs | Outputs/events |
|---|---|---|---|
| <name> | <responsibility> | <props> | <events> |

## Data flow

<Describe page → hook/store → API → adapter → model → UI flow.>

## Form behavior

- Form library: React Hook Form
- Validation: <schema/strategy>
- Submission behavior: <optimistic/pessimistic>
- Error mapping: <strategy>

## Accessibility

- Keyboard flow: <requirements>
- Focus management: <requirements>
- Announcements: <requirements>
- Semantic structure: <requirements>

## Performance

- Lazy-loading boundary: <boundary>
- Cache/state strategy: <strategy>
- Known expensive operations: <operations>

## Acceptance criteria and tests

| Criterion | Test level | Test location |
|---|---|---|
| <criterion> | Unit/Component/Integration/E2E | <path> |
