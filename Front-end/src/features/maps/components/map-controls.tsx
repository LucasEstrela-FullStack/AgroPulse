import { LocateFixed, Minus, Plus } from "lucide-react";

export function MapControls() {
  return (
    <div className="flex flex-col gap-2 rounded-lg border border-white/10 bg-slate-950/80 p-2 backdrop-blur">
      {[Plus, Minus, LocateFixed].map((Icon, index) => (
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
          key={index}
          type="button"
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
