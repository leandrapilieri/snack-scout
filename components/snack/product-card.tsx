import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { VerdictBadge } from "@/components/snack/verdict-badge";
import { ScoredSnack } from "@/lib/types";

export function ProductCard({ snack }: { snack: ScoredSnack }) {
  return (
    <Link href={`/product/${snack.id}`}>
      <Card className="space-y-3">
        <div className="flex items-start gap-3">
          <Image src={snack.image} alt={snack.name} width={56} height={56} className="rounded-xl border border-stone-100" />
          <div className="min-w-0 flex-1">
            <p className="text-sm text-stone-500">{snack.brand}</p>
            <h3 className="truncate font-semibold">{snack.name}</h3>
            <p className="text-sm text-stone-600">{snack.category}</p>
          </div>
          <VerdictBadge verdict={snack.verdict} />
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-stone-600">Score {snack.score}/100</span>
          <span className="text-stone-500">{snack.summary}</span>
        </div>
      </Card>
    </Link>
  );
}
