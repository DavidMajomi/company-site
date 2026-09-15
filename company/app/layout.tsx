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
        url: "/vatheon-social-white.png",
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.defaultDescription,
    images: ["/vatheon-social-white.png"],
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
