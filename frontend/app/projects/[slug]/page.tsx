"use client";

import { useParams } from "next/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { GradientButton } from "@/components/ui/GradientButton";
import { ArrowLeft, ExternalLink, GitBranch, Calendar } from "lucide-react";
import Link from "next/link";

const projectsData: Record<string, {
  name: string;
  description: string;
  long_description: string;
  tech_stack: string[];
  status: string;
  total_commits: number;
  language: string;
  platform: string;
  started_at: string;
}> = {
  portfolio: {
    name: "Developer Portfolio",
    description: "Fully automated portfolio with GitHub/GitLab webhooks and AI predictions.",
    long_description:
      "A comprehensive developer portfolio system that automatically updates itself using GitHub and GitLab webhooks. Features include real-time commit tracking, AI-powered activity predictions, and a modern glass-morphism UI built with Next.js and Tailwind CSS. The backend uses FastAPI with Supabase for data persistence.",
    tech_stack: ["Next.js", "FastAPI", "Supabase", "scikit-learn", "TypeScript", "Tailwind CSS"],
    status: "in_progress",
    total_commits: 0,
    language: "TypeScript",
    platform: "github",
    started_at: "2025-03-01",
  },
  "inventory-system": {
    name: "Inventory Management System",
    description: "Internal inventory tracking with QR code scanning for CDA Region 8.",
    long_description:
      "Built during the IT Specialist role at CDA Region 8. This system handles internal and outgoing inventory tracking with QR code scanning capabilities. Designed to improve operational efficiency across office devices and systems.",
    tech_stack: ["Python", "SQL", "QR Code"],
    status: "completed",
    total_commits: 0,
    language: "Python",
    platform: "github",
    started_at: "2023-08-01",
  },
  "ai-text-reader": {
    name: "AI Text Reader & Pharmacy Locator",
    description: "Thesis: AI-powered text reader enhancing accessibility for elderly users.",
    long_description:
      "Undergraduate thesis project at AMA University. Developed an AI-powered system that reads text aloud and locates nearby pharmacies, specifically designed to enhance accessibility for elderly users. Combines computer vision, natural language processing, and geolocation services.",
    tech_stack: ["Python", "AI/ML", "Mobile", "Computer Vision", "NLP"],
    status: "completed",
    total_commits: 0,
    language: "Python",
    platform: "github",
    started_at: "2024-06-01",
  },
};

const statusColors: Record<string, string> = {
  planning: "#fbbf24",
  in_progress: "#4facfe",
  completed: "#34d399",
  archived: "#94a3b8",
};

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
        <GradientButton href="/projects">Back to Projects</GradientButton>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Back to Projects
      </Link>

      <div className="mb-8">
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gradient">
            {project.name}
          </h1>
          <Badge color={statusColors[project.status]}>
            {project.status.replace("_", " ")}
          </Badge>
        </div>
        <p className="text-lg text-gray-400">{project.description}</p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <GlassCard className="text-center p-4">
          <GitBranch size={18} className="mx-auto text-[#667eea] mb-2" />
          <div className="text-xl font-bold text-white">{project.total_commits}</div>
          <div className="text-xs text-gray-400">Commits</div>
        </GlassCard>
        <GlassCard className="text-center p-4">
          <Calendar size={18} className="mx-auto text-[#4facfe] mb-2" />
          <div className="text-xl font-bold text-white">
            {new Date(project.started_at).toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </div>
          <div className="text-xs text-gray-400">Started</div>
        </GlassCard>
        <GlassCard className="text-center p-4">
          <ExternalLink size={18} className="mx-auto text-[#34d399] mb-2" />
          <div className="text-xl font-bold text-white">{project.platform}</div>
          <div className="text-xs text-gray-400">Platform</div>
        </GlassCard>
      </div>

      {/* Description */}
      <GlassCard hover={false} className="mb-8">
        <h2 className="text-lg font-semibold text-white mb-3">About</h2>
        <p className="text-gray-300 leading-relaxed">{project.long_description}</p>
      </GlassCard>

      {/* Tech stack */}
      <GlassCard hover={false}>
        <h2 className="text-lg font-semibold text-white mb-3">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech_stack.map((tech) => (
            <Badge key={tech} color="#667eea">
              {tech}
            </Badge>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}
