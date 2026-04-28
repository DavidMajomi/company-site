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
      "A placeholder overview for real estate-focused solutions and delivery support.",
  },
  {
    slug: "finance",
    href: "/industries/finance",
    label: "Finance",
    overview:
      "A placeholder overview for finance-focused solutions and delivery support.",
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
