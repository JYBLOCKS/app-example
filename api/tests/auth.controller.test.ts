import { describe, expect, it } from "vitest";
import request from "supertest";
import { createApp } from "../src/app.js";
import type { User } from "../src/models/auth.model.js";
import type { UserRepository } from "../src/repositories/user.repository.js";
import bcrypt from "bcryptjs";

const repository: UserRepository = {
  findByUsername: async () => ({ id: "1", username: "test", displayName: "Test User", email: "test@example.local", passwordHash: await bcrypt.hash("test", 4), roles: ["user"], metadata: { department: "QA", locale: "en" } } satisfies User),
};

describe("POST /api/v1/auth/login", () => {
  it("rejects malformed credentials at the HTTP boundary", async () => {
    const response = await request(createApp(repository)).post("/api/v1/auth/login").send({ username: "" });
    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe("VALIDATION_ERROR");
  });

  it("returns a session for the test fixture", async () => {
    const response = await request(createApp(repository)).post("/api/v1/auth/login").send({ username: "test", password: "test" });
    expect(response.status).toBe(200);
    expect(response.body.user.roles).toEqual(["user"]);
  });
});
