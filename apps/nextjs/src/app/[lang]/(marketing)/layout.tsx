import { Suspense } from "react";

import { ModalProvider } from "~/components/modal-provider";
import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";

import type { Locale } from "~/config/i18n-config";
import { getMarketingConfig } from "~/config/ui/marketing";
import { getDictionary } from "~/lib/get-dictionary";

export default async function MarketingLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const dict = await getDictionary(lang);

  const marketingConfig = await getMarketingConfig({
    params: { lang: `${lang}` },
  });

  return (
    <div className="flex min-h-screen flex-col">

      {/* NAVBAR */}
      <Suspense fallback="...">
        <NavBar
          items={marketingConfig.mainNav}
          params={{ lang: `${lang}` }}
          scroll={true}
          user={undefined}          // <<--- SEM AUTENTICAÇÃO
          marketing={dict.marketing}
          dropdown={dict.dropdown}
        />
      </Suspense>

      {/* MODAIS */}
      <ModalProvider dict={dict.login} />

      {/* CONTEÚDO */}
      <main className="flex-1">{children}</main>

      {/* RODAPÉ */}
      <SiteFooter
        className="border-t border-border"
        params={{ lang: `${lang}` }}
        dict={dict.common}
      />
    </div>
  );
}
