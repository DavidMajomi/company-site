"use client";

import { useEffect, useId, useState } from "react";
import { primaryNavLinks } from "../../data/navigation";
import { industries } from "../../data/navigation";
import { DesktopNav } from "./DesktopNav";
import { MobileNavBar } from "./MobileNavBar";
import { MobileNavOverlay } from "./MobileNavOverlay";
import navbarStyles from "./navbar.module.css";
import sharedStyles from "./navbar-shared.module.css";

/** Single navbar chrome everywhere — no hero scroll observe / class swapping. */
export const navbarAppearance = {
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
  const panelId = useId();

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [mobileOpen]);

  const navLists = { industries, primaryNavLinks };

  return (
    <header className="sticky top-0 z-10 mx-auto w-full max-w-6xl">
      <MobileNavBar
        appearance={navbarAppearance}
        panelId={panelId}
        mobileOpen={mobileOpen}
        onToggleMenu={() => setMobileOpen((o) => !o)}
      />

      <DesktopNav appearance={navbarAppearance} {...navLists} />

      <MobileNavOverlay
        appearance={navbarAppearance}
        panelId={panelId}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        {...navLists}
      />
    </header>
  );
}
