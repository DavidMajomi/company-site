import Image from "next/image";
import Link from "next/link";
import type { IndustrySummary } from "../data/industries";
import { IndustryPseudoImage } from "./IndustryPseudoImage";
import styles from "./IndustryHomeCard.module.css";

type IndustryHomeCardProps = {
  industry: IndustrySummary;
  index: number;
};

export function IndustryHomeCard({ industry, index }: IndustryHomeCardProps) {
  const hasPhoto = Boolean(industry.imageSrc);

  return (
    <li
      className={`${styles.card} ${styles[`card${index}`]} group relative list-none`}
    >
      <Link
        href={industry.href}
        className={`${styles.cardLink} underline flex h-full flex-col`}
      >
        <div className={styles.cardGlow} aria-hidden="true" />
        <div className={styles.cardImageWrap}>
          {hasPhoto && industry.imageSrc ? (
            <Image
              src={industry.imageSrc}
              alt={industry.imageAlt ?? industry.label}
              width={500}
              height={750}
              sizes="(max-width: 768px) 100vw, 33vw"
              className={styles.cardImage}
            />
          ) : (
            <IndustryPseudoImage
              label={industry.label}
              className={styles.cardPseudoImage}
            />
          )}
          <div className={styles.cardImageOverlay} aria-hidden="true" />
        </div>
        <div className="relative flex flex-1 flex-col p-5">
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
