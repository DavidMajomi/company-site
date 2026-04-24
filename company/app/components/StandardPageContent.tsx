import type { ReactNode } from "react";

type StandardPageContentProps = {
  children: ReactNode;
  className?: string;
  /**
   * Use a wider max-width so hero + media layouts are not squeezed inside a
   * column that is already narrower than the viewport. Default matches most pages.
   */
  contentWidth?: "standard" | "wide" | "extra-wide";
  /**
   * `flush-x`: no horizontal padding on the shell (vertical inset for navbar/footer unchanged).
   */
  contentInset?: "default" | "flush-x";
};

const contentWidthClass: Record<
  NonNullable<StandardPageContentProps["contentWidth"]>,
  string
> = {
  standard: "max-w-6xl",
  wide: "max-w-[min(90rem,calc(100vw-2rem))]",
  /** Wider shell for dense hero + diagram layouts (e.g. loan origination). */
  "extra-wide": "max-w-[min(112rem,calc(100vw-2rem))]",
};

const contentInsetClass: Record<
  NonNullable<StandardPageContentProps["contentInset"]>,
  string
> = {
  default: "px-4 pb-24 pt-28 sm:px-6 md:pb-28 md:pt-32",
  "flush-x": "pb-24 pt-28 md:pb-28 md:pt-32",
};

export function StandardPageContent({
  children,
  className = "",
  contentWidth = "standard",
  contentInset = "default",
}: StandardPageContentProps) {
  return (
    <div
      className={`mx-auto w-full ${contentWidthClass[contentWidth]} ${contentInsetClass[contentInset]} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
