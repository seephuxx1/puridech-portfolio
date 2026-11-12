import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

type PageContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

/** A full-width page section with the site's max width and vertical rhythm. */
export function PageContainer({ id, children, className }: PageContainerProps) {
  return (
    <section id={id} className={cn("scroll-mt-16 border-t border-line lg:scroll-mt-0", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 py-24 sm:py-28 lg:px-10">{children}</div>
    </section>
  );
}
