import type { Offering } from "../data/offerings";
import { OfferingGrid } from "./OfferingGrid";
import { OfferingLinkCard } from "./OfferingLinkCard";

type RelatedOfferingsSectionProps = {
  heading: string;
  headingId: string;
  hrefPrefix: string;
  offerings: Offering[];
};

export function RelatedOfferingsSection({
  heading,
  headingId,
  hrefPrefix,
  offerings,
}: RelatedOfferingsSectionProps) {
  if (offerings.length === 0) {
    return null;
  }

  return (
    <section className="mt-14" aria-labelledby={headingId}>
      <h2 id={headingId} className="text-lg font-semibold text-(--color-primary)">
        {heading}
      </h2>
      <OfferingGrid
        items={offerings}
        getKey={(offering) => offering.slug}
        renderCard={(offering) => (
          <OfferingLinkCard
            offering={offering}
            hrefPrefix={hrefPrefix}
            variant="compact"
          />
        )}
        className="mt-4 flex flex-wrap justify-center gap-3"
        itemClassName="w-full shrink-0 sm:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-1.5rem)/3)]"
      />
    </section>
  );
}
