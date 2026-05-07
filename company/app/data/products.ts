import type { Offering } from "./offerings";

export type ProductFeatureGroup = {
  eyebrow?: string;
  title: string;
  description: string;
  bullets: string[];
  tone?: "default" | "subtle";
};

export type Product = Offering & {
  sections?: ProductFeatureGroup[];
};

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
    sections: [
      {
        eyebrow: "Loan origination",
        title: "A clearer view of retail, SME and corporate lending flows.",
        description:
          "The diagram shows how channels, an API gateway and the loan origination platform connect to the data hub and compliance controls that support loan origination end to end.",
        bullets: [
          "Channels feed a shared platform instead of isolated point solutions.",
          "Retail, SME and corporate lending can follow different business rules.",
          "Security, compliance and integration stay visible across the flow.",
        ],
      },
      {
        eyebrow: "Platform view",
        title: "Designed for flexibility across products and channels.",
        description:
          "A generic product page should still be able to surface the platform context that matters for a complex offering.",
        bullets: [
          "Capture different lending journeys without fragmenting the core.",
          "Keep operations, controls and integrations in one operating model.",
          "Support growth without reworking the underwriting and servicing path.",
        ],
        tone: "subtle",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
