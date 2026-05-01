export const stateClasses = {
  hero: {
    nav: "from-slate-950/72 to-slate-900/58 border-white/14 shadow-[0_12px_34px_rgba(2,10,24,0.44)] before:border-white/10",
    link: "hover:bg-white/15 hover:text-white",
    brand: "",
    circle:
      "border-white/24 bg-slate-900/62 text-white shadow-[0_8px_24px_rgba(2,10,24,0.34)] backdrop-blur-md backdrop-saturate-150 hover:bg-slate-900/78",
    overlay: "bg-slate-950/82 backdrop-blur-2xl",
    overlayBorder: "border-white/12",
    overlayMuted: "text-slate-400",
    overlayHeading: "text-white",
    overlayLink: "text-slate-100/95 hover:text-white",
    cta: "bg-white text-slate-900 hover:bg-white/95",
  },
  content: {
    nav: "from-slate-950/84 to-slate-900/70 border-white/12 shadow-[0_10px_28px_rgba(2,10,24,0.36)] before:border-white/10",
    link: "text-slate-100 hover:bg-white/10 hover:text-white",
    brand: "text-white",
    circle:
      "border-white/14 bg-slate-900/74 text-slate-100 shadow-[0_8px_24px_rgba(2,10,24,0.3)] backdrop-blur-md hover:bg-slate-900/90",
    overlay: "bg-slate-950/88 backdrop-blur-2xl",
    overlayBorder: "border-white/12",
    overlayMuted: "text-slate-400",
    overlayHeading: "text-white",
    overlayLink: "text-slate-100/95 hover:text-white",
    cta: "bg-white text-slate-900 hover:bg-white/95",
  },
} as const;

export type NavbarAppearance = (typeof stateClasses)[keyof typeof stateClasses];
