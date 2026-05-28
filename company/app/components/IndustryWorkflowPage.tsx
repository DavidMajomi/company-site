import { ArrowRight, BarChart3, FileCheck2, Map, Route } from "lucide-react";
import { products } from "../data/products";
import { services } from "../data/services";
import type { Offering } from "../data/offerings";
import type { IndustryPage } from "../data/industries";
import { contactNav, productsNav, servicesNav } from "../data/navigation";
import { Button } from "../shared/Button";
import { OfferingGrid } from "./OfferingGrid";
import { OfferingLinkCard } from "./OfferingLinkCard";
import { StandardPageContent } from "./StandardPageContent";
import styles from "./IndustryWorkflowPage.module.css";

type IndustryWorkflowPageProps = {
  industry: IndustryPage;
};

const proofIcons = [Map, Route, BarChart3];

type RelevantOffering = {
  offering: Offering;
  hrefPrefix: string;
};

function findOfferings(slugs: string[], source: Offering[]) {
  return slugs
    .map((slug) => source.find((item) => item.slug === slug))
    .filter((item): item is Offering => Boolean(item));
}

export function IndustryWorkflowPage({ industry }: IndustryWorkflowPageProps) {
  const productOfferings = findOfferings(industry.productSlugs, products);
  const serviceOfferings = findOfferings(industry.serviceSlugs, services);
  const relevantOfferings: RelevantOffering[] = [
    ...productOfferings.map((offering) => ({
      offering,
      hrefPrefix: productsNav.href,
    })),
    ...serviceOfferings.map((offering) => ({
      offering,
      hrefPrefix: servicesNav.href,
    })),
  ];

  return (
    <StandardPageContent contentWidth="wide" className={styles.shell}>
      <section className={styles.hero} aria-labelledby="industry-heading">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Industry focus / {industry.label}</p>
          <h1 id="industry-heading">{industry.headline}</h1>
          <p>{industry.overview}</p>
          <div className={styles.heroActions}>
            <Button href={contactNav.href}>Talk to us</Button>
          </div>
        </div>
      </section>

      <section
        className={styles.problemSection}
        aria-labelledby="problem-heading"
      >
        <div className={styles.problemIntro}>
          <p className={styles.eyebrow}>Why teams call us</p>
          <h2 id="problem-heading">{industry.painPointsTitle}</h2>
        </div>
        <div className={styles.problemGrid}>
          {industry.painPoints.map((point) => (
            <article key={point}>
              <ArrowRight aria-hidden />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className={styles.offeringsSection}
        aria-labelledby="offerings-heading"
      >
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Relevant offerings</p>
          <h2 id="offerings-heading">
            Products and services for {industry.label.toLowerCase()} teams.
          </h2>
        </div>

        <div className={styles.offeringsGridWrap}>
          <OfferingGrid
            items={relevantOfferings}
            getKey={({ offering }) => offering.slug}
            renderCard={({ offering, hrefPrefix }) => (
              <OfferingLinkCard offering={offering} hrefPrefix={hrefPrefix} />
            )}
            className="flex flex-wrap justify-center gap-6"
          />
        </div>
      </section>

      <section
        className={`${styles.outcomesSection} cta-card`}
        aria-labelledby="outcomes-heading"
      >
        <div>
          <p className={styles.eyebrow}>Expected outcomes</p>
          <h2 id="outcomes-heading">{industry.outcomesTitle}</h2>
        </div>
        <div className={styles.outcomeGrid}>
          {industry.outcomes.map((outcome, index) => {
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
    </StandardPageContent>
  );
}
