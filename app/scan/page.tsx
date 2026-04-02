import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ScanPage() {
  return (
    <div className="container-pad space-y-4">
      <h1 className="text-2xl font-semibold">Scan snack barcode</h1>
      <p className="text-sm text-stone-600">Camera scanner flow is ready for barcode SDK integration in the next iteration.</p>

      <Card className="space-y-3">
        <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-stone-300 bg-stone-50">
          <div className="text-center">
            <p className="font-medium">Scanner placeholder</p>
            <p className="text-sm text-stone-600">Point camera at barcode to score instantly.</p>
          </div>
        </div>
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
