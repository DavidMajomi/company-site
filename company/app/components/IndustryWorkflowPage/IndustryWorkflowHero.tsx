import { contactNav } from "../../data/navigation";
import { Button } from "../../shared/Button";
import { Eyebrow } from "../../shared/Eyebrow";

type IndustryWorkflowHeroProps = {
  label: string;
  headline: string;
  overview: string;
};

export function IndustryWorkflowHero({
  label,
  headline,
  overview,
}: IndustryWorkflowHeroProps) {
  return (
    <section
      className="block overflow-hidden rounded-lg border border-slate-900/10 bg-white/88 p-[clamp(1.25rem,4vw,3.5rem)] max-sm:rounded-md [background:radial-gradient(circle_at_88%_12%,rgb(15_23_42/0.08),transparent_28rem),linear-gradient(135deg,#fbfcfd_0%,#f4f6f8_100%)]"
      aria-labelledby="industry-heading"
    >
      <div>
        <Eyebrow text={`Industry focus / ${label}`} />
        <h1
          id="industry-heading"
          className="mt-[0.9rem] mb-0 font-serif text-fluid-display font-medium leading-[0.98] tracking-normal text-(--color-text) max-sm:leading-[1.06]"
        >
          {headline}
        </h1>
        <p className="mt-5 block text-lead leading-[1.75] text-(--color-text-muted) max-sm:text-lead-sm max-sm:leading-[1.62]">
          {overview}
        </p>
        <div className="mt-8 flex flex-wrap gap-[0.8rem] max-[55.99rem]:flex-col max-[55.99rem]:items-stretch [&_a]:max-[55.99rem]:w-full [&_a]:max-[55.99rem]:justify-center">
          <Button href={contactNav.href}>Talk to us</Button>
        </div>
      </div>
    </section>
  );
}
