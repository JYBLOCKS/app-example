# Backend Rules

- Enforce authorization server-side at the resource/use-case boundary.
- Keep domain rules independent from transport and persistence frameworks.
- Use stable error codes and safe client messages.
- Define transaction and idempotency behavior for mutations.
- Never log credentials, tokens, secrets, or unnecessary personal data.
- Schema changes require migrations and compatibility analysis.
