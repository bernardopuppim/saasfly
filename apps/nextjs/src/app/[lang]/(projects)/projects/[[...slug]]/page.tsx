import type { Metadata } from "next";
import { redirect, notFound } from "next/navigation";

import { allProjects } from ".contentlayer/generated";

import { Mdx } from "~/components/content/mdx-components";
import { DashboardTableOfContents } from "~/components/content/toc";
import { DocsPageHeader } from "~/components/docs/page-header";
import { Pager } from "~/components/docs/pager";
import { getTableOfContents } from "~/lib/toc";
import { env } from "~/env.mjs";
import { absoluteUrl } from "~/lib/utils";
import { getProjectsConfig } from "~/config/ui/projects";

import "~/styles/mdx.css";

interface ProjectPageProps {
  params: { slug?: string[]; lang: string };
}

function getProjectFromParams({ slug, lang }: { slug?: string[]; lang: string }) {
  if (!slug) return null;

  const slugPath = slug.join("/");

  return (
    allProjects.find((project) => project.lang === lang && project.slugAsParams === slugPath) ??
    null
  );
}

export function generateStaticParams() {
  return allProjects.map((project) => ({
    lang: project.lang,
    slug: project.slugAsParams.split("/"),
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectFromParams(params);

  if (!project) return {};

  const ogUrl = new URL(`${env.NEXT_PUBLIC_APP_URL}/api/og`);
  ogUrl.searchParams.set("heading", project.description ?? project.title);
  ogUrl.searchParams.set("type", "Project");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: absoluteUrl(project.slug),
      images: [{ url: ogUrl.toString(), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug, lang } = params;

  if (!slug) {
    const first = allProjects.find((project) => project.lang === lang && project.published);

    if (!first) notFound();

    return redirect(`/${lang}/projects/${first.slugAsParams}`);
  }

  const project = getProjectFromParams(params);

  if (!project) notFound();

  const toc = await getTableOfContents(project.body.raw);

  return (
    <main className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <DocsPageHeader heading={project.title} text={project.description} />
        <Mdx code={project.body.code} />
        <hr className="my-4 md:my-6" />
        <Pager currentSlug={project.slug} sidebarNav={getProjectsConfig(lang).sidebarNav} />
      </div>

      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <DashboardTableOfContents toc={toc} />
        </div>
      </div>
    </main>
  );
}
