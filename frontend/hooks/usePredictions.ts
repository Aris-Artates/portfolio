"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import type {
  ActivityForecastResponse,
  ProjectCompletionListResponse,
} from "@/lib/types";

export function useActivityForecast() {
  const [data, setData] = useState<ActivityForecastResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getActivityForecast()
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}

export function useProjectCompletions() {
  const [data, setData] = useState<ProjectCompletionListResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getProjectCompletions()
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
