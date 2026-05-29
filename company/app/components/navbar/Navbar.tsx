import { industries, primaryNavLinks } from "../../data/navigation";
import { DesktopNav } from "./DesktopNav";
import { MobileNavDialog } from "./MobileNavDialog";
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
  const navLists = { industries, primaryNavLinks };

  return (
    <header className="sticky top-0 z-10 mx-auto w-full max-w-6xl">
      <MobileNavDialog appearance={navbarAppearance} {...navLists} />
      <DesktopNav appearance={navbarAppearance} {...navLists} />
    </header>
  );
}
