import { skillGroups } from "@/content/site";
import Reveal from "./Reveal";

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <Reveal>
        <h2 className="section-title">Skills</h2>
      </Reveal>
      <div className="skills-groups">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.08}>
            <div className="skills-group">
              <h3 className="skills-group-label">{group.label}</h3>
              <div className="skills-tags">
                {group.items.map((item) => (
                  <span className="tech-tag" key={item}>
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
