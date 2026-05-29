export type IndustryLink = {
  href: string;
  label: string;
};

export type IndustryPage = IndustryLink & {
  slug: string;
  overview: string;
  headline: string;
  painPoints: string[];
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
    painPoints: [
      "Losing deals to failed outreach and follow up.",
      "Agents losing hours figuring out who to contact.",
      "Manual foreclosure data collection is losing lots of time.",
      "Market research is trapped in spreadsheets.",
      "Outreach and acquisition teams work from different data.",
      "Ad performance is hard to connect back to closed deals.",
    ],
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
    headline: "Financial tools and worflows to accelerate your team.",
    overview:
      "Asset management, retail currency trading with core-banking integrations, business underwriting pipelines, and risk monitoring.",
    painPoints: [
      "Underwriting still depends on spreadsheet checks and manual verification.",
      "Trading integrations with core-banking creates new compliance requirements.",
      "Cross-border client holdings lack a single operating view.",
    ],
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
    headline: "Intelligent solutions to let you focus on what matters.",
    overview:
      "Forward deployed engineers, AI automation, CRM and advertising integrations, and hands-on Google and Meta ads support for operators who need senior execution without enterprise overhead.",
    painPoints: [
      "Ads, landing pages, and CRM records are siloed losing you time.",
      "Manual admin work keeps pulling you away from your customers.",
      "Reporting does not show which spend creates qualified demand.",
      "Basic web changes require too many vendors or templates.",
    ],
    outcomes: [
      "Improve the speed loop between spend, leads, and real business outcomes.",
      "Replace repetitive manual work with tools your team can trust.",
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
  "small-business": {
    imageSrc: "/industries/small-business.png",
    imageAlt:
      "Small business team reviewing charts and notes together at a desk in a bright office",
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
