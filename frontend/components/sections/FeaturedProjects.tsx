import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ExternalLink, GitBranch } from "lucide-react";

const placeholderProjects = [
  {
    name: "Developer Portfolio",
    slug: "portfolio",
    description:
      "Fully automated portfolio with real-time GitHub/GitLab integration, AI-powered predictions, and a modern glass-morphism UI.",
    tech_stack: ["Next.js", "FastAPI", "Supabase", "scikit-learn"],
    status: "in_progress",
    total_commits: 0,
    platform: "github",
  },
  {
    name: "Inventory Management System",
    slug: "inventory-system",
    description:
      "Internal inventory tracking system with QR code scanning for CDA Region 8. Built during IT Specialist role.",
    tech_stack: ["Python", "SQL", "QR Code"],
    status: "completed",
    total_commits: 0,
    platform: "github",
  },
  {
    name: "AI Text Reader & Pharmacy Locator",
    slug: "ai-text-reader",
    description:
      "Thesis project: AI-powered text reader and pharmacy locator designed to enhance accessibility for elderly users.",
    tech_stack: ["Python", "AI/ML", "Mobile"],
    status: "completed",
    total_commits: 0,
    platform: "github",
  },
];

const statusColors: Record<string, string> = {
  planning: "#fbbf24",
  in_progress: "#4facfe",
  completed: "#34d399",
  archived: "#94a3b8",
};

export function FeaturedProjects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Highlights from my development work"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {placeholderProjects.map((project) => (
            <GlassCard key={project.slug}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                <Badge color={statusColors[project.status]}>
                  {project.status.replace("_", " ")}
                </Badge>
              </div>

              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
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
                <div className="flex items-center gap-1">
                  <GitBranch size={14} />
                  <span>{project.total_commits} commits</span>
                </div>
                <ExternalLink size={14} />
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center mt-10">
          <GradientButton href="/projects">All Projects</GradientButton>
        </div>
      </div>
    </section>
  );
}
