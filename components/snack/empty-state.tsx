import { Card } from "@/components/ui/card";

export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <Card className="py-10 text-center">
      <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-muted" />
      <p className="font-semibold">{title}</p>
      <p className="mx-auto mt-1 max-w-sm text-sm text-stone-600">{text}</p>
    </Card>
  );
}
