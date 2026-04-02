"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/snack/product-card";
import { SectionHeading } from "@/components/snack/section-heading";
import { Input } from "@/components/ui/input";
import { categories, filterChips, products, recentSearches, trendingProducts } from "@/lib/data/products";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query) return products;
    const lower = query.toLowerCase();
    return products.filter((item) => item.name.toLowerCase().includes(lower) || item.brand.toLowerCase().includes(lower));
  }, [query]);

  return (
    <div className="container-pad space-y-6">
      <SectionHeading title="Search snacks" subtitle="Look up by brand, product name, or type." />
      <Input placeholder="Try: granola bars, yogurt tubes, crackers..." value={query} onChange={(e) => setQuery(e.target.value)} />

      <div className="flex gap-2 overflow-x-auto pb-2">{categories.map((category) => <span key={category} className="chip capitalize">{category}</span>)}</div>

      <div>
        <p className="mb-2 text-sm font-medium">Filters</p>
        <div className="flex flex-wrap gap-2">{filterChips.map((chip) => <span key={chip} className="chip capitalize">{chip}</span>)}</div>
      </div>

      <section>
        <p className="mb-2 text-sm font-medium">Recent searches</p>
        <div className="flex flex-wrap gap-2">{recentSearches.map((item) => <span key={item} className="chip">{item}</span>)}</div>
      </section>

      <section>
        <p className="mb-2 text-sm font-medium">Trending products</p>
        <div className="grid gap-3">{trendingProducts.map((snack) => <ProductCard key={snack.id} snack={snack} />)}</div>
      </section>

      <section>
        <p className="mb-2 text-sm font-medium">All results</p>
        <div className="grid gap-3">{filtered.length ? filtered.map((snack) => <ProductCard key={snack.id} snack={snack} />) : <p className="text-sm text-stone-600">No matches yet. Try a different name or brand.</p>}</div>
      </section>
    </div>
  );
}
