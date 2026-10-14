"use client";

import { useEffect, useRef } from "react";

/** Sticky header that picks up a backdrop blur once the page has scrolled 80px. */
export function HeaderScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      el.toggleAttribute("data-scrolled", window.scrollY > 80);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header ref={ref} className="site-header sticky top-0 z-40 border-b border-line bg-paper">
      {children}
    </header>
  );
}
