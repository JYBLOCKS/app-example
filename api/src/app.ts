import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";
import { apiRouter } from "./routes/index.js";
import { createAuthRouter } from "./routes/auth.routes.js";
import type { UserRepository } from "./repositories/user.repository.js";

export const createApp = (users?: UserRepository) => {
  const application = express();

  application.disable("x-powered-by");
  application.use(helmet());
  application.use(cors({ origin: env.corsOrigin }));
  application.use(express.json());

  application.get("/", (_request, response) => response.json({ name: "app-example-api", version: "1.0.0" }));
  application.use("/api/v1", apiRouter);
  if (users) application.use("/api/v1", createAuthRouter(users, env.jwtSecret, env.jwtExpiresIn));
  application.use(notFound);
  application.use(errorHandler);
  return application;
};

export const app = createApp();
