"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { IndustryHomeCard } from "../components/IndustryHomeCard";
import { industrySummaries } from "../data/industries";

const CARD_EASE = [0.22, 1, 0.36, 1] as const;
const CARD_ANIMATION_BASE_DELAY_S = 0.1;
const CARD_ANIMATION_STAGGER_S = 0.12;

export function IndustryHomeCards() {
  const reduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : CARD_ANIMATION_STAGGER_S,
        delayChildren: reduceMotion ? 0 : CARD_ANIMATION_BASE_DELAY_S,
      },
    },
  };

  const cardVariants: Variants = reduceMotion
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.7,
            ease: CARD_EASE,
          },
        },
      };

  return (
    <motion.ul
      className="mt-12 flex list-none flex-wrap justify-center gap-4 p-0 sm:gap-5 lg:gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {industrySummaries.map((industry) => (
        <IndustryHomeCard
          key={industry.slug}
          industry={industry}
          variants={cardVariants}
        />
      ))}
    </motion.ul>
  );
}
