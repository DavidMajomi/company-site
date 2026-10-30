import type { Offering } from "./offerings";

export type Service = Offering;

export const services: Service[] = [
  {
    slug: "forward-deployed-engineer",
    title: "Forward Deployed Engineers",
    description:
      "An engineer who works inside your business to automate tasks, connect your systems, and build internal tools, so you can grow without hiring.",
    overview:
      "Need more hands but not a full-time hire? One of our engineers joins your team and builds automations, internal tools, and connections between the software you already use.",
    capabilities: [
      "Automating repetitive tasks and connecting your CRM, Google Ads, Meta Ads, and other business tools.",
      "Working out which numbers matter, then building dashboards and reports you can read quickly.",
      "Help for finance, marketing, and real estate teams whose data is scattered across tools.",
    ],
    outcomes: [
      "Get tools and reports built faster than hiring and training someone.",
      "Cut manual work by connecting your systems.",
      "Your team keeps the documentation and know-how when we're done.",
    ],
  },
  {
    slug: "custom-solution-development",
    title: "Custom Solution Development",
    description:
      "Software built around how you work, for problems off-the-shelf products don't solve.",
    overview:
      "We learn how your business runs, then design and build software to fit it.",
    capabilities: [
      "Working out what you need, then building it in phases.",
      "Connecting your CRM, ads, finance tools, and older systems so your data isn't stuck in separate places.",
      "Automation and reporting delivered as software your team owns.",
    ],
    outcomes: [
      "Replace manual workarounds with software that follows your rules, not a vendor's defaults.",
      "Keep your data in one place so everyone works from the same numbers.",
      "You get documented code you can maintain, so you're not tied to us.",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web apps that are fast, accessible, and easy to maintain, without the agency runaround.",
    overview:
      "Your site should load fast, work on any device, and connect to the tools you already use. We build marketing sites, customer portals, and internal web apps that your team can update without calling us.",
    capabilities: [
      "Marketing sites and landing pages with SEO and analytics set up from the start.",
      "Customer web apps, dashboards, and portals connected to your CRM, logins, payments, and other tools.",
      "Speed, accessibility, and mobile layouts are included, not extras.",
    ],
    outcomes: [
      "A professional website without juggling freelancers and templates.",
      "Fast pages you can measure, so ad clicks turn into customers instead of bounces.",
      "You own the code and the hosting setup when we finish.",
    ],
  },
  {
    slug: "digital-advertising",
    title: "Google & Meta Ads Expertise",
    description:
      "Hands-on Google and Meta ads help: planning, setup, management, and tracking.",
    overview:
      "Ads only pay off when targeting and tracking are set up right. We help small businesses run Google and Meta campaigns and report on lead quality, cost, and what happens after a lead comes in.",
    capabilities: [
      "Campaign setup, audience targeting, and ad testing on Google and Meta.",
      "Conversion tracking and reports that tie your spend to results.",
      "Ongoing tuning, plus connecting leads to your CRM or follow-up process.",
    ],
    outcomes: [
      "Better targeting through a tighter link between spend and results.",
      "Know which campaigns deserve next month's budget.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
