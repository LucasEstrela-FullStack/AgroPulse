import { PageHeader } from "@/components/layout/page-header";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Workspace"
        title="Settings"
        description="Manage organization preferences, feature flags, integrations, and data access rules."
      />

      <section className="grid gap-4 lg:grid-cols-2">
        {["Organization", "Integrations", "Feature flags", "Security"].map((item) => (
          <article className="rounded-lg border border-white/10 bg-slate-950/70 p-5" key={item}>
            <h2 className="text-xl font-semibold">{item}</h2>
            <p className="mt-3 text-sm text-slate-300">Configuration area prepared for the next build step.</p>
          </article>
        ))}
      </section>
    </div>
  );
}
