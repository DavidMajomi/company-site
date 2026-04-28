/**
 * Single source for public site name, positioning copy and page metadata strings.
 * Root layout uses `title.template` so pages only set the segment before ` | ${site.name}`.
 */
const name = "Vatheon Systems";

export const site = {
  name,
  /** All-caps label for nav and footer */
  nameDisplay: "VATHEON SYSTEMS",
  tagline: "Surfing the Frontier",
  heroHeadline:
    "Vatheon Systems",
  heroLead:
    "Vatheon Systems provides frontier solutions and services for modern business needs",
  /** Default meta description (home + fallback) */
  defaultDescription:
    "Default Meta description",
  pageMeta: {
    services:
      "IT consulting, project management, outsourcing, training, mobile app development and enterprise application development for organizations that need practical delivery support.",
    products:
      "Loan origination, Vatheon Systems Banking Channels, payments fraud prevention, ERP, CRM and cloud migration acceleration—five solution areas we deliver with partners and proven technology.",
    contact: `Reach ${name} by phone, email, or web. Talk to our team about technologies and solutions for your organization.`,
  },
  cta: {
    heading:
      "Please contact us today to discover the technologies you need for achieving excellence.",
    subheading:
      "Talk to our team to learn how we can empower your organization with the right technologies and solutions.",
  },
  copyrightSuffix: "All rights reserved.",
  /** Title segment when product slug is missing */
  productFallbackTitle: "Product",
  /** Title segment when service slug is missing */
  serviceFallbackTitle: "Service",
} as const;
