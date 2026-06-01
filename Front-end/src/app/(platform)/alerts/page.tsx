import { PageHeader } from "@/components/layout/page-header";
import { alerts } from "@/mocks/operations";

export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Operations center"
        title="Alerts"
        description="Review field events that need attention from agronomy, irrigation, or operations teams."
      />

      <section className="space-y-3">
        {alerts.map((alert) => (
          <article
            className="flex flex-col gap-3 rounded-lg border border-white/10 bg-slate-950/70 p-5 md:flex-row md:items-center md:justify-between"
            key={alert.title}
          >
            <div>
              <span className="text-sm text-slate-400">{alert.severity}</span>
              <h2 className="mt-2 text-lg font-semibold">{alert.title}</h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-300">{alert.detail}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
