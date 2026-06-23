import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { OrganizationJsonLd } from "./components/OrganizationJsonLd";
import { SitePageShell } from "./components/SitePageShell";
import { site } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.defaultDescription,
    images: [
      {
        url: "/vatheon_systems_black.svg",
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: site.name,
    description: site.defaultDescription,
    images: ["/vatheon_systems_black.svg"],
  },
  icons: {
    icon: "/vatheon-v-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <OrganizationJsonLd />
        <SitePageShell>{children}</SitePageShell>
        <Analytics />
      </body>
    </html>
  );
}
