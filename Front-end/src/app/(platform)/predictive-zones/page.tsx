import { PageHeader } from "@/components/layout/page-header";
import { predictiveZones } from "@/mocks/operations";

export default function PredictiveZonesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Yield forecasting"
        title="Predictive Zones"
        description="Group fields by expected productivity and operational risk before the next intervention cycle."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {predictiveZones.map((zone) => (
          <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5" key={zone.name}>
            <span className="text-sm text-slate-400">{zone.confidence}</span>
            <h2 className="mt-3 text-xl font-semibold">{zone.name}</h2>
            <strong className="mt-4 block text-3xl text-emerald-300">{zone.forecast}</strong>
          </article>
        ))}
      </section>
    </div>
  );
}
