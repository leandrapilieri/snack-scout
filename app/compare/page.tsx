import { products } from "@/lib/data/products";
import { VerdictBadge } from "@/components/snack/verdict-badge";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/snack/empty-state";

export default async function ComparePage({ searchParams }: { searchParams: Promise<{ ids?: string }> }) {
  const { ids } = await searchParams;
  const selectedIds = ids?.split(",").filter(Boolean) ?? ["1", "2", "7"];
  const compared = products.filter((p) => selectedIds.includes(p.id)).slice(0, 3);

  if (!compared.length) {
    return (
      <div className="container-pad">
        <EmptyState title="No products selected to compare" text="Open any product and tap compare to add it here." />
      </div>
    );
  }

  const bestOverall = compared.reduce((best, current) => (current.score > best.score ? current : best), compared[0]);
  const bestLowSugar = compared.reduce((best, current) => (current.addedSugarG < best.addedSugarG ? current : best), compared[0]);
  const bestNutFree = compared.find((p) => !p.allergens.includes("peanut") && !p.allergens.includes("tree nut"));

  return (
    <div className="container-pad space-y-4">
      <h1 className="text-2xl font-semibold">Compare products</h1>
      <p className="text-sm text-stone-600">Compare 2-3 snacks side-by-side to choose a practical option quickly.</p>

      <div className="grid gap-3 md:grid-cols-3">
        {compared.map((product) => (
          <Card key={product.id} className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-semibold">{product.name}</p>
              <VerdictBadge verdict={product.verdict} />
            </div>
            <p className="text-sm text-stone-600">{product.brand}</p>
            <div className="space-y-2 rounded-xl bg-stone-50 p-3 text-sm">
              <p>Score: <span className="font-semibold">{product.score}/100</span></p>
              <p>Added sugar: <span className="font-semibold">{product.addedSugarG}g</span></p>
              <p>Protein: <span className="font-semibold">{product.proteinG}g</span></p>
              <p>Sodium: <span className="font-semibold">{product.sodiumMg}mg</span></p>
            </div>
            <div className="flex flex-wrap gap-2 pt-2 text-xs font-medium">
              {bestOverall?.id === product.id ? <span className="chip">Best overall</span> : null}
              {bestLowSugar?.id === product.id ? <span className="chip">Best low sugar pick</span> : null}
              {bestNutFree?.id === product.id ? <span className="chip">Best nut-free option</span> : null}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
