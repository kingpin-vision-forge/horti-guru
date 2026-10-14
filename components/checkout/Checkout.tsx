"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CheckoutText } from "@/content/pages/checkout";
import { whatsappMessageHref } from "@/lib/whatsapp";
import { advisoryTotal, inr } from "@/lib/pricing";

export type CheckoutService = {
  id: string;
  name: string;
  price: number;
  /** Advisory is priced per acre with a discount after the first. */
  perAcre?: boolean;
  travel?: boolean;
};

type Props = {
  t: CheckoutText;
  services: CheckoutService[];
  crops: string[];
  upiId: string;
  upiReady: boolean;
  qrSrc: string | null;
  whatsappReady: boolean;
  confirmationWindow: string;
  notConfigured: string;
};

type State = {
  step: 0 | 1 | 2 | 3 | 4;
  service: string;
  qty: number;
  name: string;
  phone: string;
  village: string;
  crop: string;
  ref: string;
  utr: string;
  screenshot: boolean;
};

const KEY = "hg-checkout";
const MAX = 100;

function makeRef() {
  const d = new Date();
  const ymd = `${String(d.getFullYear()).slice(2)}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let tail = "";
  for (let i = 0; i < 4; i++) tail += alphabet[Math.floor(Math.random() * alphabet.length)];
  return `HG-${ymd}-${tail}`;
}

export function Checkout({ t, services, crops, upiId, upiReady, qrSrc, whatsappReady, confirmationWindow, notConfigured }: Props) {
  const params = useSearchParams();
  const initialService = services.some((s) => s.id === params.get("service")) ? params.get("service")! : services[0].id;
  const initialQty = Math.min(MAX, Math.max(1, parseInt(params.get("acres") ?? params.get("qty") ?? "1", 10) || 1));
  const cropParam = params.get("crop");

  const [s, setS] = useState<State>({
    step: 0,
    service: initialService,
    qty: initialQty,
    name: "",
    phone: "",
    village: "",
    crop: "",
    ref: "",
    utr: "",
    screenshot: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const first = useRef(true);

  // Restore an order in progress. Phones often reload the page after a trip to a UPI app.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as State;
        // A link that names a different service starts a fresh order.
        if (!params.get("service") || parsed.service === params.get("service")) setS(parsed);
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(KEY, JSON.stringify(s));
    } catch {}
  }, [s]);

  // Move focus to the new step's heading, but not on first load.
  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    headingRef.current?.focus();
    headingRef.current?.scrollIntoView({ block: "nearest" });
  }, [s.step]);

  useEffect(() => {
    if (cropParam && !s.crop) {
      const match = crops.find((c) => c.toLowerCase() === cropParam.toLowerCase());
      if (match) setS((x) => ({ ...x, crop: match }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const svc = services.find((x) => x.id === s.service) ?? services[0];
  const total = svc.perAcre ? advisoryTotal(s.qty) : svc.price * s.qty;
  const set = (patch: Partial<State>) => setS((x) => ({ ...x, ...patch }));
  const go = (step: State["step"]) => {
    setErrors({});
    // The reference is fixed once the visitor reaches payment, so it can go in the UPI note.
    setS((x) => ({ ...x, step, ref: step >= 2 && !x.ref ? makeRef() : x.ref }));
  };

  const upiParams = useMemo(
    () => `pa=${encodeURIComponent(upiId)}&pn=${encodeURIComponent("Horti Guru")}&am=${total}&cu=INR&tn=${encodeURIComponent(s.ref)}`,
    [upiId, total, s.ref],
  );

  const validateDetails = () => {
    const e: Record<string, string> = {};
    if (!s.name.trim()) e.name = t.required;
    if (s.phone.replace(/\D/g, "").length < 10) e.phone = s.phone.trim() ? t.phoneInvalid : t.required;
    if (!s.village.trim()) e.village = t.required;
    if (!s.crop) e.crop = t.required;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validateProof = () => {
    const e: Record<string, string> = {};
    const utr = s.utr.replace(/\s/g, "");
    if (utr && !/^\d{12}$/.test(utr)) e.utr = t.utrInvalid;
    else if (!utr && !s.screenshot) e.utr = t.needProof;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const message = whatsappMessageHref(t.messageTitle, [
    [t.summary.ref, s.ref],
    [t.summary.service, svc.name],
    [t.summary.qty, `${s.qty} ${svc.perAcre ? t.acres.toLowerCase() : ""}`.trim()],
    [t.summary.amount, inr(total)],
    [t.summary.name, s.name],
    [t.summary.phone, s.phone],
    [t.summary.village, s.village],
    [t.summary.crop, s.crop],
    [t.summary.utr, s.utr.replace(/\s/g, "") || (s.screenshot ? t.summary.proofScreenshot : "")],
  ]);

  const field = "mt-2 block h-12 w-full rounded-lg border bg-white px-4 text-base text-ink transition-colors duration-150";
  const border = (k: string) => (errors[k] ? "border-[#B42318]" : "border-line");
  const err = (k: string) =>
    errors[k] ? (
      <p id={`${k}-err`} className="swap mt-2 text-sm font-semibold text-[#B42318]">
        {errors[k]}
      </p>
    ) : null;
  const stepBtn =
    "flex size-12 items-center justify-center rounded-lg border border-line bg-white text-2xl leading-none text-ink hover:bg-mist active:bg-line disabled:opacity-40";

  return (
    <div className="mx-auto max-w-2xl">
      {/* Progress: the season bar's visual language, applied to four steps */}
      {s.step < 4 && (
        <div className="mb-10">
          <p className="text-sm text-slate">{t.stepOf.replace("{n}", String(s.step + 1))}</p>
          <ol className="mt-3 grid grid-cols-4 gap-[3px]">
            {t.steps.map((label, i) => (
              <li key={label} aria-current={i === s.step ? "step" : undefined}>
                <span
                  className={`block h-2 rounded-[2px] transition-colors duration-200 ${
                    i < s.step ? "bg-indigo" : i === s.step ? "bg-turmeric" : "bg-mist"
                  }`}
                />
                <span className={`mt-2 hidden text-sm sm:block ${i === s.step ? "font-semibold text-ink" : "text-slate"}`}>{label}</span>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div key={s.step} className="step-in">
        {s.step === 0 && (
          <section aria-labelledby="step-h">
            <h2 id="step-h" ref={headingRef} tabIndex={-1} className="text-[1.75rem] outline-none">
              {t.steps[0]}
            </h2>
            <div className="mt-8 grid gap-6">
              <div>
                <label htmlFor="svc" className="font-semibold">
                  {t.service}
                </label>
                <select id="svc" value={s.service} onChange={(e) => set({ service: e.target.value, qty: 1 })} className={`${field} border-line`}>
                  {services.map((x) => (
                    <option key={x.id} value={x.id}>
                      {x.name}
                    </option>
                  ))}
                </select>
                {svc.travel && <p className="mt-3 font-semibold">{t.travelNote}</p>}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <label htmlFor="qty" className="font-semibold">
                  {svc.perAcre ? t.acres : t.quantity}
                </label>
                <div className="flex items-center gap-2">
                  <button type="button" className={stepBtn} onClick={() => set({ qty: Math.max(1, s.qty - 1) })} disabled={s.qty <= 1} aria-label={t.less}>
                    −
                  </button>
                  <input
                    id="qty"
                    inputMode="numeric"
                    value={s.qty}
                    onChange={(e) => {
                      const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
                      if (!Number.isNaN(n)) set({ qty: Math.min(MAX, Math.max(1, n)) });
                    }}
                    className="num h-12 w-20 rounded-lg border border-line bg-white text-center text-2xl font-bold"
                  />
                  <button type="button" className={stepBtn} onClick={() => set({ qty: Math.min(MAX, s.qty + 1) })} disabled={s.qty >= MAX} aria-label={t.more}>
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-4 border-t-2 border-ink pt-4">
                <span className="text-lg font-semibold">{t.total}</span>
                <span key={total} className="swap num text-[2.25rem] font-bold leading-none" aria-live="polite">
                  {inr(total)}
                </span>
              </div>
              <p className="text-slate">{t.noAdvance}</p>
            </div>
            <div className="mt-10 flex justify-end">
              <button type="button" onClick={() => go(1)} className="btn btn-primary w-full sm:w-auto">
                {t.next}
              </button>
            </div>
          </section>
        )}

        {s.step === 1 && (
          <section aria-labelledby="step-h">
            <h2 id="step-h" ref={headingRef} tabIndex={-1} className="text-[1.75rem] outline-none">
              {t.steps[1]}
            </h2>
            <p className="mt-2 text-slate">{t.detailsIntro}</p>
            <form
              noValidate
              className="mt-8 grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (validateDetails()) go(2);
              }}
            >
              {(
                [
                  ["name", t.summary.name, "text", "name"],
                  ["phone", t.summary.phone, "tel", "tel"],
                  ["village", t.village, "text", "address-level2"],
                ] as const
              ).map(([k, label, type, ac]) => (
                <div key={k}>
                  <label htmlFor={k} className="font-semibold">
                    {label} <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id={k}
                    type={type}
                    autoComplete={ac}
                    inputMode={type === "tel" ? "tel" : undefined}
                    value={s[k]}
                    aria-invalid={errors[k] ? true : undefined}
                    aria-describedby={errors[k] ? `${k}-err` : undefined}
                    onChange={(e) => set({ [k]: e.target.value } as Partial<State>)}
                    className={`${field} ${border(k)}`}
                  />
                  {err(k)}
                </div>
              ))}
              <div>
                <label htmlFor="crop" className="font-semibold">
                  {t.summary.crop} <span aria-hidden="true">*</span>
                </label>
                <select
                  id="crop"
                  value={s.crop}
                  aria-invalid={errors.crop ? true : undefined}
                  aria-describedby={errors.crop ? "crop-err" : undefined}
                  onChange={(e) => set({ crop: e.target.value })}
                  className={`${field} ${border("crop")}`}
                >
                  <option value="" />
                  {crops.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                {err("crop")}
              </div>
              <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <button type="button" onClick={() => go(0)} className="btn btn-outline">
                  {t.back}
                </button>
                <button type="submit" className="btn btn-primary">
                  {t.next}
                </button>
              </div>
            </form>
          </section>
        )}

        {s.step === 2 && (
          <section aria-labelledby="step-h">
            <h2 id="step-h" ref={headingRef} tabIndex={-1} className="text-[1.75rem] outline-none">
              {t.steps[2]}
            </h2>
            <p className="mt-2 text-slate">{t.payIntro}</p>

            <div className="mt-8 rounded-xl border border-line bg-white p-6 text-center sm:p-10">
              <p className="text-slate">{t.amount}</p>
              <p className="num mt-1 text-[clamp(3rem,12vw,4.5rem)] font-bold leading-none tracking-[-0.03em]">{inr(total)}</p>
              <p className="mt-4 text-sm text-slate">{t.reference}</p>
              <p className="num font-semibold tracking-wide">{s.ref}</p>

              <div className="mx-auto mt-8 w-full max-w-[16rem]">
                <div className="aspect-square w-full rounded-lg border border-line bg-white p-3">
                  {qrSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={qrSrc} alt={`${t.scan}: ${upiId}`} width={480} height={480} className="h-full w-full object-contain" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-mist text-sm text-slate">[UPI_QR]</div>
                  )}
                </div>
                <p className="mt-3 text-sm text-slate">{t.scan}</p>
              </div>

              <div className="mt-8 border-t border-line pt-6">
                <p className="text-sm text-slate">{t.upiId}</p>
                <div className="mt-2 flex items-center justify-center gap-3">
                  <span className="num select-all text-lg font-semibold [overflow-wrap:anywhere]">{upiId}</span>
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(upiId);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                      } catch {}
                    }}
                    className="btn btn-outline min-h-11 px-4 py-2"
                  >
                    <span aria-live="polite">{copied ? t.copied : t.copy}</span>
                  </button>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm text-slate">{t.openApp}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  {(
                    [
                      ["Google Pay", `tez://upi/pay?${upiParams}`],
                      ["PhonePe", `phonepe://pay?${upiParams}`],
                      [t.anyApp, `upi://pay?${upiParams}`],
                    ] as const
                  ).map(([label, link]) => (
                    <a
                      key={label}
                      href={upiReady ? link : undefined}
                      aria-disabled={!upiReady}
                      className={`btn btn-outline ${upiReady ? "" : "pointer-events-none opacity-50"}`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <p className="mt-6 text-center font-semibold">{t.reassurance.replace("{window}", confirmationWindow)}</p>

            <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
              <button type="button" onClick={() => go(1)} className="btn btn-outline">
                {t.back}
              </button>
              <button type="button" onClick={() => go(3)} className="btn btn-primary">
                {t.paid}
              </button>
            </div>
          </section>
        )}

        {s.step === 3 && (
          <section aria-labelledby="step-h">
            <h2 id="step-h" ref={headingRef} tabIndex={-1} className="text-[1.75rem] outline-none">
              {t.steps[3]}
            </h2>
            <p className="mt-2 text-slate">{t.confirmIntro}</p>
            <form
              noValidate
              className="mt-8 grid gap-6"
              onSubmit={(e) => {
                e.preventDefault();
                if (validateProof()) go(4);
              }}
            >
              <div>
                <label htmlFor="utr" className="font-semibold">
                  {t.utr}
                </label>
                <p id="utr-hint" className="mt-1 text-sm text-slate">
                  {t.utrHint}
                </p>
                <input
                  id="utr"
                  inputMode="numeric"
                  autoComplete="off"
                  value={s.utr}
                  maxLength={14}
                  aria-invalid={errors.utr ? true : undefined}
                  aria-describedby={`utr-hint${errors.utr ? " utr-err" : ""}`}
                  onChange={(e) => set({ utr: e.target.value })}
                  className={`${field} ${border("utr")} num text-lg tracking-wider`}
                />
                {err("utr")}
              </div>

              <p className="flex items-center gap-4 text-slate" aria-hidden="true">
                <span className="h-px flex-1 bg-line" />
                {t.or}
                <span className="h-px flex-1 bg-line" />
              </p>

              <label className="flex cursor-pointer items-start gap-4 rounded-xl border border-line bg-white p-5 has-[:checked]:border-ink">
                <input
                  type="checkbox"
                  checked={s.screenshot}
                  onChange={(e) => set({ screenshot: e.target.checked })}
                  className="mt-1 size-6 shrink-0 accent-[var(--indigo)]"
                />
                <span>
                  <span className="block text-lg font-semibold">{t.screenshot}</span>
                  <span className="block text-slate">{t.screenshotHint}</span>
                </span>
              </label>

              <div className="mt-4 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
                <button type="button" onClick={() => go(2)} className="btn btn-outline">
                  {t.back}
                </button>
                <button type="submit" className="btn btn-primary">
                  {t.confirm}
                </button>
              </div>
            </form>
          </section>
        )}

        {s.step === 4 && (
          <section aria-labelledby="step-h">
            <h2 id="step-h" ref={headingRef} tabIndex={-1} className="text-[2rem] outline-none">
              {t.doneHeading}
            </h2>
            <div className="mt-8 rounded-xl border border-line bg-white p-6 text-center sm:p-10">
              <p className="text-slate">{t.doneRef}</p>
              <p className="num mt-2 text-[clamp(2rem,9vw,3.25rem)] font-bold leading-none tracking-wide">{s.ref}</p>
              <p className="num mt-4 text-lg">
                {svc.name}, {inr(total)}
              </p>
            </div>

            <h3 className="mt-10">{t.nextHeading}</h3>
            <ol className="mt-4 space-y-4">
              {t.nextSteps.map((line, i) => (
                <li key={line} className="grid grid-cols-[2rem_1fr] gap-3">
                  <span className="num font-bold">{i + 1}.</span>
                  <span>{line.replace("{window}", confirmationWindow)}</span>
                </li>
              ))}
            </ol>

            {whatsappReady ? (
              <a href={message} target="_blank" rel="noopener" className="btn btn-primary mt-8 w-full">
                {t.sendWhatsapp}
              </a>
            ) : (
              <p role="status" className="mt-8 rounded-lg bg-mist p-4">
                {notConfigured}
              </p>
            )}
            {s.screenshot && <p className="mt-4 text-center font-semibold">{t.attachNote}</p>}

            <div className="mt-10 text-center">
              <button
                type="button"
                className="link text-slate"
                onClick={() => {
                  setS((x) => ({ ...x, step: 0, ref: makeRef(), utr: "", screenshot: false }));
                }}
              >
                {t.newOrder}
              </button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

