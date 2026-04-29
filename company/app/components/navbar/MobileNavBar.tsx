import Link from "next/link";
import { clsx } from "clsx";
import { NAV_BRAND_NAME } from "./navbar-constants";
import { circleBtnBase, mobileBarClass, type NavbarAppearance } from "./navbar-styles";
import { BrandMarkIcon, MenuIcon } from "./NavbarIcons";

type Props = {
  appearance: NavbarAppearance;
  panelId: string;
  mobileOpen: boolean;
  onToggleMenu: () => void;
};

export function MobileNavBar({
  appearance,
  panelId,
  mobileOpen,
  onToggleMenu,
}: Props) {
  const circleClass = clsx(circleBtnBase, appearance.circle);

  return (
    <div className={mobileBarClass}>
      <Link
        href="/"
        aria-label={`${NAV_BRAND_NAME} home`}
        className={circleClass}
      >
        <BrandMarkIcon />
      </Link>
      <button
        type="button"
        className={circleClass}
        aria-expanded={mobileOpen}
        aria-controls={panelId}
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={onToggleMenu}
      >
        <MenuIcon open={mobileOpen} />
      </button>
    </div>
  );
}
