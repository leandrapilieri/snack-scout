import Link from "next/link";
import Image from "next/image";
import { ProductCard } from "@/components/snack/product-card";
import { SectionHeading } from "@/components/snack/section-heading";
import { Button } from "@/components/ui/button";
import { trendingProducts } from "@/lib/data/products";

export default function LandingPage() {
  return (
    <div className="container-pad space-y-7">
      <section className="overflow-hidden rounded-3xl border border-[#d8d5cb] bg-[#FAF9F4]">
        <div className="h-56 bg-gradient-to-b from-[#EFE9DC] to-[#F8F4EC] p-4">
          <Image src="/products/snack-15.svg" alt="featured snack" width={220} height={220} className="mx-auto rounded-2xl" />
        </div>
        <div className="space-y-4 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-stone-400">Snack Scout</p>
          <h1 className="text-5xl font-semibold leading-[0.95]">Whole Grain Crispie</h1>
          <p className="text-stone-500">Organic Apple & Cinnamon</p>
          <div className="rounded-2xl bg-[#EEF0E8] p-3 text-sm text-stone-700">
            Top-tier profile with more fiber, less sugar, and no artificial dyes.
          </div>
        </div>
      </section>

      <div className="grid grid-cols-2 gap-2">
        <Button asChild className="w-full">
          <Link href="/search">Search snacks</Link>
        </Button>
        <Button variant="secondary" asChild className="w-full">
          <Link href="/scan">Start scanning</Link>
        </Button>
      </div>

      <section>
        <SectionHeading title="Recent favorites" subtitle="A curated collection of your healthiest choices." />
        <div className="grid gap-3">{trendingProducts.slice(0, 2).map((snack) => <ProductCard key={snack.id} snack={snack} />)}</div>
      </section>

      <section>
        <SectionHeading title="How it works" subtitle="Scan, understand, and swap in under 10 seconds." />
        <div className="grid grid-cols-3 gap-2 text-center text-xs text-stone-500">
          <div className="rounded-2xl border border-stone-200 bg-white p-3">Scan</div>
          <div className="rounded-2xl border border-stone-200 bg-white p-3">Review</div>
          <div className="rounded-2xl border border-stone-200 bg-white p-3">Swap</div>
        </div>
      </section>
    </div>
  );
}
