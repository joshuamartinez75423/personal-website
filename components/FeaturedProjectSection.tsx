import { featuredProject } from "@/content/site";
import AutoplayVideo from "./AutoplayVideo";
import Reveal from "./Reveal";

export default function FeaturedProjectSection() {
  const {
    title,
    tagline,
    tech,
    overview,
    contributions,
    lessons,
    clipSrc,
    fullVideoUrl,
  } = featuredProject;

  return (
    <section className="section" id="featured">
      <Reveal>
        <p className="featured-kicker">Featured Project</p>
        <h2 className="section-title">{title}</h2>
        <p className="featured-tagline">{tagline}</p>
      </Reveal>

      <div className="featured-grid">
        <Reveal>
          <div className="featured-video-pane">
            <div className="featured-video">
              {clipSrc ? (
                <AutoplayVideo src={clipSrc} className="featured-video-el" />
              ) : (
                <div className="featured-video-placeholder">
                  Demo video coming soon
                </div>
              )}
            </div>
            <a
              className="featured-video-link"
              href={fullVideoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the full demo with sound ↗
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="featured-body">
            <p className="featured-overview">{overview}</p>

            <h3 className="featured-subhead">What I did</h3>
            <ul className="featured-list">
              {contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="featured-subhead">What I learned</h3>
            <ul className="featured-list">
              {lessons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="project-tech">
              {tech.map((t) => (
                <span className="tech-tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
