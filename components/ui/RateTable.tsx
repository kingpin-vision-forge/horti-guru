export type Rate = { id: string; name: React.ReactNode; tells: string; price: string; unit?: string; note?: string };

/**
 * A printed-rate-card table: hairline rules, alternating mist rows, tabular
 * numerals, prices right-aligned. Rows stack on phones with the price on its own line.
 */
export function RateTable({ rows, head }: { rows: Rate[]; head: [string, string, string] }) {
  return (
    <table className="w-full border-collapse text-left">
      <thead className="max-md:sr-only">
        <tr className="border-b-2 border-ink text-sm text-slate">
          <th scope="col" className="py-3 pr-6 font-semibold">
            {head[0]}
          </th>
          <th scope="col" className="py-3 pr-6 font-semibold">
            {head[1]}
          </th>
          <th scope="col" className="py-3 text-right font-semibold">
            {head[2]}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r.id} id={r.id} className="border-b border-line odd:bg-mist/60 max-md:block max-md:px-4 max-md:py-4 md:[&>*]:py-4">
            <th scope="row" className="pr-6 align-top font-semibold max-md:block md:pl-4">
              {r.name}
            </th>
            <td className="pr-6 align-top text-slate max-md:mt-1 max-md:block">
              {r.tells}
              {r.note && <span className="mt-1 block font-semibold text-ink">{r.note}</span>}
            </td>
            <td className="num align-top font-bold whitespace-nowrap max-md:mt-3 max-md:block md:pr-4 md:text-right">
              {r.price}
              {r.unit && <span className="block text-sm font-normal text-slate">{r.unit}</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
