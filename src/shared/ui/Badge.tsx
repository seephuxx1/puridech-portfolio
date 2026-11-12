import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-card-border bg-accent-soft px-2.5 py-1 font-mono text-xs text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
