import { X } from "lucide-react";

interface Props {
  active: string;
  onSelect: (c: string) => void;
  open: boolean;
  onClose: () => void;
}

const CATEGORIES = ["All", "Starters", "Mains", "Pizza", "Desserts", "Drinks"];

export function Sidebar({ active, onSelect, open, onClose }: Props) {
  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer — mobile only */}
      <aside
        className={`fixed left-0 top-0 h-full z-40 w-64 bg-background border-r border-border transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-border">
          <span className="font-semibold text-foreground">Categories</span>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X size={20} />
          </button>
        </div>

        <nav className="p-3 flex flex-col gap-1">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                onSelect(c);
                onClose();
              }}
              className={`text-left px-3 py-2 rounded-md text-sm transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground font-medium"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </nav>
      </aside>
    </>
  );
}