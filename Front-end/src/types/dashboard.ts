export type DashboardKpiTone = "emerald" | "cyan" | "amber" | "violet";

export type DashboardKpi = {
  label: string;
  value: string;
  trend: string;
  status: string;
  tone: DashboardKpiTone;
};

export type ProductivityTrendPoint = {
  month: string;
  productivity: number;
  ndvi: number;
};

export type IrrigationEfficiencyPoint = {
  zone: string;
  efficiency: number;
  priority: number;
};

export type OperationalRecommendation = {
  title: string;
  impact: string;
  detail: string;
};

export type DashboardAlert = {
  severity: "High" | "Medium" | "Low";
  title: string;
  area: string;
  time: string;
};

export type DashboardActivity = {
  action: string;
  owner: string;
  time: string;
};

export type DashboardData = {
  kpis: DashboardKpi[];
  productivityTrend: ProductivityTrendPoint[];
  irrigationEfficiency: IrrigationEfficiencyPoint[];
  recommendations: OperationalRecommendation[];
  alerts: DashboardAlert[];
  activity: DashboardActivity[];
};
