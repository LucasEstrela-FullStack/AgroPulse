import { mapMetrics } from "@/mocks/maps";
import { cn } from "@/lib/utils";

const toneStyles = {
  emerald: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  cyan: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  violet: "border-violet-400/20 bg-violet-400/10 text-violet-300",
  amber: "border-amber-400/20 bg-amber-400/10 text-amber-300"
} as const;

export function MapMetrics() {
  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {mapMetrics.map((metric) => (
        <article className={cn("rounded-lg border p-4", toneStyles[metric.tone])} key={metric.label}>
          <span className="text-sm text-slate-300">{metric.label}</span>
          <strong className="mt-2 block text-2xl text-white">{metric.value}</strong>
        </article>
      ))}
    </div>
  );
}
