import Image from "next/image";
import { contactNav } from "../data/navigation";
import { site } from "../site";
import { Button } from "../shared/Button";

type HeroTextBlockProps = {
  align?: "left" | "center";
  className?: string;
};

export function HeroTextBlock({
  align = "left",
  className = "",
}: HeroTextBlockProps) {
  const isCentered = align === "center";
  return (
    <div
      className={`${isCentered ? "text-center" : "text-left"} ${className}`.trim()}
    >
      {site.tagline ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          {site.tagline}
        </p>
      ) : null}
      <h1
        className={`pt-2 ${isCentered ? "mx-auto" : ""}`}
        aria-label={site.heroHeadline}
      >
        <span className="sr-only">{site.heroHeadline}</span>
        <Image
          src="/vatheon_systems_black.svg"
          alt="Vatheon Systems logo"
          aria-hidden="true"
          width={4229}
          height={300}
          priority
          className={`h-auto w-full max-w-4xl ${isCentered ? "mx-auto" : ""}`}
        />
      </h1>
      <p className="pt-4 text-2xl leading-relaxed text-slate-300">
        {site.heroLead}
      </p>
      <div
        className={`flex flex-wrap gap-4 pt-4 ${isCentered ? "justify-center" : "justify-start"}`}
      >
        <Button href={contactNav.href}>Contact us today</Button>
      </div>
    </div>
  );
}
