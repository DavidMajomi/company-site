"use client";

import { useEffect } from "react";

function scrollHeroIntoViewFromHash() {
  if (window.location.hash !== "#hero") {
    return;
  }

  document.getElementById("hero")?.scrollIntoView({ block: "start" });
}

export function HomeHashScroller() {
  useEffect(() => {
    scrollHeroIntoViewFromHash();

    window.addEventListener("hashchange", scrollHeroIntoViewFromHash);
    return () =>
      window.removeEventListener("hashchange", scrollHeroIntoViewFromHash);
  }, []);

  return null;
}
