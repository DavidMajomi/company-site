import { contactNav, productsNav } from "../data/navigation";
import { site } from "../site";
import { Button } from "../shared/Button";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-6 rounded-(--radius-md) px-4 py-10 md:px-8 md:py-14"
    >
      <div className="cta-card mx-auto max-w-6xl px-6 py-14 text-center md:px-12 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight text-(--color-black-text) md:text-3xl">
          {site.cta.heading}
        </h2>
        <p className="mt-4 text-(--color-text-muted)">
          {site.cta.subheading}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={contactNav.href}>Contact us</Button>
          <Button href={productsNav.href} variant="outline">
            Our products
          </Button>
        </div>
      </div>
    </section>
  );
}
