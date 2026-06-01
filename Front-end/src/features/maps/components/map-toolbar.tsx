import { CalendarDays, Download, RefreshCw, Search } from "lucide-react";

const actions = [
  { label: "Search", icon: Search },
  { label: "Refresh", icon: RefreshCw },
  { label: "Timeline", icon: CalendarDays },
  { label: "Export", icon: Download }
] as const;

export function MapToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-2 rounded-lg border border-white/10 bg-slate-950/80 p-2 backdrop-blur">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-white/10 hover:text-white"
            key={action.label}
            title={action.label}
            type="button"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
          </button>
        );
      })}
    </div>
  );
}
