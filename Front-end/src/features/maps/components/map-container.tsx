type MapContainerProps = Readonly<{
  children?: React.ReactNode;
}>;

export function MapContainer({ children }: MapContainerProps) {
  return (
    <section className="min-h-[32rem] rounded-lg border border-white/10 bg-slate-950/80">
      {children}
    </section>
  );
}
