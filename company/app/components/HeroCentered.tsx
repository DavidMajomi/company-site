import { HeroTextBlock } from "./HeroTextBlock";

export function HeroCentered() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center">
      <HeroTextBlock align="center" className="w-full" />
    </div>
  );
}
