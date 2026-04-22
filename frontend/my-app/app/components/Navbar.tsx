"use client";

import Link from "next/link";

export function Navbar() {
  const primaryNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/Products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="
        fixed top-4 left-4 right-4 z-50
        bg-(--color-primary) backdrop-blur-xl px-2 sm:px-4 py-3
        shadow-(--shadow-glass) rounded-md flex flex-wrap
        items-center justify-center sm:justify-between
        border border-(--color-border-light)
      "
    >
      <Link
        href="/#hero"
        className="inline-flex items-center text-sm font-bold tracking-[0.08em] text-(--color-white-text)"
      >
        Company Name
      </Link>

      <ul className="flex items-center gap-1 md:gap-2">
        {primaryNavLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-300 transition hover:text-(--color-accent) hover:bg-white/5"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
