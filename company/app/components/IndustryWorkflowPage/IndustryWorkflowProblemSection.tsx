import { ArrowRight } from "lucide-react";

type IndustryWorkflowProblemSectionProps = {
  title: string;
  painPoints: string[];
};

export function IndustryWorkflowProblemSection({
  title,
  painPoints,
}: IndustryWorkflowProblemSectionProps) {
  return (
    <section
      className="grid gap-6 overflow-hidden rounded-lg border border-slate-900/10 bg-white/88 p-[clamp(1.25rem,3vw,2rem)] max-sm:rounded-md max-sm:p-4 min-[56rem]:grid-cols-[0.7fr_1.3fr] min-[56rem]:items-start"
      aria-labelledby="problem-heading"
    >
      <div>
        <p className="m-0 text-[0.72rem] font-black uppercase tracking-[0.22em] text-(--color-accent)">
          Why teams call us
        </p>
        <h2
          id="problem-heading"
          className="mt-[0.9rem] mb-0 font-serif text-[clamp(2rem,4vw,2.5rem)] font-medium leading-[0.98] tracking-normal text-(--color-text)"
        >
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-3 [&_svg]:text-(--color-accent)">
        {painPoints.map((point) => (
          <article
            key={point}
            className="min-h-40 rounded-lg border border-slate-900/10 bg-[#fbfcfd] p-4 max-sm:min-h-0"
          >
            <ArrowRight aria-hidden />
            <p className="mt-3 mb-0 text-[0.95rem] font-[750] leading-[1.62] text-(--color-text)">
              {point}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
