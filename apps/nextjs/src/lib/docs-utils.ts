import { allDocs } from ".contentlayer/generated";

export function getProjectDocs(lang: string) {
  return allDocs
    .filter((doc) => doc.slug.startsWith(`${lang}/docs/projects`))
    .sort((a, b) => a.title.localeCompare(b.title));
}
