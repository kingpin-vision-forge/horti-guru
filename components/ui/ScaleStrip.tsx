"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "@/lib/useInView";

type Item = { value: string; label: string };

const DURATION = 600;

function parse(value: string) {
  const m = value.match(/^(\d[\d,]*)(\+?)$/);
  return m ? { n: Number(m[1].replace(/,/g, "")), suffix: m[2] } : null;
}

function Figure({ value, run }: { value: string; run: boolean | null }) {
  const parsed = parse(value);
  const [shown, setShown] = useState(value);

  useEffect(() => {
    if (!parsed || run === null) return;
    if (!run) {
      // Below the fold: hold at zero until the strip is scrolled to.
      setShown(`0${parsed.suffix}`);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION);
      const eased = 1 - Math.pow(1 - p, 3);
      setShown(`${Math.round(parsed.n * eased).toLocaleString("en-IN")}${parsed.suffix}`);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  return <>{shown}</>;
}

/** Four figures in a row. Numbers count up once, the first time the strip scrolls into view. */
export function ScaleStrip({ items, heading }: { items: Item[]; heading: string }) {
  const { ref, seen, startedInView } = useInView<HTMLDListElement>();
  // null: leave the server-rendered value alone. false: armed. true: counting.
  const run = startedInView === null || startedInView || prefersReducedMotion() ? null : seen;

  return (
    <section aria-label={heading} className="bg-mist">
      <div className="wrap py-12 sm:py-16">
        <dl ref={ref} className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex min-w-0 flex-col-reverse">
              <dt className="mt-2 text-[0.9375rem] leading-snug text-slate">{item.label}</dt>
              <dd
                className={`num font-bold leading-none tracking-[-0.03em] text-ink ${
                  item.value.startsWith("[") ? "text-base [overflow-wrap:anywhere]" : "text-[clamp(2.25rem,7vw,3.75rem)]"
                }`}
              >
                <Figure value={item.value} run={run} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
