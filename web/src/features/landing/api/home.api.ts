import type { HealthCheckResponse } from "../models/home.models";

const ApiBaseURL = "http://localhost:3000/api/v1";

export const getHealth = async (): Promise<HealthCheckResponse> => {
  const response = await fetch(`${ApiBaseURL}/health`).then(
    async (res) => (await res.json()) as HealthCheckResponse,
  );
  return response;
};
