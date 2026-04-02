import { Card } from "@/components/ui/card";

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <Card className="py-10 text-center">
      <p className="font-semibold">{title}</p>
      <p className="mt-1 text-sm text-stone-600">{text}</p>
    </Card>
  );
}
