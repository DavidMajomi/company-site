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
    slug: "cross-border-asset-management",
    title: "Cross Border Asset Management",
    description:
      "Portfolio software for diaspora investors who need to see, manage, and report on holdings in several countries.",
    overview:
      "Cross Border Asset Management lets investors track portfolios, watch performance, and manage assets in several countries from one place. It's built for individuals and firms with real holdings, multiple currencies, and compliance rules to follow.",
    capabilities: [
      "Portfolio tracking and performance reports across markets and asset types.",
      "Holdings, cash flow, and documents in one view.",
      "Adjustable workflows for onboarding, rebalancing, and investor reports.",
    ],
    outcomes: [
      "Less spreadsheet work reconciling holdings across borders.",
      "A clearer picture of risk, cash on hand, and performance.",
    ],
  },
  {
    slug: "retail-currency-trading",
    title: "Retail Currency Trading Software",
    description:
      "Retail currency trading software that connects to your core banking system, so you can offer currency products without piecing together separate tools.",
    overview:
      "Our platform connects what customers see when they trade to the banking and ledger systems that move the money. You get adjustable product rules, ways to connect to your existing core system, and the controls regulated retail FX needs.",
    capabilities: [
      "Order entry, pricing, and settlement for retail FX.",
      "Core banking and ledger connections through documented APIs.",
      "Controls for limits, compliance checks, and exceptions.",
    ],
    outcomes: [
      "Launch or expand retail FX without rebuilding connections every release.",
      "Trading activity that matches your core banking records and audit needs.",
    ],
  },
  {
    slug: "business-underwriting-pipelines",
    title: "Underwriting Pipelines for Businesses",
    description:
      "Underwriting pipelines for lenders and insurers: clearer data, faster decisions, less rework.",
    overview:
      "Business underwriting often breaks down in handoffs: spreadsheet checks, exceptions sent by email, and systems that don't share information. Our pipeline gives your team one path from application to decision, with room for your credit policies, outside data, and human review where it counts.",
    capabilities: [
      "Application intake, document collection, and business data capture.",
      "Rules-based decisions with adjustable stages, queues, and review steps.",
      "Connections for credit bureau data, financial statements, and loan servicing systems.",
    ],
    outcomes: [
      "Decide faster without lowering your underwriting standards.",
      "Change policies without rebuilding your whole origination system.",
    ],
  },
  {
    slug: "real-estate-intelligence",
    title: "Real Estate Intelligence Platform",
    description:
      "Foreclosure data, market analysis, and decision support for teams working distressed real estate.",
    overview:
      "Real estate teams lose time chasing foreclosure records across counties that each use different formats and update on different schedules. Our platform pulls foreclosure and market data into one place, cleans it up so it can be compared, and helps investors and analysts decide which opportunities to chase first.",
    capabilities: [
      "Foreclosure data collected, standardized, and tracked for changes.",
      "Search, filters, and map views for markets and individual properties.",
      "Exports and API access for your models, CRM, and campaign tools.",
    ],
    outcomes: [
      "Stop researching county by county. Get it all in one place.",
      "Go from spotting a lead to outreach, underwriting, or review faster.",
    ],
    sections: [
      {
        eyebrow: "Foreclosure data",
        title: "Built for people who buy properties.",
        description:
          "County filings, auction schedules, and property details in one searchable place, so you can compare markets and act on new leads.",
        bullets: [
          "Track new filings, status changes, and auction dates in one place.",
          "Compare markets using consistent fields instead of mismatched county exports.",
          "Use the same data for outreach, underwriting, and portfolio review.",
        ],
      },
    ],
  },
  {
    slug: "real-estate-alternative-data",
    title: "Curated Datasets & Alternative Data",
    description:
      "Real estate datasets and alternative data for teams building models and dashboards on reliable sources.",
    overview:
      "A model is only as good as its data. We put together real estate datasets and alternative data feeds, including foreclosure activity, market signals, and extra property details, so your analysts can spend their time on answers instead of cleaning data.",
    capabilities: [
      "Real estate datasets with documented fields, update schedules, and sources.",
      "Extra data for filling in details, scoring, and comparing markets.",
      "Delivered by API, bulk export, or common file formats.",
    ],
    outcomes: [
      "Less time cleaning up inconsistent property data.",
      "Build models and dashboards on sources you can explain to others.",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
