import cors from "cors";
import express from "express";
import helmet from "helmet";
import { env } from "./config/env.js";
import { errorHandler } from "./middleware/error-handler.js";
import { notFound } from "./middleware/not-found.js";
import { apiRouter } from "./routes/index.js";

export const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({ name: "app-example-api", version: "1.0.0" });
});
app.use("/api/v1", apiRouter);
app.use(notFound);
app.use(errorHandler);
