import { BarChart3, FileCheck2, Map, Route } from "lucide-react";
import { Eyebrow } from "../../shared/Eyebrow";

const proofIcons = [Map, Route, BarChart3];

type IndustryWorkflowOutcomesSectionProps = {
  outcomes: string[];
};

export function IndustryWorkflowOutcomesSection({
  outcomes,
}: IndustryWorkflowOutcomesSectionProps) {
  return (
    <section
      className="cta-card grid gap-6 overflow-hidden p-[clamp(1.25rem,3vw,2rem)] max-sm:p-4"
      aria-label="Expected outcomes"
    >
      <Eyebrow text="Expected outcomes" />
      <div className="flex flex-wrap justify-center gap-4 [&_svg]:text-(--color-accent)">
        {outcomes.map((outcome, index) => {
          const Icon = proofIcons[index] ?? FileCheck2;

          return (
            <article
              key={outcome}
              className="w-full shrink-0 rounded-lg border border-slate-900/10 bg-[#fbfcfd] p-6 sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)] max-sm:min-h-0 max-sm:p-4"
            >
              <Icon aria-hidden />
              <p className="mt-3 mb-0 text-card font-[750] leading-[1.62] text-(--color-text)">
                {outcome}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
