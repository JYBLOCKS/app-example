import type { RequestHandler } from "express";
import { loginDto } from "../dtos/auth.dto.js";
import { InvalidCredentialsError, AuthService } from "../services/auth.service.js";

export const createLoginController = (service: AuthService): RequestHandler => async (request, response, next) => {
  const parsed = loginDto.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ error: { code: "VALIDATION_ERROR", message: "Username and password are required" } });
    return;
  }
  try {
    response.status(200).json(await service.login(parsed.data));
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      response.status(401).json({ error: { code: "INVALID_CREDENTIALS", message: "Invalid username or password" } });
      return;
    }
    next(error);
  }
};
