import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { VerdictBadge } from "@/components/snack/verdict-badge";
import { ScoredSnack } from "@/lib/types";

export function ProductCard({ snack }: { snack: ScoredSnack }) {
  return (
    <Link href={`/product/${snack.id}`}>
      <Card className="space-y-3 transition-transform hover:-translate-y-0.5">
        <div className="flex items-start gap-3">
          <Image src={snack.image} alt={snack.name} width={60} height={60} className="rounded-xl border border-stone-100" />
          <div className="min-w-0 flex-1">
            <p className="text-sm text-stone-500">{snack.brand}</p>
            <h3 className="truncate text-[15px] font-semibold">{snack.name}</h3>
            <p className="text-sm text-stone-600">{snack.category}</p>
          </div>
          <VerdictBadge verdict={snack.verdict} />
        </div>
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="text-stone-600">Score {snack.score}/100</span>
          <span className="max-w-[62%] truncate text-right text-stone-500">{snack.summary}</span>
        </div>
      </Card>
    </Link>
  );
}
