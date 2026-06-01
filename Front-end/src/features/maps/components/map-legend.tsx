import type { MapLegendItem } from "@/types/maps";

type MapLegendProps = Readonly<{
  legend: MapLegendItem[];
}>;

export function MapLegend({ legend }: MapLegendProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <h2 className="text-lg font-semibold">Legend</h2>
      <div className="mt-4 space-y-3">
        {legend.map((item) => (
          <div className="flex items-center gap-3 text-sm text-slate-300" key={item.label}>
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: item.color }}
              aria-hidden="true"
            />
            {item.label}
          </div>
        ))}
      </div>
    </section>
  );
}
