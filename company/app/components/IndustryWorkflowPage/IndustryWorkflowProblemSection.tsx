import { ArrowRight } from "lucide-react";
import styles from "./IndustryWorkflowPage.module.css";

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
      className={styles.problemSection}
      aria-labelledby="problem-heading"
    >
      <div className={styles.problemIntro}>
        <p className={styles.eyebrow}>Why teams call us</p>
        <h2 id="problem-heading">{title}</h2>
      </div>
      <div className={styles.problemGrid}>
        {painPoints.map((point) => (
          <article key={point}>
            <ArrowRight aria-hidden />
            <p>{point}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
