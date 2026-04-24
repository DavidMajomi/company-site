import type { Product } from "../data/products";
import { products as defaultProducts } from "../data/products";
import { OfferingGrid } from "./OfferingGrid";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  items?: Product[];
  className?: string;
};

export function ProductGrid({
  items = defaultProducts,
  className,
}: ProductGridProps) {
  return (
    <OfferingGrid
      items={items}
      getKey={(product) => product.slug}
      renderCard={(product) => <ProductCard product={product} variant="featured" />}
      className={className}
    />
  );
}
