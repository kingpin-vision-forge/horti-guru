"use client";

import Link from "next/link";
import { useState } from "react";
import { ADVISORY_EXTRA_ACRE, ADVISORY_FIRST_ACRE, advisoryTotal, inr, perDay } from "@/lib/pricing";

export type CalculatorText = {
  heading: string;
  acresLabel: string;
  less: string;
  more: string;
  firstAcre: string;
  /** "{n} additional acres" */
  extraAcres: string;
  extraAcre: string;
  total: string;
  worksOut: string;
  /** "{amount} a day" */
  perDay: string;
  /** "Continue with {n} acres" */
  cta: string;
  ctaOne: string;
};

const MAX = 100;

export function AcreageCalculator({ t, checkoutHref }: { t: CalculatorText; checkoutHref: string }) {
  const [acres, setAcres] = useState(3);
  const extra = acres - 1;
  const total = advisoryTotal(acres);
  const set = (n: number) => setAcres(Math.min(MAX, Math.max(1, n)));

  const stepBtn =
    "flex size-12 items-center justify-center rounded-lg border border-line bg-white text-2xl leading-none text-ink hover:bg-mist active:bg-line disabled:opacity-40";

  return (
    <section aria-labelledby="calc" className="rounded-xl bg-mist p-6 sm:p-10">
      <h2 id="calc" className="text-[1.375rem]">
        {t.heading}
      </h2>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <label htmlFor="acres" className="text-lg font-semibold">
          {t.acresLabel}
        </label>
        <div className="flex items-center gap-2">
          <button type="button" className={stepBtn} onClick={() => set(acres - 1)} disabled={acres <= 1} aria-label={t.less}>
            −
          </button>
          <input
            id="acres"
            inputMode="numeric"
            pattern="[0-9]*"
            value={acres}
            onChange={(e) => {
              const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
              if (!Number.isNaN(n)) set(n);
            }}
            className="num h-12 w-20 rounded-lg border border-line bg-white text-center text-2xl font-bold"
          />
          <button type="button" className={stepBtn} onClick={() => set(acres + 1)} disabled={acres >= MAX} aria-label={t.more}>
            +
          </button>
        </div>
      </div>

      <dl className="num mt-8 text-lg">
        <div className="flex justify-between gap-4 border-t border-line py-3">
          <dt>{t.firstAcre}</dt>
          <dd>{inr(ADVISORY_FIRST_ACRE)}</dd>
        </div>
        <div className="flex justify-between gap-4 border-t border-line py-3">
          <dt>{extra === 1 ? t.extraAcre : t.extraAcres.replace("{n}", String(extra))}</dt>
          <dd>{inr(extra * ADVISORY_EXTRA_ACRE)}</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 border-t-2 border-ink pt-4">
          <dt className="font-semibold">{t.total}</dt>
          <dd key={`t${total}`} className="swap text-[2rem] font-bold leading-none" aria-live="polite">
            {inr(total)}
          </dd>
        </div>
        <div className="flex items-baseline justify-between gap-4 pt-3 text-slate">
          <dt>{t.worksOut}</dt>
          <dd key={`d${total}`} className="swap font-semibold text-ink">
            {t.perDay.replace("{amount}", inr(perDay(total)))}
          </dd>
        </div>
      </dl>

      <Link href={`${checkoutHref}&acres=${acres}`} className="btn btn-primary mt-8 w-full">
        {acres === 1 ? t.ctaOne : t.cta.replace("{n}", String(acres))}
      </Link>
    </section>
  );
}
