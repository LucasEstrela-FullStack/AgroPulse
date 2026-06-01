import { Clock3 } from "lucide-react";
import type { DashboardActivity } from "@/types/dashboard";

type ActivityTimelineProps = Readonly<{
  activity: DashboardActivity[];
}>;

export function ActivityTimeline({ activity }: ActivityTimelineProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recent activity</h2>
        <Clock3 className="h-5 w-5 text-slate-400" aria-hidden="true" />
      </div>
      <div className="space-y-4">
        {activity.map((item) => (
          <article className="grid grid-cols-[0.75rem_1fr] gap-3" key={item.action}>
            <span className="mt-1 h-3 w-3 rounded-full bg-emerald-300" aria-hidden="true" />
            <div>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-sm font-medium text-white">{item.action}</h3>
                <span className="text-xs text-slate-500">{item.time}</span>
              </div>
              <p className="mt-1 text-sm text-slate-400">{item.owner}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
