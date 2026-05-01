import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { footerContactLines } from "../data/footer";
import { productSuiteNav } from "../data/navigation";
import { StandardPageContent } from "../components/StandardPageContent";
import { site } from "../site";

export const metadata: Metadata = {
  title: "Contact",
  description: site.pageMeta.contact,
};

function StrokeContactIcon({ children }: { children: ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function PhoneIcon() {
  return (
    <StrokeContactIcon>
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465a2 2 0 0 1 2.62-.284l.865.5a2 2 0 0 1 .922 2.128 2 2 0 0 1-.906 1.257A16 16 0 0 1 8.343 5.438a2 2 0 0 1 1.257-.906 2 2 0 0 1 2.128.922l.5.865a2 2 0 0 1-.284 2.62l-.465.355a1 1 0 0 0-.303 1.213 11 11 0 0 0 5.966 5.966Z" />
    </StrokeContactIcon>
  );
}

function MailIcon() {
  return (
    <StrokeContactIcon>
      <rect width="18" height="14" x="3" y="5" rx="2" />
      <path d="m3 7 7.89 5.26a2 2 0 0 0 2.22 0L21 7" />
    </StrokeContactIcon>
  );
}

function GlobeIcon() {
  return (
    <StrokeContactIcon>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a16 16 0 0 1 0 18M12 3a16 16 0 0 0 0 18" />
    </StrokeContactIcon>
  );
}

function linkKind(href: string): "phone" | "email" | "web" {
  if (href.startsWith("tel:")) return "phone";
  if (href.startsWith("mailto:")) return "email";
  return "web";
}

const linkMeta = {
  phone: { title: "Call us", icon: PhoneIcon },
  email: { title: "Email", icon: MailIcon },
  web: { title: "Website", icon: GlobeIcon },
} as const;

export default function ContactPage() {
  const links = footerContactLines;

  return (
    <StandardPageContent>
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
          Contact
        </p>
        <h1
          id="contact-heading"
          className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-(--color-primary) md:text-5xl"
        >
          Talk to us about your next project.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-(--color-text-muted)">
          Reach out by phone, email, or through our website. We keep the
          process straightforward and respond with practical next steps.
        </p>
      </section>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-(--radius-md) border border-(--color-border) bg-white p-6 shadow-(--shadow-soft) md:p-8">
          <h2 className="text-lg font-semibold text-(--color-primary)">
            Contact details
          </h2>
          <ul className="mt-5 space-y-4">
            {links.map((line) => {
              const kind = linkKind(line.href);
              const { title, icon: Icon } = linkMeta[kind];
              return (
                <li key={line.href}>
                  <a
                    href={line.href}
                    className="group flex items-start gap-4 rounded-(--radius-md) border border-(--color-border) px-4 py-4 transition hover:border-sky-200 hover:bg-sky-50/60"
                    {...(line.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-600 transition group-hover:bg-sky-100 group-hover:text-sky-700"
                      aria-hidden
                    >
                      <Icon />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {title}
                      </span>
                      <span className="mt-1 block text-base font-semibold text-(--color-primary) transition group-hover:text-sky-700">
                        {line.label}
                      </span>
                      {kind === "web" ? (
                        <span className="mt-1 block text-xs text-(--color-text-muted)">
                          Opens in a new tab
                        </span>
                      ) : null}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>

        <aside className="space-y-6">
          <section className="rounded-(--radius-md) border border-(--color-border) bg-white p-6 shadow-(--shadow-soft) md:p-8">
            <h2 className="text-lg font-semibold text-(--color-primary)">
              What happens next
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-(--color-text-muted)">
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
                />
                <span>We review your message and route it to the right person.</span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
                />
                <span>We reply with the best next step, usually by email or phone.</span>
              </li>
              <li className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-1 h-2 w-2 rounded-full bg-(--color-accent)"
                />
                <span>If useful, we set up a short call to clarify scope or timing.</span>
              </li>
            </ul>
          </section>
        </aside>
      </div>

      <p className="mt-12 text-center text-sm text-(--color-text-muted)">
        Or browse the{" "}
        <Link
          href={productSuiteNav.href}
          className="font-semibold text-(--color-accent) underline decoration-sky-500/35 underline-offset-4 transition hover:text-sky-600 hover:decoration-sky-500/70"
        >
          product suite
        </Link>{" "}
        to see what we offer.
      </p>
    </StandardPageContent>
  );
}
