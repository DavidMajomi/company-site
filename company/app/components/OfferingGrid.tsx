import type { ReactNode } from "react";

type OfferingGridProps<T> = {
  items: T[];
  getKey: (item: T) => string;
  renderCard: (item: T) => ReactNode;
  className?: string;
  itemClassName?: string;
};

const defaultGridClassName = "mt-10 flex flex-wrap justify-center gap-6";
const defaultItemClassName = "w-full shrink-0 sm:w-[calc((100%-1.5rem)/2)]";

export function OfferingGrid<T>({
  items,
  getKey,
  renderCard,
  className = defaultGridClassName,
  itemClassName = defaultItemClassName,
}: OfferingGridProps<T>) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={getKey(item)} className={itemClassName}>
          {renderCard(item)}
        </li>
      ))}
    </ul>
  );
}
