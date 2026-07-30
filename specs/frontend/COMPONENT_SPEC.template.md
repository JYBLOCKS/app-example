# UI Component Specification: <Component>

- Status: Draft
- Owner feature: <feature or shared>

## Responsibility

<Single responsibility of the component.>

## Public API

```ts
export interface <Component>Props {
  // Document each prop and avoid implementation leakage.
}
```

## Visual and interaction states

- Default
- Hover/focus
- Disabled
- Loading
- Empty
- Error

## Accessibility contract

- Semantic role: <role>
- Accessible name: <source>
- Keyboard behavior: <behavior>
- Focus behavior: <behavior>
- Screen reader feedback: <feedback>

## Test matrix

| Behavior | Test type | Expected result |
|---|---|---|
| <behavior> | Component | <result> |
