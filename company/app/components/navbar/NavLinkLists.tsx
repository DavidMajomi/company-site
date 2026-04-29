import Link from "next/link";
import { clsx } from "clsx";

export type NavItem = {
  href: string;
  label: string;
};

type DesktopProps = {
  items: NavItem[];
  linkClassName: string;
};

/** Renders `<li><Link>…</Link></li>` for horizontal desktop nav rows. */
export function DesktopNavListItems({ items, linkClassName }: DesktopProps) {
  return items.map((item) => (
    <li key={item.href}>
      <Link href={item.href} className={linkClassName}>
        {item.label}
      </Link>
    </li>
  ));
}

type OverlayProps = {
  items: NavItem[];
  linkClassName: string;
  itemClassName: string;
  onNavigate?: () => void;
  /** Optional class on `<li>` (e.g. grid column breaks). */
  listItemClassName?: string;
};

/** Overlay navigation links; shared markup for stacked and grid layouts. */
export function OverlayNavLinkItems({
  items,
  linkClassName,
  itemClassName,
  onNavigate,
  listItemClassName,
}: OverlayProps) {
  return items.map((item) => (
    <li key={item.href} className={listItemClassName}>
      <Link
        href={item.href}
        className={clsx(itemClassName, linkClassName)}
        onClick={onNavigate}
      >
        {item.label}
      </Link>
    </li>
  ));
}
