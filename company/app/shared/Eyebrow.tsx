import { clsx } from "clsx";

type EyebrowProps = {
  text: string;
  className?: string;
};

const baseClass =
  "m-0 text-eyebrow font-black uppercase tracking-[0.22em] text-(--color-accent)";

export function Eyebrow({ text, className }: EyebrowProps) {
  return <p className={clsx(baseClass, className)}>{text}</p>;
}
