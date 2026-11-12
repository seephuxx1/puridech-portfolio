import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

/** Frosted glass panel (see `.glass` in globals.css). */
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("glass rounded-2xl", className)}>{children}</div>;
}
