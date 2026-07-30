import bcrypt from "bcryptjs";
import { describe, expect, it } from "vitest";
import { AuthService, InvalidCredentialsError } from "../src/services/auth.service.js";
import type { User } from "../src/models/auth.model.js";
import type { UserRepository } from "../src/repositories/user.repository.js";

const user: User = {
  id: "user-1", username: "test", displayName: "Test User", email: "test@example.local",
  passwordHash: await bcrypt.hash("test", 4), roles: ["user"], metadata: { department: "QA", locale: "en" },
};
const repository: UserRepository = { findByUsername: async (username) => username === user.username ? user : null };

describe("AuthService", () => {
  const service = new AuthService(repository, "test-secret", "15m");

  it("returns a JWT and complete user metadata for valid credentials", async () => {
    const result = await service.login({ username: "test", password: "test" });
    expect(result.accessToken).toEqual(expect.any(String));
    expect(result.user).toMatchObject({ username: "test", roles: ["user"], metadata: { department: "QA" } });
    expect(result.user).not.toHaveProperty("passwordHash");
  });

  it("uses one safe error for unknown users and wrong passwords", async () => {
    await expect(service.login({ username: "test", password: "wrong" })).rejects.toBeInstanceOf(InvalidCredentialsError);
    await expect(service.login({ username: "unknown", password: "test" })).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});
