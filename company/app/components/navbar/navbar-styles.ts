export const desktopNavClass =
  "fixed top-4 left-4 right-4 z-50 hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-4 bg-linear-to-b backdrop-blur-2xl backdrop-saturate-150 px-4 py-3 rounded-2xl overflow-hidden border transition-colors before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border";

export const mobileBarClass =
  "fixed top-4 left-4 right-4 z-50 flex lg:hidden items-center justify-between gap-3 px-1";

export const baseLinkClass =
  "inline-flex h-8 items-center justify-center rounded-md px-3 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent)";

export const baseBrandClass =
  "inline-flex items-center gap-0 text-sm font-bold tracking-[0.08em] transition-colors";

export const circleBtnBase =
  "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-accent) focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

export const stateClasses = {
  hero: {
    nav: "from-white/22 to-white/8 border-white/20 shadow-[0_12px_34px_rgba(2,10,24,0.28)] before:border-white/15",
    link: "hover:bg-white/15 hover:text-white",
    brand: "",
    circle:
      "border-white/35 bg-white/28 text-slate-800 shadow-[0_8px_24px_rgba(2,10,24,0.2)] backdrop-blur-md backdrop-saturate-150 hover:bg-white/38",
    overlay: "bg-slate-950/82 backdrop-blur-2xl",
    overlayBorder: "border-white/12",
    overlayMuted: "text-slate-400",
    overlayHeading: "text-white",
    overlayLink: "text-slate-100/95 hover:text-white",
    cta: "bg-white text-slate-900 hover:bg-white/95",
  },
  content: {
    nav: "from-white/80 to-white/62 border-slate-900/10 shadow-[0_10px_28px_rgba(15,23,42,0.16)] before:border-white/45",
    link: "text-slate-800 hover:bg-slate-900/8 hover:text-slate-950",
    brand: "text-slate-900",
    circle:
      "border-slate-900/10 bg-white/85 text-slate-900 shadow-[0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-md hover:bg-white",
    overlay: "bg-slate-950/88 backdrop-blur-2xl",
    overlayBorder: "border-white/12",
    overlayMuted: "text-slate-400",
    overlayHeading: "text-white",
    overlayLink: "text-slate-100/95 hover:text-white",
    cta: "bg-white text-slate-900 hover:bg-white/95",
  },
} as const;

export type NavbarAppearance = (typeof stateClasses)[keyof typeof stateClasses];
