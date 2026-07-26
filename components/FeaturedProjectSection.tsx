import { featuredProject } from "@/content/site";
import AutoplayVideo from "./AutoplayVideo";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

export default function FeaturedProjectSection() {
  const { title, tagline, tech, overview, contributions, lessons, clipSrc, fullVideoUrl } =
    featuredProject;

  return (
    <section className="section" id="featured">
      <Reveal>
        <SectionHeader number="02" title="Featured Project" />
        <h3 className="featured-name">{title}</h3>
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

            <h4 className="featured-subhead">What I did</h4>
            <ul className="featured-list">
              {contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h4 className="featured-subhead">What I learned</h4>
            <ul className="featured-list">
              {lessons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="proj-tech">{tech.join(" / ")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
