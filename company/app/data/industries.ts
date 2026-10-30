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
    headline: "Find distressed properties faster and follow up sooner.",
    overview:
      "Foreclosure data, property datasets, and ad tracking for teams that buy and sell distressed real estate.",
    painPoints: [
      "Deals slip away because outreach and follow-up fall through.",
      "Agents spend hours working out who to contact.",
      "Collecting foreclosure data by hand eats up your week.",
      "Market research is stuck in spreadsheets.",
      "Outreach and acquisition teams work from different numbers.",
      "It's hard to tell which ads led to closed deals.",
    ],
    outcomes: [
      "More deals closed.",
      "Faster follow-up and shorter time to acquire.",
    ],
    productSlugs: ["real-estate-intelligence", "real-estate-alternative-data"],
    serviceSlugs: ["forward-deployed-engineer", "digital-advertising"],
  },
  {
    slug: "finance",
    href: "/industries/finance",
    label: "Finance",
    headline: "Better tools for your finance team.",
    overview:
      "Software for asset management, currency trading that connects to your core banking system, business underwriting, and risk monitoring.",
    painPoints: [
      "Underwriting still runs on spreadsheets and manual checks.",
      "Connecting trading to your core banking system adds compliance work.",
      "Clients with holdings in several countries have no single view of them.",
    ],
    outcomes: [
      "Faster decisions, with the underwriting details still visible.",
      "Trading activity that matches your ledger and audit records.",
      "Clearer reports across holdings and workflows.",
    ],
    productSlugs: [
      "cross-border-asset-management",
      "retail-currency-trading",
      "business-underwriting-pipelines",
    ],
    serviceSlugs: ["custom-solution-development", "forward-deployed-engineer"],
  },
  {
    slug: "small-business",
    href: "/industries/small-business",
    label: "Small Business",
    headline: "Less busywork. More time with customers.",
    overview:
      "Engineers who work with you to automate routine tasks, connect your ads, website, and customer records, and manage your Google and Meta ads. Experienced help without agency overhead.",
    painPoints: [
      "Your ads, website, and customer records don't talk to each other.",
      "Admin work keeps pulling you away from customers.",
      "Your reports don't show which ad spend brings in real customers.",
      "Simple website changes take too many vendors or tools.",
    ],
    outcomes: [
      "See which ad dollars turn into leads and sales.",
      "Stop doing repetitive tasks by hand.",
      "A fast website with reports you can read and your team can maintain.",
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
