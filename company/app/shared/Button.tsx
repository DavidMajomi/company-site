import { clsx } from "clsx";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost" | "outline";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
};

const base =
  "inline-flex items-center rounded-(--radius-lg) px-6 py-2.5 text-sm font-semibold transition";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-(--color-accent) text-white shadow-lg shadow-(--color-accent)/20 hover:bg-sky-400",
  ghost:
    "border border-white/40 bg-white/10 text-white hover:bg-white/20",
  outline:
    "border border-(--color-border) bg-white/50 text-(--color-text) shadow-sm hover:bg-white/75",
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const className = clsx(base, variantClass[variant]);

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
