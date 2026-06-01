"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import type { IrrigationEfficiencyPoint } from "@/types/dashboard";

type IrrigationChartProps = Readonly<{
  data: IrrigationEfficiencyPoint[];
}>;

export function IrrigationChart({ data }: IrrigationChartProps) {
  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart data={data} margin={{ left: -20, right: 12, top: 12 }}>
        <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" vertical={false} />
        <XAxis dataKey="zone" stroke="#94a3b8" tickLine={false} />
        <YAxis stroke="#94a3b8" tickLine={false} />
        <Tooltip
          contentStyle={{
            background: "#020617",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "8px",
            color: "#f8fafc"
          }}
        />
        <Bar dataKey="efficiency" fill="#06b6d4" name="Efficiency" radius={[6, 6, 0, 0]} />
        <Bar dataKey="priority" fill="#7c3aed" name="Priority" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
