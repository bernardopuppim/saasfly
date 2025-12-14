import {
  ComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer2/source-files";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/* --------------------------------------------------------
   FUNÇÃO QUE IDENTIFICA IDIOMA + SLUG
-------------------------------------------------------- */
function computeLang(doc) {
  // Exemplo flattenedPath:
  // "br/docs/changelog"
  const parts = doc._raw.flattenedPath.split("/");
  return parts[0]; // "br" ou "en"
}

function computeSlug(doc) {
  const parts = doc._raw.flattenedPath.split("/");

  const lang = parts[0];
  const afterLang = parts.slice(1).join("/"); // remove "br"

  return `/${lang}/${afterLang}`;
}

function computeSlugAsParams(doc) {
  const parts = doc._raw.flattenedPath.split("/");
  return parts.slice(2).join("/"); // remove lang + docs
}

/* --------------------------------------------------------
   DOCUMENTAÇÃO MULTI-IDIOMA (br/docs/** e en/docs/**)
-------------------------------------------------------- */
export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.{md,mdx}`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    published: { type: "boolean", default: true },
  },
  computedFields: {
    lang: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFilePath.split("/")[1], 
      // ex: docs/br/getting-started/intro.mdx → br
    },
    slug: {
      type: "string",
      resolve: (doc) =>
        `/docs/${doc._raw.flattenedPath.replace(/^docs\/(br|en)\//, "")}`,
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) =>
        doc._raw.flattenedPath.replace(/^docs\/(br|en)\//, ""),
    },
  },
}));

/* --------------------------------------------------------
   GUIDES (opcional)
-------------------------------------------------------- */
export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `*/guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    featured: { type: "boolean", default: false },
  },
  computedFields: {
    lang: { type: "string", resolve: computeLang },
    slug: { type: "string", resolve: computeSlug },
    slugAsParams: { type: "string", resolve: computeSlugAsParams },
  },
}));

/* --------------------------------------------------------
   BLOG POSTS
-------------------------------------------------------- */
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.mdx",
  contentType: "mdx",

  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    image: { type: "string" },
    date: { type: "date", required: true },
    authors: { type: "list", of: { type: "string" } },

    // 🔴 FALTAVA
    published: { type: "boolean", default: true },
  },

  computedFields: {
    // 🔴 FALTAVA
    lang: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/")[1],
      // ex: blog/br/server-client-components → br
    },

    // ✅ slug correto para Link()
    slug: {
      type: "string",
      resolve: (doc) => {
        const parts = doc._raw.flattenedPath.split("/");
        const lang = parts[1];
        const slug = parts.slice(2).join("/");

        return `/${lang}/blog/${slug}`;
      },
    },

    // ✅ útil para generateStaticParams
    slugAsParams: {
      type: "string",
      resolve: (doc) =>
        doc._raw.flattenedPath.split("/").slice(2).join("/"),
    },
  },
}));


/* --------------------------------------------------------
   AUTORES
-------------------------------------------------------- */
export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `*/authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    avatar: { type: "string", required: true },
    twitter: { type: "string", required: true },
  },
  computedFields: {
    lang: { type: "string", resolve: computeLang },
    slug: { type: "string", resolve: computeSlug },
    slugAsParams: { type: "string", resolve: computeSlugAsParams },
  },
}));

/* --------------------------------------------------------
   PÁGINAS SIMPLES MULTI-IDIOMA
-------------------------------------------------------- */
export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `*/pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
  },
  computedFields: {
    lang: { type: "string", resolve: computeLang },
    slug: { type: "string", resolve: computeSlug },
    slugAsParams: { type: "string", resolve: computeSlugAsParams },
  },
}));

/* --------------------------------------------------------
   PROJETOS MULTI-IDIOMA
-------------------------------------------------------- */
export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `*/projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    cover: { type: "string" },
    published: { type: "boolean", default: true },
  },

  computedFields: {
    lang: { type: "string", resolve: computeLang },
    slug: {
      type: "string",
      resolve: (doc) => {
        const lang = computeLang(doc);
        const slug = doc._raw.flattenedPath
          .split("/")
          .slice(2)
          .join("/");

        return `/${lang}/projects/${slug}`;
      },
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(2).join("/"),
    },
  },
}));

/* --------------------------------------------------------
   EXPORT FINAL
-------------------------------------------------------- */
export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Doc, Guide, Post, Author, Page, Project],

  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
          },
        },
      ],
    ],
  },
});
