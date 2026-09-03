/**
 * Single source for public site name, positioning copy and page metadata strings.
 * Root layout uses `title.template` so pages only set the segment before ` | ${site.name}`.
 */
const name = "Vatheon Systems";
const shortName = "Vatheon";
const url = "https://www.vatheon.com";
const contactEmail = "info@vatheon.com";

const organizationDescription =
  "Intelligent automated systems for asset management, real estate, underwriting, analytics, and risk monitoring backed by a fast moving engineering team.";

export const site = {
  name,
  shortName,
  url,
  contactEmail,
  /** All-caps label for nav and footer */
  nameDisplay: "VATHEON SYSTEMS",
  heroHeadline: "VATHEON SYSTEMS",
  heroLead: "Building Intelligent Automated Systems for Every Business Need",
  /** Visible brand line for footer and other on-page copy */
  brandIntro: `${shortName} builds intelligent automated systems for every business need.`,
  /** Default meta description (home + fallback) */
  defaultDescription: `${name} builds ${organizationDescription.charAt(0).toLowerCase()}${organizationDescription.slice(1)}`,
  organizationDescription: `${name} builds ${organizationDescription.charAt(0).toLowerCase()}${organizationDescription.slice(1)}`,
  pageMeta: {
    services:
      "Forward deployed engineers, custom solution development, custom web development, Google and Meta ads expertise, and real estate services including foreclosure analysis and ad targeting effectiveness.",
    products:
      "Diaspora asset management, retail currency trading, business underwriting pipelines, property security intelligence, nonprofit analytics, risk monitoring, and real estate intelligence platforms with curated alternative data.",
    contact: `Reach ${shortName} (${name}) by email or web. Talk to our team about technologies and solutions for your organization.`,
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
