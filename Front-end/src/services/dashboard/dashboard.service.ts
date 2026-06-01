import {
  mockDashboardRepository,
  type DashboardRepository
} from "@/services/dashboard/dashboard.repository";

export class DashboardService {
  constructor(private readonly repository: DashboardRepository) {}

  getDashboardData() {
    return this.repository.getDashboardData();
  }
}

export const dashboardService = new DashboardService(mockDashboardRepository);
