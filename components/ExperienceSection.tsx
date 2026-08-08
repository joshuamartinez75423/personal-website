import Image from "next/image";
import { experiences } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <Reveal>
        <SectionHeader title="Experience" />
      </Reveal>
      <div className="exp-timeline">
        {experiences.map((experience, i) => (
          <Reveal key={experience.company + experience.role} delay={i * 0.08}>
            <article className="tl-entry">
              <div className="tl-rail">
                <span className="tl-date">{experience.dates}</span>
              </div>
              <span className="tl-node" aria-hidden="true" />
              <div className="tl-body">
                <div className="tl-head">
                  <div>
                    <h3 className="tl-company">{experience.company}</h3>
                    <p className="tl-role">{experience.role}</p>
                  </div>
                  <span
                    className="tl-logo"
                    style={
                      experience.logoBg
                        ? { background: experience.logoBg }
                        : undefined
                    }
                  >
                    <Image
                      src={experience.logo}
                      alt={`${experience.company} logo`}
                      width={46}
                      height={46}
                    />
                  </span>
                </div>
                <ul className="exp-highlights">
                  {experience.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
