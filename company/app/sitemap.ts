import type { MetadataRoute } from "next";
import { industries } from "./data/industries";
import { products } from "./data/products";
import { services } from "./data/services";
import { site } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.6 },
  ];

  const servicePages = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const productPages = products.map((product) => ({
    url: `${base}/products/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const industryPages = industries.map((industry) => ({
    url: `${base}${industry.href}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...productPages, ...industryPages];
}
