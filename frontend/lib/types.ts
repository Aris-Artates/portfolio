export interface SocialLinks {
  github?: string;
  gitlab?: string;
  linkedin?: string;
  tiktok?: string;
  facebook?: string;
}

export interface Skill {
  name: string;
  category: string;
  proficiency: number;
}

export interface Education {
  school: string;
  degree: string;
  major?: string;
  year_start: number;
  year_end?: number;
}

export interface Experience {
  role: string;
  company: string;
  description?: string;
  year_start: number;
  year_end?: number;
}

export interface ProfileResponse {
  id: string;
  full_name: string;
  title: string;
  bio: string | null;
  email: string | null;
  location: string | null;
  avatar_url: string | null;
  resume_url: string | null;
  social_links: SocialLinks;
  skills: Skill[];
  education: Education[];
  experience: Experience[];
}

export interface CommitSummary {
  sha: string;
  message: string;
  commit_type: string;
  project_name: string;
  project_slug: string;
  branch: string | null;
  committed_at: string;
}

export interface ProjectDetailResponse {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  long_description: string | null;
  repo_url: string | null;
  live_url: string | null;
  platform: string | null;
  language: string | null;
  tech_stack: string[];
  is_featured: boolean;
  is_active: boolean;
  status: string;
  total_commits: number;
  estimated_completion: number | null;
  started_at: string | null;
  completed_at: string | null;
  last_activity_at: string | null;
  recent_commits: CommitSummary[];
}

export interface ProjectListResponse {
  projects: ProjectDetailResponse[];
  total: number;
  limit: number;
  offset: number;
}

export interface ActivitySummaryResponse {
  total_commits: number;
  total_projects: number;
  active_projects: number;
  commits_by_type: Record<string, number>;
  daily_average: number;
  most_active_day: string;
  streak_current: number;
  streak_longest: number;
  trend: string;
}

export interface DailyActivityEntry {
  date: string;
  total_commits: number;
  feature_commits: number;
  bugfix_commits: number;
  refactor_commits: number;
  docs_commits: number;
  test_commits: number;
  chore_commits: number;
  lines_added: number;
  lines_deleted: number;
}

export interface HeatmapEntry {
  date: string;
  count: number;
  level: number;
}

export interface HeatmapResponse {
  data: HeatmapEntry[];
  max_count: number;
}

export interface ForecastEntry {
  date: string;
  predicted_commits: number;
  lower: number;
  upper: number;
}

export interface ActivityForecastResponse {
  forecast: ForecastEntry[];
  model_version: string;
  r2_score: number;
  trained_at: string | null;
}

export interface ProjectCompletionPrediction {
  project_id: string;
  project_name: string;
  project_slug: string;
  current_status: string;
  predicted_completion_pct: number;
  confidence_lower: number;
  confidence_upper: number;
  estimated_days_remaining: number | null;
  features_used: Record<string, number>;
}

export interface ProjectCompletionListResponse {
  predictions: ProjectCompletionPrediction[];
  model_version: string;
  trained_at: string | null;
}

export interface CommitListResponse {
  commits: CommitSummary[];
  total: number;
  limit: number;
  offset: number;
}

export interface DailyActivityListResponse {
  data: DailyActivityEntry[];
  total: number;
}
