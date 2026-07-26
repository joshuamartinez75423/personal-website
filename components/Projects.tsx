import { projects } from "@/content/site";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <Reveal>
        <h2 className="section-title">Projects</h2>
      </Reveal>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
