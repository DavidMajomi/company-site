/**
 * Single source for public site name, positioning copy and page metadata strings.
 * Root layout uses `title.template` so pages only set the segment before ` | ${site.name}`.
 */
const name = "Vatheon Systems";
const shortName = "Vatheon";
const url = "https://www.vatheon.com";
const contactEmail = "info@vatheon.com";

const organizationDescription =
  "custom software, automation, and ad management for small businesses, plus data tools for real estate and finance teams.";

export const site = {
  name,
  shortName,
  url,
  contactEmail,
  /** All-caps label for nav and footer */
  nameDisplay: "VATHEON SYSTEMS",
  heroHeadline: "VATHEON SYSTEMS",
  heroLead: "Custom software and automation for small businesses",
  /** Visible brand line for footer and other on-page copy */
  brandIntro: `${shortName} builds custom software and automation for small businesses.`,
  /** Default meta description (home + fallback) */
  defaultDescription: `${name} builds ${organizationDescription}`,
  organizationDescription: `${name} builds ${organizationDescription}`,
  pageMeta: {
    services:
      "Engineers who work inside your business, custom software, websites, and Google and Meta ads management, plus foreclosure analysis and ad targeting for real estate.",
    products:
      "Software for cross-border asset management, retail currency trading, business underwriting, and real estate data, including foreclosure tracking.",
    contact: `Email ${shortName} and tell us what you need. We reply with a clear next step.`,
  },
  cta: {
    heading:
      "Tell us what's slowing your business down.",
    subheading:
      "Send us a note. We'll tell you honestly whether we can help and what it would take.",
  },
  copyrightSuffix: "All rights reserved.",
  /** Title segment when product slug is missing */
  productFallbackTitle: "Product",
  /** Title segment when service slug is missing */
  serviceFallbackTitle: "Service",
} as const;
