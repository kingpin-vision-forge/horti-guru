"use client";

import { useState } from "react";
import { useInView } from "@/lib/useInView";

type Stage = { label: string; points: string[] };

/**
 * The season bar, expanded: each stage is a tab that reveals what the advisory
 * covers at that point. Segments draw once when scrolled into view.
 */
export function SeasonExplorer({ stages, label }: { stages: Stage[]; label: string }) {
  const [active, setActive] = useState(0);
  const { ref, seen } = useInView<HTMLDivElement>();

  const onKey = (e: React.KeyboardEvent) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (active + delta + stages.length) % stages.length;
    setActive(next);
    document.getElementById(`stage-tab-${next}`)?.focus();
  };

  return (
    <div ref={ref} className="season" data-draw="view" data-inview={seen ? "" : undefined}>
      <div role="tablist" aria-label={label} onKeyDown={onKey} className="grid grid-cols-5 gap-[3px]">
        {stages.map((s, i) => (
          <button
            key={s.label}
            id={`stage-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls="stage-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className="group flex min-h-11 flex-col items-stretch gap-2 text-left"
          >
            <span className="season-seg block h-3.5" data-active={i === active ? "" : undefined} style={{ "--i": i, flex: "none", borderRadius: 3 } as React.CSSProperties}>
              <span className="season-fill block" />
            </span>
            <span
              className={`text-[0.8125rem] leading-tight sm:text-[0.9375rem] ${
                i === active ? "font-semibold text-ink" : "text-slate group-hover:text-ink"
              }`}
            >
              {/* Phones show the stage number; the panel names the active stage. */}
              <span className="num sm:hidden" aria-hidden="true">
                {i + 1}
              </span>
              <span className="sr-only sm:not-sr-only">{s.label}</span>
            </span>
          </button>
        ))}
      </div>
      <div id="stage-panel" role="tabpanel" aria-labelledby={`stage-tab-${active}`} className="mt-8 min-h-[9rem]">
        <h3 key={`h${active}`} className="swap mb-4 sm:sr-only">
          <span className="num">{active + 1}.</span> {stages[active].label}
        </h3>
        <ul key={active} className="swap max-w-[60ch] space-y-3">
          {stages[active].points.map((p) => (
            <li key={p} className="flex gap-3">
              <Tick />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="mt-1 shrink-0">
      <path d="m3 9.5 4 4 8-9" fill="none" stroke="var(--turmeric)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
