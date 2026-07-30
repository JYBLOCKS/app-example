import { describe, expect, it } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import { createApp } from "../src/app.js";
import type { UserRepository } from "../src/repositories/user.repository.js";

const repository: UserRepository = { findByUsername: async () => null };

describe("JWT authorization", () => {
  it("rejects a protected route without a bearer token", async () => {
    const response = await request(createApp(repository)).get("/api/v1/auth/me");
    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe("UNAUTHENTICATED");
  });

  it("enforces roles on the server", async () => {
    const token = jwt.sign({ sub: "1", username: "test", displayName: "Test", email: "test@example.local", roles: ["user"], metadata: { department: "QA", locale: "en" } }, "local-development-secret-change-me");
    const response = await request(createApp(repository)).get("/api/v1/auth/admin").set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(403);
    expect(response.body.error.code).toBe("FORBIDDEN");
  });
});
