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
    slug: "diaspora-asset-management",
    title: "Diaspora Asset Management",
    description:
      "Portfolio and asset management software built for diaspora investors who need visibility, control, and reporting across holdings in multiple markets.",
    overview:
      "Diaspora Asset Management helps investors track portfolios, monitor performance, and manage assets across borders from one place. It is designed for individuals and firms that need practical tooling—not another generic wealth app—for real holdings, real currencies, and real compliance expectations.",
    capabilities: [
      "Portfolio tracking and performance reporting across markets and asset classes.",
      "Holdings, cash flow, and document management in a single operating view.",
      "Configurable workflows for onboarding, rebalancing, and investor reporting.",
    ],
    outcomes: [
      "Reduce manual spreadsheet work when reconciling cross-border holdings.",
      "Give stakeholders a clearer picture of exposure, liquidity, and performance.",
    ],
  },
  {
    slug: "retail-currency-trading",
    title: "Retail Currency Trading Software",
    description:
      "Retail FX trading software with core-banking integrations so institutions can offer currency products without stitching together fragile point solutions.",
    overview:
      "Our retail currency trading platform connects customer-facing trading experiences to the core banking and ledger systems that actually move money. Teams get configurable product rules, integration patterns for existing cores, and operational controls suited to regulated retail FX.",
    capabilities: [
      "Retail FX order capture, pricing, and settlement workflows.",
      "Core-banking and ledger integrations via documented API patterns.",
      "Operational controls for limits, compliance checks, and exception handling.",
    ],
    outcomes: [
      "Launch or extend retail FX without rebuilding integrations for every release.",
      "Keep trading activity aligned with core-banking records and audit expectations.",
    ],
  },
  {
    slug: "business-underwriting-pipelines",
    title: "Underwriting Pipelines for Businesses",
    description:
      "Configurable underwriting pipelines that help lenders and insurers evaluate business applicants with clearer data, faster decisions, and less manual rework.",
    overview:
      "Business underwriting often breaks down in handoffs—spreadsheet checks, email exceptions, and systems that do not share context. Our pipeline product gives teams a structured path from application intake through decisioning, with room to plug in credit policies, third-party data, and human review where it matters.",
    capabilities: [
      "Application intake, document collection, and structured business data capture.",
      "Rules-driven decisioning with configurable stages, queues, and review paths.",
      "Integrations for bureau data, financial statements, and downstream servicing systems.",
    ],
    outcomes: [
      "Shorten time-to-decision without sacrificing underwriting quality.",
      "Make policy changes without rewriting the entire origination stack.",
    ],
  },
  {
    slug: "real-estate-intelligence",
    title: "Real Estate Intelligence Platform",
    description:
      "A real estate intelligence platform for foreclosure data aggregation, market analysis, and decision support across distressed and opportunity-driven workflows.",
    overview:
      "Real estate teams lose time chasing foreclosure records across counties, formats, and update cadences. Our platform aggregates foreclosure and related market signals, normalizes them for analysis, and supports the workflows investors, analysts, and operators use to prioritize opportunities.",
    capabilities: [
      "Foreclosure data aggregation, normalization, and change tracking.",
      "Search, filtering, and map views for market and property-level analysis.",
      "Exports and API access for downstream models, CRMs, and campaign tools.",
    ],
    outcomes: [
      "Replace manual county-by-county research with a unified intelligence layer.",
      "Move faster from signal discovery to outreach, underwriting, or acquisition review.",
    ],
    sections: [
      {
        eyebrow: "Foreclosure intelligence",
        title: "Aggregation and analysis built for acquisition workflows.",
        description:
          "The platform brings county filings, auction schedules, and property context into one searchable layer so teams can compare markets and act on fresh signals.",
        bullets: [
          "Track new filings, status changes, and auction timelines in one place.",
          "Compare markets with normalized fields instead of incompatible county exports.",
          "Feed outreach, underwriting, and portfolio review from the same dataset.",
        ],
      },
    ],
  },
  {
    slug: "real-estate-alternative-data",
    title: "Curated Datasets & Alternative Data",
    description:
      "Curated real estate datasets and alternative data products for teams building models, dashboards, and market intelligence on top of reliable sources.",
    overview:
      "Models and dashboards are only as good as the inputs behind them. We curate real estate datasets and alternative data feeds—foreclosure activity, market signals, and enrichment layers—so analysts and product teams can spend time on insight instead of source wrangling.",
    capabilities: [
      "Curated real estate datasets with documented fields, refresh cadence, and lineage.",
      "Alternative data layers for enrichment, scoring, and market comparison.",
      "Delivery via API, batch export, and integration-friendly formats.",
    ],
    outcomes: [
      "Reduce time spent cleaning and reconciling inconsistent property data.",
      "Ship models and dashboards on sources your team can explain to stakeholders.",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
