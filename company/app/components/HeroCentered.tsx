import { HeroTextBlock } from "./HeroTextBlock";
import styles from "./HeroCentered.module.css";

export function HeroCentered() {
  return (
    <div
      className={`${styles.fadeIn} mx-auto flex w-full max-w-4xl flex-col items-center`}
    >
      <HeroTextBlock align="center" className="w-full" />
    </div>
  );
}
