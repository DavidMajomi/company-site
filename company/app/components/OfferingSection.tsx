import Link from "next/link";
import type { ReactNode } from "react";

type OfferingAction = {
  href: string;
  label: string;
  tone?: "accent" | "primary";
};

type OfferingSectionProps = {
  title: string;
  description: string;
  variant?: "home" | "page";
  id?: string;
  children: ReactNode;
  actions?: OfferingAction[];
};

function actionClassName(tone: OfferingAction["tone"] = "primary") {
  return tone === "accent"
    ? "inline-flex items-center text-sm font-semibold text-(--color-accent) transition hover:text-sky-600"
    : "inline-flex items-center text-sm font-semibold text-(--color-primary) transition hover:text-(--color-accent)";
}

export function OfferingSection({
  title,
  description,
  variant = "home",
  id,
  children,
  actions = [],
}: OfferingSectionProps) {
  const isPage = variant === "page";

  return (
    <section
      {...(id ? { id } : {})}
      className={isPage ? "" : "scroll-mt-6"}
    >
      {isPage ? (
        <h1 className="text-3xl font-bold tracking-tight text-(--color-primary) md:text-4xl">
          {title}
        </h1>
      ) : (
        <h2 className="text-2xl font-bold tracking-tight text-(--color-primary) md:text-3xl">
          {title}
        </h2>
      )}
      <p className="mt-3 text-(--color-text-muted)">{description}</p>
      {children}
      {!isPage && actions.length > 0 ? (
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          {actions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className={actionClassName(action.tone)}
            >
              {action.label} →
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}
