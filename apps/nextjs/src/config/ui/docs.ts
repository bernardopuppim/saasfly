export const getDocsConfig = () => ({
  mainNav: [
    { title: "Documentation", href: "/docs/documentation" },
    { title: "Projects", href: "/projects" },
  ],


  sidebarNav: [
    {
      id: "getting-started",
      title: "Getting Started",
      items: [
        { title: "Overview", href: "/docs/getting-started" },
        { title: "What is MindLoop?", href: "/docs/getting-started/what-is-mindloop" },
        { title: "IAA™ Philosophy", href: "/docs/getting-started/iaa-philosophy" },
        { title: "Glossary", href: "/docs/getting-started/glossary" },
        { title: "Quickstart", href: "/docs/getting-started/quickstart" },
      ],
    },
    {
      id: "platform",
      title: "Platform",
      items: [
        { title: "Overview", href: "/docs/platform" },
        { title: "Architecture", href: "/docs/platform/architecture" },
        { title: "Users & Permissions", href: "/docs/platform/users-permissions" },
        { title: "Integrations", href: "/docs/platform/integrations" },
        { title: "Security", href: "/docs/platform/security" },
      ],
    },
    {
      id: "cognitive-agents",
      title: "Cognitive Agents",
      items: [
        { title: "Overview", href: "/docs/cognitive-agents" },
        { title: "Agents Overview", href: "/docs/cognitive-agents/agents-overview" },
        { title: "Building Your First Agent", href: "/docs/cognitive-agents/building-your-first-agent" },
        { title: "MindLoop Memory", href: "/docs/cognitive-agents/mindloop-memory" },
        { title: "Agent Templates", href: "/docs/cognitive-agents/agents-templates" },
      ],
    },
    {
      id: "lats-p",
      title: "LATS-P",
      items: [
        { title: "Overview", href: "/docs/lats-p" },
        { title: "Introduction to LATS", href: "/docs/lats-p/intro-to-lats" },
        { title: "Building Decision Trees", href: "/docs/lats-p/building-trees" },
        { title: "Entropy Optimization", href: "/docs/lats-p/entropy-optimization" },
        { title: "HITL Collaboration", href: "/docs/lats-p/hitl-collaboration" },
      ],
    },
    {
      id: "rag",
      title: "RAG",
      items: [
        { title: "Overview", href: "/docs/rag" },
        { title: "Uploading Documents", href: "/docs/rag/uploading-documents" },
        { title: "Indexers", href: "/docs/rag/indexers" },
        { title: "Semantic Search", href: "/docs/rag/semantic-search" },
        { title: "Evaluation", href: "/docs/rag/evaluation" },
      ],
    },
    {
      id: "api",
      title: "API",
      items: [
        { title: "Overview", href: "/docs/api" },
        { title: "REST API", href: "/docs/api/rest-api" },
        { title: "JavaScript SDK", href: "/docs/api/sdk-js" },
        { title: "Webhooks", href: "/docs/api/webhooks" },
      ],
    },
    {
      id: "design-system",
      title: "Design System",
      items: [
        { title: "Overview", href: "/docs/design-system" },
        { title: "Colors", href: "/docs/design-system/colors" },
        { title: "Components", href: "/docs/design-system/components" },
        { title: "Motion", href: "/docs/design-system/motion" },
      ],
    },
    {
      id: "research",
      title: "Research",
      items: [
        { title: "Overview", href: "/content/docs/documentation/research/index.mdx" },
        { title: "LATS Whitepaper", href: "/docs/research/lats-whitepaper" },
        { title: "IAA™ Philosophy Paper", href: "/docs/research/iaa-philosophy-paper" },
        { title: "Safety & AI", href: "/docs/research/safety-ai" },
      ],
    },
    {
      id: "meta",
      title: "Meta",
      items: [
        { title: "Changelog", href: "/docs/changelog" },
        { title: "In Progress", href: "/docs/in-progress" },
      ],
    },
  ],
});
