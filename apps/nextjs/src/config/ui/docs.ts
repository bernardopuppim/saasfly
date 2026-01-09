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
        { title: "Glossary", href: `/${lang}/docs/lats-p/glossary` },
        { title: "How LATS-P Works", href: `/${lang}/docs/lats-p/how-lats-p-works` },
        { title: "Configuring LATS-P", href: `/${lang}/docs/lats-p/configuring-lats` },
        { title: "Designing Good Decision Trees", href: `/${lang}/docs/lats-p/designing-good-decision-trees` },
        { title: "Evaluators Deep Dive", href: `/${lang}/docs/lats-p/evaluators-deep-dive` },
        { title: "HITL Integration Guide", href: `/${lang}/docs/lats-p/hitl-integration-guide` },
        { title: "Complete Guide", href: `/${lang}/docs/lats-p/complete-guide` },
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
