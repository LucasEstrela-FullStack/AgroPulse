export const analyticsCards = [
  {
    label: "Yield model",
    title: "Forecast variance",
    description: "Expected productivity is 6.4 percent above the baseline across monitored properties."
  },
  {
    label: "Vegetation",
    title: "NDVI stability",
    description: "Canopy health remains stable, with localized pressure in western field blocks."
  },
  {
    label: "Water",
    title: "Efficiency trend",
    description: "Irrigation efficiency improved after the latest prioritization cycle."
  }
] as const;

export const climateRisks = [
  {
    name: "Heat exposure",
    status: "Medium risk",
    detail: "Three production zones may exceed crop stress thresholds within the next 72 hours."
  },
  {
    name: "Rainfall deficit",
    status: "High attention",
    detail: "Soil moisture signals suggest increased irrigation dependency this week."
  },
  {
    name: "Storm window",
    status: "Low risk",
    detail: "No severe storm pattern detected for the active monitoring region."
  }
] as const;

export const irrigationPriorities = [
  {
    zone: "North pivot 04",
    priority: "Priority 1",
    waterNeed: "32 mm",
    reason: "Moisture anomaly and NDVI decline indicate early crop stress."
  },
  {
    zone: "East block 12",
    priority: "Priority 2",
    waterNeed: "21 mm",
    reason: "Moderate deficit detected with a favorable irrigation window tonight."
  }
] as const;

export const predictiveZones = [
  { name: "High productivity", confidence: "92 percent confidence", forecast: "+8.1%" },
  { name: "Stable productivity", confidence: "86 percent confidence", forecast: "+1.9%" },
  { name: "At-risk productivity", confidence: "79 percent confidence", forecast: "-4.3%" }
] as const;

export const alerts = [
  {
    title: "Moisture threshold crossed",
    severity: "High",
    detail: "North pivot 04 should be reviewed before the next irrigation cycle."
  },
  {
    title: "Vegetation anomaly detected",
    severity: "Medium",
    detail: "Sentinel-2 signal indicates canopy variation in the west production block."
  },
  {
    title: "Climate window available",
    severity: "Low",
    detail: "Recommended field operation window opens tomorrow morning."
  }
] as const;
