import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { JwtClaims } from "../dtos/auth.dto.js";
import type { UserRole } from "../models/auth.model.js";

declare global {
  namespace Express {
    interface Request {
      auth?: JwtClaims;
    }
  }
}

export const requireAuth = (secret: string): RequestHandler => (request, response, next) => {
  const header = request.header("authorization");
  const token = header?.startsWith("Bearer ") ? header.slice(7) : undefined;
  if (!token) {
    response.status(401).json({ error: { code: "UNAUTHENTICATED", message: "Authentication required" } });
    return;
  }
  try {
    request.auth = jwt.verify(token, secret) as JwtClaims;
    next();
  } catch {
    response.status(401).json({ error: { code: "UNAUTHENTICATED", message: "Invalid or expired token" } });
  }
};

export const requireRole = (role: string): RequestHandler => (request, response, next) => {
  if (!request.auth?.roles.includes(role as UserRole)) {
    response.status(403).json({ error: { code: "FORBIDDEN", message: "Insufficient permissions" } });
    return;
  }
  next();
};
