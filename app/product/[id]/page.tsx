import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VerdictBadge } from "@/components/snack/verdict-badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products } from "@/lib/data/products";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) notFound();

  const swaps = products.filter((p) => p.category === product.category && p.score > product.score).slice(0, 3);

  return (
    <div className="container-pad space-y-4 pb-32">
      <Card className="space-y-4 p-5">
        <div className="flex gap-4">
          <Image src={product.image} alt={product.name} width={92} height={92} className="rounded-2xl border" />
          <div className="min-w-0">
            <p className="text-sm text-stone-500">{product.brand}</p>
            <h1 className="text-2xl font-semibold leading-tight">{product.name}</h1>
            <div className="mt-2 flex items-center gap-2">
              <VerdictBadge verdict={product.verdict} />
              <span className="rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-700">{product.score}/100</span>
            </div>
          </div>
        </div>
        <p className="rounded-xl bg-stone-50 p-3 text-stone-700">{product.summary}</p>
      </Card>

      <Card>
        <h2 className="font-semibold">Top reasons</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-stone-700">
          {product.reasons.map((reason) => <li key={reason}>{reason}</li>)}
        </ul>
      </Card>

      <Card>
        <h2 className="font-semibold">Nutrition highlights</h2>
        <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-xl bg-stone-50 p-3">Added sugar: <span className="font-semibold">{product.addedSugarG}g</span></div>
          <div className="rounded-xl bg-stone-50 p-3">Fiber: <span className="font-semibold">{product.fiberG}g</span></div>
          <div className="rounded-xl bg-stone-50 p-3">Protein: <span className="font-semibold">{product.proteinG}g</span></div>
          <div className="rounded-xl bg-stone-50 p-3">Sodium: <span className="font-semibold">{product.sodiumMg}mg</span></div>
          <div className="rounded-xl bg-stone-50 p-3 col-span-2">Calories: <span className="font-semibold">{product.calories}</span></div>
        </div>
      </Card>

      <Card>
        <h2 className="font-semibold">Ingredient flags</h2>
        <div className="mt-2 flex flex-wrap gap-2">{product.ingredientFlags.map((flag) => <span key={flag} className="chip">{flag}</span>)}</div>
      </Card>

      <Card>
        <h2 className="font-semibold">Allergen flags</h2>
        <div className="mt-2 flex flex-wrap gap-2">{product.allergenFlags.map((flag) => <span key={flag} className="chip">{flag}</span>)}</div>
      </Card>

      <Card>
        <h2 className="font-semibold">Better swaps</h2>
        <div className="mt-3 space-y-2">
          {swaps.length ? (
            swaps.map((swap) => (
              <Link key={swap.id} href={`/product/${swap.id}`} className="flex items-center justify-between rounded-xl border border-stone-200 p-3">
                <span>{swap.name}</span>
                <span className="text-sm text-primary">{swap.score}/100</span>
              </Link>
            ))
          ) : (
            <p className="text-sm text-stone-600">No stronger swaps in this category yet.</p>
          )}
        </div>
      </Card>

      <div className="fixed inset-x-0 bottom-0 border-t border-stone-200 bg-white/95 p-3 backdrop-blur">
        <div className="mx-auto grid w-full max-w-3xl grid-cols-3 gap-2">
          <Button variant="secondary">Save</Button>
          <Button variant="secondary">Shopping list</Button>
          <Button asChild>
            <Link href={`/compare?ids=${product.id}`}>Compare</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
