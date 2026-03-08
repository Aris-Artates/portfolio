"use client";

import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import { COMMIT_TYPE_COLORS, COMMIT_TYPE_LABELS } from "@/lib/constants";

interface CommitDoughnutChartProps {
  data: Record<string, number>;
}

export function CommitDoughnutChart({ data }: CommitDoughnutChartProps) {
  const chartData = Object.entries(data)
    .filter(([, count]) => count > 0)
    .map(([type, count]) => ({
      name: COMMIT_TYPE_LABELS[type] || type,
      value: count,
      color: COMMIT_TYPE_COLORS[type] || "#94a3b8",
    }));

  const total = chartData.reduce((sum, d) => sum + d.value, 0);

  if (total === 0) {
    return (
      <div className="flex items-center justify-center h-[250px] text-gray-500">
        No commit data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={3}
          dataKey="value"
          label={({ name, percent }) =>
            `${name} ${(percent ? percent * 100 : 0).toFixed(0)}%`
          }
          labelLine={{ stroke: "rgba(255,255,255,0.2)" }}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            background: "rgba(15, 15, 30, 0.95)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            color: "#e2e8f0",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
