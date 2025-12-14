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
    lang: string;
    slug: string[];
  };
}

function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params.slug.join("/");

  return (
    allPosts.find(
      (post) =>
        post.lang === params.lang &&
        post.slugAsParams === slug
    ) ?? null
  );
}

export function generateMetadata({
  params,
}: PostPageProps): Metadata {
  const post = getPostFromParams(params);
  if (!post) return {};

  const ogUrl = new URL(`${env.NEXT_PUBLIC_APP_URL}/api/og`);
  ogUrl.searchParams.set("heading", post.title);
  ogUrl.searchParams.set("type", "Blog Post");
  ogUrl.searchParams.set("mode", "dark");

  return {
    title: post.title,
    description: post.description,
    authors: post.authors?.map((a) => ({ name: a })),
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
        },
      ],
    },
  };
}

export function generateStaticParams(): PostPageProps["params"][] {
  return allPosts.map((post) => ({
    lang: post.lang,
    slug: post.slugAsParams.split("/"),
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostFromParams(params);
  if (!post) notFound();

  const authors =
    post.authors?.map((a) =>
      allAuthors.find(
        (author) => author.slug === `/authors/${a}`
      )
    ) ?? [];

  return (
    <article className="mx-auto max-w-[850px] px-6 py-20">
      <Link
        href={`/${post.lang}/blog`}
        className="mb-10 inline-flex items-center text-brand"
      >
        <Icons.ChevronLeft className="mr-2 h-4 w-4" />
        Voltar para o Blog
      </Link>

      <header className="mb-12">
        <time className="block text-sm text-neutral-400 mb-2">
          {formatDate(post.date)}
        </time>

        <h1 className="text-4xl font-bold">
          <Balancer>{post.title}</Balancer>
        </h1>

        {authors.length > 0 && (
          <div className="mt-6 flex space-x-4">
            {authors.map(
              (author) =>
                author && (
                  <Link
                    key={author._id}
                    href={`https://twitter.com/${author.twitter}`}
                    target="_blank"
                    className="flex items-center space-x-3"
                  >
                    <Image
                      src={author.avatar}
                      alt={author.title}
                      width={42}
                      height={42}
                      className="rounded-full"
                    />
                    <div>
                      <p className="font-medium">
                        {author.title}
                      </p>
                      <p className="text-xs text-neutral-500">
                        @{author.twitter}
                      </p>
                    </div>
                  </Link>
                )
            )}
          </div>
        )}
      </header>

      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={650}
          className="rounded-xl mb-14"
          priority
        />
      )}

      <div className="prose dark:prose-invert max-w-none">
        <Mdx code={post.body.code} />
      </div>

      <footer className="mt-16 pt-8 border-t">
        <Link
          href={`/${post.lang}/blog`}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "rounded-full px-6"
          )}
        >
          <Icons.ChevronLeft className="mr-2 h-4 w-4" />
          Voltar para o Blog
        </Link>
      </footer>
    </article>
  );
}
