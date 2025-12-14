import { compareDesc } from "date-fns";
import { BlogPosts } from "~/components/blog/blog-posts";
import { allPosts } from "contentlayer/generated";

interface BlogPageProps {
  params: {
    lang: string;
  };
}

export const metadata = {
  title: "Blog",
};

export default function BlogPage({ params }: BlogPageProps) {
  const { lang } = params;

  const posts = allPosts
    .filter((post) => post.published && post.lang === lang)
    .sort((a, b) =>
      compareDesc(new Date(a.date), new Date(b.date))
    );

  return (
    <main>
      <BlogPosts posts={posts} />
    </main>
  );
}
