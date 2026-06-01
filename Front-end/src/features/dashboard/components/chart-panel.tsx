type ChartPanelProps = Readonly<{
  title: string;
  description: string;
  children: React.ReactNode;
}>;

export function ChartPanel({ title, description, children }: ChartPanelProps) {
  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/70 p-5 shadow-xl shadow-black/20">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
      </div>
      <div className="h-72">{children}</div>
    </section>
  );
}
