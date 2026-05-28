import type { Offering } from "../../data/offerings";
import { OfferingGrid } from "../OfferingGrid";
import { OfferingLinkCard } from "../OfferingLinkCard";
import styles from "./IndustryWorkflowPage.module.css";

export type RelevantOffering = {
  offering: Offering;
  hrefPrefix: string;
};

type IndustryWorkflowOfferingsSectionProps = {
  label: string;
  offerings: RelevantOffering[];
};

export function IndustryWorkflowOfferingsSection({
  label,
  offerings,
}: IndustryWorkflowOfferingsSectionProps) {
  return (
    <section
      className={styles.offeringsSection}
      aria-labelledby="offerings-heading"
    >
      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>Relevant offerings</p>
        <h2 id="offerings-heading">
          Products and services for {label.toLowerCase()} teams.
        </h2>
      </div>

      <div className={styles.offeringsGridWrap}>
        <OfferingGrid
          items={offerings}
          getKey={({ offering }) => offering.slug}
          renderCard={({ offering, hrefPrefix }) => (
            <OfferingLinkCard offering={offering} hrefPrefix={hrefPrefix} />
          )}
          className="flex flex-wrap justify-center gap-6"
        />
      </div>
    </section>
  );
}
