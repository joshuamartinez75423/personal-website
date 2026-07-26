import type { Experience } from "@/content/site";

export default function ExperienceCard({
  experience,
}: {
  experience: Experience;
}) {
  return (
    <article className="experience-card">
      <div className="experience-header">
        <div>
          <h3 className="experience-role">{experience.role}</h3>
          <p className="experience-company">{experience.company}</p>
        </div>
        <div className="experience-meta">
          <span>{experience.dates}</span>
          <span>{experience.location}</span>
        </div>
      </div>
      <ul className="experience-highlights">
        {experience.highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
    </article>
  );
}
