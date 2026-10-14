/** A rule, the quote, the attribution. No card, no quote-mark graphic. */
export function Testimonial({
  quote,
  name,
  meta,
  size = "md",
}: {
  quote: string;
  name: string;
  meta: string;
  size?: "md" | "lg";
}) {
  return (
    <figure className="border-t border-ink/80 pt-5">
      <blockquote
        className={`[overflow-wrap:anywhere] ${size === "lg" ? "text-[1.375rem] leading-snug" : "text-lg leading-relaxed"}`}
      >
        <p>{quote}</p>
      </blockquote>
      <figcaption className="mt-4 text-[0.9375rem] text-slate [overflow-wrap:anywhere]">
        <span className="block font-semibold text-ink">{name}</span>
        {meta}
      </figcaption>
    </figure>
  );
}
