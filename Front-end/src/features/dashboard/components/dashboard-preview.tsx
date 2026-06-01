import { Activity, Droplets, Leaf, Radar } from "lucide-react";
import { APP_NAME, APP_SLOGAN } from "@/constants/app";
import { PageHeader } from "@/components/layout/page-header";
import { dashboardKpis } from "@/mocks/dashboard";
import { KpiCard } from "@/features/dashboard/components/kpi-card";
import { ChartPanel } from "@/features/dashboard/components/chart-panel";
import { ProductivityChart } from "@/features/dashboard/components/productivity-chart";
import { IrrigationChart } from "@/features/dashboard/components/irrigation-chart";
import { AlertList } from "@/features/dashboard/components/alert-list";
import { RecommendationList } from "@/features/dashboard/components/recommendation-list";
import { ActivityTimeline } from "@/features/dashboard/components/activity-timeline";

const icons = [Leaf, Droplets, Radar, Activity];

export function DashboardPreview() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 text-slate-100">
      <PageHeader
        eyebrow={APP_SLOGAN}
        title={APP_NAME}
        description="Satellite, climate, and geospatial intelligence for high-scale agricultural operations."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {dashboardKpis.map((kpi, index) => {
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
          <ProductivityChart />
        </ChartPanel>

        <ChartPanel
          title="Irrigation efficiency"
          description="Operational efficiency and irrigation priority across monitored zones."
        >
          <IrrigationChart />
        </ChartPanel>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1fr_1fr_0.8fr]">
        <RecommendationList />
        <AlertList />
        <ActivityTimeline />
      </section>
    </div>
  );
}
