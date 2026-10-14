"use client";

import { useInView } from "@/lib/useInView";

/** A div that gains `data-inview` the first time it scrolls into view. CSS does the rest. */
export function InView({ children, ...props }: React.HTMLAttributes<HTMLDivElement> & Record<`data-${string}`, string>) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} data-inview={seen ? "" : undefined} {...props}>
      {children}
    </div>
  );
}
