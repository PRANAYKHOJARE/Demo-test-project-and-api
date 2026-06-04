export type Category =
  | "Starters"
  | "Mains"
  | "Pizza"
  | "Desserts"
  | "Drinks";

export interface FoodItem {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  category: Category;
  image: string;
  calories: number;
  prepTime: string;
  tags: string[];
}

// 🔥 BASE API
const BASE_URL = import.meta.env.VITE_FOOD_API;

// ✅ GET ALL FOODS
export const fetchMenu = async (): Promise<FoodItem[]> => {
  const res = await fetch(BASE_URL);

  if (!res.ok) {
    throw new Error(`Failed to fetch menu: ${res.status}`);
  }

  const data = await res.json();

  console.log("🔥 MENU RESPONSE:", data);

  return data;
};

// ✅ GET SINGLE FOOD ITEM
export const fetchMenuItem = async (id: string): Promise<FoodItem> => {
  const res = await fetch(`${BASE_URL}/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch item ${id}: ${res.status}`);
  }

  const data = await res.json();

  console.log("🔥 ITEM RESPONSE:", data);

  return data;
};