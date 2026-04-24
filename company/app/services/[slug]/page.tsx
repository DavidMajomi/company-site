import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferingBreadcrumb } from "../../components/OfferingBreadcrumb";
import { OfferingDetailPanels } from "../../components/OfferingDetailPanels";
import { OfferingGrid } from "../../components/OfferingGrid";
import { OfferingIntro } from "../../components/OfferingIntro";
import { ServiceCard } from "../../components/ServiceCard";
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

      <section className="mt-14" aria-labelledby="related-services-heading">
        <h2
          id="related-services-heading"
          className="text-lg font-semibold text-(--color-primary)"
        >
          Other services
        </h2>
        <OfferingGrid
          items={otherServices}
          getKey={(item) => item.slug}
          renderCard={(item) => <ServiceCard service={item} variant="compact" />}
          className="mt-4 flex flex-wrap justify-center gap-3"
          itemClassName="w-full shrink-0 sm:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-1.5rem)/3)]"
        />
      </section>
    </StandardPageContent>
  );
}
