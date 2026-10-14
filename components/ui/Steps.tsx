/** A genuine sequence: numbered, joined by a rule (vertical on phones, horizontal on desktop). */
export function Steps({ steps, cols = 3 }: { steps: { title: string; body: string }[]; cols?: 3 | 4 }) {
  return (
    <ol className={`grid md:gap-8 ${cols === 4 ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
      {steps.map((step, i) => {
        const last = i === steps.length - 1;
        return (
          <li key={step.title} className="grid grid-cols-[2.75rem_1fr] gap-x-4 md:block">
            <div className="flex flex-col items-start md:flex-row md:items-center md:gap-4" aria-hidden="true">
              <span className="num text-[2.75rem] font-bold leading-none tracking-[-0.03em]">{i + 1}</span>
              {!last && <span className="ml-[0.9rem] mt-3 w-px flex-1 bg-line md:ml-0 md:mt-0 md:h-px md:w-auto" />}
            </div>
            <div className={last ? "" : "pb-10 md:pb-0"}>
              <h3 className="mt-2 md:mt-5">
                <span className="sr-only">{i + 1}. </span>
                {step.title}
              </h3>
              <p className="mt-1 text-slate">{step.body}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
