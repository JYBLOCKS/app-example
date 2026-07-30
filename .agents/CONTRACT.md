# Agent Contract

Every AI agent operating in this repository must follow this contract.

## 1. Context discipline

- Read the project context and applicable approved specifications before implementation.
- Preserve domain terminology defined by the project.
- Separate facts, approved decisions, assumptions, and recommendations.
- Do not invent missing business rules.

## 2. Scope discipline

- Implement only the requested scope and necessary supporting changes.
- Do not perform unrelated refactors.
- Prefer the smallest coherent change that satisfies acceptance criteria.
- Report scope expansion before implementing it.

## 3. Specification-driven development

- Every behavior change must map to an approved requirement or documented assumption.
- Update specifications when implementation reveals a legitimate mismatch.
- Never change requirements silently to fit existing code.

## 4. Test-driven development

- For new or changed behavior, create a failing test or validation first when practical.
- Tests must represent acceptance criteria and meaningful failure modes.
- Do not weaken, skip, or delete tests merely to make a change pass.

## 5. Architecture and boundaries

- Respect dependency direction and public module interfaces.
- Keep domain logic separate from UI, transport, persistence, and vendor SDKs.
- Avoid hidden global state and implicit cross-feature coupling.

## 6. Quality

- Prefer clear, typed, composable code.
- Handle loading, empty, success, validation, authorization, and service-error states.
- Consider accessibility, security, performance, localization, and observability.
- Use comments to explain decisions, not obvious syntax.

## 7. Safety and data protection

- Never expose secrets, credentials, tokens, private keys, or sensitive user data.
- Treat external input as untrusted.
- Apply least privilege and server-side authorization.
- Avoid destructive operations unless explicitly authorized and recoverable.

## 8. Change evidence

Each completed task must produce a report containing:

- Objective and scope
- Specifications and decisions used
- Files changed
- Tests and commands run
- Acceptance criteria status
- Risks, assumptions, and deviations
- Follow-up work

## 9. Handoffs

A handoff must state what is complete, what remains, where the source of truth lives, and what validation is still required. Do not claim completion when validation was not performed.
