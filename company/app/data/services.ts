import type { Offering } from "./offerings";

export type Service = Offering;

export const services: Service[] = [
  {
    slug: "forward-deployed-engineer",
    title: "Forward Deployed Engineer",
    description:
      "Senior engineers who embed in your business to ship automation, internal tooling, integrations, and analytics—turning operational data into decisions that stick.",
    overview:
      "When you need capacity without another hiring cycle, we deploy engineers inside your team: building automations, internal tools, and integrations alongside the analysis and reporting that prove they work. We work alongside operators so delivery stays tied to real workflows—not generic platform demos or dashboard templates.",
    capabilities: [
      "AI automation, internal tooling, and integration work across CRM, Meta Ads, Google Ads, and adjacent business systems.",
      "Operational analysis, KPI design, dashboards, and executive-ready reporting.",
      "Support for finance, marketing, and real estate workflows where data is fragmented.",
    ],
    outcomes: [
      "Ship practical tooling and reporting faster than hiring and onboarding a full internal team.",
      "Reduce manual work by connecting systems and answering high-priority business questions in parallel.",
      "Build habits and artifacts your team can reuse after the engagement.",
    ],
  },
  {
    slug: "custom-solution-development",
    title: "Custom Solution Development",
    description:
      "End-to-end software built around your workflows—platforms, integrations, and automation tailored to problems off-the-shelf products cannot solve.",
    overview:
      "When no SaaS template fits and a spreadsheet will not scale, we scope, design, and build custom solutions tied to how your business actually operates. That means discovery with stakeholders, architecture that matches your constraints, and delivery you can run in production—not a slide deck and a prototype that never ships.",
    capabilities: [
      "Requirements discovery, solution design, and phased delivery for bespoke platforms and internal systems.",
      "Integration across CRM, ads, finance, property, and legacy tools where data and processes are fragmented.",
      "Automation, reporting, and operational workflows packaged as software your team owns and extends.",
    ],
    outcomes: [
      "Replace manual workarounds with software shaped to your rules, not a vendor's defaults.",
      "Connect disconnected systems so decisions run on one source of truth.",
      "Leave with documented, maintainable code—not a dependency on perpetual custom work.",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web applications built for performance, accessibility, and maintainability—without the agency handoff treadmill.",
    overview:
      "Your site or product should load fast, work on every device, and connect to the systems your business already runs on. We design and build marketing sites, customer portals, and internal web apps with modern stacks and clear ownership—so you ship something your team can extend, not a black box that needs us on retainer to change a headline.",
    capabilities: [
      "Marketing sites, landing pages, and content-driven experiences with SEO and analytics wired in from day one.",
      "Customer-facing web apps, dashboards, and portals integrated with CRM, auth, payments, and APIs.",
      "Performance, accessibility, and responsive design as baseline requirements—not optional add-ons.",
    ],
    outcomes: [
      "Launch a credible web presence or product surface without stitching together freelancers and templates.",
      "Keep pages fast and measurable so traffic and ad spend convert instead of bouncing.",
      "Own the codebase and deployment path when the engagement ends.",
    ],
  },
  {
    slug: "digital-advertising",
    title: "Google & Meta Ads Expertise",
    description:
      "Hands-on Google and Meta advertising support—strategy, execution, and measurement—for teams that need performance without agency theater.",
    overview:
      "Paid search and paid social only work when targeting, creative, landing paths, and measurement line up. We help small businesses and specialist operators run Google and Meta campaigns with clear accountability for lead quality, cost, and downstream conversion.",
    capabilities: [
      "Campaign structure, audience design, and creative testing on Google and Meta.",
      "Conversion tracking setup and reporting that ties spend to business outcomes.",
      "Ongoing optimization and integration with CRM or lead-routing workflows.",
    ],
    outcomes: [
      "Improve ad targeting effectiveness with tighter feedback between spend and results.",
      "Stop guessing which campaigns deserve budget next month.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
