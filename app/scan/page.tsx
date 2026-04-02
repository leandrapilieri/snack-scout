import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ScanPage() {
  return (
    <div className="container-pad space-y-4">
      <div className="overflow-hidden rounded-3xl border border-stone-300 bg-black">
        <div className="relative h-[360px] bg-[url('/products/snack-16.svg')] bg-cover bg-center">
          <div className="mx-auto mt-4 w-fit rounded-xl bg-white/90 px-4 py-2 text-sm font-semibold">✅ Scan Successful</div>
          <div className="absolute bottom-0 left-0 right-0 bg-black/45 p-3 text-white">
            <div className="mb-2 flex items-center justify-between text-sm">
              <p>Recent Scans</p>
              <p className="text-xs underline">View All</p>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["snack-10.svg", "snack-7.svg", "snack-13.svg"].map((image) => (
                <div key={image} className="rounded-lg bg-white/90 p-1">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/products/${image}`} alt={image} className="h-14 w-full rounded object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Card className="space-y-2">
        <p className="font-medium">Scanner flow placeholder</p>
        <p className="text-sm text-stone-600">Barcode SDK is not connected yet. UI is structured and ready for integration.</p>
        <Button className="w-full" disabled>
          Launch scanner (coming soon)
        </Button>
      </Card>

      <div className="grid grid-cols-1 gap-2">
        <Button variant="secondary" asChild>
          <Link href="/search">Search by name</Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="/upload-label">Upload label photo</Link>
        </Button>
      </div>
    </div>
  );
}
