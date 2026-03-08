"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import type {
  ActivitySummaryResponse,
  DailyActivityListResponse,
  HeatmapResponse,
  CommitListResponse,
} from "@/lib/types";

export function useActivitySummary(days = 90) {
  const [data, setData] = useState<ActivitySummaryResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getActivitySummary(days)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [days]);

  return { data, loading };
}

export function useDailyActivity(startDate: string, endDate: string) {
  const [data, setData] = useState<DailyActivityListResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getDailyActivity(startDate, endDate)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [startDate, endDate]);

  return { data, loading };
}

export function useHeatmap() {
  const [data, setData] = useState<HeatmapResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getHeatmap()
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}

export function useRecentCommits(limit = 20) {
  const [data, setData] = useState<CommitListResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getRecentCommits(limit)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [limit]);

  return { data, loading };
}
