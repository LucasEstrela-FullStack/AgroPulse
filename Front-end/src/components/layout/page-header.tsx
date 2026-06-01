type PageHeaderProps = Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>;

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="flex flex-col gap-2">
      <p className="text-sm font-medium uppercase text-emerald-300">{eyebrow}</p>
      <h1 className="text-3xl font-semibold tracking-normal text-white md:text-4xl">{title}</h1>
      <p className="max-w-3xl text-sm leading-6 text-slate-300 md:text-base">{description}</p>
    </section>
  );
}
