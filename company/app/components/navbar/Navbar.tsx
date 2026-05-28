"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { industries, primaryNavLinks } from "../../data/navigation";
import { DesktopNav } from "./DesktopNav";
import { MobileNavBar } from "./MobileNavBar";
import { MobileNavOverlay } from "./MobileNavOverlay";
import navbarStyles from "./navbar.module.css";
import sharedStyles from "./navbar-shared.module.css";

/** Single navbar chrome everywhere — no hero scroll observe / class swapping. */
const navbarAppearance = {
  nav: navbarStyles.nav,
  link: navbarStyles.link,
  brand: sharedStyles.brandContent,
  circle: navbarStyles.circle,
  overlay: navbarStyles.overlay,
  overlayBorder: navbarStyles.overlayBorder,
  overlayMuted: sharedStyles.overlayMuted,
  overlayHeading: sharedStyles.overlayHeading,
  overlayLink: sharedStyles.overlayLink,
  cta: navbarStyles.cta,
} as const;

export type NavbarAppearance = typeof navbarAppearance;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLists = { industries, primaryNavLinks };

  return (
    <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
      <header className="sticky top-0 z-10 mx-auto w-full max-w-6xl">
        <MobileNavBar
          appearance={navbarAppearance}
          mobileOpen={mobileOpen}
        />

        <DesktopNav appearance={navbarAppearance} {...navLists} />

        <MobileNavOverlay
          appearance={navbarAppearance}
          onClose={() => setMobileOpen(false)}
          {...navLists}
        />
      </header>
    </Dialog.Root>
  );
}
