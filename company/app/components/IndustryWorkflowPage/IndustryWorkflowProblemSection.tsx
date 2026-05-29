import { Eyebrow } from "../../shared/Eyebrow";

type IndustryWorkflowProblemSectionProps = {
  painPoints: string[];
};

export function IndustryWorkflowProblemSection({
  painPoints,
}: IndustryWorkflowProblemSectionProps) {
  return (
    <section
      className="grid gap-6 overflow-hidden rounded-lg bg-white/88 p-[clamp(1.25rem,3vw,2rem)] max-sm:rounded-md max-sm:p-4"
      aria-label="Why teams call us"
    >
      <Eyebrow text="Why teams call us" />
      <div className="flex flex-wrap justify-center gap-4">
        {painPoints.map((point) => (
          <article
            key={point}
            className="w-full shrink-0 rounded-lg border border-slate-900/10 bg-[#fbfcfd] p-6 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] max-sm:p-4"
          >
            <p className="m-0 text-card font-[750] leading-[1.62] text-(--color-text)">
              {point}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
