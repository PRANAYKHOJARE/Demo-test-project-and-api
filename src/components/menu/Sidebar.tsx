import { Category } from "@/routes/api/-menu";
import { X } from "lucide-react";

interface Props {
  active: string;
  onSelect: (c: string) => void;
  open: boolean;
  onClose: () => void;
}

// Fallback categories
const CATEGORIES: string[] = [
   "All",
  "Starters",
  "Mains",
  "Pizza",
  "Desserts",
  "Drinks",
];

export function Sidebar({
  active,
  onSelect,
  open,
  onClose,
}: Props) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full z-40 w-72 bg-white border-r transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center md:hidden">
          <span className="font-semibold">Categories</span>

          <button onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <nav className="p-4 flex flex-col gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                onSelect(c);
                onClose();
              }}
              className={`text-left p-2 rounded transition-colors ${
                active === c
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
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