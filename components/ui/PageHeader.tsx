import { Breadcrumb, type Crumb } from "@/components/shell/Breadcrumb";
import type { Locale } from "@/lib/i18n";

export function PageHeader({
  lang,
  trail,
  breadcrumbLabel,
  h1,
  sub,
  children,
}: {
  lang: Locale;
  trail: Crumb[];
  breadcrumbLabel: string;
  h1: string;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="wrap pt-4 pb-10 sm:pb-14">
      <Breadcrumb lang={lang} trail={trail} label={breadcrumbLabel} />
      <h1 className="mt-6 max-w-[22ch] sm:mt-10">{h1}</h1>
      {sub && <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-slate sm:text-xl">{sub}</p>}
      {children}
    </header>
  );
}
