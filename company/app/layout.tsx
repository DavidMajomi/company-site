import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SitePageShell } from "./components/SitePageShell";
import { site } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.name}`,
  },
  description: site.defaultDescription,
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
        <SitePageShell>{children}</SitePageShell>
        <Analytics />
      </body>
    </html>
  );
}
