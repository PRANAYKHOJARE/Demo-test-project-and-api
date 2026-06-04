import type { FoodItem } from "@/routes/api/-menu";

interface Props {
  item: FoodItem;
  onClick: () => void;
}

export function FoodCard({ item, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2 py-0.5 text-[9px] md:px-3 md:py-1 md:text-[10px] font-medium uppercase tracking-wider text-foreground backdrop-blur">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3 md:p-5">
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="font-serif text-base md:text-lg text-foreground line-clamp-1">{item.name}</h3>
          <span className="shrink-0 text-sm font-medium text-primary md:text-base">₹{item.price}</span>
        </div>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </div>
    </button>
  );
}