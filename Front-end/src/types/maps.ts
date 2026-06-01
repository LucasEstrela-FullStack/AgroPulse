export type MapLayer = {
  id: string;
  label: string;
  description: string;
  color: string;
  active: boolean;
};

export type MapFilter = {
  label: string;
  value: string;
};

export type MapMetricTone = "emerald" | "cyan" | "violet" | "amber";

export type MapMetric = {
  label: string;
  value: string;
  tone: MapMetricTone;
};

export type FieldZone = {
  id: string;
  name: string;
  crop: string;
  ndvi: string;
  risk: string;
  position: string;
  style: string;
};

export type MapLegendItem = {
  label: string;
  color: string;
};

export type MapsData = {
  layers: MapLayer[];
  filters: MapFilter[];
  metrics: MapMetric[];
  fieldZones: FieldZone[];
  legend: MapLegendItem[];
};
