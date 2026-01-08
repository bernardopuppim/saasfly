/* eslint-disable @typescript-eslint/no-explicit-any */
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { allDocs } from ".contentlayer/generated";

import { getDocsConfig } from "~/config/ui/docs";
import { getMarketingConfig } from "~/config/ui/marketing";
import { getDictionary } from "~/lib/get-dictionary";

import { DocsSidebarNav } from "~/components/docs/sidebar-nav";

import { NavBar } from "~/components/navbar";
import { SiteFooter } from "~/components/site-footer";

export default async function DocsLayout({
  children,
  params: { lang }
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const sidebar = getDocsConfig(lang).sidebarNav;
  const dict = await getDictionary(lang);
  const marketingConfig = await getMarketingConfig({
    params: { lang: `${lang}` },
  });

  return (
    <div className="min-h-screen flex flex-col">

      {/* 🌐 HEADER */}
      <Suspense fallback="...">
        <NavBar
          items={marketingConfig.mainNav}
          params={{ lang }}
          scroll={true}
          user={undefined}
          marketing={dict.marketing}
          dropdown={dict.dropdown}
        />
      </Suspense>

      {/* PAGE CONTENT */}
      <div className="flex-1 container mx-auto w-full mt-6 
                      md:grid md:grid-cols-[220px_1fr] md:gap-6
                      lg:grid-cols-[240px_1fr] lg:gap-10">

        {/* 🔗 SIDEBAR */}
        <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)]
                         w-full shrink-0 overflow-y-auto border-r py-6 pr-2
                         md:sticky md:block lg:py-10">
          <DocsSidebarNav items={sidebar} lang={lang} />
        </aside>

        {/* 📄 MAIN CONTENT */}
        <div className="flex-1 min-w-0">{children}</div>
      </div>

      {/* 🦶 FOOTER */}
      <SiteFooter />
    </div>
  );
}
