import Link from "next/link";

const cardShell =
  "group block h-full rounded-(--radius-md) border border-(--color-border) bg-white shadow-(--shadow-soft) transition hover:border-(--color-accent)/30 hover:shadow-(--shadow-glass)";

type OfferingCardProps = {
  href: string;
  title: string;
  description?: string;
  variant?: "featured" | "compact";
  className?: string;
};

export function OfferingCard({
  href,
  title,
  description,
  variant = "featured",
  className = "",
}: OfferingCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={href}
        className={`${cardShell} px-4 py-3 text-sm font-semibold text-(--color-primary) ${className}`.trim()}
      >
        <span className="transition group-hover:text-(--color-accent)">
          {title} →
        </span>
      </Link>
    );
  }

  return (
    <Link href={href} className={`${cardShell} p-6 ${className}`.trim()}>
      <h3 className="text-lg font-semibold text-(--color-primary) transition group-hover:text-(--color-accent)">
        {title}
      </h3>
      {description ? (
        <p className="mt-2 text-sm text-(--color-text-muted)">{description}</p>
      ) : null}
      <span className="mt-4 inline-flex items-center text-sm font-semibold text-(--color-accent)">
        Learn more →
      </span>
    </Link>
  );
}
