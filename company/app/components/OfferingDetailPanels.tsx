type OfferingDetailPanelsProps = {
  capabilities: string[];
  outcomes: string[];
};

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-sm leading-relaxed text-(--color-text-muted)">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
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

export function OfferingDetailPanels({
  capabilities,
  outcomes,
}: OfferingDetailPanelsProps) {
  return (
    <section
      className={
        outcomes.length > 0
          ? "mt-12 grid gap-6 lg:grid-cols-[1.5fr_1fr]"
          : "mt-12"
      }
    >
      <div className="rounded-md border border-(--color-border) bg-white p-6 shadow-(--shadow-soft)">
        <h2 className="text-lg font-semibold text-(--color-primary)">
          What it covers
        </h2>
        <BulletList items={capabilities} />
      </div>

      {outcomes.length > 0 ? (
        <div className="rounded-md border border-(--color-border) bg-(--color-accent)/5 p-6">
          <h2 className="text-lg font-semibold text-(--color-primary)">
            Why it matters
          </h2>
          <BulletList items={outcomes} />
        </div>
      ) : null}
    </section>
  );
}
