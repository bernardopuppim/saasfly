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
        { title: "Quickstart", href: `/${lang}/docs/getting-started/quickstart` },
      ],
    },

    {
      id: "platform",
      title: "Platform",
      items: [
        { title: "Overview", href: `/${lang}/docs/platform` },
        { title: "Architecture", href: `/${lang}/docs/platform/architecture` },
        { title: "Users & Permissions", href: `/${lang}/docs/platform/users-permissions` },
        { title: "Integrations", href: `/${lang}/docs/platform/integrations` },
        { title: "Security", href: `/${lang}/docs/platform/security` },
      ],
    },

    {
      id: "cognitive-agents",
      title: "Cognitive Agents",
      items: [
        { title: "Overview", href: `/${lang}/docs/cognitive-agents` },
        { title: "Agents Overview", href: `/${lang}/docs/cognitive-agents/agents-overview` },
        { title: "Building Your First Agent", href: `/${lang}/docs/cognitive-agents/building-your-first-agent` },
        { title: "MindLoop Memory", href: `/${lang}/docs/cognitive-agents/mindloop-memory` },
        { title: "Agent Templates", href: `/${lang}/docs/cognitive-agents/agents-templates` },
      ],
    },

    {
      id: "lats-p",
      title: "LATS-P",
      items: [
        { title: "Overview", href: `/${lang}/docs/lats-p` },
        { title: "Introduction to LATS", href: `/${lang}/docs/lats-p/intro-to-lats` },
        { title: "Building Decision Trees", href: `/${lang}/docs/lats-p/building-trees` },
        { title: "Entropy Optimization", href: `/${lang}/docs/lats-p/entropy-optimization` },
        { title: "HITL Collaboration", href: `/${lang}/docs/lats-p/hitl-collaboration` },
      ],
    },

    {
      id: "rag",
      title: "RAG",
      items: [
        { title: "Overview", href: `/${lang}/docs/rag` },
        { title: "Uploading Documents", href: `/${lang}/docs/rag/uploading-documents` },
        { title: "Indexers", href: `/${lang}/docs/rag/indexers` },
        { title: "Semantic Search", href: `/${lang}/docs/rag/semantic-search` },
        { title: "Evaluation", href: `/${lang}/docs/rag/evaluation` },
      ],
    },

    {
      id: "api",
      title: "API",
      items: [
        { title: "Overview", href: `/${lang}/docs/api` },
        { title: "REST API", href: `/${lang}/docs/api/rest-api` },
        { title: "JavaScript SDK", href: `/${lang}/docs/api/sdk-js` },
        { title: "Webhooks", href: `/${lang}/docs/api/webhooks` },
      ],
    },

    {
      id: "design-system",
      title: "Design System",
      items: [
        { title: "Overview", href: `/${lang}/docs/design-system` },
        { title: "Colors", href: `/${lang}/docs/design-system/colors` },
        { title: "Components", href: `/${lang}/docs/design-system/components` },
        { title: "Motion", href: `/${lang}/docs/design-system/motion` },
      ],
    },

    {
      id: "research",
      title: "Research",
      items: [
        { title: "Overview", href: `/${lang}/docs/research` },
        { title: "LATS Whitepaper", href: `/${lang}/docs/research/lats-whitepaper` },
        { title: "IAA™ Philosophy Paper", href: `/${lang}/docs/research/iaa-philosophy-paper` },
        { title: "Safety & AI", href: `/${lang}/docs/research/safety-ai` },
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
