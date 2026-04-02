export type Verdict = "Great" | "Okay" | "Skip";

export type SnackProduct = {
  id: string;
  name: string;
  brand: string;
  category: string;
  calories: number;
  addedSugarG: number;
  fiberG: number;
  proteinG: number;
  sodiumMg: number;
  ingredients: string[];
  allergens: string[];
  flags: string[];
  image: string;
};

export type ScoredSnack = SnackProduct & {
  score: number;
  verdict: Verdict;
  summary: string;
  reasons: string[];
  ingredientFlags: string[];
  allergenFlags: string[];
};

export type HouseholdPreferenceKey =
  | "lowSugar"
  | "nutFree"
  | "dairyFree"
  | "glutenAware"
  | "dyeAware"
  | "proteinFocused"
  | "lunchboxFriendly"
  | "toddlerFriendly"
  | "avoidArtificialSweeteners"
  | "avoidSeedOils";
