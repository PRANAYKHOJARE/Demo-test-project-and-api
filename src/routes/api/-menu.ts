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
  longDescription?: string;
  price: number;
  category: Category;
  image: string;
  calories?: number;
  prepTime?: string;
  tags?: string[];
}

const API = import.meta.env.VITE_FOOD_API;

// GET ALL FOODS
export const fetchMenu = async (): Promise<FoodItem[]> => {
  const res = await fetch(API);

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  const data = await res.json();
  console.log("MENU API:", data);

  return data; // mockapi already returns array
};

// GET SINGLE FOOD
export const fetchMenuItem = async (id: string): Promise<FoodItem> => {
  const res = await fetch(`${API}/${id}`);

  if (!res.ok) {
    throw new Error("Item not found");
  }

  const data = await res.json();
  console.log("MENU ITEM:", data);

  return data;
};