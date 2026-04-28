"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { primaryNavLinks } from "../data/navigation";
import { industries } from "../data/navigation";

const baseNavClass =
  "fixed top-4 left-4 right-4 z-50 bg-linear-to-b backdrop-blur-2xl backdrop-saturate-150 px-2 sm:px-4 py-3 rounded-2xl overflow-hidden flex flex-wrap items-center justify-center gap-2 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4 border transition-colors before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border";

const baseLinkClass =
  "inline-flex h-8 items-center justify-center rounded-md px-3 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)";

const baseBrandClass =
  "inline-flex items-center gap-0 text-sm font-bold tracking-[0.08em] transition-colors";

const stateClasses = {
  hero: {
    nav: "from-white/22 to-white/8 border-white/20 shadow-[0_12px_34px_rgba(2,10,24,0.28)] before:border-white/15",
    link: "text-slate-100/90 hover:bg-white/15 hover:text-white",
    brand: "text-(--color-white-text)",
  },
  content: {
    nav: "from-white/80 to-white/62 border-slate-900/10 shadow-[0_10px_28px_rgba(15,23,42,0.16)] before:border-white/45",
    link: "text-slate-800 hover:bg-slate-900/8 hover:text-slate-950",
    brand: "text-slate-900",
  },
} as const;

export function Navbar() {
  const pathname = usePathname();
  const isHomeRoute = pathname === "/";
  const [isHeroInView, setIsHeroInView] = useState(true);

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

  const isOnHero = isHomeRoute && isHeroInView;
  const state = isOnHero ? stateClasses.hero : stateClasses.content;

  const navLinkClass = clsx(baseLinkClass, state.link);

  return (
    <header className="sticky z-10 mx-auto w-full max-w-6xl">
      <nav className={clsx(baseNavClass, state.nav)}>
        <Link
          href="/"
          aria-label="Vatheon Systems"
          className={clsx(baseBrandClass, state.brand, "sm:justify-self-start")}
        >
          Vatheon Systems
        </Link>

        <ul className="flex items-center gap-1 md:gap-2 sm:justify-self-center">
          {industries.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-1 md:gap-2 sm:justify-self-end">
          {primaryNavLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={navLinkClass}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
