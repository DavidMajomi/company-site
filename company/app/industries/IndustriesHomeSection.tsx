import Link from "next/link";
import { IndustryHomeCard } from "../components/IndustryHomeCard";
import { contactNav } from "../data/navigation";
import { industrySummaries } from "../data/industries";
import { Eyebrow } from "../shared/Eyebrow";

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
          <h2
            id="industries-heading"
            className="mt-4 font-serif text-fluid-section font-medium leading-tight text-(--color-primary)"
          >
            Systems shaped by the work you already do
          </h2>
          <p className="mt-4 text-base leading-relaxed text-(--color-text-muted) md:text-lead">
            From foreclosure intelligence to underwriting pipelines, we meet
            teams inside the workflows they recognize, then build the
            automation, data, and execution layer around them.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-5 p-0 md:grid-cols-3 md:gap-6">
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
