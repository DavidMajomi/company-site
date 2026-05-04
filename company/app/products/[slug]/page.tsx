import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LoanOriginationSection } from "../../components/LoanOriginationSection";
import { OfferingBreadcrumb } from "../../components/OfferingBreadcrumb";
import { OfferingDetailPanels } from "../../components/OfferingDetailPanels";
import { OfferingGrid } from "../../components/OfferingGrid";
import { OfferingLinkCard } from "../../components/OfferingLinkCard";
import { ProductDetailHeader } from "../../components/ProductDetailHeader";
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
  const isLoanOrigination = product.slug === "loan-origination";

  return (
    <StandardPageContent
      contentWidth={isLoanOrigination ? "extra-wide" : "standard"}
    >
      <OfferingBreadcrumb
        parentHref={productsNav.href}
        parentLabel={productsNav.label}
        currentLabel={product.title}
      />

      <ProductDetailHeader product={product} />

      {isLoanOrigination ? <LoanOriginationSection /> : null}

      <OfferingDetailPanels
        capabilities={product.capabilities}
        outcomes={product.outcomes}
      />

      {otherProducts.length > 0 ? (
        <section className="mt-14" aria-labelledby="related-heading">
          <h2
            id="related-heading"
            className="text-lg font-semibold text-(--color-primary)"
          >
            Other capabilities
          </h2>
          <OfferingGrid
            items={otherProducts}
            getKey={(product) => product.slug}
            renderCard={(product) => (
              <OfferingLinkCard
                offering={product}
                hrefPrefix={productsNav.href}
                variant="compact"
              />
            )}
            className="mt-4 flex flex-wrap justify-center gap-3"
            itemClassName="w-full shrink-0 sm:w-[calc((100%-0.75rem)/2)] lg:w-[calc((100%-1.5rem)/3)]"
          />
        </section>
      ) : null}
    </StandardPageContent>
  );
}
