"use client";

import type { Route } from "next";
import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  ChartNoAxesCombined,
  CloudSun,
  Droplets,
  LayoutDashboard,
  Map,
  Radar,
  Settings,
  User,
  Wheat
} from "lucide-react";
import { APP_NAME } from "@/constants/app";
import { cn } from "@/lib/utils";

type NavigationItem = {
  href: Route;
  label: string;
  icon: ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
};

const navigation: NavigationItem[] = [
  { href: "/dashboard" as Route, label: "Dashboard", icon: LayoutDashboard },
  { href: "/maps" as Route, label: "Maps", icon: Map },
  { href: "/analytics" as Route, label: "Analytics", icon: ChartNoAxesCombined },
  { href: "/climate" as Route, label: "Climate", icon: CloudSun },
  { href: "/irrigation" as Route, label: "Irrigation", icon: Droplets },
  { href: "/predictive-zones" as Route, label: "Zones", icon: Radar },
  { href: "/alerts" as Route, label: "Alerts", icon: Bell },
  { href: "/settings" as Route, label: "Settings", icon: Settings },
  { href: "/profile" as Route, label: "Profile", icon: User }
] as const;

type AppShellProps = Readonly<{
  children: ReactNode;
}>;

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-slate-950/20 text-slate-100">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/10 bg-slate-950/85 px-4 py-5 backdrop-blur-xl lg:block">
        <Link className="flex items-center gap-3 px-2" href={"/dashboard" as Route}>
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/15 text-emerald-300">
            <Wheat className="h-5 w-5" aria-hidden="true" />
          </span>
          <span>
            <strong className="block text-lg font-semibold">{APP_NAME}</strong>
            <span className="text-xs text-slate-400">Command Center</span>
          </span>
        </Link>

        <nav className="mt-8 space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white",
                  isActive && "bg-white/10 text-white"
                )}
                href={item.href}
                key={item.href}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/75 px-4 py-3 backdrop-blur-xl lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <Link className="flex items-center gap-2 lg:hidden" href={"/dashboard" as Route}>
              <Wheat className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              <span className="font-semibold">{APP_NAME}</span>
            </Link>

            <div className="hidden min-w-0 lg:block">
              <p className="text-sm text-slate-400">AgroPulse platform</p>
              <strong className="block truncate text-base font-medium">Operational intelligence workspace</strong>
            </div>

            <div className="flex items-center gap-2">
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:bg-white/5"
                href={"/alerts" as Route}
                title="Alerts"
              >
                <Bell className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:bg-white/5"
                href={"/profile" as Route}
                title="Profile"
              >
                <User className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  className={cn(
                    "flex min-w-fit items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-slate-300",
                    isActive && "bg-white/10 text-white"
                  )}
                  href={item.href}
                  key={item.href}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <main className="px-4 py-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}
