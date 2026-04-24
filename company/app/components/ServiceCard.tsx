import type { Service } from "../data/services";
import { servicesNav } from "../data/navigation";
import { OfferingCard } from "./OfferingCard";

type ServiceCardProps = {
  service: Service;
  variant?: "featured" | "compact";
  className?: string;
};

export function ServiceCard({
  service,
  variant = "featured",
  className = "",
}: ServiceCardProps) {
  return (
    <OfferingCard
      href={`${servicesNav.href}/${service.slug}`}
      title={service.title}
      description={service.description}
      variant={variant}
      className={className}
    />
  );
}
