"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reports once when the element first enters the viewport. `startedInView`
 * tells callers whether it was already visible on load, so they can skip
 * animating things the visitor can already see.
 */
export function useInView<T extends Element>(rootMargin = "0px 0px -15% 0px") {
  const ref = useRef<T>(null);
  const [state, setState] = useState<{ seen: boolean; startedInView: boolean | null }>({
    seen: false,
    startedInView: null,
  });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setState({ seen: true, startedInView: true });
      return;
    }
    let first = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (first) {
          first = false;
          setState({ seen: entry.isIntersecting, startedInView: entry.isIntersecting });
          if (entry.isIntersecting) io.disconnect();
          return;
        }
        if (entry.isIntersecting) {
          setState((s) => ({ ...s, seen: true }));
          io.disconnect();
        }
      },
      { rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin]);

  return { ref, ...state };
}

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
