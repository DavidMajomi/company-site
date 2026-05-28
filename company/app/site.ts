/**
 * Single source for public site name, positioning copy and page metadata strings.
 * Root layout uses `title.template` so pages only set the segment before ` | ${site.name}`.
 */
const name = "Vatheon Systems";

export const site = {
  name,
  /** All-caps label for nav and footer */
  nameDisplay: "VATHEON SYSTEMS",
  tagline: "",
  heroHeadline: "VATHEON SYSTEMS",
  heroLead: "Building Intelligent Automated Solutions for Every Business Need",
  /** Default meta description (home + fallback) */
  defaultDescription:
    "Vatheon Systems builds asset management, real estate intelligence, underwriting, analytics, and risk monitoring products—and deploys engineers inside your business for automation, integrations, analytics, and advertising execution.",
  pageMeta: {
    services:
      "Forward deployed engineers, custom solution development, custom web development, Google and Meta ads expertise, and real estate services including foreclosure analysis and ad targeting effectiveness.",
    products:
      "Diaspora asset management, retail currency trading, business underwriting pipelines, property security intelligence, nonprofit analytics, risk monitoring, and real estate intelligence platforms with curated alternative data.",
    contact: `Reach ${name} by phone, email, or web. Talk to our team about technologies and solutions for your organization.`,
  },
  cta: {
    heading:
      "Reach out today to see how intelligent solutions can boost revenue, cut operational costs, and improve efficiency",
    subheading:
      "Talk to our team to learn how we can empower your organization with the right technologies and solutions.",
  },
  copyrightSuffix: "All rights reserved.",
  /** Title segment when product slug is missing */
  productFallbackTitle: "Product",
  /** Title segment when service slug is missing */
  serviceFallbackTitle: "Service",
} as const;
