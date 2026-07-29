import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/app.js";

describe("health endpoints", () => {
  it("reports the service health", async () => {
    const response = await request(app).get("/api/v1/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  it("returns a structured 404", async () => {
    const response = await request(app).get("/missing");

    expect(response.status).toBe(404);
    expect(response.body.error.code).toBe("NOT_FOUND");
  });
});
