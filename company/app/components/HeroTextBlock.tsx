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
      <h1
        className={isCentered ? "mx-auto" : ""}
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
          className={`h-8 w-auto max-w-full sm:h-10 md:h-12 lg:h-auto lg:w-full lg:max-w-4xl ${isCentered ? "mx-auto" : ""}`}
        />
      </h1>
      <p className="pt-4 text-lg leading-relaxed text-slate-600 sm:text-xl md:text-2xl">
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
