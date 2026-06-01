import { PageHeader } from "@/components/layout/page-header";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Account"
        title="Profile"
        description="Personal workspace for role, property access, notification preferences, and activity."
      />

      <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5">
        <h2 className="text-xl font-semibold">Lucas Estrela</h2>
        <p className="mt-2 text-sm text-slate-300">AgroPulse workspace administrator</p>
      </section>
    </div>
  );
}
