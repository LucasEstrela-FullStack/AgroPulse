"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { productivityTrend } from "@/mocks/dashboard";

export function ProductivityChart() {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <AreaChart data={productivityTrend} margin={{ left: -20, right: 12, top: 12 }}>
        <defs>
          <linearGradient id="productivityFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="5%" stopColor="#22c55e" stopOpacity={0.45} />
            <stop offset="95%" stopColor="#22c55e" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
        <XAxis dataKey="month" stroke="#94a3b8" tickLine={false} />
        <YAxis stroke="#94a3b8" tickLine={false} />
        <Tooltip
          contentStyle={{
            background: "#020617",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "8px",
            color: "#f8fafc"
          }}
        />
        <Area
          dataKey="productivity"
          fill="url(#productivityFill)"
          name="Productivity"
          stroke="#22c55e"
          strokeWidth={2}
          type="monotone"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
