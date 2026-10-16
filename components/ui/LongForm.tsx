/** Renders long-form prose: "## " lines are h2, "### " lines are h3, the rest paragraphs. */
export function LongForm({ lines }: { lines: string[] }) {
  // Group into one section per h2 so desktop can set each heading beside its text.
  const sections: { heading?: string; body: string[] }[] = [];
  for (const line of lines) {
    if (line.startsWith("## ")) sections.push({ heading: line.slice(3), body: [] });
    else {
      if (!sections.length) sections.push({ body: [] });
      sections[sections.length - 1].body.push(line);
    }
  }

  return (
    <div className="prose-hg">
      {sections.map((s, i) => (
        <section key={i} className="prose-sec">
          {s.heading && <h2>{s.heading}</h2>}
          <div className="prose-body">
            {s.body.map((line, j) =>
              line.startsWith("### ") ? <h3 key={j}>{line.slice(4)}</h3> : <p key={j}>{line}</p>,
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
