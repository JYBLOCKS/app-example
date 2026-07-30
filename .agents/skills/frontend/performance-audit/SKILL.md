---
name: frontend-performance-audit
description: Identify and fix measured frontend performance bottlenecks without speculative complexity.
version: 1.0.0
status: stable
---

# frontend-performance-audit

## Triggers

- A feature is slow, rerenders excessively, or increases bundle/runtime cost.

## Required inputs

- Performance symptom
- Measurement evidence
- Relevant feature code

## Outputs

- Baseline
- Root-cause findings
- Targeted changes
- Post-change measurement

## Procedure

1. Reproduce the user-visible symptom.
2. Capture a baseline using appropriate profiling tools.
3. Identify render, network, bundle, or computation drivers.
4. Apply the smallest targeted optimization.
5. Use memoization, selectors, lazy loading, or caching only where evidence supports it.
6. Re-measure and document tradeoffs.

## Validation

- [ ] Before/after evidence exists.
- [ ] Correctness and accessibility remain intact.
- [ ] Optimization does not create stale data.

## Anti-patterns

- Adding `useMemo` or `useCallback` everywhere.
- Optimizing without a baseline.
- Hiding latency without fixing incorrect loading states.
