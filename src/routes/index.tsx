import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { fetchMenu, fetchMenuItem } from "@/routes/api/-menu";
import type { FoodItem } from "@/routes/api/-menu";

import { Header } from "@/components/menu/Header";
import { Sidebar } from "@/components/menu/Sidebar";
import { FoodCard } from "@/components/menu/FoodCard";
import { DetailView } from "@/components/menu/DetailView";
import { Footer } from "@/components/menu/Footer";

export const Route = createFileRoute("/")({
  component: MenuPage,
});

function MenuPage() {
  const [items, setItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const [selected, setSelected] = useState<FoodItem | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    fetchMenu()
      .then((data) => setItems(data || []))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    return items.filter((i) => {
      const matchesQ = i.name.toLowerCase().includes(query.toLowerCase());
      const matchesC = category === "All" || i.category === category;

      return matchesQ && matchesC;
    });
  }, [items, query, category]);

  return (
    <div className="min-h-screen bg-background">
      <Header
        query={query}
        onQuery={setQuery}
        onToggleSidebar={() => setSidebarOpen(true)}
      />

      <div className="flex">
        <Sidebar
          active={category}
          onSelect={setCategory}
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1">
          <section className="px-6 py-10 md:px-12">
            <h2 className="text-2xl font-serif">
              {category === "All" ? "Menu" : category}
            </h2>

            {loading ? (
              <p className="mt-4">Loading...</p>
            ) : filtered.length === 0 ? (
              <p className="mt-4">No items found</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filtered.map((item) => (
                  <FoodCard
  key={item.id}
  item={item}
  onClick={async () => {
    const full = await fetchMenuItem(item.id);
    setSelected(full);
  }}
/>
                ))}
              </div>
            )}
          </section>

          <Footer />
        </main>
      </div>

      <DetailView item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}