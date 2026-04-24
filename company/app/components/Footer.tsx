import Link from "next/link";
import { footerContactLines } from "../data/footer";
import { primaryNavLinks } from "../data/navigation";
import { site } from "../site";

export function Footer() {
  return (
    <footer className="border-t border-(--color-border-light) bg-(--color-primary)">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 text-sm text-slate-300 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="space-y-2">
          <p className="text-xs tracking-[0.18em] text-slate-400">
            {site.nameDisplay}
          </p>
          <p className="max-w-md text-xs text-slate-300 sm:text-sm">
            {site.heroHeadline}
          </p>
        </div>

        <div className="flex flex-col gap-6 text-xs sm:flex-row sm:gap-12 sm:text-sm">
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Contact
            </h3>
            <ul className="space-y-1">
              {footerContactLines.map((line) => (
                <li key={line.href}>
                  <a
                    href={line.href}
                    className="transition hover:text-(--color-accent)"
                    {...(line.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {line.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Links
            </h3>
            <ul className="space-y-1">
              {primaryNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-(--color-accent)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-(--color-border-light)">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-[11px] text-slate-400 sm:px-6">
          © {new Date().getFullYear()} {site.name}. {site.copyrightSuffix}
        </div>
      </div>
    </footer>
  );
}
