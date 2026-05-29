import Link from "next/link";
import { IndustryHomeCard } from "../components/IndustryHomeCard";
import { contactNav } from "../data/navigation";
import { industrySummaries } from "../data/industries";

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

        <ul className="mt-12 flex list-none flex-wrap justify-center gap-4 p-0 sm:gap-5 lg:gap-6">
          {industrySummaries.map((industry, index) => (
            <IndustryHomeCard
              key={industry.slug}
              industry={industry}
              index={index}
            />
          ))}
        </ul>

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
