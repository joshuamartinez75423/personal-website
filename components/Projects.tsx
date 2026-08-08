import { projects } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <SectionHeader title="Projects" />
      </Reveal>
      <div className="proj-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <article className="proj-entry">
              <h3 className="proj-title">{project.title}</h3>
              {project.tech.length > 0 && (
                <p className="proj-tech">{project.tech.join(" / ")}</p>
              )}
              <p className="proj-desc">{project.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
