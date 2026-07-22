export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="relative bg-base-light pb-20 pt-40 sm:pb-28 sm:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-grid-fade bg-[size:48px_48px] opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-ink/50">
          <span className="h-1.5 w-1.5 bg-blood" />
          {eyebrow}
        </div>
        <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-xl text-base font-medium text-ink/70 sm:text-lg">{description}</p>
        )}
      </div>
    </section>
  );
}
