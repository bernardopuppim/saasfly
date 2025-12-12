// apps/nextjs/src/app/[lang]/layout.tsx
import { getDictionary } from "~/lib/get-dictionary";
import type { Locale } from "~/config/i18n-config";

export default async function LangLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
}
