import { BarChart3, FileCheck2, Map, Route } from "lucide-react";
import styles from "./IndustryWorkflowPage.module.css";

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
      className={`${styles.outcomesSection} cta-card`}
      aria-labelledby="outcomes-heading"
    >
      <div>
        <p className={styles.eyebrow}>Expected outcomes</p>
        <h2 id="outcomes-heading">{title}</h2>
      </div>
      <div className={styles.outcomeGrid}>
        {outcomes.map((outcome, index) => {
          const Icon = proofIcons[index] ?? FileCheck2;

          return (
            <article key={outcome}>
              <Icon aria-hidden />
              <p>{outcome}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
