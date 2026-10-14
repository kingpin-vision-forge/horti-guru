export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`text-[1.375rem] leading-none tracking-[-0.02em] ${className}`}>
      <span className="font-normal">Horti</span>
      <span className="font-bold">Guru</span>
    </span>
  );
}
