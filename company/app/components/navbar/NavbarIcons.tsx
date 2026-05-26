import { Menu, X } from "lucide-react";

export function MenuIcon({ open }: { open: boolean }) {
  const Icon = open ? X : Menu;
  return <Icon className="h-5 w-5" aria-hidden strokeWidth={2} />;
}

export function CloseIcon() {
  return <X className="h-5 w-5" aria-hidden strokeWidth={2} />;
}
