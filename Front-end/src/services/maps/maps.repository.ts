import { fieldZones, mapFilters, mapLayers, mapLegend, mapMetrics } from "@/mocks/maps";
import type { MapsData } from "@/types/maps";

export type MapsRepository = {
  getMapsData: () => Promise<MapsData>;
};

export const mockMapsRepository: MapsRepository = {
  async getMapsData() {
    return {
      layers: [...mapLayers],
      filters: [...mapFilters],
      metrics: [...mapMetrics],
      fieldZones: [...fieldZones],
      legend: [...mapLegend]
    };
  }
};
