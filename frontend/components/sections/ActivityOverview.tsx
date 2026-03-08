import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GitCommit, FolderOpen, Flame, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Total Commits",
    value: "---",
    icon: GitCommit,
    color: "from-[#667eea] to-[#764ba2]",
  },
  {
    label: "Active Projects",
    value: "---",
    icon: FolderOpen,
    color: "from-[#4facfe] to-[#00f2fe]",
  },
  {
    label: "Current Streak",
    value: "---",
    icon: Flame,
    color: "from-[#f093fb] to-[#f5576c]",
  },
  {
    label: "Trend",
    value: "---",
    icon: TrendingUp,
    color: "from-[#34d399] to-[#059669]",
  },
];

export function ActivityOverview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Coding Activity"
          subtitle="Real-time development metrics powered by webhook automation"
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="text-center">
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-3`}
              >
                <stat.icon size={20} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 mb-6">
            Connect the backend API to see live data from your GitHub and GitLab repositories.
          </p>
          <GradientButton href="/dashboard" variant="secondary">
            Full Dashboard
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
