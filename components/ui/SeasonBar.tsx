import { monthName, type Stage } from "@/lib/season";
import type { Locale } from "@/lib/i18n";
import { InView } from "./InView";

type Props = {
  lang: Locale;
  stages: Stage[];
  caption: string;
  /** Index of the stage to fill in turmeric. */
  active?: number;
  activeLabel?: string;
  /** "load": draws once on page load (hero only). "view": draws when scrolled into view. */
  draw?: "load" | "view" | "none";
  className?: string;
};

function range(lang: Locale, { start, months }: Stage) {
  const end = ((start + months - 2) % 12) + 1;
  return months === 1 ? monthName(lang, start) : `${monthName(lang, start)}–${monthName(lang, end)}`;
}

export function SeasonBar({ lang, stages, caption, active, activeLabel, draw = "none", className = "" }: Props) {
  const summary = stages.map((s) => `${s.label}: ${range(lang, s)}`).join("; ");
  const late = active === stages.length - 1;

  const body = (
    <>
      {activeLabel && active !== undefined && (
        <div className="season-now" aria-hidden="true">
          {stages.map((s, i) => (
            <span
              key={s.label}
              className="relative"
              style={{ "--m": s.months } as React.CSSProperties}
            >
              {i === active && (
                <span
                  className={`absolute bottom-0 flex items-end gap-1.5 whitespace-nowrap text-[0.8125rem] font-semibold text-ink ${late ? "right-0" : "left-0"}`}
                >
                  {activeLabel}
                </span>
              )}
              &nbsp;
            </span>
          ))}
        </div>
      )}
      <div className="season-track" role="img" aria-label={`${caption}. ${summary}.`}>
        {stages.map((s, i) => (
          <div
            key={s.label}
            className="season-seg"
            data-active={i === active ? "" : undefined}
            style={{ "--m": s.months, "--i": i } as React.CSSProperties}
          >
            <div className="season-fill" />
          </div>
        ))}
      </div>
      <div className="season-labels" aria-hidden="true">
        {stages.map((s, i) => (
          <span key={s.label} className="season-label" style={{ "--m": s.months, "--i": i } as React.CSSProperties}>
            <b>{s.label}</b>
            <span className="num">{range(lang, s)}</span>
          </span>
        ))}
      </div>
      <p className="mt-3 text-sm text-slate">{caption}</p>
    </>
  );

  if (draw === "view") {
    return (
      <InView className={`season ${className}`} data-draw="view">
        {body}
      </InView>
    );
  }
  return (
    <div className={`season ${className}`} data-draw={draw}>
      {body}
    </div>
  );
}
