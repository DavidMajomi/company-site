import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferingBreadcrumb } from "../../components/OfferingBreadcrumb";
import { OfferingDetailPanels } from "../../components/OfferingDetailPanels";
import { OfferingIntro } from "../../components/OfferingIntro";
import { ProductFeatureSections } from "../../components/ProductFeatureSections";
import { RelatedOfferingsSection } from "../../components/RelatedOfferingsSection";
import { StandardPageContent } from "../../components/StandardPageContent";
import { productsNav } from "../../data/navigation";
import { getProductBySlug, products } from "../../data/products";
import { site } from "../../site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: site.productFallbackTitle };
  }
  return {
    title: product.title,
    description: product.overview,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  const otherProducts = products.filter((p) => p.slug !== product.slug);

  return (
    <StandardPageContent>
      <OfferingBreadcrumb
        parentHref={productsNav.href}
        parentLabel={productsNav.label}
        currentLabel={product.title}
      />

      <OfferingIntro title={product.title} overview={product.overview} />

      {product.sections ? (
        <ProductFeatureSections sections={product.sections} />
      ) : null}

      <OfferingDetailPanels
        capabilities={product.capabilities}
        outcomes={product.outcomes}
      />

      <RelatedOfferingsSection
        heading="Other capabilities"
        headingId="related-heading"
        hrefPrefix={productsNav.href}
        offerings={otherProducts}
      />
    </StandardPageContent>
  );
}
