import { Activity, Droplets, Leaf, Radar } from "lucide-react";
import { APP_NAME, APP_SLOGAN } from "@/constants/app";
import { dashboardKpis } from "@/mocks/dashboard";

const icons = [Leaf, Droplets, Radar, Activity];

export function DashboardPreview() {
  return (
    <main className="min-h-screen px-6 py-8 text-slate-100">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase text-emerald-300">{APP_SLOGAN}</p>
          <h1 className="text-4xl font-semibold tracking-normal md:text-6xl">{APP_NAME}</h1>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            Satellite, climate, and geospatial intelligence for high-scale agricultural operations.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {dashboardKpis.map((kpi, index) => {
            const Icon = icons[index] ?? Activity;

            return (
              <article
                className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-black/20"
                key={kpi.label}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">{kpi.label}</span>
                  <Icon className="h-5 w-5 text-cyan-300" aria-hidden="true" />
                </div>
                <strong className="mt-5 block text-3xl font-semibold">{kpi.value}</strong>
                <span className="mt-2 block text-sm text-emerald-300">{kpi.trend}</span>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
