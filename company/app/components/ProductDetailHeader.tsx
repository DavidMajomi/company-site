import { LoanOriginationOntologyImage } from "./LoanOriginationDiagram";
import { OfferingIntro } from "./OfferingIntro";
import type { Product } from "../data/products";

type ProductDetailHeaderProps = {
  product: Product;
};

export function ProductDetailHeader({
  product,
}: ProductDetailHeaderProps) {
  const isLoanOrigination = product.slug === "loan-origination";

  if (isLoanOrigination) {
    return (
      <header className="mt-8">
        <h1 className="text-3xl font-bold tracking-tight text-(--color-primary) md:text-4xl">
          {product.title}
        </h1>
        {/*
          Hero grid: overview ~35%, diagram ~65% on large screens (extra-wide shell).
        */}
        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,35fr)_minmax(0,65fr)] lg:items-start lg:gap-8">
          <p className="text-lg leading-relaxed text-(--color-text-muted)">
            {product.overview}
          </p>
          <div
            className="min-w-0 overflow-hidden rounded-(--radius-md) border border-(--color-border) bg-white shadow-(--shadow-soft)"
            aria-label="Loan origination platform diagram"
          >
            <div className="overflow-x-auto p-2 sm:p-3 xl:p-2">
              <LoanOriginationOntologyImage
                priority
                sizes="(min-width: 1024px) min(73rem, calc(65vw - 3rem)), 100vw"
              />
            </div>
          </div>
        </div>
      </header>
    );
  }

  return <OfferingIntro title={product.title} overview={product.overview} />;
}
