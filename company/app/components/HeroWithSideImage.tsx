"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HeroTextBlock } from "./HeroTextBlock";

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

export function HeroWithSideImage() {
  return (
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
      <HeroTextBlock align="left" className="w-full min-w-0" />
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
