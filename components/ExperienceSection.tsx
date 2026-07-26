import { experiences } from "@/content/site";
import ExperienceCard from "./ExperienceCard";
import Reveal from "./Reveal";

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <h2 className="section-title">Experience</h2>
      </Reveal>
      <div className="experience-list">
        {experiences.map((experience, i) => (
          <Reveal key={experience.company + experience.role} delay={i * 0.08}>
            <ExperienceCard experience={experience} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
