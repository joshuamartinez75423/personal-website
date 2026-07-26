import { experiences } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <SectionHeader number="01" title="Experience" />
      </Reveal>
      <div>
        {experiences.map((experience, i) => (
          <Reveal key={experience.company + experience.role} delay={i * 0.08}>
            <article className="exp-entry">
              <div className="exp-top">
                <div>
                  <h3 className="exp-role">{experience.role}</h3>
                  <p className="exp-company">{experience.company}</p>
                </div>
                <div className="exp-meta">
                  <span>{experience.dates}</span>
                  <span>{experience.location}</span>
                </div>
              </div>
              <ul className="exp-highlights">
                {experience.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
