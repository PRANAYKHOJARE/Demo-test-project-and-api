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
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-foreground backdrop-blur">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-serif text-lg text-foreground">{item.name}</h3>
          <span className="font-medium text-primary">${item.price}</span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </div>
    </button>
  );
}
