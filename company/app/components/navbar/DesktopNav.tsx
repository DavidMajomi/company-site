import Link from "next/link";
import { clsx } from "clsx";
import {
  type NavbarAppearance,
} from "./navbar-styles";
import { NAV_BRAND_NAME } from "./navbar-constants";
import { DesktopNavListItems, type NavItem } from "./NavLinkLists";

const desktopNavClass =
  "fixed top-4 left-4 right-4 z-50 hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4 bg-linear-to-b backdrop-blur-2xl backdrop-saturate-150 px-4 py-4 rounded-2xl overflow-hidden border transition-colors before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border";

const baseLinkClass =
  "inline-flex h-9 items-center justify-center rounded-md px-3 text-base transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)";

const baseBrandClass =
  "inline-flex items-center gap-0 text-base font-bold tracking-[0.08em] transition-colors";

type Props = {
  appearance: NavbarAppearance;
  industries: NavItem[];
  primaryNavLinks: NavItem[];
};

export function DesktopNav({ appearance, industries, primaryNavLinks }: Props) {
  const navLinkClass = clsx(baseLinkClass, appearance.link);

  return (
    <nav
      className={clsx(desktopNavClass, appearance.nav)}
      aria-label="Main"
    >
      <DesktopNavbarBrand brandClassName={appearance.brand} />

      <ul className="flex items-center gap-1 justify-self-center md:gap-2">
        <DesktopNavListItems items={industries} linkClassName={navLinkClass} />
      </ul>

      <ul className="flex items-center gap-1 justify-self-end md:gap-2">
        <DesktopNavListItems
          items={primaryNavLinks}
          linkClassName={navLinkClass}
        />
      </ul>
    </nav>
  );
}

function DesktopNavbarBrand({ brandClassName }: { brandClassName: string }) {
  return (
    <Link
      href="/"
      aria-label={NAV_BRAND_NAME}
      className={clsx(baseBrandClass, brandClassName, "justify-self-start")}
    >
      {NAV_BRAND_NAME}
    </Link>
  );
}
