"use client";

import { FieldIntelligenceMap } from "@/features/maps/components/field-intelligence-map";
import { FieldZoneList } from "@/features/maps/components/field-zone-list";
import { LayerSelector } from "@/features/maps/components/layer-selector";
import { MapContainer } from "@/features/maps/components/map-container";
import { MapControls } from "@/features/maps/components/map-controls";
import { MapFilters } from "@/features/maps/components/map-filters";
import { MapLegend } from "@/features/maps/components/map-legend";
import { MapMetrics } from "@/features/maps/components/map-metrics";
import { MapToolbar } from "@/features/maps/components/map-toolbar";
import { useMapsData } from "@/features/maps/hooks/use-maps-data";
import { SlidersHorizontal } from "lucide-react";

export function MapsView() {
  const { data, isLoading } = useMapsData();

  if (isLoading || !data) {
    return <div className="h-[38rem] rounded-lg border border-white/10 bg-slate-950/70" />;
  }

  return (
    <>
      <div className="grid gap-4 xl:grid-cols-[1fr_20rem]">
        <MapContainer>
          <FieldIntelligenceMap fieldZones={data.fieldZones} />
          <div className="absolute right-5 top-5">
            <MapToolbar />
          </div>
          <div className="absolute bottom-5 right-5">
            <MapControls />
          </div>
        </MapContainer>

        <aside className="space-y-4">
          <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Layers</h2>
              <SlidersHorizontal className="h-5 w-5 text-slate-400" aria-hidden="true" />
            </div>
            <LayerSelector layers={data.layers} />
          </section>
          <MapFilters filters={data.filters} />
          <MapLegend legend={data.legend} />
        </aside>
      </div>

      <MapMetrics metrics={data.metrics} />

      <FieldZoneList fieldZones={data.fieldZones} />
    </>
  );
}
