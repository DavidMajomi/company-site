"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { heroHref } from "../../data/navigation";

function scrollToHero() {
  document.getElementById("hero")?.scrollIntoView({ block: "start" });
}

type Props = {
  className?: string;
  ariaLabel: string;
  onClick?: () => void;
  children: ReactNode;
};

export function NavbarBrandLink({ className, ariaLabel, onClick, children }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={heroHref}
      aria-label={ariaLabel}
      className={className}
      onClick={(event) => {
        onClick?.();

        if (pathname !== "/") {
          return;
        }

        event.preventDefault();
        scrollToHero();
        window.history.replaceState(null, "", heroHref);
      }}
    >
      {children}
    </Link>
  );
}
