import { Satellite } from "lucide-react";
import type { FieldZone } from "@/types/maps";

type FieldIntelligenceMapProps = Readonly<{
  fieldZones: FieldZone[];
}>;

export function FieldIntelligenceMap({ fieldZones }: FieldIntelligenceMapProps) {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(34,197,94,0.22),transparent_18rem),radial-gradient(circle_at_70%_24%,rgba(6,182,212,0.18),transparent_16rem),radial-gradient(circle_at_55%_72%,rgba(124,58,237,0.2),transparent_18rem)]" />

      {fieldZones.map((zone) => (
        <button
          className={`absolute rounded-lg border-2 p-3 text-left shadow-2xl shadow-black/20 backdrop-blur-sm transition hover:scale-[1.02] ${zone.position} ${zone.style}`}
          key={zone.id}
          type="button"
        >
          <span className="block text-xs text-slate-200">{zone.crop}</span>
          <strong className="mt-1 block text-sm text-white">{zone.name}</strong>
          <span className="mt-2 block text-xs text-slate-300">NDVI {zone.ndvi}</span>
        </button>
      ))}

      <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-slate-950/80 p-4 backdrop-blur">
        <div className="flex items-center gap-3">
          <Satellite className="h-5 w-5 text-cyan-300" aria-hidden="true" />
          <div>
            <p className="text-xs uppercase text-slate-500">Active scene</p>
            <h2 className="text-sm font-semibold text-white">Sentinel field intelligence</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
