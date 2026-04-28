import type { CSSProperties, ComponentPropsWithoutRef } from "react";
import { Button } from "../shared/Button";
import { contactNav, productSuiteNav, servicesNav } from "../data/navigation";
import type { IndustryPage } from "../data/industries";
import { StandardPageContent } from "./StandardPageContent";
import styles from "./IndustryPlaceholderPage.module.css";

type IndustryPlaceholderPageProps = {
  industry: IndustryPage;
};

const ctas: ComponentPropsWithoutRef<typeof Button>[] = [
  { href: contactNav.href, children: "Talk to us" },
  { href: servicesNav.href, variant: "ghost", children: "View services" },
  { href: productSuiteNav.href, variant: "ghost", children: "View product suite" },
];

function rise(delayMs: number, className: string) {
  return {
    className: `${styles.rise} ${className}`,
    style: { ["--rise-delay" as string]: `${delayMs}ms` } as CSSProperties,
  };
}

export function IndustryPlaceholderPage({
  industry,
}: IndustryPlaceholderPageProps) {
  const initial =
    industry.label.trim().at(0)?.toUpperCase() ?? "—";

  return (
    <StandardPageContent contentWidth="wide">
      <section
        className={styles.section}
        aria-labelledby="industry-placeholder-heading"
      >
        <div className={styles.paint} aria-hidden />
        <div className={styles.grain} aria-hidden />
        <div className={styles.ribbon} aria-hidden />

        <div className="relative grid gap-10 p-8 md:grid-cols-12 md:gap-0 md:p-12 lg:p-14">
          <div className="flex flex-col justify-center md:col-span-7 md:pr-8 lg:col-span-6 lg:pr-12">
            <div
              {...rise(60, "flex items-center gap-3")}
            >
              <span className="h-px w-8 bg-(--color-accent)/80" aria-hidden />
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-(--color-accent)/90">
                Industry focus
              </p>
            </div>

            <h1
              id="industry-placeholder-heading"
              {...rise(
                140,
                "mt-6 font-serif text-[2.35rem] font-medium leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl md:text-6xl lg:text-[3.35rem]",
              )}
            >
              {industry.label}
            </h1>

            <p
              {...rise(
                220,
                "mt-6 max-w-xl text-lg leading-relaxed text-slate-200/85 md:text-[1.125rem]",
              )}
            >
              {industry.overview}
            </p>

            <div
              {...rise(
                300,
                "relative mt-8 max-w-xl border-l-2 border-amber-400/70 bg-white/3 px-4 py-3 backdrop-blur-sm",
              )}
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-amber-200/90">
                In development
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300/95">
                This route is live so navigation stays coherent while full
                industry content is prepared.
              </p>
            </div>

            <div {...rise(380, "mt-10 flex flex-wrap gap-3")}>
              {ctas.map((props) => (
                <Button key={props.href} {...props} />
              ))}
            </div>
          </div>

          <div
            className="relative hidden min-h-64 md:col-span-5 md:block lg:col-span-6"
            aria-hidden
          >
            <div {...rise(140, "relative flex h-full flex-col items-end gap-6 pt-2")}>
              <div className="absolute right-[12%] top-1/2 z-0 -translate-y-1/2 select-none font-serif text-[clamp(11rem,32vw,18rem)] font-medium text-white/6">
                {initial}
              </div>
              <div className="relative z-1 flex w-full flex-col items-end gap-6">
                <div className="flex items-center gap-3 rounded border border-white/15 bg-white/4 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/55">
                  <span className="size-1.5 rounded-full bg-(--color-accent) shadow-[0_0_12px_var(--color-accent)]" />
                  Sector brief
                </div>
                <div className="max-w-48 space-y-3 text-right">
                  <div className="ml-auto h-px w-16 bg-linear-to-l from-(--color-accent)/60 to-transparent" />
                  <p className="text-xs leading-relaxed text-slate-400/90">
                    Tailored messaging for this vertical will appear here—case
                    studies, compliance notes, and engagement patterns.
                  </p>
                </div>
                <div {...rise(460, "mt-auto flex gap-2")}>
                  {[0.35, 0.57, 0.79].map((o, i) => (
                    <span
                      key={i}
                      className="size-1 rounded-full bg-white/25"
                      style={{ opacity: o }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </StandardPageContent>
  );
}
