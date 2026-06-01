import { Check } from "lucide-react";
import { mapLayers } from "@/mocks/maps";

export function LayerSelector() {
  return (
    <div className="space-y-3">
      {mapLayers.map((layer) => (
        <button
          className="flex w-full items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-3 text-left text-sm text-slate-200 transition hover:bg-white/[0.06]"
          key={layer.id}
          type="button"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: layer.color }}
              aria-hidden="true"
            />
            <span className="min-w-0">
              <strong className="block truncate font-medium text-white">{layer.label}</strong>
              <span className="block truncate text-xs text-slate-400">{layer.description}</span>
            </span>
          </span>
          {layer.active ? <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" /> : null}
        </button>
      ))}
    </div>
  );
}
