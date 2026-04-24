import type { Metadata } from "next";
import { ProductsSection } from "../components/ProductsSection";
import { StandardPageContent } from "../components/StandardPageContent";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Products",
  description: site.pageMeta.products,
};

export default function ProductsPage() {
  return (
    <StandardPageContent>
      <ProductsSection variant="page" />
    </StandardPageContent>
  );
}
