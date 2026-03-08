import { GlassCard } from "@/components/ui/GlassCard";
import { Brain, TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { ActivityForecastResponse } from "@/lib/types";

interface PredictionCardProps {
  forecast: ActivityForecastResponse | null;
}

export function PredictionCard({ forecast }: PredictionCardProps) {
  if (!forecast || forecast.forecast.length === 0) {
    return (
      <GlassCard>
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2]">
            <Brain size={18} className="text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">AI Predictions</h3>
        </div>
        <p className="text-gray-500 text-sm">
          No predictions available yet. Train the AI model by triggering a retrain via the API.
        </p>
      </GlassCard>
    );
  }

  const avgPredicted =
    forecast.forecast.reduce((sum, f) => sum + f.predicted_commits, 0) /
    forecast.forecast.length;

  const TrendIcon =
    avgPredicted > 3 ? TrendingUp : avgPredicted < 1 ? TrendingDown : Minus;

  return (
    <GlassCard>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#667eea] to-[#764ba2]">
          <Brain size={18} className="text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white">AI Predictions</h3>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <TrendIcon size={24} className="text-[#667eea]" />
        <div>
          <div className="text-2xl font-bold text-white">
            {avgPredicted.toFixed(1)}
          </div>
          <div className="text-xs text-gray-400">predicted daily commits (14-day avg)</div>
        </div>
      </div>

      <div className="text-xs text-gray-500 space-y-1">
        <div>Model: {forecast.model_version}</div>
        <div>R² Score: {forecast.r2_score.toFixed(3)}</div>
        {forecast.trained_at && (
          <div>Trained: {new Date(forecast.trained_at).toLocaleDateString()}</div>
        )}
      </div>
    </GlassCard>
  );
}
