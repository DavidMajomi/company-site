import { clsx } from "clsx";

export function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden>
      <span
        className={clsx(
          "absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all",
          open ? "top-[7px] rotate-45" : "top-0",
        )}
      />
      <span
        className={clsx(
          "absolute left-0 top-[7px] block h-0.5 w-full rounded-full bg-current transition-opacity",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={clsx(
          "absolute left-0 block h-0.5 w-full rounded-full bg-current transition-all",
          open ? "top-[7px] -rotate-45" : "bottom-0 top-auto",
        )}
      />
    </span>
  );
}

export function BrandMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={18}
      height={18}
      aria-hidden
    >
      <path fill="currentColor" d="M12 5 21 19H3L12 5z" />
    </svg>
  );
}
