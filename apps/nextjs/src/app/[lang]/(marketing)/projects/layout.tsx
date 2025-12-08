import { getProjectsConfig } from "~/config/ui/projects";
import { DocsSidebarNav } from "~/components/docs/sidebar-nav";

export default function ProjectsLayout({ children, params: { lang } }) {
  const config = getProjectsConfig(lang);

  return (
    <div className="flex">
      <aside className="w-64 p-6 border-r">
        <DocsSidebarNav items={config.sidebarNav} />
      </aside>
      <main className="flex-1 p-10">{children}</main>
    </div>
  );
}
