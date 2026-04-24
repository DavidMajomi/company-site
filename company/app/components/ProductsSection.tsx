import { contactNav, productSuiteNav } from "../data/navigation";
import { ProductGrid } from "./ProductGrid";
import { OfferingSection } from "./OfferingSection";
import { site } from "../site";

type ProductsSectionProps = {
  variant?: "home" | "page";
};

export function ProductsSection({ variant = "home" }: ProductsSectionProps) {
  return (
    <OfferingSection
      id={variant === "home" ? "products" : undefined}
      title="Our product suite"
      description={site.pageMeta.products}
      variant={variant}
      actions={[
        {
          href: contactNav.href,
          label: "Contact us to learn more",
          tone: "accent",
        },
        {
          href: productSuiteNav.href,
          label: "Product overview page",
          tone: "primary",
        },
      ]}
    >
      <ProductGrid />
    </OfferingSection>
  );
}
