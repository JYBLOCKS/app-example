import { useEffect, useState } from "react";
import { getHealth } from "../api/home.api";
import type { HealthCheckResponse } from "../models/home.models";

export const useFetchData = () => {
  const [data, setData] = useState<HealthCheckResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getHealth();
        console.log("Health check response:", response);
        setData(response);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        if (error instanceof Error) {
          console.error("Error fetching health check:", error);
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, []);

  return { data, error, loading };
};
