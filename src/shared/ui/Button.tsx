import type { ComponentProps } from "react";
import { cn } from "@/shared/lib/cn";

type ButtonProps = ComponentProps<"a"> & {
  variant?: "primary" | "outline" | "inverse" | "ghost";
  size?: "sm" | "md";
};

const VARIANTS = {
  primary: "bg-primary text-primary-fg",
  outline: "glass text-ink",
  /** For use on the always-dark contact panel. */
  inverse: "bg-white text-black",
  /** Outlined, for use on the always-dark contact panel. */
  ghost: "border border-white/25 text-white hover:border-white/60",
};

const SIZES = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-sm",
};

/** Link styled as a button — every call to action on the site navigates. */
export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-transform duration-300 hover:-translate-y-0.5",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...props}
    />
  );
}
