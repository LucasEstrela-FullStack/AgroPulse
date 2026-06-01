import { PageHeader } from "@/components/layout/page-header";
import { irrigationPriorities } from "@/mocks/operations";

export default function IrrigationPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Water operations"
        title="Irrigation"
        description="Prioritize irrigation based on soil moisture, crop stress, and short-term climate pressure."
      />

      <section className="grid gap-4 xl:grid-cols-2">
        {irrigationPriorities.map((item) => (
          <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5" key={item.zone}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-sm text-slate-400">{item.priority}</span>
                <h2 className="mt-2 text-xl font-semibold">{item.zone}</h2>
              </div>
              <strong className="text-2xl text-cyan-300">{item.waterNeed}</strong>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{item.reason}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
