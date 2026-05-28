import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferingBreadcrumb } from "../../components/OfferingBreadcrumb";
import { OfferingDetailPanels } from "../../components/OfferingDetailPanels";
import { OfferingIntro } from "../../components/OfferingIntro";
import { RelatedOfferingsSection } from "../../components/RelatedOfferingsSection";
import { StandardPageContent } from "../../components/StandardPageContent";
import { servicesNav } from "../../data/navigation";
import { getServiceBySlug, services } from "../../data/services";
import { site } from "../../site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: site.serviceFallbackTitle };
  }

  return {
    title: service.title,
    description: service.overview,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }
  const otherServices = services.filter((item) => item.slug !== service.slug);

  return (
    <StandardPageContent>
      <OfferingBreadcrumb
        parentHref={servicesNav.href}
        parentLabel={servicesNav.label}
        currentLabel={service.title}
      />

      <OfferingIntro title={service.title} overview={service.overview} />

      <OfferingDetailPanels
        capabilities={service.capabilities}
        outcomes={service.outcomes}
      />

      <RelatedOfferingsSection
        heading="Other services"
        headingId="related-services-heading"
        hrefPrefix={servicesNav.href}
        offerings={otherServices}
      />
    </StandardPageContent>
  );
}
