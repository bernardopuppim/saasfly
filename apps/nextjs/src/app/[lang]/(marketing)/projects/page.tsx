import { allProjects } from "contentlayer/generated";
import Link from "next/link";

export default function ProjectsHome({ params }: { params: { lang: string } }) {
  const { lang } = params;

  const projects = allProjects.filter((p) => p.published !== false);

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/${lang}${project.slug}`}
            className="block p-6 rounded-xl border hover:bg-accent transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
