import { Menu, Search } from "lucide-react";

interface Props {
  query: string;
  onQuery: (q: string) => void;
  onToggleSidebar: () => void;
}

export function Header({ query, onQuery, onToggleSidebar }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-3 px-4 py-3 md:px-8">
        <button
          onClick={onToggleSidebar}
          className="rounded-md p-2 text-foreground hover:bg-muted md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-serif text-lg">
            M
          </div>
          <div className="leading-tight">
            <p className="font-serif text-lg text-foreground">Maison</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Kitchen & Bar
            </p>
          </div>
        </div>

        <div className="ml-auto flex w-full max-w-md items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => onQuery(e.target.value)}
            placeholder="Search the menu…"
            className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
        </div>
      </div>
    </header>
  );
}
