"use client";

import dynamic from "next/dynamic";
import { Activity, Droplets, Leaf, Radar } from "lucide-react";
import { APP_NAME, APP_SLOGAN } from "@/constants/app";
import { PageHeader } from "@/components/layout/page-header";
import { KpiCard } from "@/features/dashboard/components/kpi-card";
import { ChartPanel } from "@/features/dashboard/components/chart-panel";
import { AlertList } from "@/features/dashboard/components/alert-list";
import { RecommendationList } from "@/features/dashboard/components/recommendation-list";
import { ActivityTimeline } from "@/features/dashboard/components/activity-timeline";
import { useDashboardData } from "@/features/dashboard/hooks/use-dashboard-data";

const icons = [Leaf, Droplets, Radar, Activity];
const ProductivityChart = dynamic(
  () =>
    import("@/features/dashboard/components/productivity-chart").then(
      (module) => module.ProductivityChart
    ),
  {
    ssr: false,
    loading: () => <div className="h-full rounded-lg bg-white/[0.03]" />
  }
);
const IrrigationChart = dynamic(
  () =>
    import("@/features/dashboard/components/irrigation-chart").then(
      (module) => module.IrrigationChart
    ),
  {
    ssr: false,
    loading: () => <div className="h-full rounded-lg bg-white/[0.03]" />
  }
);

export function DashboardPreview() {
  const { data, isLoading } = useDashboardData();

  if (isLoading || !data) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 text-slate-100">
        <PageHeader
          eyebrow={APP_SLOGAN}
          title={APP_NAME}
          description="Satellite, climate, and geospatial intelligence for high-scale agricultural operations."
        />
        <div className="h-96 rounded-lg border border-white/10 bg-slate-950/70" />
      </div>
    );
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 text-slate-100">
      <PageHeader
        eyebrow={APP_SLOGAN}
        title={APP_NAME}
        description="Satellite, climate, and geospatial intelligence for high-scale agricultural operations."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {data.kpis.map((kpi, index) => {
          const Icon = icons[index] ?? Activity;

          return (
            <KpiCard
              icon={Icon}
              key={kpi.label}
              label={kpi.label}
              status={kpi.status}
              tone={kpi.tone}
              trend={kpi.trend}
              value={kpi.value}
            />
          );
        })}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.35fr_1fr]">
        <ChartPanel
          title="Productivity trend"
          description="Monthly productivity movement compared against vegetation health signals."
        >
          <ProductivityChart data={data.productivityTrend} />
        </ChartPanel>

        <ChartPanel
          title="Irrigation efficiency"
          description="Operational efficiency and irrigation priority across monitored zones."
        >
          <IrrigationChart data={data.irrigationEfficiency} />
        </ChartPanel>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr_0.8fr]">
        <RecommendationList recommendations={data.recommendations} />
        <AlertList alerts={data.alerts} />
        <ActivityTimeline activity={data.activity} />
      </section>
    </div>
  );
}
