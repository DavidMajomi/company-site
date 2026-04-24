import type { Metadata } from "next";
import { ServicesSection } from "../components/ServicesSection";
import { StandardPageContent } from "../components/StandardPageContent";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Services",
  description: site.pageMeta.services,
};

export default function ServicesPage() {
  return (
    <StandardPageContent>
      <ServicesSection variant="page" />
    </StandardPageContent>
  );
}
