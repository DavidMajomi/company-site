import type { Service } from "../data/services";
import { services as defaultServices } from "../data/services";
import { OfferingGrid } from "./OfferingGrid";
import { ServiceCard } from "./ServiceCard";

type ServiceGridProps = {
  items?: Service[];
  className?: string;
};

export function ServiceGrid({
  items = defaultServices,
  className,
}: ServiceGridProps) {
  return (
    <OfferingGrid
      items={items}
      getKey={(service) => service.slug}
      renderCard={(service) => <ServiceCard service={service} />}
      className={className}
    />
  );
}
