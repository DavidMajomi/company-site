"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contactNav } from "../data/navigation";
import { site } from "../site";
import { Button } from "../shared/Button";

/** Percent-based y scales with logo size; animates only once the logo is fully on screen. */
const logoVariants = {
  offscreen: {
    y: "34%",
    opacity: 0,
    filter: "drop-shadow(0 0 0 rgb(0 0 0 / 0))",
  },
  onscreen: {
    y: 0,
    opacity: 1,
    filter: "drop-shadow(0 14px 28px rgb(0 0 0 / 0.38))",
  },
} as const;

const logoTransition = {
  delay: 0.5,
  duration: 1.2,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Hero() {
  return (
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          {site.tagline}
        </p>
        <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
          {site.heroHeadline}
        </h1>
        <p className="text-2xl leading-relaxed text-slate-300 pt-4">
          {site.heroLead}
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <Button href={contactNav.href}>Contact us today</Button>
        </div>
      </div>
      <motion.div
        className="shrink-0 lg:pl-4"
        variants={logoVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: "all" }}
        transition={logoTransition}
      >
        <Image
          src="/company-hero-logo.png"
          alt="company logo"
          width={600}
          height={607}
          className="h-auto object-contain"
          priority
        />
      </motion.div>
    </div>
  );
}
