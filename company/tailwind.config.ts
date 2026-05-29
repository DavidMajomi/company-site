import type { Config } from "tailwindcss";

/**
 * Type scale — font sizes only (preserves original design values).
 * Utilities: text-sm, text-fluid-display, text-card, etc.
 */
const config: Config = {
  theme: {
    extend: {
      keyframes: {
        "industry-card-in": {
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "industry-card-in":
          "industry-card-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
    fontSize: {
      micro: "0.6875rem", /* 11px — footer legal */
      eyebrow: "0.72rem",
      xs: "0.75rem",
      sm: "0.9375rem",
      card: "0.95rem", /* industry workflow card copy */
      base: "1.125rem",
      lead: "1.06rem", /* hero / deck intro */
      "lead-sm": "0.98rem", /* hero intro on small screens */
      lg: "1.3125rem",
      xl: "1.5rem",
      "2xl": "1.875rem",
      "3xl": "2.25rem",
      "4xl": "2.75rem",
      "5xl": "3.5rem",
      "fluid-section": "clamp(2rem, 4vw, 2.5rem)",
      "fluid-display": "clamp(2.55rem, 6.2vw, 4rem)",
    },
  },
};

export default config;
