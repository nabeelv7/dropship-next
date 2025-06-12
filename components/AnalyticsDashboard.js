"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsDashboard() {
  const [visits, setVisits] = useState([]);
  const [range, setRange] = useState("month");

  useEffect(() => {
    fetch("/api/analytics")
      .then((res) => res.json())
      .then(setVisits);
  }, []);

  // Filter visits based on range
  const filtered = filterVisits(visits, range);

  // Aggregate views based on range:
  let viewsGrouped = {};
  if (range === "lastHour") {
    filtered.forEach(({ timestamp }) => {
      const date = new Date(timestamp);
      const hourLabel = date.getHours().toString().padStart(2, "0") + ":00";
      viewsGrouped[hourLabel] = (viewsGrouped[hourLabel] || 0) + 1;
    });
  } else {
    filtered.forEach(({ timestamp }) => {
      const date = timestamp.split("T")[0];
      viewsGrouped[date] = (viewsGrouped[date] || 0) + 1;
    });
  }

  const viewsData = Object.entries(viewsGrouped)
    .sort(([a], [b]) => (a > b ? 1 : -1))
    .map(([label, count]) => ({
      label,
      count,
    }));

  // Calculate max count for dynamic height and YAxis domain
  const maxCount = Math.max(...viewsData.map((d) => d.count), 1);

  // Dynamic height: minimum 300, increase if maxCount is small
  // For example: if maxCount < 10, increase height proportionally
  const baseHeight = 300;
  const dynamicHeight =
    maxCount < 10 ? baseHeight + (10 - maxCount) * 15 : baseHeight;

  // X-axis tick formatter
  const xTickFormatter = (label) => {
    if (range === "lastHour") {
      return label;
    }
    const d = new Date(label);
    return d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
  };

  return (
    <div className="p-6 max-w-screen-lg mx-auto space-y-10">
      {/* Filter */}
      <div className="flex justify-end mb-2">
        <select
          className="select select-bordered select-sm"
          value={range}
          onChange={(e) => setRange(e.target.value)}
        >
          <option value="lastHour">Last Hour</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>
      </div>

      {/* Views Bar Chart */}
      <div className="card bg-base-100 border border-base-300 p-6">
        <h2 className="text-xl font-semibold ml-5 mb-5 text-base-content">
          📊 Views Over Time
        </h2>
        <ResponsiveContainer width="100%" height={dynamicHeight}>
          <BarChart
            data={viewsData}
            margin={{ left: 0, right: 20 }}
            barCategoryGap="20%"
            barGap={4}
          >
            <XAxis
              dataKey="label"
              tickFormatter={xTickFormatter}
              tick={{ fontSize: 13, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              interval="preserveStartEnd"
              type="category"
            />
            <YAxis
              tick={{ fontSize: 13, fill: "#6b7280" }}
              axisLine={false}
              tickLine={false}
              allowDecimals={false}
              width={40}
              domain={[0, Math.ceil(maxCount * 1.1)]}
            />
            <Tooltip
              formatter={(value) => [value, "Views"]}
              contentStyle={{ borderRadius: 8, border: "none" }}
              cursor={{ fill: "transparent" }} // disables gray hover background
            />
            <Bar
              dataKey="count"
              fill="rgb(88, 80, 236)"
              barSize={30}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

// Filter visits by selected range
function filterVisits(visits, range) {
  const now = new Date();
  return visits.filter((v) => {
    const time = new Date(v.timestamp);
    switch (range) {
      case "lastHour": {
        const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
        return time >= oneHourAgo && time <= now;
      }
      case "today":
        return time.toDateString() === now.toDateString();
      case "week": {
        const weekAgo = new Date();
        weekAgo.setDate(now.getDate() - 7);
        return time >= weekAgo;
      }
      case "month": {
        const monthAgo = new Date();
        monthAgo.setDate(now.getDate() - 30);
        return time >= monthAgo;
      }
      default:
        return true;
    }
  });
}
