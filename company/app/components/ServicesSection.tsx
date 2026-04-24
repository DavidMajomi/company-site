import { contactNav, servicesNav } from "../data/navigation";
import { site } from "../site";
import { OfferingSection } from "./OfferingSection";
import { ServiceGrid } from "./ServiceGrid";

type ServicesSectionProps = {
  variant?: "home" | "page";
};

export function ServicesSection({ variant = "home" }: ServicesSectionProps) {
  return (
    <OfferingSection
      id={variant === "home" ? "services" : undefined}
      title="Our services"
      description={site.pageMeta.services}
      variant={variant}
      actions={[
        {
          href: contactNav.href,
          label: "Contact us to learn more",
          tone: "accent",
        },
        {
          href: servicesNav.href,
          label: "Services overview page",
          tone: "primary",
        },
      ]}
    >
      <ServiceGrid />
    </OfferingSection>
  );
}
