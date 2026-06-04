import { Menu, Search, X } from "lucide-react";

const CATEGORIES = ["All", "Starters", "Mains", "Pizza", "Desserts", "Drinks"];

interface Props {
  query: string;
  onQuery: (q: string) => void;
  onToggleSidebar: () => void;
  activeCategory: string;
  onSelectCategory: (c: string) => void;
}

export function Header({
  query,
  onQuery,
  onToggleSidebar,
  activeCategory,
  onSelectCategory,
}: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      {/* Top row */}
      <div className="flex items-center gap-2 px-3 py-3 md:gap-3 md:px-8">
        {/* Mobile hamburger */}
        <button
          onClick={onToggleSidebar}
          className="shrink-0 rounded-md p-2 text-foreground hover:bg-muted md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-base md:text-lg">
            P
          </div>
          <div className="leading-tight hidden sm:block">
            <p className="font-serif text-lg text-foreground">Pranay's</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Kitchen & Bar
            </p>
          </div>
        </div>

        {/* Search bar */}
        <div className="ml-2 flex w-full min-w-0 items-center gap-2 rounded-sm border border-border bg-muted px-3 py-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all md:ml-4 md:px-4">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search dishes…"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          {query && (
            <button onClick={() => onQuery("")} className="shrink-0 text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Category pills — desktop */}
      <div className="hidden md:flex items-center gap-1 px-8 pb-2 overflow-x-auto scrollbar-none">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => onSelectCategory(c)}
            className={`shrink-0 rounded-full px-4 py-1 text-sm font-medium transition-colors ${
              activeCategory === c
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </header>
  );
}