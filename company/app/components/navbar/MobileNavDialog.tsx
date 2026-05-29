"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { MobileNavBar } from "./MobileNavBar";
import { MobileNavOverlay } from "./MobileNavOverlay";
import { type NavbarAppearance } from "./Navbar";
import { type NavItem } from "./NavLinkLists";

type Props = {
  appearance: NavbarAppearance;
  industries: NavItem[];
  primaryNavLinks: NavItem[];
};

export function MobileNavDialog({
  appearance,
  industries,
  primaryNavLinks,
}: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
      <MobileNavBar appearance={appearance} mobileOpen={mobileOpen} />
      <MobileNavOverlay
        appearance={appearance}
        industries={industries}
        primaryNavLinks={primaryNavLinks}
        onClose={() => setMobileOpen(false)}
      />
    </Dialog.Root>
  );
}
