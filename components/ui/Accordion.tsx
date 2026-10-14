"use client";

import { useEffect, useId, useState } from "react";

export type AccordionItem = {
  id: string;
  /** Always visible: name, one line, price. */
  summary: React.ReactNode;
  /** Revealed on open. */
  body: React.ReactNode;
};

/**
 * Disclosure list. Each row is a real <button aria-expanded>. Opening fades the
 * panel in (opacity and a 4px shift only), so nothing animates layout.
 */
export function Accordion({
  items,
  headingLevel = 3,
  defaultOpen,
}: {
  items: AccordionItem[];
  headingLevel?: 2 | 3;
  defaultOpen?: string;
}) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? null);
  const base = useId();
  const H = `h${headingLevel}` as "h2" | "h3";

  // Open the row a link points at, e.g. /consultancy#nutrient.
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && items.some((i) => i.id === hash)) setOpen(hash);
  }, [items]);

  return (
    <div className="border-b border-line">
      {items.map((item) => {
        const isOpen = open === item.id;
        const btn = `${base}-${item.id}-b`;
        const panel = `${base}-${item.id}-p`;
        return (
          <div key={item.id} id={item.id} className="scroll-mt-24 border-t border-line">
            <H className="text-base font-normal tracking-normal">
              <button
                id={btn}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panel}
                onClick={() => setOpen(isOpen ? null : item.id)}
                className="flex w-full items-start gap-4 py-5 text-left hover:bg-mist/50"
              >
                <span className="min-w-0 flex-1">{item.summary}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className={`mt-1 shrink-0 transition-transform duration-[240ms] ease-out ${isOpen ? "rotate-45" : ""}`}
                >
                  <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </button>
            </H>
            <div id={panel} role="region" aria-labelledby={btn} hidden={!isOpen} className="accordion-panel pb-6">
              {item.body}
            </div>
          </div>
        );
      })}
    </div>
  );
}
