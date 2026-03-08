"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, GitBranch } from "lucide-react";
import Link from "next/link";

const STATUS_OPTIONS = ["all", "in_progress", "completed", "planning", "archived"];

const statusColors: Record<string, string> = {
  planning: "#fbbf24",
  in_progress: "#4facfe",
  completed: "#34d399",
  archived: "#94a3b8",
};

const placeholderProjects = [
  {
    slug: "portfolio",
    name: "Developer Portfolio",
    description:
      "Fully automated portfolio with GitHub/GitLab webhooks, AI predictions, and glass-morphism UI.",
    tech_stack: ["Next.js", "FastAPI", "Supabase", "scikit-learn"],
    status: "in_progress",
    total_commits: 0,
    language: "TypeScript",
    platform: "github",
  },
  {
    slug: "inventory-system",
    name: "Inventory Management System",
    description:
      "Internal inventory tracking with QR code scanning for CDA Region 8.",
    tech_stack: ["Python", "SQL", "QR Code"],
    status: "completed",
    total_commits: 0,
    language: "Python",
    platform: "github",
  },
  {
    slug: "ai-text-reader",
    name: "AI Text Reader & Pharmacy Locator",
    description:
      "Thesis: AI-powered text reader enhancing accessibility for elderly users.",
    tech_stack: ["Python", "AI/ML", "Mobile"],
    status: "completed",
    total_commits: 0,
    language: "Python",
    platform: "github",
  },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? placeholderProjects
      : placeholderProjects.filter((p) => p.status === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        title="Projects"
        subtitle="All repositories and projects, auto-synced from GitHub and GitLab"
      />

      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {STATUS_OPTIONS.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              filter === status
                ? "bg-white/10 text-white border border-white/20"
                : "text-gray-400 hover:text-white border border-transparent"
            }`}
          >
            {status === "all" ? "All" : status.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <GlassCard>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <Badge color={statusColors[project.status]}>
                  {project.status.replace("_", " ")}
                </Badge>
              </div>

              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech_stack.map((tech) => (
                  <Badge key={tech} color="#667eea">
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <GitBranch size={14} />
                    <span>{project.total_commits} commits</span>
                  </div>
                  {project.language && (
                    <span className="text-gray-600">{project.language}</span>
                  )}
                </div>
                <ExternalLink size={14} />
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-12">
          No projects match the selected filter.
        </p>
      )}
    </div>
  );
}
