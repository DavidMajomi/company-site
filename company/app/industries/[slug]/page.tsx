import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryPlaceholderPage } from "../../components/IndustryPlaceholderPage";
import {
  getIndustryBySlug,
  getIndustryStaticParams,
} from "../../data/industries";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getIndustryStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Industry" };
  }

  return {
    title: industry.label,
    description: industry.overview,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return <IndustryPlaceholderPage industry={industry} />;
}
