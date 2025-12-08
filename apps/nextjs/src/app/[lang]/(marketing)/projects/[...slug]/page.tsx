import { notFound } from "next/navigation";
import { Mdx } from "~/components/mdx";
import ProjectsHeader from "~/components/projects/page-header";
import { allProjects } from "contentlayer/generated";


export default function ProjectPage({ params }: { params: { slug: string[] } }) {
  const slug = `/projects/${params.slug.join("/")}`;
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="container py-20">
      <Mdx code={project.body.code} />
    </div>
  );
}
