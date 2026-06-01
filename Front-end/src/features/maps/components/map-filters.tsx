import type { MapFilter } from "@/types/maps";

type MapFiltersProps = Readonly<{
  filters: MapFilter[];
}>;

export function MapFilters({ filters }: MapFiltersProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
      <h2 className="text-lg font-semibold">Filters</h2>
      <div className="mt-4 space-y-3">
        {filters.map((filter) => (
          <label className="block" key={filter.label}>
            <span className="text-xs uppercase text-slate-500">{filter.label}</span>
            <select
              className="mt-1 h-10 w-full rounded-lg border border-white/10 bg-slate-950 px-3 text-sm text-slate-200 outline-none"
              defaultValue={filter.value}
            >
              <option>{filter.value}</option>
            </select>
          </label>
        ))}
      </div>
    </section>
  );
}
