import Image from "next/image";
import Link from "next/link";
import type { IndustrySummary } from "../data/industries";
import { IndustryPseudoImage } from "./IndustryPseudoImage";

const CARD_ANIMATION_BASE_DELAY_S = 0.1;
const CARD_ANIMATION_STAGGER_S = 0.12;

type IndustryHomeCardProps = {
  industry: IndustrySummary;
  index: number;
};

export function IndustryHomeCard({ industry, index }: IndustryHomeCardProps) {
  const hasPhoto = Boolean(industry.imageSrc);
  const animationDelay = `${CARD_ANIMATION_BASE_DELAY_S + index * CARD_ANIMATION_STAGGER_S}s`;

  return (
    <li
      className="group relative w-[min(100%,15rem)] shrink-0 list-none opacity-0 translate-y-5 animate-industry-card-in motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:translate-y-0 sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3rem)/3)]"
      style={{ animationDelay }}
    >
      <Link
        href={industry.href}
        className="relative flex h-full flex-col overflow-hidden rounded-(--radius-md) border border-(--color-border) bg-(--color-surface) shadow-(--shadow-soft) underline transition-[border-color,background,transform,box-shadow] duration-300 ease-out hover:-translate-y-[3px] hover:border-sky-400/25 hover:bg-(--color-surface) hover:shadow-(--shadow-glass) motion-reduce:transition-[border-color,background] motion-reduce:duration-200 motion-reduce:hover:translate-y-0"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgb(2_124_238/0.22),transparent_55%)] opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
          aria-hidden="true"
        />
        <div className="relative aspect-[5/6] overflow-hidden">
          {hasPhoto && industry.imageSrc ? (
            <Image
              src={industry.imageSrc}
              alt={industry.imageAlt ?? industry.label}
              width={500}
              height={750}
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 50vw, 33vw"
              className="block size-full object-cover object-[center_35%] transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
            />
          ) : (
            <IndustryPseudoImage
              label={industry.label}
              className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:group-hover:scale-100"
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgb(15_45_74/0.55)_72%,rgb(15_45_74/0.92)_100%)]"
            aria-hidden="true"
          />
        </div>
        <div className="relative flex flex-1 flex-col p-4 sm:p-5">
          <div className="flex items-start justify-between gap-4">
            <span className="text-eyebrow font-black uppercase tracking-[0.22em] text-(--color-accent)">
              {industry.label}
            </span>
          </div>
          <p className="sr-only">
            {industry.headline}. {industry.overview}
          </p>
        </div>
      </Link>
    </li>
  );
}
