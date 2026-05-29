import Link from "next/link";
import { contactNav } from "../data/navigation";
import { IndustryHomeCards } from "./IndustryHomeCards";

export function IndustriesHomeSection() {
  return (
    <section
      id="industries"
      className="scroll-mt-6"
      aria-labelledby="industries-heading"
    >
      <h1 className="text-3xl font-bold tracking-tight text-(--color-primary) md:text-4xl">
        Industries
      </h1>
      <div className="mx-auto max-w-6xl px-6  md:px-10 ">
        <div>
          <p className="mt-4 text-base leading-relaxed text-(--color-text-muted) md:text-xl">
            From foreclosure intelligence to underwriting pipelines, we meet
            teams inside the workflows they recognize, then build the
            automation, data, and execution layer around them.
          </p>
        </div>

        <IndustryHomeCards />

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          <Link
            href={contactNav.href}
            className="inline-flex items-center text-sm font-semibold text-(--color-accent) transition hover:text-sky-600"
          >
            Talk to us about your industry
          </Link>
        </div>
      </div>
    </section>
  );
}
