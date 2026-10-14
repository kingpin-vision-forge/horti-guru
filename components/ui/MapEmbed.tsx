"use client";

import { useState } from "react";

/**
 * Click-to-load map. Nothing from Google loads until the visitor asks for it,
 * which keeps the page light on slow connections.
 */
export function MapEmbed({ query, t, ready }: { query: string; t: { show: string; note: string; title: string }; ready: boolean }) {
  const [on, setOn] = useState(false);
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-mist md:aspect-[21/9]">
      {on ? (
        <iframe title={t.title} src={src} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
          {ready ? (
            <>
              <button type="button" onClick={() => setOn(true)} className="btn btn-outline bg-paper">
                {t.show}
              </button>
              <span className="text-sm text-slate">{t.note}</span>
            </>
          ) : (
            <span className="text-sm text-slate">[MAP: {query}]</span>
          )}
        </div>
      )}
    </div>
  );
}
