import Link from "next/link";
import { clsx } from "clsx";
import {
  baseBrandClass,
  baseLinkClass,
  desktopNavClass,
  type NavbarAppearance,
} from "./navbar-styles";
import { NAV_BRAND_NAME } from "./navbar-constants";
import { DesktopNavListItems, type NavItem } from "./NavLinkLists";

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
