import { fieldZones } from "@/mocks/maps";

export function FieldZoneList() {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <h2 className="text-lg font-semibold">Field zones</h2>
      <div className="mt-4 space-y-3">
        {fieldZones.map((zone) => (
          <article className="rounded-lg border border-white/10 bg-white/[0.03] p-4" key={zone.id}>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-medium text-white">{zone.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{zone.crop}</p>
              </div>
              <span className="text-xs text-emerald-300">NDVI {zone.ndvi}</span>
            </div>
            <p className="mt-3 text-sm text-slate-300">{zone.risk}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
