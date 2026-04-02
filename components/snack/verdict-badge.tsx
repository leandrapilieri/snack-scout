import { Badge } from "@/components/ui/badge";
import { Verdict } from "@/lib/types";

const styles: Record<Verdict, string> = {
  Great: "bg-primary/15 text-primary",
  Okay: "bg-caution/20 text-caution",
  Skip: "bg-danger/20 text-danger"
};

export function VerdictBadge({ verdict }: { verdict: Verdict }) {
  return <Badge className={styles[verdict]}>{verdict}</Badge>;
}
