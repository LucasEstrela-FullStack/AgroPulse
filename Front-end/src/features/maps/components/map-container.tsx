type MapContainerProps = Readonly<{
  children?: React.ReactNode;
}>;

export function MapContainer({ children }: MapContainerProps) {
  return (
    <section className="relative min-h-[38rem] overflow-hidden rounded-lg border border-white/10 bg-slate-950/80 shadow-xl shadow-black/20">
      {children}
    </section>
  );
}
