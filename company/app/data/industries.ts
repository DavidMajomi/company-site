export type IndustryLink = {
  href: string;
  label: string;
};

export type IndustryPage = IndustryLink & {
  slug: string;
  overview: string;
  headline: string;
  painPointsTitle: string;
  painPoints: string[];
  outcomesTitle: string;
  outcomes: string[];
  productSlugs: string[];
  serviceSlugs: string[];
};

const industryPages: IndustryPage[] = [
  {
    slug: "real-estate",
    href: "/industries/real-estate",
    label: "Real Estate",
    headline: "From property signal to market action.",
    overview:
      "Foreclosure intelligence, curated property datasets, acquisition-focused analytics, and campaign measurement for teams working distressed and opportunity-driven real estate markets.",
    painPointsTitle: "Unify your sales, ads, and outreach.",
    painPoints: [
      "Losing deals to failed outreach and follow up.",
      "Agents losing hours figuring out who to contact.",
      "Manual foreclosure data collection is losing lots of time.",
      "Market research is trapped in spreadsheets.",
      "Outreach and acquisition teams work from different data.",
      "Ad performance is hard to connect back to closed deals.",
    ],
    outcomesTitle: "What the industry page should make concrete.",
    outcomes: [
      "More deals closed",
      "Faster conversion rate and acquisition cycles.",
    ],
    productSlugs: ["real-estate-intelligence", "real-estate-alternative-data"],
    serviceSlugs: ["forward-deployed-engineer", "digital-advertising"],
  },
  {
    slug: "finance",
    href: "/industries/finance",
    label: "Finance",
    headline: "Structured financial workflows without fragile handoffs.",
    overview:
      "Asset management, retail currency trading with core-banking integrations, business underwriting pipelines, and risk monitoring with practical baseline compliance.",
    painPointsTitle:
      "The page should meet prospects inside the work they already recognize.",
    painPoints: [
      "Underwriting still depends on spreadsheet checks and email exceptions.",
      "Trading experiences drift away from core banking records.",
      "Cross-border holdings lack a single operating view.",
      "Policy changes require too much engineering rework.",
    ],
    outcomesTitle: "What the industry page should make concrete.",
    outcomes: [
      "Shorten time-to-decision without hiding underwriting context.",
      "Keep product activity aligned with ledger and audit expectations.",
      "Give stakeholders cleaner reporting across holdings and workflows.",
    ],
    productSlugs: [
      "diaspora-asset-management",
      "retail-currency-trading",
      "business-underwriting-pipelines",
    ],
    serviceSlugs: ["custom-solution-development", "forward-deployed-engineer"],
  },
  {
    slug: "small-business",
    href: "/industries/small-business",
    label: "Small Business",
    headline: "Senior execution across automation, web, ads, and reporting.",
    overview:
      "Forward deployed engineers, AI automation, CRM and advertising integrations, and hands-on Google and Meta ads support for operators who need senior execution without enterprise overhead.",
    painPointsTitle:
      "The page should meet prospects inside the work they already recognize.",
    painPoints: [
      "Ads, landing pages, and CRM records do not share context.",
      "Manual admin work keeps pulling operators away from customers.",
      "Reporting does not show which spend creates qualified demand.",
      "Basic web changes require too many vendors or templates.",
    ],
    outcomesTitle: "What the industry page should make concrete.",
    outcomes: [
      "Improve the feedback loop between spend, leads, and real business outcomes.",
      "Replace repetitive manual work with tools your team can keep using.",
      "Launch web and reporting surfaces that are fast, measurable, and maintainable.",
    ],
    productSlugs: [],
    serviceSlugs: [
      "forward-deployed-engineer",
      "web-development",
      "digital-advertising",
      "custom-solution-development",
    ],
  },
];

export type IndustrySummary = IndustryLink & {
  slug: string;
  headline: string;
  overview: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const industries: IndustryLink[] = industryPages.map(
  ({ href, label }) => ({
    href,
    label,
  }),
);

const industryHomeImages: Partial<
  Record<string, Pick<IndustrySummary, "imageSrc" | "imageAlt">>
> = {
  "real-estate": {
    imageSrc: "/industries/real-estate.png",
    imageAlt:
      "Modern apartment building with stacked balconies viewed from below against a pale sky",
  },
  finance: {
    imageSrc: "/industries/finance.png",
    imageAlt:
      "Trading screen showing a candlestick chart and order book with green and red price levels",
  },
};

export const industrySummaries: IndustrySummary[] = industryPages.map(
  ({ slug, href, label, headline, overview }) => {
    const summary: IndustrySummary = {
      slug,
      href,
      label,
      headline,
      overview,
    };
    const image = industryHomeImages[slug];

    if (image?.imageSrc) {
      summary.imageSrc = image.imageSrc;
      summary.imageAlt = image.imageAlt;
    }

    return summary;
  },
);

export function getIndustryBySlug(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}

export function getIndustryStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}
