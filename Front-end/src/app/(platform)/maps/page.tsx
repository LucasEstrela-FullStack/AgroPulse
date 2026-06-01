import { PageHeader } from "@/components/layout/page-header";
import { LayerSelector } from "@/features/maps/components/layer-selector";
import { MapContainer } from "@/features/maps/components/map-container";
import { Satellite, SlidersHorizontal } from "lucide-react";

export default function MapsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Geospatial operations"
        title="Maps"
        description="Monitor satellite layers, productivity signals, and climate exposure by property."
      />

      <div className="grid gap-4 xl:grid-cols-[1fr_20rem]">
        <MapContainer>
          <div className="flex h-full min-h-[32rem] flex-col justify-between p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Active scene</p>
                <h2 className="mt-1 text-xl font-semibold">Sentinel field intelligence</h2>
              </div>
              <Satellite className="h-5 w-5 text-cyan-300" aria-hidden="true" />
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-4">
                <span className="text-sm text-slate-300">Healthy canopy</span>
                <strong className="mt-2 block text-2xl">64%</strong>
              </div>
              <div className="rounded-lg border border-cyan-400/20 bg-cyan-400/10 p-4">
                <span className="text-sm text-slate-300">Moisture watch</span>
                <strong className="mt-2 block text-2xl">18 zones</strong>
              </div>
              <div className="rounded-lg border border-violet-400/20 bg-violet-400/10 p-4">
                <span className="text-sm text-slate-300">Priority areas</span>
                <strong className="mt-2 block text-2xl">7</strong>
              </div>
            </div>
          </div>
        </MapContainer>

        <aside className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Layers</h2>
            <SlidersHorizontal className="h-5 w-5 text-slate-400" aria-hidden="true" />
          </div>
          <LayerSelector />
        </aside>
      </div>
    </div>
  );
}
