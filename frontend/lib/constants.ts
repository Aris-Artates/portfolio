export const COMMIT_TYPE_COLORS: Record<string, string> = {
  feature: "#667eea",
  bugfix: "#f87171",
  refactor: "#fbbf24",
  docs: "#34d399",
  test: "#a78bfa",
  chore: "#94a3b8",
};

export const COMMIT_TYPE_LABELS: Record<string, string> = {
  feature: "Feature",
  bugfix: "Bug Fix",
  refactor: "Refactor",
  docs: "Docs",
  test: "Test",
  chore: "Chore",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "About", href: "/about" },
];

export const SOCIAL_LINKS = {
  github: { label: "GitHub", placeholder: "https://github.com/Aris-Artates" },
  gitlab: { label: "GitLab", placeholder: "" },
  linkedin: { label: "LinkedIn", placeholder: "" },
  tiktok: { label: "TikTok", placeholder: "" },
  facebook: { label: "Facebook", placeholder: "" },
};
