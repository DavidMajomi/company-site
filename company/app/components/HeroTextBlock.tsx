import { contactNav } from "../data/navigation";
import { site } from "../site";
import { Button } from "../shared/Button";

type HeroTextBlockProps = {
  align?: "left" | "center";
  className?: string;
};

export function HeroTextBlock({ align = "left", className = "" }: HeroTextBlockProps) {
  const isCentered = align === "center";
  return (
    <div
      className={`${isCentered ? "text-center" : "text-left"} ${className}`.trim()}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
        {site.tagline}
      </p>
      <h1 className="text-4xl font-bold leading-tight text-[#03a1fc] md:text-6xl">
        {site.heroHeadline}
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
