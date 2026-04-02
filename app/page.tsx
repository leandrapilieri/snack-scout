import Link from "next/link";
import { ProductCard } from "@/components/snack/product-card";
import { SectionHeading } from "@/components/snack/section-heading";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trendingProducts } from "@/lib/data/products";

export default function LandingPage() {
  return (
    <div className="container-pad space-y-10">
      <section className="space-y-4 pt-6">
        <p className="text-sm font-medium text-primary">Snack Scout</p>
        <h1 className="text-3xl font-semibold leading-tight">Know in seconds if a snack is a great pick for your kid.</h1>
        <p className="text-stone-600">Simple verdicts, allergen awareness, and better swaps while you shop.</p>
        <div className="flex gap-3">
          <Button asChild>
            <Link href="/search">Search snacks</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href="/scan">Start scanning</Link>
          </Button>
        </div>
      </section>

      <section>
        <SectionHeading title="How it works" subtitle="Built for busy adults shopping for kids." />
        <div className="space-y-3">
          {[
            "Search by snack name or brand.",
            "See an instant Great, Okay, or Skip verdict.",
            "Use swaps and save products for your next trip."
          ].map((step, index) => (
            <Card key={step} className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">{index + 1}</div>
              <p className="text-sm text-stone-700">{step}</p>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading title="Example results" subtitle="Preview the simple score cards you'll see in app." />
        <div className="grid gap-3">{trendingProducts.slice(0, 3).map((snack) => <ProductCard key={snack.id} snack={snack} />)}</div>
      </section>
    </div>
  );
}
