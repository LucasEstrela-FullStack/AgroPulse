import { PageHeader } from "@/components/layout/page-header";
import { analyticsCards } from "@/mocks/operations";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Performance intelligence"
        title="Analytics"
        description="Compare productivity, vegetation, water efficiency, and forecast signals across operations."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {analyticsCards.map((card) => (
          <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5" key={card.title}>
            <p className="text-sm text-slate-400">{card.label}</p>
            <h2 className="mt-3 text-2xl font-semibold">{card.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{card.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
