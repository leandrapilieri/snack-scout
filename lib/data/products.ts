import { scoreSnack } from "@/lib/scoring";
import { ScoredSnack, SnackProduct } from "@/lib/types";

export const categories = [
  "granola bars",
  "fruit snacks",
  "crackers",
  "pouches",
  "yogurt snacks",
  "cookies",
  "protein snacks"
];

export const filterChips = ["low sugar", "high protein", "lunchbox-friendly", "nut-free", "dye-aware", "organic"];

export const seedProducts: SnackProduct[] = [
  { id: "1", name: "Soft Baked Oat Bar", brand: "Harvest Path", category: "granola bars", calories: 140, addedSugarG: 5, fiberG: 3, proteinG: 4, sodiumMg: 105, ingredients: ["whole grain oats", "dates", "sunflower seed butter", "apple puree", "cinnamon"], allergens: [], flags: ["lunchbox-friendly", "whole grain"], image: "/products/snack-1.svg" },
  { id: "2", name: "Rainbow Fruit Bites", brand: "FunMunch", category: "fruit snacks", calories: 90, addedSugarG: 12, fiberG: 1, proteinG: 0, sodiumMg: 35, ingredients: ["corn syrup", "sugar", "gelatin", "citric acid", "red 40", "blue 1"], allergens: [], flags: ["dye-aware"], image: "/products/snack-2.svg" },
  { id: "3", name: "Mini Cheese Crackers", brand: "Craveables", category: "crackers", calories: 150, addedSugarG: 1, fiberG: 1, proteinG: 3, sodiumMg: 220, ingredients: ["enriched flour", "cheddar cheese", "canola oil", "salt"], allergens: ["dairy", "gluten"], flags: ["lunchbox-friendly"], image: "/products/snack-3.svg" },
  { id: "4", name: "Apple Spinach Pouch", brand: "SproutLane", category: "pouches", calories: 80, addedSugarG: 0, fiberG: 2, proteinG: 1, sodiumMg: 5, ingredients: ["apple puree", "spinach puree", "lemon juice"], allergens: [], flags: ["toddler-friendly", "organic"], image: "/products/snack-4.svg" },
  { id: "5", name: "Greek Yogurt Drops", brand: "HappyDairy", category: "yogurt snacks", calories: 110, addedSugarG: 6, fiberG: 0, proteinG: 6, sodiumMg: 55, ingredients: ["cultured skim milk", "strawberry puree", "cane sugar"], allergens: ["dairy"], flags: ["protein"], image: "/products/snack-5.svg" },
  { id: "6", name: "Chocolate Sandwich Minis", brand: "TinyTreat", category: "cookies", calories: 160, addedSugarG: 11, fiberG: 1, proteinG: 2, sodiumMg: 125, ingredients: ["wheat flour", "sugar", "palm oil", "cocoa", "soy lecithin"], allergens: ["gluten", "soy"], flags: [], image: "/products/snack-6.svg" },
  { id: "7", name: "Pea Protein Crisps", brand: "FuelSprout", category: "protein snacks", calories: 130, addedSugarG: 1, fiberG: 2, proteinG: 8, sodiumMg: 170, ingredients: ["pea protein", "brown rice", "sea salt", "avocado oil"], allergens: [], flags: ["high protein"], image: "/products/snack-7.svg" },
  { id: "8", name: "Blueberry Breakfast Biscuits", brand: "MorningNest", category: "cookies", calories: 140, addedSugarG: 7, fiberG: 2, proteinG: 3, sodiumMg: 140, ingredients: ["whole grain wheat", "blueberry", "cane sugar", "sunflower oil"], allergens: ["gluten"], flags: [], image: "/products/snack-8.svg" },
  { id: "9", name: "Classic Applesauce Cup", brand: "Orchard Dot", category: "pouches", calories: 70, addedSugarG: 0, fiberG: 1, proteinG: 0, sodiumMg: 0, ingredients: ["apple puree", "ascorbic acid"], allergens: [], flags: ["toddler-friendly"], image: "/products/snack-9.svg" },
  { id: "10", name: "Honey Graham Squares", brand: "Snack Cabin", category: "crackers", calories: 130, addedSugarG: 8, fiberG: 1, proteinG: 2, sodiumMg: 160, ingredients: ["whole wheat flour", "honey", "soybean oil", "salt"], allergens: ["gluten", "soy"], flags: [], image: "/products/snack-10.svg" },
  { id: "11", name: "Nut Butter Oat Bites", brand: "KindRoot", category: "granola bars", calories: 170, addedSugarG: 4, fiberG: 4, proteinG: 5, sodiumMg: 90, ingredients: ["oats", "peanut butter", "flaxseed", "dates"], allergens: ["peanut"], flags: ["whole grain", "high protein"], image: "/products/snack-11.svg" },
  { id: "12", name: "Fruit Leather Strips", brand: "SimplyField", category: "fruit snacks", calories: 60, addedSugarG: 3, fiberG: 2, proteinG: 0, sodiumMg: 10, ingredients: ["apple", "pear", "strawberry"], allergens: [], flags: ["organic"], image: "/products/snack-12.svg" },
  { id: "13", name: "Cinnamon Oat Squares", brand: "GrainGlow", category: "granola bars", calories: 150, addedSugarG: 9, fiberG: 3, proteinG: 3, sodiumMg: 130, ingredients: ["whole grain oats", "brown rice syrup", "cinnamon", "salt"], allergens: [], flags: ["whole grain"], image: "/products/snack-13.svg" },
  { id: "14", name: "Vanilla Yogurt Tubes", brand: "CoolCultures", category: "yogurt snacks", calories: 90, addedSugarG: 10, fiberG: 0, proteinG: 4, sodiumMg: 45, ingredients: ["cultured milk", "sugar", "natural flavor", "yellow 5"], allergens: ["dairy"], flags: ["dye-aware"], image: "/products/snack-14.svg" },
  { id: "15", name: "Sea Salt Lentil Puffs", brand: "PuffPatch", category: "protein snacks", calories: 120, addedSugarG: 0, fiberG: 3, proteinG: 6, sodiumMg: 150, ingredients: ["lentil flour", "rice flour", "sea salt"], allergens: [], flags: ["high protein", "lunchbox-friendly"], image: "/products/snack-15.svg" },
  { id: "16", name: "Mini Pretzel Twists", brand: "TwistTown", category: "crackers", calories: 110, addedSugarG: 1, fiberG: 1, proteinG: 2, sodiumMg: 290, ingredients: ["wheat flour", "salt", "malt syrup"], allergens: ["gluten"], flags: ["lunchbox-friendly"], image: "/products/snack-16.svg" },
  { id: "17", name: "Cocoa Protein Bar", brand: "ActiveCub", category: "protein snacks", calories: 180, addedSugarG: 5, fiberG: 5, proteinG: 9, sodiumMg: 190, ingredients: ["oats", "whey protein", "cocoa", "chicory root fiber", "sucralose"], allergens: ["dairy"], flags: ["high protein"], image: "/products/snack-17.svg" },
  { id: "18", name: "Strawberry Wafer Sticks", brand: "CrispyJoy", category: "cookies", calories: 150, addedSugarG: 13, fiberG: 0, proteinG: 1, sodiumMg: 85, ingredients: ["wheat flour", "sugar", "palm oil", "natural flavor", "red 40"], allergens: ["gluten"], flags: ["dye-aware"], image: "/products/snack-18.svg" },
  { id: "19", name: "Organic Berry Crunchies", brand: "Little Orchard", category: "fruit snacks", calories: 50, addedSugarG: 0, fiberG: 3, proteinG: 1, sodiumMg: 15, ingredients: ["organic apple", "organic blueberry", "organic carrot"], allergens: [], flags: ["organic", "toddler-friendly"], image: "/products/snack-19.svg" },
  { id: "20", name: "Cheddar Chickpea Crackers", brand: "Pantry Peak", category: "crackers", calories: 140, addedSugarG: 0, fiberG: 2, proteinG: 4, sodiumMg: 190, ingredients: ["chickpea flour", "cheddar", "olive oil", "salt"], allergens: ["dairy"], flags: ["high protein"], image: "/products/snack-20.svg" }
];

export const products: ScoredSnack[] = seedProducts.map((product) => ({
  ...product,
  ...scoreSnack(product)
}));

export const trendingProducts = products.slice(0, 6);
export const recentSearches = ["granola bars low sugar", "nut-free crackers", "protein yogurt snacks"];
