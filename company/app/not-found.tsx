import type { Metadata } from "next";
import Link from "next/link";
import { StandardPageContent } from "./components/StandardPageContent";
import {
  contactNav,
  heroHref,
  productsNav,
  servicesNav,
} from "./data/navigation";
import { Button } from "./shared/Button";
import { site } from "./site";

export const metadata: Metadata = {
  title: "Page not found",
  description: `The page you requested could not be found on ${site.name}.`,
};

const inlineLinkClass =
  "font-semibold text-(--color-accent) transition hover:text-sky-600";

export default function NotFound() {
  return (
    <StandardPageContent className="py-0!">
      <section className="mx-auto flex min-h-[calc(100dvh-16rem)] max-w-3xl flex-col items-center justify-center text-center">
        <h1
          id="not-found-heading"
          className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-(--color-primary) md:text-5xl"
        >
          This page could not be found.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-(--color-text-muted)">
          The link may be broken, or the page may have moved. Head back to the
          home page or browse our products and services.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={heroHref}>Back to home</Button>
          <Button href={contactNav.href} variant="outline">
            Contact us
          </Button>
        </div>
        <p className="mt-12 text-sm text-(--color-text-muted)">
          Or explore our{" "}
          <Link href={productsNav.href} className={inlineLinkClass}>
            products
          </Link>{" "}
          and{" "}
          <Link href={servicesNav.href} className={inlineLinkClass}>
            services
          </Link>
          .
        </p>
      </section>
    </StandardPageContent>
  );
}
