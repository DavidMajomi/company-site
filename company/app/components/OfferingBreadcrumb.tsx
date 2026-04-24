import Link from "next/link";

type OfferingBreadcrumbProps = {
  parentHref: string;
  parentLabel: string;
  currentLabel: string;
};

export function OfferingBreadcrumb({
  parentHref,
  parentLabel,
  currentLabel,
}: OfferingBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-(--color-text-muted)">
        <li>
          <Link
            href={parentHref}
            className="font-medium text-(--color-accent) transition hover:text-sky-600"
          >
            {parentLabel}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li className="text-(--color-text)">{currentLabel}</li>
      </ol>
    </nav>
  );
}
