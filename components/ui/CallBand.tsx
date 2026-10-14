import Link from "next/link";
import { href, type Locale } from "@/lib/i18n";

/** Closing band that keeps the ₹250 entry point in view. */
export function CallBand({ lang, text, cta }: { lang: Locale; text: string; cta: string }) {
  return (
    <section className="bg-mist">
      <div className="wrap flex flex-col gap-6 py-14 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-[28ch] text-[clamp(1.375rem,3vw,1.875rem)] font-semibold leading-tight tracking-[-0.015em]">{text}</p>
        <Link href={`${href(lang, "/checkout")}?service=call`} className="btn btn-primary shrink-0">
          {cta}
        </Link>
      </div>
    </section>
  );
}
