import { PageHeader } from "@/components/layout/page-header";
import { climateRisks } from "@/mocks/operations";

export default function ClimatePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Climate monitoring"
        title="Climate"
        description="Track risk conditions that can affect yield, irrigation windows, and field operations."
      />

      <section className="grid gap-4 lg:grid-cols-3">
        {climateRisks.map((risk) => (
          <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5" key={risk.name}>
            <span className="text-sm text-slate-400">{risk.status}</span>
            <h2 className="mt-3 text-xl font-semibold">{risk.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{risk.detail}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
