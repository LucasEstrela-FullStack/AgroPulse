import type { ComponentType } from "react";
import { cn } from "@/lib/utils";

type KpiCardProps = Readonly<{
  label: string;
  value: string;
  trend: string;
  status: string;
  tone: "emerald" | "cyan" | "amber" | "violet";
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
}>;

const toneStyles = {
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-300"
} as const;

export function KpiCard({ label, value, trend, status, tone, icon: Icon }: KpiCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-black/20">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm text-slate-400">{label}</span>
        <span className={cn("flex h-9 w-9 items-center justify-center rounded-lg border", toneStyles[tone])}>
          <Icon className="h-4 w-4" aria-hidden="true" />
        </span>
      </div>
      <strong className="mt-5 block text-3xl font-semibold">{value}</strong>
      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-sm text-emerald-300">{trend}</span>
        <span className="text-xs text-slate-400">{status}</span>
      </div>
    </article>
  );
}
