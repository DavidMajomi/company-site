import type { Offering } from "../../data/offerings";
import { OfferingGrid } from "../OfferingGrid";
import { OfferingLinkCard } from "../OfferingLinkCard";

export type RelevantOffering = {
  offering: Offering;
  hrefPrefix: string;
};

type IndustryWorkflowOfferingsSectionProps = {
  label: string;
  offerings: RelevantOffering[];
};

export function IndustryWorkflowOfferingsSection({
  label,
  offerings,
}: IndustryWorkflowOfferingsSectionProps) {
  return (
    <section
      className="overflow-hidden rounded-lg border border-slate-900/10 bg-white/88 max-sm:rounded-md"
      aria-labelledby="offerings-heading"
    >
      <div className="p-[clamp(1.25rem,3vw,2rem)] max-sm:p-4">
        <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.22em] text-(--color-accent)">
          Relevant offerings
        </p>
        <h2
          id="offerings-heading"
          className="mt-[0.9rem] mb-0 font-serif text-[clamp(2rem,4vw,2.5rem)] font-medium leading-[0.98] tracking-normal text-(--color-text)"
        >
          Products and services for {label.toLowerCase()} teams.
        </h2>
      </div>

      <div className="px-[clamp(1.25rem,3vw,2rem)] pb-[clamp(1.25rem,3vw,2rem)] max-sm:px-4 max-sm:pb-4">
        <OfferingGrid
          items={offerings}
          getKey={({ offering }) => offering.slug}
          renderCard={({ offering, hrefPrefix }) => (
            <OfferingLinkCard offering={offering} hrefPrefix={hrefPrefix} />
          )}
          className="flex flex-wrap justify-center gap-6"
        />
      </div>
    </section>
  );
}
