import type { ProductFeatureGroup } from "../data/products";

type ProductFeatureSectionsProps = {
  sections: ProductFeatureGroup[];
};

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-(--color-text-muted)">
      {items.map((item, index) => (
        <li key={`${index}-${item}`} className="flex gap-3">
          <span
            aria-hidden="true"
            className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProductFeatureSections({
  sections,
}: ProductFeatureSectionsProps) {
  if (sections.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
      {sections.map((section, index) => (
        <div
          key={`${index}-${section.title}`}
          className={
            section.tone === "subtle"
              ? "rounded-md border border-(--color-border) bg-(--color-surface-subtle) p-6 shadow-(--shadow-soft) md:p-8 lg:p-10"
              : "rounded-md border border-(--color-border) bg-white p-6 shadow-(--shadow-soft) md:p-8 lg:p-10"
          }
        >
          {section.eyebrow ? (
            <p
              className={
                section.tone === "subtle"
                  ? "text-sm font-semibold uppercase tracking-[0.16em] text-slate-500"
                  : "text-sm font-semibold uppercase tracking-[0.16em] text-sky-600"
              }
            >
              {section.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-(--color-primary) md:text-3xl">
            {section.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-(--color-text-muted)">
            {section.description}
          </p>
          <FeatureList items={section.bullets} />
        </div>
      ))}
    </section>
  );
}
