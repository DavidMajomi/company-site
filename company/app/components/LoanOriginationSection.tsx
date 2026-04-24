type LoanOriginationSectionProps = {
  isVisible: boolean;
};

export function LoanOriginationSection({
  isVisible,
}: LoanOriginationSectionProps) {
  if (!isVisible) {
    return null;
  }

  return (
    <section className="mt-12 grid gap-6 xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
      <div className="rounded-(--radius-md) border border-(--color-border) bg-white p-6 shadow-(--shadow-soft) md:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-600">
          Loan origination
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-(--color-primary) md:text-3xl">
          A clearer view of retail, SME and corporate lending flows.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-(--color-text-muted)">
          The diagram shows how channels, an API gateway and the loan
          origination platform connect to the data hub and compliance controls
          that support loan origination end to end.
        </p>
        <ul className="mt-6 space-y-3 text-sm leading-relaxed text-(--color-text-muted)">
          <li className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
            />
            <span>
              Channels feed a shared platform instead of isolated point
              solutions.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
            />
            <span>
              Retail, SME and corporate lending can follow different business
              rules.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
            />
            <span>
              Security, compliance and integration stay visible across the
              flow.
            </span>
          </li>
        </ul>
      </div>

      <div className="rounded-(--radius-md) border border-(--color-border) bg-(--color-surface-subtle) p-6 shadow-(--shadow-soft) md:p-8 lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          Platform view
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-(--color-primary)">
          Designed for flexibility across products and channels.
        </h3>
        <ul className="mt-5 space-y-3 text-sm leading-relaxed text-(--color-text-muted)">
          <li className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
            />
            <span>
              Capture different lending journeys without fragmenting the core.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
            />
            <span>
              Keep operations, controls and integrations in one operating
              model.
            </span>
          </li>
          <li className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
            />
            <span>
              Support growth without reworking the underwriting and servicing
              path.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
