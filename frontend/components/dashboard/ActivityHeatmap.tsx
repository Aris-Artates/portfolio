"use client";

import type { HeatmapEntry } from "@/lib/types";

interface ActivityHeatmapProps {
  data: HeatmapEntry[];
}

const LEVEL_COLORS = [
  "rgba(255,255,255,0.04)",
  "rgba(102,126,234,0.3)",
  "rgba(102,126,234,0.5)",
  "rgba(102,126,234,0.7)",
  "rgba(102,126,234,0.9)",
];

export function ActivityHeatmap({ data }: ActivityHeatmapProps) {
  // Build a map from date -> entry
  const dataMap = new Map(data.map((d) => [d.date, d]));

  // Generate 52 weeks of cells
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() - 364);
  // Align to Sunday
  startDate.setDate(startDate.getDate() - startDate.getDay());

  const weeks: { date: Date; entry?: HeatmapEntry }[][] = [];
  let currentDate = new Date(startDate);

  while (currentDate <= today) {
    const week: { date: Date; entry?: HeatmapEntry }[] = [];
    for (let d = 0; d < 7; d++) {
      const dateStr = currentDate.toISOString().split("T")[0];
      week.push({
        date: new Date(currentDate),
        entry: dataMap.get(dateStr),
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(week);
  }

  const cellSize = 12;
  const cellGap = 2;

  return (
    <div className="overflow-x-auto">
      <svg
        width={weeks.length * (cellSize + cellGap) + 30}
        height={7 * (cellSize + cellGap) + 20}
        className="block"
      >
        {/* Day labels */}
        {["Mon", "Wed", "Fri"].map((day, i) => (
          <text
            key={day}
            x={0}
            y={[1, 3, 5][i] * (cellSize + cellGap) + cellSize + 10}
            className="fill-gray-500"
            fontSize={9}
          >
            {day}
          </text>
        ))}

        {/* Cells */}
        {weeks.map((week, wi) =>
          week.map((cell, di) => {
            const level = cell.entry?.level ?? 0;
            return (
              <rect
                key={`${wi}-${di}`}
                x={wi * (cellSize + cellGap) + 28}
                y={di * (cellSize + cellGap) + 10}
                width={cellSize}
                height={cellSize}
                rx={2}
                fill={LEVEL_COLORS[level]}
              >
                <title>
                  {cell.date.toISOString().split("T")[0]}:{" "}
                  {cell.entry?.count ?? 0} commits
                </title>
              </rect>
            );
          })
        )}
      </svg>
    </div>
  );
}
