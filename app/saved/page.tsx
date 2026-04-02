import { EmptyState } from "@/components/snack/empty-state";
import { ProductCard } from "@/components/snack/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/lib/data/products";
import { Card } from "@/components/ui/card";

export default function SavedPage() {
  return (
    <div className="container-pad space-y-4">
      <div>
        <h1 className="text-4xl font-semibold leading-tight">Your Mindful Pantry</h1>
        <p className="mt-2 text-center text-sm text-stone-500">A curated collection of your healthiest choices.</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {["All Favorites", "Grade A", "Nut-Free", "Low Sugar"].map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
      </div>
      <Tabs defaultValue="saved">
        <TabsList>
          <TabsTrigger value="saved">Saved</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="list">Shopping list</TabsTrigger>
        </TabsList>

        <TabsContent value="saved" className="space-y-3">
          {products.slice(0, 4).map((item) => <ProductCard key={item.id} snack={item} />)}
        </TabsContent>

        <TabsContent value="recent" className="space-y-3">
          {products.slice(4, 8).map((item) => <ProductCard key={item.id} snack={item} />)}
        </TabsContent>

        <TabsContent value="list" className="space-y-3">
          <EmptyState title="Your shopping list is empty" text="Add products while browsing to build a quick list for your next trip." />
        </TabsContent>
      </Tabs>
      <Card className="bg-[#607B68] py-7 text-center text-white">
        <p className="text-2xl font-semibold">Pantry Progress</p>
        <p className="mx-auto mt-2 max-w-xs text-sm text-white/85">85% of your favorite snacks are Grade A or B.</p>
      </Card>
    </div>
  );
}
