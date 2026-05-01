import type { Offering } from "./offerings";

export type Product = Offering;

export const products: Product[] = [
  {
    slug: "loan-origination",
    title: "Loan origination",
    description:
      "A configurable lending foundation that helps teams launch and evolve origination journeys without rebuilding the platform every time requirements change.",
    overview:
      "Our loan origination capability is built for institutions that need to modernize lending journeys without losing control of the customer lifecycle or operational workflows. It supports retail, SME and corporate lending while keeping the system flexible enough to adapt to new channels, credit policies and servicing rules.",
    capabilities: [
      "Customer onboarding and lending workflows with configurable product structures.",
      "Origination, servicing and lifecycle change support across retail and business lending.",
      "Integration patterns that connect the platform to digital channels, operations and downstream systems.",
    ],
    outcomes: [],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
