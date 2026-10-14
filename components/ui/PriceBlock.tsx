/** Package surface: white, hairline border, turmeric bar along the top edge. */
export function PriceBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-line bg-white p-6 sm:p-10 ${className}`}>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-turmeric" />
      {children}
    </div>
  );
}
