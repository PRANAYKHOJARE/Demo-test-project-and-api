import type { FoodItem } from "@/routes/api/-menu";
import { Clock, Flame, X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  item: FoodItem | null;
  onClose: () => void;
}

export function DetailView({ item, onClose }: Props) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50 backdrop-blur-sm md:items-center"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-t-3xl bg-background md:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-8 w-8 md:h-10 md:w-10 place-items-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur hover:bg-muted"
          aria-label="Close"
        >
          <X className="h-4 w-4 md:h-5 md:w-5" />
        </button>

        {/* Image */}
        <div className="aspect-video w-full overflow-hidden sm:aspect-[16/10]">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        </div>

        {/* Content */}
        <div className="space-y-4 p-4 md:space-y-6 md:p-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {item.category}
            </p>
            <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="font-serif text-2xl text-foreground md:text-4xl">
                {item.name}
              </h2>
              <span className="font-serif text-xl text-primary md:text-2xl">₹{item.price}</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
            {item.longDescription || item.description}
          </p>

          <div className="flex flex-wrap gap-4 border-y border-border py-3 text-sm md:gap-6 md:py-4">
            <span className="flex items-center gap-2 text-foreground">
              <Clock className="h-4 w-4 text-primary" /> {item.prepTime}
            </span>
            <span className="flex items-center gap-2 text-foreground">
              <Flame className="h-4 w-4 text-primary" /> {item.calories} kcal
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tags?.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="w-full rounded-full bg-primary py-3 md:py-4 text-sm md:text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Add to order · ₹{item.price}
          </button>
        </div>
      </div>
    </div>
  );
}