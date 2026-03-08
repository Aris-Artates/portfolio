"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ActivityHeatmap } from "@/components/dashboard/ActivityHeatmap";
import { CommitTimeline } from "@/components/dashboard/CommitTimeline";
import { CommitDoughnutChart } from "@/components/charts/CommitDoughnutChart";
import { ActivityLineChart } from "@/components/charts/ActivityLineChart";
import { PredictionCard } from "@/components/dashboard/PredictionCard";
import { useActivitySummary, useDailyActivity, useHeatmap, useRecentCommits } from "@/hooks/useActivity";
import { useActivityForecast } from "@/hooks/usePredictions";
import { SkeletonLoader } from "@/components/ui/SkeletonLoader";

export default function DashboardPage() {
  const today = new Date().toISOString().split("T")[0];
  const ninetyDaysAgo = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const { data: summary, loading: summaryLoading } = useActivitySummary(90);
  const { data: daily, loading: dailyLoading } = useDailyActivity(ninetyDaysAgo, today);
  const { data: heatmap, loading: heatmapLoading } = useHeatmap();
  const { data: commits, loading: commitsLoading } = useRecentCommits(20);
  const { data: forecast, loading: forecastLoading } = useActivityForecast();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SectionHeading
        title="Developer Dashboard"
        subtitle="Real-time coding activity, commit history, and AI-powered predictions"
      />

      {/* Stats */}
      {summaryLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[...Array(4)].map((_, i) => (
            <SkeletonLoader key={i} variant="card" className="h-28" />
          ))}
        </div>
      ) : (
        <div className="mb-8">
          <StatsGrid data={summary} />
        </div>
      )}

      {/* Activity chart + Predictions */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <GlassCard hover={false} className="lg:col-span-2">
          <h3 className="text-lg font-semibold text-white mb-4">Activity Trend</h3>
          {dailyLoading ? (
            <SkeletonLoader variant="chart" />
          ) : (
            <ActivityLineChart
              dailyData={daily?.data || []}
              forecast={forecast?.forecast || []}
            />
          )}
        </GlassCard>

        {forecastLoading ? (
          <SkeletonLoader variant="card" className="h-64" />
        ) : (
          <PredictionCard forecast={forecast} />
        )}
      </div>

      {/* Heatmap */}
      <GlassCard hover={false} className="mb-8">
        <h3 className="text-lg font-semibold text-white mb-4">
          Contribution Heatmap
        </h3>
        {heatmapLoading ? (
          <SkeletonLoader variant="chart" className="h-32" />
        ) : (
          <ActivityHeatmap data={heatmap?.data || []} />
        )}
      </GlassCard>

      {/* Commit type chart + Timeline */}
      <div className="grid lg:grid-cols-2 gap-6">
        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-white mb-4">
            Commit Types
          </h3>
          {summaryLoading ? (
            <SkeletonLoader variant="chart" className="h-[250px]" />
          ) : (
            <CommitDoughnutChart data={summary?.commits_by_type || {}} />
          )}
        </GlassCard>

        <GlassCard hover={false}>
          <h3 className="text-lg font-semibold text-white mb-4">
            Recent Commits
          </h3>
          {commitsLoading ? (
            <div className="space-y-3">
              {[...Array(5)].map((_, i) => (
                <SkeletonLoader key={i} variant="text" className="h-16" />
              ))}
            </div>
          ) : (
            <CommitTimeline commits={commits?.commits || []} />
          )}
        </GlassCard>
      </div>
    </div>
  );
}
