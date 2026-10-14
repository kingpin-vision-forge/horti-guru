"use client";

import { useState } from "react";
import { Testimonial } from "./Testimonial";

type Item = { n: number; crop: string; cropName: string; quote: string; name: string; meta: string };

/** Testimonials in a masonry of columns, with a sticky crop filter above. */
export function ResultsGrid({
  items,
  crops,
  t,
}: {
  items: Item[];
  crops: { id: string; name: string }[];
  t: { filterLabel: string; all: string; empty: string };
}) {
  const [crop, setCrop] = useState<string>("all");
  const shown = crop === "all" ? items : items.filter((i) => i.crop === crop);
  const options = [{ id: "all", name: t.all }, ...crops];

  return (
    <>
      <div className="sticky top-[var(--header-h)] z-30 border-y border-line bg-paper/95 backdrop-blur">
        <div className="wrap">
          <fieldset className="flex min-w-0 items-center gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
            <legend className="sr-only">{t.filterLabel}</legend>
            {options.map((o) => (
              <label key={o.id} className="relative shrink-0 cursor-pointer">
                <input type="radio" name="crop" value={o.id} checked={crop === o.id} onChange={() => setCrop(o.id)} className="peer sr-only" />
                <span className="inline-flex min-h-11 items-center rounded-full border border-line px-4 transition-colors duration-150 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-turmeric hover:bg-mist peer-checked:hover:bg-ink">
                  {o.name}
                </span>
              </label>
            ))}
          </fieldset>
        </div>
      </div>
      <div className="wrap section" aria-live="polite">
        {shown.length === 0 ? (
          <p className="text-slate">{t.empty}</p>
        ) : (
          <div key={crop} className="swap columns-1 gap-10 md:columns-2 lg:columns-3">
            {shown.map((i) => (
              <div key={i.n} className="mb-10 break-inside-avoid">
                <Testimonial quote={i.quote} name={i.name} meta={i.meta} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
