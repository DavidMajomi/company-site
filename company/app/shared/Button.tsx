import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base = "inline-flex items-center rounded-(--radius-lg) px-6 py-2.5 text-sm font-semibold transition";
  const className =
    variant === "ghost"
      ? `${base} border border-white/40 bg-white/10 text-white hover:bg-white/20`
      : `${base} bg-(--color-accent) text-white shadow-lg shadow-(--color-accent)/20 hover:bg-sky-400`;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
