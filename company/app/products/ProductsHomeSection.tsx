import { OfferingList } from "../components/OfferingList";
import { OfferingSection } from "../components/OfferingSection";
import { contactNav, productsNav } from "../data/navigation";
import { products } from "../data/products";
import { site } from "../site";

export function ProductsHomeSection() {
  return (
    <OfferingSection
      id="products"
      title="Our products"
      description={site.pageMeta.products}
      variant="home"
      actions={[
        {
          href: contactNav.href,
          label: "Contact us to learn more",
          tone: "accent",
        },
        {
          href: productsNav.href,
          label: "Product overview page",
          tone: "primary",
        },
      ]}
    >
      <OfferingList items={products} hrefPrefix={productsNav.href} />
    </OfferingSection>
  );
}
