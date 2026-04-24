export type Service = {
  slug: string;
  title: string;
  description: string;
  overview: string;
  capabilities: string[];
  outcomes: string[];
};

export const services: Service[] = [
  {
    slug: "it-consulting",
    title: "IT Consulting",
    description:
      "Technology planning and solutions aligned with your business objectives.",
    overview:
      "We help organizations make practical technology decisions that support business goals, reduce delivery risk and create a clearer path from strategy to execution.",
    capabilities: [
      "Technology assessments, roadmap definition and solution planning.",
      "Architecture guidance for business-critical systems and integrations.",
      "Advisory support for modernization, vendor selection and delivery governance.",
    ],
    outcomes: [
      "Prioritize technology investments against real business needs.",
      "Reduce uncertainty before major delivery or transformation programs begin.",
    ],
  },
  {
    slug: "project-management",
    title: "Project Management",
    description:
      "Planning and execution for large-scale and multi-vendor IT initiatives.",
    overview:
      "Our project management services bring structure to complex initiatives, aligning stakeholders, vendors and delivery teams around clear milestones, dependencies and outcomes.",
    capabilities: [
      "Delivery planning, governance and progress reporting.",
      "Risk, issue and dependency management across internal and external teams.",
      "Coordination for multi-phase implementations and operational handover.",
    ],
    outcomes: [
      "Keep initiatives on track with clearer accountability and execution control.",
      "Improve predictability across large or multi-vendor technology programs.",
    ],
  },
  {
    slug: "outsourcing",
    title: "Outsourcing",
    description:
      "We can help you manage your IT projects from requirements analysis to deployment and technical support.",
    overview:
      "We provide delivery capacity across the lifecycle, from early analysis through implementation, rollout and support, so teams can move forward without overextending internal resources.",
    capabilities: [
      "Requirements analysis, solution delivery and deployment support.",
      "Flexible resourcing for project execution and operational continuity.",
      "Post-launch technical support and issue resolution.",
    ],
    outcomes: [
      "Extend delivery capacity without building every capability in-house.",
      "Maintain momentum from planning through production support.",
    ],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    description:
      "We help organizations leverage AI to improve their operations and decision-making.",
    overview:
      "Our AI consulting services focus on practical adoption: identifying where AI adds value, designing the right operating model and integrating solutions into day-to-day decision-making and workflows.",
    capabilities: [
      "Use-case discovery and prioritization for operational and decision-support AI.",
      "Advisory support for workflow integration, governance and rollout planning.",
      "Implementation guidance for AI-enabled solutions aligned to business constraints.",
    ],
    outcomes: [
      "Focus AI investment on use cases with clear operational value.",
      "Adopt AI with stronger controls, clearer ownership and better fit to process.",
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Mobile apps from concept through launch, with ongoing support.",
    overview:
      "We design and deliver mobile applications that balance usability, reliability and integration needs, helping organizations launch customer-facing and workforce tools with confidence.",
    capabilities: [
      "Product discovery, implementation and release planning for mobile apps.",
      "Integration with enterprise systems, APIs and operational workflows.",
      "Post-launch support, maintenance and iterative enhancement.",
    ],
    outcomes: [
      "Launch mobile experiences that support real user and business workflows.",
      "Reduce friction between mobile channels and core backend systems.",
    ],
  },
  {
    slug: "enterprise-application-development",
    title: "Enterprise Application Development",
    description:
      "Custom software from team tools to company-wide, mission-critical systems.",
    overview:
      "We build enterprise applications for organizations that need tailored workflows, stronger system integration and software that reflects how the business actually operates.",
    capabilities: [
      "Custom application design for operational, workflow and reporting needs.",
      "Integration with existing business systems and shared data sources.",
      "Delivery for departmental tools through mission-critical enterprise platforms.",
    ],
    outcomes: [
      "Replace fragmented processes with systems shaped around the business.",
      "Improve consistency, visibility and operational control across teams.",
    ],
  },
  {
    slug: "training",
    title: "Training",
    description:
      "Open and custom IT courses for individuals and organizations.",
    overview:
      "Our training services help individuals and teams build practical technical capability through focused programs tailored to business context, roles and existing maturity.",
    capabilities: [
      "Open enrollment and custom enterprise training programs.",
      "Curriculum tailored to team roles, delivery goals and technology focus areas.",
      "Hands-on learning designed for real operational and project contexts.",
    ],
    outcomes: [
      "Improve team readiness for implementation, support and adoption.",
      "Build internal capability that lasts beyond a single project.",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
