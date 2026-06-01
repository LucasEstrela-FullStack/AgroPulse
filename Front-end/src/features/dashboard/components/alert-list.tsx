import { AlertTriangle } from "lucide-react";
import type { DashboardAlert } from "@/types/dashboard";

type AlertListProps = Readonly<{
  alerts: DashboardAlert[];
}>;

export function AlertList({ alerts }: AlertListProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent alerts</h2>
        <AlertTriangle className="h-5 w-5 text-amber-300" aria-hidden="true" />
      </div>
      <div className="space-y-3">
        {alerts.map((alert) => (
          <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4" key={alert.title}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs uppercase text-amber-300">{alert.severity}</span>
                <h3 className="mt-1 text-sm font-medium text-white">{alert.title}</h3>
              </div>
              <span className="text-xs text-slate-500">{alert.time}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{alert.area}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
