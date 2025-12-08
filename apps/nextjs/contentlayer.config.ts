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
   COMPUTED FIELDS PADRÃO
-------------------------------------------------------- */
const defaultComputedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

/* --------------------------------------------------------
   DOCUMENTAÇÃO (docs/**)
-------------------------------------------------------- */
export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    published: { type: "boolean", default: true },
  },
  computedFields: defaultComputedFields,
}));

/* --------------------------------------------------------
   GUIDES (opcional)
-------------------------------------------------------- */
export const Guide = defineDocumentType(() => ({
  name: "Guide",
  filePathPattern: `guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    featured: { type: "boolean", default: false },
  },
  computedFields: defaultComputedFields,
}));

/* --------------------------------------------------------
   BLOG POSTS
-------------------------------------------------------- */
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    image: { type: "string", required: true },
    authors: {
      type: "list",
      of: { type: "string" },
      required: true,
    },
  },
  computedFields: defaultComputedFields,
}));

/* --------------------------------------------------------
   AUTORES
-------------------------------------------------------- */
export const Author = defineDocumentType(() => ({
  name: "Author",
  filePathPattern: `authors/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    avatar: { type: "string", required: true },
    twitter: { type: "string", required: true },
  },
  computedFields: defaultComputedFields,
}));

/* --------------------------------------------------------
   PÁGINAS
-------------------------------------------------------- */
export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
  },
  computedFields: defaultComputedFields,
}));

/* --------------------------------------------------------
   PROJECTS
-------------------------------------------------------- */
export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string" },
    published: { type: "boolean", default: true },
    cover: { type: "string" },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => {
        // remove o prefixo "projects/"
        const raw = doc._raw.flattenedPath.replace(/^projects\//, "");
        return `/projects/${raw}`;
      },
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => {
        return doc._raw.flattenedPath.replace(/^projects\//, "");
      },
    },
  },
}));


/* --------------------------------------------------------
   EXPORT FINAL
-------------------------------------------------------- */
export default makeSource({
  contentDirPath: "./src/content",
  documentTypes: [Page, Doc, Guide, Post, Author, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            const classes = node.properties.className || [];
            node.properties.className = [...classes, "line--highlighted"];
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
