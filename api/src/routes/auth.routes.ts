import { Router } from "express";
import { createLoginController } from "../controllers/auth.controller.js";
import { AuthService } from "../services/auth.service.js";
import type { UserRepository } from "../repositories/user.repository.js";
import { requireAuth, requireRole } from "../middleware/auth.middleware.js";

export const createAuthRouter = (users: UserRepository, secret: string, expiresIn: string) => {
  const router = Router();
  router.post("/auth/login", createLoginController(new AuthService(users, secret, expiresIn)));
  router.get("/auth/me", requireAuth(secret), (request, response) => response.json({ user: request.auth }));
  router.get("/auth/admin", requireAuth(secret), requireRole("admin"), (_request, response) => response.json({ status: "ok" }));
  return router;
};
