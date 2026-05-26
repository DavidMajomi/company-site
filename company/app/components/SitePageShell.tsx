import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

type SitePageShellProps = {
  children: ReactNode;
};

export function SitePageShell({ children }: SitePageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-(--color-surface)">
      <Navbar />
      <main>{children}</main>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
