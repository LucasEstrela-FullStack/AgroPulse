"use client";

import { useQuery } from "@tanstack/react-query";
import { mapsService } from "@/services/maps/maps.service";

export function useMapsData() {
  return useQuery({
    queryKey: ["maps"],
    queryFn: () => mapsService.getMapsData()
  });
}
