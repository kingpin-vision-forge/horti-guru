/** Renders long-form prose: "## " lines are h2, "### " lines are h3, the rest paragraphs. */
export function LongForm({ lines }: { lines: string[] }) {
  return (
    <div className="prose-hg">
      {lines.map((line, i) =>
        line.startsWith("### ") ? (
          <h3 key={i}>{line.slice(4)}</h3>
        ) : line.startsWith("## ") ? (
          <h2 key={i}>{line.slice(3)}</h2>
        ) : (
          <p key={i}>{line}</p>
        ),
      )}
    </div>
  );
}
