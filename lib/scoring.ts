import { SnackProduct, Verdict } from "@/lib/types";

const DYE_TOKENS = ["red 40", "yellow 5", "yellow 6", "blue 1", "artificial color"];

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

export function getVerdict(score: number): Verdict {
  if (score >= 75) return "Great";
  if (score >= 50) return "Okay";
  return "Skip";
}

export function getIngredientFlags(product: SnackProduct): string[] {
  const ingredientText = product.ingredients.join(" ").toLowerCase();
  const flags: string[] = [];

  if (DYE_TOKENS.some((token) => ingredientText.includes(token))) flags.push("Contains artificial dye");
  if (ingredientText.includes("sucralose") || ingredientText.includes("aspartame")) flags.push("Contains artificial sweetener");
  if (ingredientText.includes("palm oil") || ingredientText.includes("canola oil") || ingredientText.includes("soybean oil")) {
    flags.push("Contains refined seed oils");
  }
  if (product.ingredients.length <= 8) flags.push("Short, simple ingredient list");

  return flags;
}

export function getAllergenFlags(product: SnackProduct): string[] {
  if (!product.allergens.length) return ["No common allergens listed"];
  return product.allergens.map((allergen) => `${allergen} present`);
}

export function scoreSnack(product: SnackProduct) {
  let score = 100;
  const reasons: string[] = [];

  score -= product.addedSugarG * 2.8;
  if (product.addedSugarG >= 8) reasons.push(`Higher added sugar (${product.addedSugarG}g)`);

  score += product.fiberG * 3;
  if (product.fiberG >= 3) reasons.push(`Useful fiber (${product.fiberG}g)`);

  score += product.proteinG * 1.5;
  if (product.proteinG >= 5) reasons.push(`Protein support (${product.proteinG}g)`);

  score -= Math.max(0, (product.sodiumMg - 140) / 12);
  if (product.sodiumMg > 180) reasons.push(`Sodium is elevated (${product.sodiumMg}mg)`);

  const ingredientText = product.ingredients.join(" ").toLowerCase();
  if (DYE_TOKENS.some((token) => ingredientText.includes(token))) {
    score -= 15;
    reasons.push("Artificial dyes detected");
  }

  if (product.ingredients.length <= 8) {
    score += 6;
    reasons.push("Simple ingredient list");
  }

  if (ingredientText.includes("whole grain") || ingredientText.includes("oats") || ingredientText.includes("fruit")) {
    score += 6;
    reasons.push("Whole grain / fruit-forward ingredients");
  }

  const finalScore = Math.round(clamp(score));
  const verdict = getVerdict(finalScore);

  const summary =
    verdict === "Great"
      ? "Strong everyday pick with balanced nutrition and cleaner ingredients."
      : verdict === "Okay"
        ? "Reasonable option for occasional use with a few trade-offs."
        : "Better to skip regularly due to sugar, sodium, or additive concerns.";

  return {
    score: finalScore,
    verdict,
    summary,
    reasons: reasons.slice(0, 3),
    ingredientFlags: getIngredientFlags(product),
    allergenFlags: getAllergenFlags(product)
  };
}
