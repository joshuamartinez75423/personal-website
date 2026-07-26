import { skillGroups } from "@/content/site";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <SectionHeader number="04" title="Skills" />
      </Reveal>
      <div>
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.06}>
            <div className="skills-row">
              <span className="skills-cat">{group.label}</span>
              <div className="skills-items">
                {group.items.map((item) => (
                  <span className="skills-item" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
