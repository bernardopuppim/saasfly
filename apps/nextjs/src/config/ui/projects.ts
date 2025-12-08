import { allProjects } from "contentlayer/generated";
import type { DocsConfig } from "~/types";

export const getProjectsConfig = (lang: string): DocsConfig => {
  return {
    mainNav: [
      {
        title: "Projetos",
        href: `/${lang}/projects`,
      },
    ],

    sidebarNav: [
      {
        id: "overview",
        title: "OVERVIEW",
        items: [
          {
            title: "Todos os projetos",
            href: `/${lang}/projects`,
          },
        ],
      },

      {
        id: "projects",
        title: "PROJETOS",
        items: allProjects
          .filter((p) => p.published !== false)
          .sort((a, b) => a.title.localeCompare(b.title))
          .map((p) => ({
            title: p.title,
            href: `/${lang}${p.slug}`, // AQUI ESTÁ A SOLUÇÃO
          })),
      },
    ],
  };
};
