export const getDocsConfig = (lang: string) => ({
  mainNav: [
    { title: "Documentation", href: `/${lang}/docs` },
    { title: "Projects", href: `/${lang}/docs/projects` },
  ],

  sidebarNav: [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        { title: "Overview", href: `/${lang}/docs/getting-started` },
        { title: "What is MindLoop?", href: `/${lang}/docs/getting-started/what-is-mindloop` },
        { title: "IAA™ Philosophy", href: `/${lang}/docs/getting-started/iaa-philosophy` },
        { title: "Glossary", href: `/${lang}/docs/getting-started/glossary` },
      ],
    },

    {
      id: "lats-p",
      title: "LATS-P",
      items: [
        { title: "Overview", href: `/${lang}/docs/lats-p` },
        { title: "Complete Guide", href: `/${lang}/docs/lats-p/complete-guide` },
        { title: "Glossary", href: `/${lang}/docs/lats-p/glossary` },
        { title: "How LATS Works", href: `/${lang}/docs/lats-p/how-lats-works` },
        { title: "Introduction to LATS", href: `/${lang}/docs/lats-p/intro-to-lats` },
        { title: "Building Decision Trees", href: `/${lang}/docs/lats-p/building-trees` },
        { title: "Entropy Optimization", href: `/${lang}/docs/lats-p/entropy-optimization` },
        { title: "HITL Collaboration", href: `/${lang}/docs/lats-p/hitl-collaboration` },
      ],
    },

    {
      id: "meta",
      title: "Meta",
      items: [
        { title: "Changelog", href: `/${lang}/docs/changelog` },
        { title: "In Progress", href: `/${lang}/docs/in-progress` },
      ],
    },
  ],
});
