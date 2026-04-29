"use client";

import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNavLinks } from "../../data/navigation";
import { industries } from "../../data/navigation";
import { DesktopNav } from "./DesktopNav";
import { MobileNavBar } from "./MobileNavBar";
import { MobileNavOverlay } from "./MobileNavOverlay";
import { stateClasses } from "./navbar-styles";

export function Navbar() {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";
  const [isHeroInView, setIsHeroInView] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!isHomeRoute) {
      return;
    }

    const hero = document.getElementById("hero");

    if (!hero) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [isHomeRoute]);

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

  const isOnHero = isHomeRoute && isHeroInView;
  const appearance = isOnHero ? stateClasses.hero : stateClasses.content;

  const navLists = { industries, primaryNavLinks };

  return (
    <header className="sticky z-10 mx-auto w-full max-w-6xl">
      <MobileNavBar
        appearance={appearance}
        panelId={panelId}
        mobileOpen={mobileOpen}
        onToggleMenu={() => setMobileOpen((o) => !o)}
      />

      <DesktopNav appearance={appearance} {...navLists} />

      <MobileNavOverlay
        appearance={appearance}
        panelId={panelId}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        {...navLists}
      />
    </header>
  );
}
