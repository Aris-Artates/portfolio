import { GlassCard } from "@/components/ui/GlassCard";
import { GitCommit, FolderOpen, Flame, TrendingUp } from "lucide-react";
import type { ActivitySummaryResponse } from "@/lib/types";

interface StatsGridProps {
  data: ActivitySummaryResponse | null;
}

export function StatsGrid({ data }: StatsGridProps) {
  const stats = [
    {
      label: "Total Commits",
      value: data?.total_commits ?? "---",
      icon: GitCommit,
      color: "from-[#667eea] to-[#764ba2]",
    },
    {
      label: "Active Projects",
      value: data?.active_projects ?? "---",
      icon: FolderOpen,
      color: "from-[#4facfe] to-[#00f2fe]",
    },
    {
      label: "Current Streak",
      value: data?.streak_current ? `${data.streak_current}d` : "---",
      icon: Flame,
      color: "from-[#f093fb] to-[#f5576c]",
    },
    {
      label: "Daily Average",
      value: data?.daily_average ? `${data.daily_average.toFixed(1)}` : "---",
      icon: TrendingUp,
      color: "from-[#34d399] to-[#059669]",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <GlassCard key={stat.label} className="text-center p-4">
          <div
            className={`inline-flex p-2.5 rounded-xl bg-gradient-to-r ${stat.color} mb-3`}
          >
            <stat.icon size={18} className="text-white" />
          </div>
          <div className="text-2xl font-bold text-white">{stat.value}</div>
          <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
        </GlassCard>
      ))}
    </div>
  );
}
