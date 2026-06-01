import {
  dashboardKpis,
  irrigationEfficiency,
  operationalRecommendations,
  productivityTrend,
  recentActivity,
  recentAlerts
} from "@/mocks/dashboard";
import type { DashboardData } from "@/types/dashboard";

export type DashboardRepository = {
  getDashboardData: () => Promise<DashboardData>;
};

export const mockDashboardRepository: DashboardRepository = {
  async getDashboardData() {
    return {
      kpis: [...dashboardKpis],
      productivityTrend: [...productivityTrend],
      irrigationEfficiency: [...irrigationEfficiency],
      recommendations: [...operationalRecommendations],
      alerts: [...recentAlerts],
      activity: [...recentActivity]
    };
  }
};
