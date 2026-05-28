import { BarChart3, FileCheck2, Map, Route } from "lucide-react";
import { Eyebrow } from "../../shared/Eyebrow";

const proofIcons = [Map, Route, BarChart3];

type IndustryWorkflowOutcomesSectionProps = {
  title: string;
  outcomes: string[];
};

export function IndustryWorkflowOutcomesSection({
  title,
  outcomes,
}: IndustryWorkflowOutcomesSectionProps) {
  return (
    <section
      className="cta-card grid gap-6 overflow-hidden p-[clamp(1.25rem,3vw,2rem)] max-sm:p-4 min-[56rem]:grid-cols-[0.7fr_1.3fr] min-[56rem]:items-start"
      aria-labelledby="outcomes-heading"
    >
      <div>
        <Eyebrow text="Expected outcomes" />
        <h2
          id="outcomes-heading"
          className="mt-[0.9rem] mb-0 font-serif text-fluid-section font-medium leading-[0.98] tracking-normal text-(--color-text)"
        >
          {title}
        </h2>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,16rem),1fr))] gap-3 [&_svg]:text-(--color-accent)">
        {outcomes.map((outcome, index) => {
          const Icon = proofIcons[index] ?? FileCheck2;

          return (
            <article
              key={outcome}
              className="min-h-48 rounded-lg border border-slate-900/10 bg-[#fbfcfd] p-5 max-sm:min-h-0 max-sm:p-4"
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
