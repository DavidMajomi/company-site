import type { Offering } from "../data/offerings";
import { OfferingCard } from "./OfferingCard";

type OfferingLinkCardProps = {
  offering: Offering;
  hrefPrefix: string;
  variant?: "featured" | "compact";
  className?: string;
};

export function OfferingLinkCard({
  offering,
  hrefPrefix,
  variant = "featured",
  className = "",
}: OfferingLinkCardProps) {
  const base = hrefPrefix.replace(/\/$/, "");
  const href = `${base}/${offering.slug}`;
  return (
    <OfferingCard
      href={href}
      title={offering.title}
      description={offering.description}
      variant={variant}
      className={className}
    />
  );
}
