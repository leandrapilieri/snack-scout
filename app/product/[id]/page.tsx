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
      <div className="overflow-hidden rounded-3xl border border-[#d9d7d1] bg-white">
        <div className="h-56 bg-gradient-to-b from-[#F7EFE2] to-[#EEE7D9] p-4">
          <Image src={product.image} alt={product.name} width={220} height={220} className="mx-auto rounded-2xl" />
        </div>
        <div className="space-y-3 p-4">
          <p className="text-xs uppercase tracking-widest text-stone-400">Curated selection</p>
          <h1 className="text-4xl font-semibold leading-none">{product.name}</h1>
          <p className="text-stone-500">{product.brand}</p>
          <Card className="rounded-2xl bg-[#EEF0E8]">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#5D876F] px-3 py-2 text-2xl font-bold text-white">{product.verdict === "Great" ? "A" : product.verdict === "Okay" ? "B" : "C"}</div>
              <div>
                <p className="font-semibold">Excellent Choice</p>
                <p className="text-sm text-stone-600">{product.summary}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Card>
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Nutritional Snapshot</h2>
          <VerdictBadge verdict={product.verdict} />
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="rounded-2xl bg-[#F0F0EC] p-3">
            <p className="text-lg font-semibold">{product.addedSugarG}g</p>
            <p className="text-stone-500">Low Sugar</p>
          </div>
          <div className="rounded-2xl bg-[#F0F0EC] p-3">
            <p className="text-lg font-semibold">{product.fiberG}g</p>
            <p className="text-stone-500">Fiber-Rich</p>
          </div>
          <div className="rounded-2xl bg-[#F0F0EC] p-3">
            <p className="text-lg font-semibold">{product.proteinG}g</p>
            <p className="text-stone-500">Protein</p>
          </div>
        </div>
      </Card>

      <Card>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">The smart swap</h2>
        <div className="mt-3 space-y-2">
          {swaps.length ? (
            swaps.slice(0, 1).map((swap) => (
              <Link key={swap.id} href={`/product/${swap.id}`} className="flex items-center gap-3 rounded-2xl border border-stone-200 p-3">
                <Image src={swap.image} alt={swap.name} width={52} height={52} className="rounded-xl" />
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-widest text-[#7BA383]">Optimal</p>
                  <p className="font-semibold">{swap.name}</p>
                  <p className="text-xs text-stone-500">{swap.summary}</p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-sm text-stone-600">No stronger swaps in this category yet.</p>
          )}
        </div>
      </Card>

      <Card>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-stone-400">Guardian's Note</h2>
        <p className="mt-2 text-sm leading-7 text-stone-700">
          A thoughtfully crafted snack balancing texture and nutrition. Top reasons: {product.reasons.join(", ").toLowerCase()}.
        </p>
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
