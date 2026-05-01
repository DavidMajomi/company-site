import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { NAV_BRAND_NAME } from "./navbar-constants";
import { type NavbarAppearance } from "./navbar-styles";
import { MenuIcon } from "./NavbarIcons";

const mobileBarClass =
  "fixed top-4 left-4 right-4 z-50 flex lg:hidden items-center justify-between gap-3 px-1";

const circleBtnBase =
  "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
const brandLinkClass =
  "inline-flex h-12 items-center rounded-full border px-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

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
  const brandClass = clsx(brandLinkClass, appearance.circle);

  return (
    <div className={mobileBarClass}>
      <Link
        href="/"
        aria-label={`${NAV_BRAND_NAME} home`}
        className={brandClass}
      >
        <Image
          src="/vatheon-v-mark.svg"
          alt={NAV_BRAND_NAME}
          width={40}
          height={40}
          className="h-6 w-6"
          priority
        />
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
