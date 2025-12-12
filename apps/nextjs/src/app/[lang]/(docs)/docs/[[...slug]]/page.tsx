/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";

import { allDocs } from ".contentlayer/generated";

import { Mdx } from "~/components/content/mdx-components";
import { DashboardTableOfContents } from "~/components/content/toc";
import { DocsPageHeader } from "~/components/docs/page-header";
import { DocsPager } from "~/components/docs/pager";
import { getTableOfContents } from "~/lib/toc";
import { env } from "~/env.mjs";
import { absoluteUrl } from "~/lib/utils";

import "~/styles/mdx.css";

interface DocPageProps {
  params: { slug?: string[]; lang: string };
}

/* ---------------- GET DOC BY SLUG + LANG ---------------- */
function getDocFromParams({ slug, lang }: { slug?: string[]; lang: string }) {
  if (!slug) return null;

  const slugPath = slug.join("/");

  return (
    allDocs.find((doc) => doc.lang === lang && doc.slugAsParams === slugPath) ??
    null
  );
}

/* ---------------- STATIC PARAMS ---------------- */
export function generateStaticParams() {
  return allDocs.map((doc) => ({
    lang: doc.lang,
    slug: doc.slugAsParams.split("/"),
  }));
}

/* ---------------- METADATA ---------------- */
export function generateMetadata({ params }: DocPageProps): Metadata {
  const doc = getDocFromParams(params);

  if (!doc) return {};

  const ogUrl = new URL(`${env.NEXT_PUBLIC_APP_URL}/api/og`);
  ogUrl.searchParams.set("heading", doc.description ?? doc.title);
  ogUrl.searchParams.set("type", "Documentation");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(doc.slug),
      images: [{ url: ogUrl.toString(), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [ogUrl.toString()],
    },
  };
}

/* ---------------- PAGE ---------------- */
export default async function DocPage({ params }: DocPageProps) {
  const { slug, lang } = params;

  // Acessou /br/docs → slug undefined → redireciona para primeiro doc do idioma
  if (!slug) {
    const first = allDocs.find((doc) => doc.lang === lang);

    if (!first) notFound();

    return redirect(`/${lang}/docs/${first.slugAsParams}`);
  }

  const doc = getDocFromParams(params);

  if (!doc) notFound();

  const toc = await getTableOfContents(doc.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={doc.title} text={doc.description} />
        <Mdx code={doc.body.code} />
        <hr className="my-4 md:my-6" />
        <DocsPager doc={doc} />
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
