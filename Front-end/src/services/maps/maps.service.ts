import { mockMapsRepository, type MapsRepository } from "@/services/maps/maps.repository";

export class MapsService {
  constructor(private readonly repository: MapsRepository) {}

  getMapsData() {
    return this.repository.getMapsData();
  }
}

export const mapsService = new MapsService(mockMapsRepository);
