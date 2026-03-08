"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import type { ProjectListResponse, ProjectDetailResponse } from "@/lib/types";

export function useProjects(params?: { featured?: boolean; status?: string }) {
  const [data, setData] = useState<ProjectListResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getProjects(params)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [params?.featured, params?.status]);

  return { data, loading };
}

export function useProject(slug: string) {
  const [data, setData] = useState<ProjectDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .getProjectBySlug(slug)
      .then(setData)
      .catch(() => setData(null))
      .finally(() => setLoading(false));
  }, [slug]);

  return { data, loading };
}
