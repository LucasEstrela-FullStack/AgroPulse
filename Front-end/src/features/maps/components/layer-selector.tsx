const layers = ["NDVI", "Climate", "Sentinel", "Productivity"] as const;

export function LayerSelector() {
  return (
    <div className="flex flex-wrap gap-2">
      {layers.map((layer) => (
        <button
          className="rounded-md border border-white/10 px-3 py-2 text-sm text-slate-200"
          key={layer}
          type="button"
        >
          {layer}
        </button>
      ))}
    </div>
  );
}
