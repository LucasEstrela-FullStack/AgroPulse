"use client";

import { useQuery } from "@tanstack/react-query";
import { dashboardService } from "@/services/dashboard/dashboard.service";

export function useDashboardData() {
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: () => dashboardService.getDashboardData()
  });
}
