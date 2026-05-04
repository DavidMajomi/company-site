import type { Metadata } from "next";
import { OfferingList } from "../components/OfferingList";
import { OfferingSection } from "../components/OfferingSection";
import { StandardPageContent } from "../components/StandardPageContent";
import { productsNav } from "../data/navigation";
import { products } from "../data/products";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Products",
  description: site.pageMeta.products,
};

export default function ProductsPage() {
  return (
    <StandardPageContent>
      <OfferingSection
        title="Our products"
        description={site.pageMeta.products}
        variant="page"
      >
        <OfferingList items={products} hrefPrefix={productsNav.href} />
      </OfferingSection>
    </StandardPageContent>
  );
}
