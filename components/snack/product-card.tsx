import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { VerdictBadge } from "@/components/snack/verdict-badge";
import { ScoredSnack } from "@/lib/types";

export function ProductCard({ snack }: { snack: ScoredSnack }) {
  const grade = snack.verdict === "Great" ? "A" : snack.verdict === "Okay" ? "B" : "C";

  return (
    <Link href={`/product/${snack.id}`}>
      <Card className="space-y-2 rounded-2xl border-[#dddacf] bg-[#FAF9F5] transition-transform hover:-translate-y-0.5">
        <div className="flex items-center gap-3">
          <Image src={snack.image} alt={snack.name} width={64} height={64} className="rounded-xl border border-stone-200" />
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-[22px] font-semibold leading-tight">{snack.name}</h3>
            <p className="text-xs uppercase tracking-widest text-stone-500">{snack.brand}</p>
            <div className="mt-1 flex gap-1 text-[10px] uppercase tracking-wide text-stone-500">
              <span>Sugar {snack.addedSugarG}g</span>
              <span>•</span>
              <span>Fiber {snack.fiberG}g</span>
            </div>
          </div>
          <div className="rounded-xl bg-[#5D876F] px-3 py-2 text-lg font-bold text-white">{grade}</div>
        </div>
        <div className="flex items-center justify-between gap-2 text-xs text-stone-500">
          <span>{snack.summary}</span>
          <VerdictBadge verdict={snack.verdict} />
          </div>
      </Card>
    </Link>
  );
}
