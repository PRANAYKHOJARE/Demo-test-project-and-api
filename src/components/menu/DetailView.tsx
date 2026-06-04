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
          className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/90 text-foreground shadow-md backdrop-blur hover:bg-muted"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

       <div className="aspect-[16/10] w-full overflow-hidden">
          <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
        </div>

        <div className="space-y-6 p-6 md:p-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              {item.category}
            </p>
            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-serif text-3xl text-foreground md:text-4xl">
                {item.name}
              </h2>
              <span className="font-serif text-2xl text-primary">${item.price}</span>
            </div>
          </div>

          <p className="text-base leading-relaxed text-muted-foreground">
  {item.longDescription || item.description}
</p>

          <div className="flex flex-wrap gap-6 border-y border-border py-4 text-sm">
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

          <button className="w-full rounded-full bg-primary py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
            Add to order · ${item.price}
          </button>
        </div>
      </div>
    </div>
  );
}
