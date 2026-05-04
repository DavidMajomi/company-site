import type { Offering } from "../data/offerings";
import { OfferingGrid } from "./OfferingGrid";
import { OfferingLinkCard } from "./OfferingLinkCard";

type OfferingListProps = {
  items: Offering[];
  hrefPrefix: string;
  className?: string;
  itemClassName?: string;
  cardVariant?: "featured" | "compact";
};

export function OfferingList({
  items,
  hrefPrefix,
  className,
  itemClassName,
  cardVariant = "featured",
}: OfferingListProps) {
  return (
    <OfferingGrid
      items={items}
      getKey={(offering) => offering.slug}
      renderCard={(offering) => (
        <OfferingLinkCard
          offering={offering}
          hrefPrefix={hrefPrefix}
          variant={cardVariant}
        />
      )}
      className={className}
      itemClassName={itemClassName}
    />
  );
}
