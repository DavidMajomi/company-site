import type { Metadata } from "next";
import { OfferingList } from "../components/OfferingList";
import { OfferingSection } from "../components/OfferingSection";
import { StandardPageContent } from "../components/StandardPageContent";
import { servicesNav } from "../data/navigation";
import { services } from "../data/services";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Services",
  description: site.pageMeta.services,
};

export default function ServicesPage() {
  return (
    <StandardPageContent>
      <OfferingSection
        title="Our services"
        description={site.pageMeta.services}
        variant="page"
      >
        <OfferingList items={services} hrefPrefix={servicesNav.href} />
      </OfferingSection>
    </StandardPageContent>
  );
}
