import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";
import { NAV_BRAND_NAME } from "./navbar-constants";
import { type NavbarAppearance } from "./Navbar";
import {
  OverlayNavLinkItems,
  type NavItem,
} from "./NavLinkLists";

const baseBrandClass =
  "inline-flex items-center transition-opacity hover:opacity-95";

const closeButtonClass =
  "inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20";

type Props = {
  appearance: NavbarAppearance;
  panelId: string;
  open: boolean;
  industries: NavItem[];
  primaryNavLinks: NavItem[];
  onClose: () => void;
};

export function MobileNavOverlay({
  appearance,
  panelId,
  open,
  industries,
  primaryNavLinks,
  onClose,
}: Props) {
  return (
    <div
      id={panelId}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      className={clsx(
        "fixed inset-0 z-60 flex flex-col lg:hidden transition-[visibility,opacity] duration-200 ease-out",
        open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
      )}
    >
      <div
        className={clsx("absolute inset-0", appearance.overlay)}
        aria-hidden
        onClick={onClose}
      />
      <div className="relative flex min-h-0 flex-1 flex-col px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-8">
        <div
          className={clsx(
            "flex shrink-0 items-center justify-between gap-4 border-b pb-5",
            appearance.overlayBorder,
          )}
        >
          <Link
            href="/"
            className={clsx(
              baseBrandClass,
              appearance.overlayHeading,
              "text-lg",
            )}
            onClick={onClose}
          >
            <Image
              src="/vatheon-v-mark.svg"
              alt={NAV_BRAND_NAME}
              width={44}
              height={44}
              className="h-7 w-7"
            />
          </Link>
          <button
            type="button"
            className={closeButtonClass}
            aria-label="Close menu"
            onClick={onClose}
          >
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </button>
        </div>

        <nav className="mt-8 min-h-0 flex-1 overflow-y-auto overscroll-contain">
          <p
            className={clsx(
              "text-sm font-semibold uppercase tracking-[0.14em]",
              appearance.overlayMuted,
            )}
          >
            Industries
          </p>
          <ul className="mt-4 space-y-1 border-b pb-8">
            <OverlayNavLinkItems
              items={industries}
              itemClassName="block py-3 text-lg font-medium tracking-tight"
              linkClassName={appearance.overlayLink}
              onNavigate={onClose}
            />
          </ul>

          <p
            className={clsx(
              "mt-10 text-sm font-semibold uppercase tracking-[0.14em]",
              appearance.overlayMuted,
            )}
          >
            Company
          </p>
          <ul className="mt-4 columns-1 gap-x-10 gap-y-1 sm:columns-2">
            <OverlayNavLinkItems
              items={primaryNavLinks}
              itemClassName="block py-2 text-lg font-medium"
              linkClassName={appearance.overlayLink}
              onNavigate={onClose}
              listItemClassName="break-inside-avoid py-1"
            />
          </ul>
        </nav>

        <div className="shrink-0 pt-6">
          <Link
            href="/contact"
            className={clsx(
              "flex h-12 w-full items-center justify-center rounded-full text-base font-semibold tracking-tight transition",
              appearance.cta,
            )}
            onClick={onClose}
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
