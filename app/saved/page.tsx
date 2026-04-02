import { EmptyState } from "@/components/snack/empty-state";
import { ProductCard } from "@/components/snack/product-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/lib/data/products";

export default function SavedPage() {
  return (
    <div className="container-pad">
      <h1 className="mb-4 text-2xl font-semibold">Saved & Lists</h1>
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
    </div>
  );
}
