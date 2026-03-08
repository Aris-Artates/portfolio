"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
} from "recharts";
import type { DailyActivityEntry, ForecastEntry } from "@/lib/types";

interface ActivityLineChartProps {
  dailyData: DailyActivityEntry[];
  forecast?: ForecastEntry[];
}

export function ActivityLineChart({ dailyData, forecast = [] }: ActivityLineChartProps) {
  const chartData = [
    ...dailyData.map((d) => ({
      date: d.date,
      commits: d.total_commits,
      type: "actual" as const,
    })),
    ...forecast.map((f) => ({
      date: f.date,
      predicted: f.predicted_commits,
      lower: f.lower,
      upper: f.upper,
      type: "forecast" as const,
    })),
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <ComposedChart data={chartData}>
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#667eea" />
            <stop offset="100%" stopColor="#764ba2" />
          </linearGradient>
          <linearGradient id="forecastGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4facfe" />
            <stop offset="100%" stopColor="#00f2fe" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
        <XAxis
          dataKey="date"
          stroke="#4a5568"
          tick={{ fontSize: 11 }}
          tickFormatter={(v) => {
            const d = new Date(v);
            return `${d.getMonth() + 1}/${d.getDate()}`;
          }}
        />
        <YAxis stroke="#4a5568" tick={{ fontSize: 11 }} />
        <Tooltip
          contentStyle={{
            background: "rgba(15, 15, 30, 0.95)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            color: "#e2e8f0",
          }}
        />
        <Area
          dataKey="upper"
          stroke="none"
          fill="#4facfe"
          fillOpacity={0.08}
        />
        <Area
          dataKey="lower"
          stroke="none"
          fill="#0c0c1d"
          fillOpacity={1}
        />
        <Line
          dataKey="commits"
          stroke="url(#lineGradient)"
          strokeWidth={2}
          dot={false}
          connectNulls={false}
        />
        <Line
          dataKey="predicted"
          stroke="url(#forecastGradient)"
          strokeWidth={2}
          strokeDasharray="6 3"
          dot={false}
          connectNulls={false}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
