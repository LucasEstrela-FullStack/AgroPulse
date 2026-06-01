import { Sparkles } from "lucide-react";
import type { OperationalRecommendation } from "@/types/dashboard";

type RecommendationListProps = Readonly<{
  recommendations: OperationalRecommendation[];
}>;

export function RecommendationList({ recommendations }: RecommendationListProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Operational recommendations</h2>
        <Sparkles className="h-5 w-5 text-emerald-300" aria-hidden="true" />
      </div>
      <div className="space-y-4">
        {recommendations.map((item) => (
          <article className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0" key={item.title}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-sm font-medium text-white">{item.title}</h3>
              <span className="text-xs text-cyan-300">{item.impact}</span>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
