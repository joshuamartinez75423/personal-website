import type { Project } from "@/content/site";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <h3 className="project-title">{project.title}</h3>
      {project.tech.length > 0 && (
        <div className="project-tech">
          {project.tech.map((t) => (
            <span className="tech-tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
      <p className="project-desc">{project.description}</p>
    </article>
  );
}
