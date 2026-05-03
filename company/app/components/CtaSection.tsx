import { contactNav, productsNav } from "../data/navigation";
import { site } from "../site";
import { Button } from "../shared/Button";

export function CtaSection() {
  return (
    <section
      id="contact"
      className="cta-gradient scroll-mt-6 rounded-(--radius-md) px-6 py-16 md:px-12 md:py-20"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight text-(--color-white-text) md:text-3xl">
          {site.cta.heading}
        </h2>
        <p className="mt-4 text-slate-400">
          {site.cta.subheading}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={contactNav.href}>Contact us</Button>
          <Button href={productsNav.href} variant="ghost">
            Our products
          </Button>
        </div>
      </div>
    </section>
  );
}
