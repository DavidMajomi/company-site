import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { NAV_BRAND_NAME } from "./navbar-constants";
import { type NavbarAppearance } from "./Navbar";
import { NavbarBrandLink } from "./NavbarBrandLink";
import { CloseIcon } from "./NavbarIcons";
import {
  OverlayNavLinkItems,
  type NavItem,
} from "./NavLinkLists";

const baseBrandClass =
  "inline-flex items-center transition-opacity hover:opacity-95";

const closeButtonClass =
  "inline-flex h-11 min-w-11 items-center justify-center rounded-full border border-slate-900/10 bg-white/50 text-slate-900 shadow-[0_1px_0_rgba(255,255,255,0.85)_inset] backdrop-blur-md transition-colors duration-150 hover:bg-white/70";

type Props = {
  appearance: NavbarAppearance;
  industries: NavItem[];
  primaryNavLinks: NavItem[];
  onClose: () => void;
};

export function MobileNavOverlay({
  appearance,
  industries,
  primaryNavLinks,
  onClose,
}: Props) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay
        className={clsx(
          "fixed inset-0 z-60 xl:hidden transition-opacity duration-200 ease-out data-[state=closed]:opacity-0 data-[state=open]:opacity-100",
          appearance.overlay,
        )}
      />
      <Dialog.Content
        className="fixed inset-0 z-60 flex flex-col xl:hidden transition-[opacity,transform] duration-200 ease-out focus:outline-none data-[state=closed]:translate-y-2 data-[state=closed]:opacity-0 data-[state=open]:translate-y-0 data-[state=open]:opacity-100"
      >
        <Dialog.Title className="sr-only">Site navigation</Dialog.Title>
        <Dialog.Description className="sr-only">
          Browse industries and company pages.
        </Dialog.Description>
        <div className="relative flex min-h-0 flex-1 flex-col px-5 pb-8 pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-8">
          <div
            className={clsx(
              "flex shrink-0 items-center justify-between gap-4 border-b pb-5",
              appearance.overlayBorder,
            )}
          >
            <NavbarBrandLink
              ariaLabel={NAV_BRAND_NAME}
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
            </NavbarBrandLink>
            <Dialog.Close asChild>
              <button
                type="button"
                className={closeButtonClass}
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </Dialog.Close>
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
                "flex h-12 w-full items-center justify-center rounded-full text-base font-semibold tracking-tight transition-colors duration-150",
                appearance.cta,
              )}
              onClick={onClose}
            >
              Contact
            </Link>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
