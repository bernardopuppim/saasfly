export default function ProjectsHeader({ title, description }) {
  return (
    <div className="border-b border-border pb-8 mb-8">
      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      {description && (
        <p className="text-muted-foreground max-w-2xl">{description}</p>
      )}
    </div>
  );
}
