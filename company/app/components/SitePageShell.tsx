import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./Footer";

type SitePageShellProps = {
  children: ReactNode;
};

export function SitePageShell({ children }: SitePageShellProps) {
  return (
    <main className="flex min-h-screen flex-col bg-(--color-surface)">
      <Navbar />
      {children}
      <div className="mt-auto">
        <Footer />
      </div>
    </main>
  );
}
