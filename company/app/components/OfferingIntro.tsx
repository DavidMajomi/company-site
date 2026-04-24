type OfferingIntroProps = {
  title: string;
  overview: string;
  className?: string;
  descriptionClassName?: string;
};

export function OfferingIntro({
  title,
  overview,
  className = "mt-8 max-w-3xl",
  descriptionClassName = "mt-4 text-lg leading-relaxed text-(--color-text-muted)",
}: OfferingIntroProps) {
  return (
    <header className={className}>
      <h1 className="text-3xl font-bold tracking-tight text-(--color-primary) md:text-4xl">
        {title}
      </h1>
      <p className={descriptionClassName}>{overview}</p>
    </header>
  );
}
