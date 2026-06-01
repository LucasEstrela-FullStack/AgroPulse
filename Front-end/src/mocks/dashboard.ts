export const dashboardKpis = [
  {
    label: "Productivity Score",
    value: "87%",
    trend: "+4.2%",
    status: "Above target",
    tone: "emerald"
  },
  {
    label: "Water Efficiency",
    value: "73%",
    trend: "+2.8%",
    status: "Improving",
    tone: "cyan"
  },
  {
    label: "Climate Risk",
    value: "Medium",
    trend: "-1 alert",
    status: "Watchlist",
    tone: "amber"
  },
  {
    label: "NDVI Index",
    value: "0.74",
    trend: "+0.03",
    status: "Healthy canopy",
    tone: "violet"
  }
] as const;

export const productivityTrend = [
  { month: "Jan", productivity: 72, ndvi: 0.62 },
  { month: "Feb", productivity: 75, ndvi: 0.65 },
  { month: "Mar", productivity: 78, ndvi: 0.67 },
  { month: "Apr", productivity: 81, ndvi: 0.7 },
  { month: "May", productivity: 84, ndvi: 0.72 },
  { month: "Jun", productivity: 87, ndvi: 0.74 }
] as const;

export const irrigationEfficiency = [
  { zone: "North", efficiency: 78, priority: 32 },
  { zone: "East", efficiency: 71, priority: 44 },
  { zone: "South", efficiency: 83, priority: 21 },
  { zone: "West", efficiency: 69, priority: 53 },
  { zone: "Center", efficiency: 76, priority: 35 }
] as const;

export const operationalRecommendations = [
  {
    title: "Prioritize North pivot 04",
    impact: "High yield protection",
    detail: "Soil moisture and NDVI movement indicate early stress in the next irrigation window."
  },
  {
    title: "Delay west block fertilization",
    impact: "Operational timing",
    detail: "Climate pressure suggests waiting until the lower heat exposure window opens."
  },
  {
    title: "Inspect Sentinel anomaly cluster",
    impact: "Field validation",
    detail: "A localized vegetation change appeared across three adjacent parcels."
  }
] as const;

export const recentAlerts = [
  {
    severity: "High",
    title: "Moisture threshold crossed",
    area: "North pivot 04",
    time: "18 min ago"
  },
  {
    severity: "Medium",
    title: "NDVI variation detected",
    area: "West block 12",
    time: "42 min ago"
  },
  {
    severity: "Low",
    title: "Climate window opened",
    area: "East block 03",
    time: "1h ago"
  }
] as const;

export const recentActivity = [
  {
    action: "Irrigation model recalculated",
    owner: "AI pipeline",
    time: "Now"
  },
  {
    action: "Sentinel-2 scene processed",
    owner: "Geospatial service",
    time: "11 min ago"
  },
  {
    action: "Yield forecast refreshed",
    owner: "Prediction engine",
    time: "26 min ago"
  },
  {
    action: "Climate risk score updated",
    owner: "Climate monitor",
    time: "49 min ago"
  }
] as const;
