import { notFound } from "next/navigation";
import { allAuthors, allPosts } from "contentlayer/generated";

import { Mdx } from "~/components/content/mdx-components";
import "~/styles/mdx.css";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

import { cn } from "@saasfly/ui";
import { buttonVariants } from "@saasfly/ui/button";
import * as Icons from "@saasfly/ui/icons";

import { env } from "~/env.mjs";
import { absoluteUrl, formatDate } from "~/lib/utils";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

function getPostFromParams(params: { slug?: string | string[] }) {
  const slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post || null;
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = getPostFromParams(params);
  if (!post) return {};

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((a) => ({ name: a })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  };
}

export function generateStaticParams(): PostPageProps["params"][] {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams(params);
  if (!post) notFound();

  const authors = post.authors.map((a) =>
    allAuthors.find(({ slug }) => slug === `/authors/${a}`)
  );

  return (
    <article className="w-full max-w-[850px] mx-auto px-6 py-20">
      
      {/* Botão voltar */}
      <Link
        href="/blog"
        className="mb-10 inline-flex items-center text-brand font-medium hover:opacity-80 transition"
      >
        <Icons.ChevronLeft className="mr-2 h-4 w-4 text-brand" />
        Voltar para o Blog
      </Link>

      {/* Cabeçalho */}
      <header className="mb-12">
        {post.date && (
          <time
            dateTime={post.date}
            className="block text-sm text-neutral-400 mb-2"
          >
            Publicado em {formatDate(post.date)}
          </time>
        )}

        <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-neutral-900 dark:text-white">
          <Balancer>{post.title}</Balancer>
        </h1>

        {/* Authors */}
        {authors?.length > 0 && (
          <div className="mt-6 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <Link
                  key={author._id}
                  href={`https://twitter.com/${author.twitter}`}
                  target="_blank"
                  className="flex items-center space-x-3 text-sm hover:opacity-80"
                >
                  <Image
                    src={author.avatar}
                    alt={author.title}
                    width={42}
                    height={42}
                    className="rounded-full border border-neutral-300 dark:border-neutral-700"
                  />
                  <div className="leading-tight">
                    <p className="font-medium">{author.title}</p>
                    <p className="text-xs text-neutral-500">@{author.twitter}</p>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        )}
      </header>

      {/* Imagem de capa */}
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={650}
          className="rounded-xl shadow-lg mb-14 object-cover"
          priority
        />
      )}

      {/* Conteúdo */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <Mdx code={post.body.code} />
      </div>

      {/* Rodapé */}
      <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex justify-center">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-brand hover:bg-brand/10 hover:text-brand transition rounded-full px-6"
            )}
          >
            <Icons.ChevronLeft className="mr-2 h-4 w-4" />
            Voltar para o Blog
          </Link>
        </div>
      </footer>
    </article>
  );
}
