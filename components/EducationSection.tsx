import Image from "next/image";
import { education } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function EducationSection() {
  return (
    <section className="section" id="education">
      <Reveal>
        <SectionHeader title="Education" />
      </Reveal>
      <Reveal delay={0.08}>
        <div className="edu-top">
          <div className="edu-school-wrap">
            <Image
              src="/nebraska-n.svg"
              alt="University of Nebraska logo"
              width={46}
              height={46}
              className="edu-logo"
            />
            <div>
              <h3 className="edu-school">{education.school}</h3>
              <p className="edu-degree">{education.degree}</p>
            </div>
          </div>
        </div>
        <p className="edu-stats">{education.details.join("  ·  ")}</p>
        <div className="skills-row edu-involvement">
          <span className="skills-cat">Involvement</span>
          <ul className="edu-inv-list">
            {education.involvement.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
