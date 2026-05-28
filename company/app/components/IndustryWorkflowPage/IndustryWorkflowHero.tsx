import { contactNav } from "../../data/navigation";
import { Button } from "../../shared/Button";
import styles from "./IndustryWorkflowPage.module.css";

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
    <section className={styles.hero} aria-labelledby="industry-heading">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>Industry focus / {label}</p>
        <h1 id="industry-heading">{headline}</h1>
        <p>{overview}</p>
        <div className={styles.heroActions}>
          <Button href={contactNav.href}>Talk to us</Button>
        </div>
      </div>
    </section>
  );
}
