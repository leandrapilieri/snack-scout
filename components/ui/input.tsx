import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "flex h-11 w-full rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm placeholder:text-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
      {...props}
    />
  );
}
