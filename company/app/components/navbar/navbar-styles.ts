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
