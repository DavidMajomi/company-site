import { OfferingList } from "../components/OfferingList";
import { OfferingSection } from "../components/OfferingSection";
import { contactNav, servicesNav } from "../data/navigation";
import { services } from "../data/services";

export function ServicesHomeSection() {
  return (
    <OfferingSection
      id="services"
      title="Our services"
      variant="home"
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
      <OfferingList items={services} hrefPrefix={servicesNav.href} />
    </OfferingSection>
  );
}
