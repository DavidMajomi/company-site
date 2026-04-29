import Link from "next/link";
import { footerContactLines } from "../data/footer";
import { industries, primaryNavLinks } from "../data/navigation";
import { site } from "../site";

type FooterItem = {
  href: string;
  label: string;
  external?: boolean;
};

type FooterSection = {
  title: string;
  items: FooterItem[];
  useNextLink: boolean;
};

const sectionTitleClassName =
  "mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400";
const sectionLinkClassName = "transition hover:text-(--color-accent)";

function FooterSectionList({ section }: { section: FooterSection }) {
  return (
    <div>
      <h3 className={sectionTitleClassName}>{section.title}</h3>
      <ul className="space-y-1">
        {section.items.map((item) => (
          <li key={item.href}>
            {section.useNextLink ? (
              <Link href={item.href} className={sectionLinkClassName}>
                {item.label}
              </Link>
            ) : (
              <a
                href={item.href}
                className={sectionLinkClassName}
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const sections: FooterSection[] = [
    {
      title: "Industries",
      items: industries,
      useNextLink: true,
    },
    {
      title: "Links",
      items: primaryNavLinks,
      useNextLink: true,
    },
    {
      title: "Contact",
      items: footerContactLines,
      useNextLink: false,
    },
  ];

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
          {sections.map((section) => (
            <FooterSectionList key={section.title} section={section} />
          ))}
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
