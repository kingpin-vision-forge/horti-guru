import type { Metadata } from "next";
import { LegalPage, legalMetadata } from "@/components/legal/LegalPage";
import type { Locale } from "@/lib/i18n";

type Props = { params: Promise<{ lang: Locale }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return legalMetadata(lang, "refunds");
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return <LegalPage lang={lang} kind="refunds" />;
}
