import type { AuthSession, LoginFormValues } from "../models/auth.models";

export async function loginRequest(values: LoginFormValues): Promise<AuthSession> {
  const response = await fetch("/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  });
  const body = (await response.json()) as AuthSession | { error?: { message?: string } };
  if (!response.ok) throw new Error("error" in body && body.error?.message ? body.error.message : "Login failed");
  return body as AuthSession;
}
