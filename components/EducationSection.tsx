import { education } from "@/content/site";
import Reveal from "./Reveal";

export default function EducationSection() {
  return (
    <section className="section" id="education">
      <Reveal>
        <h2 className="section-title">Education</h2>
      </Reveal>
      <Reveal delay={0.08}>
        <div className="education-card">
          <div className="experience-header">
            <div>
              <h3 className="experience-role">{education.school}</h3>
              <p className="experience-company">{education.degree}</p>
            </div>
            <div className="experience-meta">
              <span>{education.graduation}</span>
              {education.details.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>
          <h4 className="education-subhead">Involvement</h4>
          <ul className="experience-highlights">
            {education.involvement.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
