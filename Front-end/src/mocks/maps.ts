export const mapLayers = [
  {
    id: "ndvi",
    label: "NDVI",
    description: "Vegetation health",
    color: "#22C55E",
    active: true
  },
  {
    id: "moisture",
    label: "Soil moisture",
    description: "SAR moisture signal",
    color: "#06B6D4",
    active: true
  },
  {
    id: "temperature",
    label: "Temperature",
    description: "Land surface heat",
    color: "#F59E0B",
    active: false
  },
  {
    id: "productivity",
    label: "Productivity",
    description: "Yield potential",
    color: "#7C3AED",
    active: true
  }
] as const;

export const mapFilters = [
  { label: "Property", value: "Fazenda Horizonte" },
  { label: "Crop", value: "Soybean" },
  { label: "Scene", value: "Sentinel-2" },
  { label: "Window", value: "Last 7 days" }
] as const;

export const mapMetrics = [
  { label: "Healthy canopy", value: "64%", tone: "emerald" },
  { label: "Moisture watch", value: "18 zones", tone: "cyan" },
  { label: "Priority areas", value: "7", tone: "violet" },
  { label: "Heat exposure", value: "Medium", tone: "amber" }
] as const;

export const fieldZones = [
  {
    id: "north-04",
    name: "North pivot 04",
    crop: "Soybean",
    ndvi: "0.71",
    risk: "High moisture stress",
    position: "left-[14%] top-[18%] h-[24%] w-[28%]",
    style: "border-emerald-300/70 bg-emerald-400/20"
  },
  {
    id: "west-12",
    name: "West block 12",
    crop: "Corn",
    ndvi: "0.58",
    risk: "Vegetation anomaly",
    position: "left-[42%] top-[28%] h-[32%] w-[22%]",
    style: "border-amber-300/70 bg-amber-400/20"
  },
  {
    id: "east-03",
    name: "East block 03",
    crop: "Cotton",
    ndvi: "0.76",
    risk: "Stable",
    position: "left-[65%] top-[14%] h-[26%] w-[24%]",
    style: "border-cyan-300/70 bg-cyan-400/20"
  },
  {
    id: "south-07",
    name: "South field 07",
    crop: "Soybean",
    ndvi: "0.69",
    risk: "Irrigation review",
    position: "left-[24%] top-[58%] h-[25%] w-[34%]",
    style: "border-violet-300/70 bg-violet-400/20"
  }
] as const;

export const mapLegend = [
  { label: "High vegetation", color: "#22C55E" },
  { label: "Moisture signal", color: "#06B6D4" },
  { label: "Heat pressure", color: "#F59E0B" },
  { label: "Yield potential", color: "#7C3AED" }
] as const;
