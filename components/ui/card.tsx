import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-2xl border border-stone-200/80 bg-card p-4 shadow-[0_8px_30px_rgba(40,40,40,0.05)]", className)}
      {...props}
    />
  );
}
