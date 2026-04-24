import type { Product } from "../data/products";
import { productSuiteNav } from "../data/navigation";
import { OfferingCard } from "./OfferingCard";

type ProductCardProps = {
  product: Product;
  variant?: "featured" | "compact";
  className?: string;
};

export function ProductCard({
  product,
  variant = "featured",
  className = "",
}: ProductCardProps) {
  return (
    <OfferingCard
      href={`${productSuiteNav.href}/${product.slug}`}
      title={product.title}
      description={product.description}
      variant={variant}
      className={className}
    />
  );
}
