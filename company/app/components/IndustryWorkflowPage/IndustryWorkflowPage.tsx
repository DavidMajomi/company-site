import { products } from "../../data/products";
import { services } from "../../data/services";
import type { Offering } from "../../data/offerings";
import type { IndustryPage } from "../../data/industries";
import { productsNav, servicesNav } from "../../data/navigation";
import { StandardPageContent } from "../StandardPageContent";
import { IndustryWorkflowHero } from "./IndustryWorkflowHero";
import { IndustryWorkflowOfferingsSection } from "./IndustryWorkflowOfferingsSection";
import { IndustryWorkflowOutcomesSection } from "./IndustryWorkflowOutcomesSection";
import { IndustryWorkflowProblemSection } from "./IndustryWorkflowProblemSection";

type IndustryWorkflowPageProps = {
  industry: IndustryPage;
};

function findOfferings(slugs: string[], source: Offering[]) {
  return slugs
    .map((slug) => source.find((item) => item.slug === slug))
    .filter((item): item is Offering => Boolean(item));
}

export function IndustryWorkflowPage({ industry }: IndustryWorkflowPageProps) {
  const productOfferings = findOfferings(industry.productSlugs, products);
  const serviceOfferings = findOfferings(industry.serviceSlugs, services);
  const relevantOfferings = [
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
    <StandardPageContent
      contentWidth="wide"
      className="grid gap-6 max-lg:gap-4"
    >
      <IndustryWorkflowHero
        label={industry.label}
        headline={industry.headline}
        overview={industry.overview}
      />
      <IndustryWorkflowProblemSection
        title={industry.painPointsTitle}
        painPoints={industry.painPoints}
      />
      <IndustryWorkflowOfferingsSection
        label={industry.label}
        offerings={relevantOfferings}
      />
      <IndustryWorkflowOutcomesSection
        title={industry.outcomesTitle}
        outcomes={industry.outcomes}
      />
    </StandardPageContent>
  );
}
