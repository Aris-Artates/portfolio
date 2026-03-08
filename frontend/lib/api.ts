import type {
  ProfileResponse,
  ProjectListResponse,
  ProjectDetailResponse,
  ActivitySummaryResponse,
  DailyActivityListResponse,
  CommitListResponse,
  HeatmapResponse,
  ActivityForecastResponse,
  ProjectCompletionListResponse,
} from "./types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

async function fetchAPI<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

export const api = {
  getProfile: () => fetchAPI<ProfileResponse>("/profile"),

  getProjects: (params?: { featured?: boolean; status?: string }) => {
    const searchParams = new URLSearchParams();
    if (params?.featured !== undefined) searchParams.set("featured", String(params.featured));
    if (params?.status) searchParams.set("status", params.status);
    const qs = searchParams.toString();
    return fetchAPI<ProjectListResponse>(`/projects${qs ? `?${qs}` : ""}`);
  },

  getProjectBySlug: (slug: string) =>
    fetchAPI<ProjectDetailResponse>(`/projects/${slug}`),

  getActivitySummary: (days = 30) =>
    fetchAPI<ActivitySummaryResponse>(`/activity/summary?days=${days}`),

  getDailyActivity: (startDate: string, endDate: string) =>
    fetchAPI<DailyActivityListResponse>(
      `/activity/daily?start_date=${startDate}&end_date=${endDate}`
    ),

  getRecentCommits: (limit = 20) =>
    fetchAPI<CommitListResponse>(`/activity/commits?limit=${limit}`),

  getHeatmap: () => fetchAPI<HeatmapResponse>("/activity/heatmap"),

  getActivityForecast: () =>
    fetchAPI<ActivityForecastResponse>("/predictions/activity"),

  getProjectCompletions: () =>
    fetchAPI<ProjectCompletionListResponse>("/predictions/projects"),
};
