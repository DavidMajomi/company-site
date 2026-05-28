import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { NAV_BRAND_NAME } from "./navbar-constants";
import { type NavbarAppearance } from "./Navbar";
import { NavbarBrandLink } from "./NavbarBrandLink";
import { MenuIcon } from "./NavbarIcons";

const mobileBarClass =
  "fixed top-4 left-4 right-4 z-50 flex xl:hidden items-center justify-between gap-3 px-1";

const circleShadowClass =
  "shadow-[0_8px_24px_rgba(22,61,98,0.32)]";

const circleBtnBase =
  "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";
const brandLinkClass =
  "inline-flex h-12 items-center rounded-full border px-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

type Props = {
  appearance: NavbarAppearance;
  mobileOpen: boolean;
};

export function MobileNavBar({
  appearance,
  mobileOpen,
}: Props) {
  const circleClass = clsx(circleBtnBase, circleShadowClass, appearance.circle);
  const brandClass = clsx(brandLinkClass, circleShadowClass, appearance.circle);

  return (
    <div className={mobileBarClass}>
      <NavbarBrandLink
        ariaLabel={`${NAV_BRAND_NAME} home`}
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
      </NavbarBrandLink>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={circleClass}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <MenuIcon open={mobileOpen} />
        </button>
      </Dialog.Trigger>
    </div>
  );
}
