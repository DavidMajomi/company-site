"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./IndustryPseudoImage.module.css";

function hashString(value: string): number {
  let hash = 0;

  for (let index = 0; index < value.length; index += 1) {
    hash = value.charCodeAt(index) + ((hash << 5) - hash);
  }

  return Math.abs(hash);
}

export function getIndustryPseudoImageColor(name: string): string {
  const hash = hashString(name.trim().toLowerCase());
  const hue = 185 + (hash % 95);
  const saturation = 42 + (hash % 28);
  const lightness = 30 + (hash % 16);

  return `hsl(${hue} ${saturation}% ${lightness}%)`;
}

const MAX_FONT_SIZE_PX = 37.6;
const MIN_FONT_SIZE_PX = 14;
const WIDTH_FRACTION = 0.88;

function fitTextToContainer(container: HTMLElement, text: HTMLElement) {
  const maxWidth = container.clientWidth * WIDTH_FRACTION;
  let size = MAX_FONT_SIZE_PX;

  text.style.fontSize = `${size}px`;

  while (size > MIN_FONT_SIZE_PX && text.scrollWidth > maxWidth) {
    size -= 0.5;
    text.style.fontSize = `${size}px`;
  }
}

type IndustryPseudoImageProps = {
  label: string;
  className?: string;
};

export function IndustryPseudoImage({
  label,
  className = "",
}: IndustryPseudoImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const backgroundColor = getIndustryPseudoImageColor(label);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (!container || !text) {
      return;
    }

    const fit = () => {
      fitTextToContainer(container, text);
    };

    fit();

    const observer = new ResizeObserver(fit);
    observer.observe(container);

    return () => observer.disconnect();
  }, [label]);

  return (
    <div
      ref={containerRef}
      className={`${styles.pseudoImage} ${className}`.trim()}
      style={{ backgroundColor }}
      role="img"
      aria-label={label}
    >
      <div className={styles.pseudoImageSheen} aria-hidden="true" />
      <span ref={textRef} className={styles.pseudoImageText}>
        {label}
      </span>
    </div>
  );
}
