import type { Offering } from "./offerings";

export type Service = Offering;

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
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
