"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { localeNames, locales, type Locale } from "@/lib/i18n";

export function LangSwitcher({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const listId = useId();
  const rest = pathname.replace(/^\/(en|kn|hi)(?=\/|$)/, "");

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        root.current?.querySelector("button")?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Clear the outgoing fade once the new language has rendered.
  useEffect(() => {
    document.getElementById("main")?.removeAttribute("data-leaving");
    setOpen(false);
  }, [lang]);

  return (
    <div ref={root} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${label}: ${localeNames[lang]}`}
        onClick={() => setOpen((v) => !v)}
        className="flex min-h-11 items-center gap-1.5 rounded px-3 text-[0.9375rem] font-semibold hover:bg-mist"
      >
        {localeNames[lang]}
        <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" className={open ? "rotate-180" : ""}>
          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      <ul
        id={listId}
        hidden={!open}
        className="absolute right-0 top-full mt-1 min-w-40 rounded-lg border border-line bg-white py-1 shadow-float"
      >
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={`/${l}${rest}`}
              hrefLang={l}
              lang={l}
              aria-current={l === lang ? "true" : undefined}
              onClick={() => {
                if (l !== lang) document.getElementById("main")?.setAttribute("data-leaving", "");
                setOpen(false);
              }}
              className="flex min-h-11 items-center justify-between gap-4 px-4 text-ink no-underline hover:bg-mist aria-[current]:font-semibold"
            >
              {localeNames[l]}
              {l === lang && (
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="m2.5 7.5 3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
