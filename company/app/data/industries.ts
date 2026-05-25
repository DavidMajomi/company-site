export type IndustryLink = {
  href: string;
  label: string;
};

export type IndustryPage = IndustryLink & {
  slug: string;
  overview: string;
};

const industryPages: IndustryPage[] = [
  {
    slug: "real-estate",
    href: "/industries/real-estate",
    label: "Real Estate",
    overview:
      "Foreclosure intelligence, curated property datasets, acquisition-focused analytics, and campaign measurement for teams working distressed and opportunity-driven real estate markets.",
  },
  {
    slug: "finance",
    href: "/industries/finance",
    label: "Finance",
    overview:
      "Asset management, retail currency trading with core-banking integrations, business underwriting pipelines, and risk monitoring with practical baseline compliance.",
  },
  {
    slug: "small-business",
    href: "/industries/small-business",
    label: "Small Business",
    overview:
      "Forward deployed engineers, AI automation, CRM and advertising integrations, and hands-on Google and Meta ads support for operators who need senior execution without enterprise overhead.",
  },
];

export const industries: IndustryLink[] = industryPages.map(({ href, label }) => ({
  href,
  label,
}));

export function getIndustryBySlug(slug: string) {
  return industryPages.find((industry) => industry.slug === slug);
}

export function getIndustryStaticParams() {
  return industryPages.map((industry) => ({ slug: industry.slug }));
}
