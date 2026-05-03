import Image from "next/image";
import Link from "next/link";
import { contactNav } from "../data/navigation";

const logos: { name: string; src: string }[] = [
  { name: "FintelligenX", src: "/partners/fintelligenx.webp" },
  { name: "Oracle", src: "/partners/oracle.svg" },
  { name: "Microsoft", src: "/partners/microsoft.svg" },
  { name: "Jaspersoft", src: "/partners/jaspersoft.webp" },
  { name: "MariaDB", src: "/partners/mariadb.svg" },
  { name: "WSO2 API Manager", src: "/partners/wso2.webp" },
  { name: "Odoo", src: "/partners/odoo.svg" },
  { name: "PostgreSQL", src: "/partners/postgresql.svg" },
];

export function ClientsSection() {
  return (
    <section id="clients" className="scroll-mt-6">
      <h2 className="text-2xl font-bold tracking-tight text-(--color-primary) md:text-3xl">
        Our Clients
      </h2>
      <p className="mt-3 max-w-2xl text-(--color-text-muted)">
        We support organizations across banking and enterprise with solutions
        built on trusted platforms—helping our clients move faster with
        confidence.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {logos.map(({ name, src }) => (
          <div
            key={name}
            className="flex min-h-34 min-w-48 max-w-[16rem] flex-1 basis-48 items-center justify-center rounded-md border border-(--color-border) bg-white px-6 py-5 shadow-(--shadow-soft)"
          >
            <Image
              src={src}
              alt={`${name} logo`}
              width={280}
              height={84}
              className="h-16 w-auto max-w-56 object-contain object-center md:h-20 md:max-w-60"
              unoptimized={src.endsWith(".svg")}
            />
          </div>
        ))}
      </div>
      <Link
        href={contactNav.href}
        className="mt-8 inline-flex items-center text-sm font-semibold text-(--color-accent) transition hover:text-sky-600"
      >
        Get in touch →
      </Link>
    </section>
  );
}
