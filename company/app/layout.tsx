import type { Metadata } from "next";
import { SitePageShell } from "./components/SitePageShell";
import { site } from "./site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: site.tagline ? `${site.name} | ${site.tagline}` : site.name,
    template: `%s | ${site.name}`,
  },
  description: site.defaultDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SitePageShell>{children}</SitePageShell>
      </body>
    </html>
  );
}
