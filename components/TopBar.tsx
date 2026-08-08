"use client";

import { useEffect, useState } from "react";
import { links, sections, site } from "@/content/site";
import SocialIcon from "./SocialIcon";

/** "#home" is reached by clicking the wordmark, so it isn't a nav item. */
const navSections = sections.filter((s) => s.id !== "home");

/** Roughly the bar's own height — where the hero headline passes behind it. */
const BAR_HEIGHT = 72;

const social = ["linkedin", "github", "email"]
  .map((icon) => links.find((l) => l.icon === icon))
  .filter((l): l is NonNullable<typeof l> => Boolean(l));

/**
 * Fixed top navigation, three-zone: section links left, wordmark centered,
 * external links right. The 1fr/auto/1fr grid keeps the name optically
 * centered in the viewport no matter how wide the two side groups get.
 *
 * The bar is transparent over the hero and fades in its blurred backdrop
 * once the page scrolls, so the hero reads as a clean full-bleed image.
 *
 * The wordmark itself is held back until the hero's own headline scrolls
 * out of view, so the name is never on screen twice at once.
 */
export default function TopBar() {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");
  const [scrolled, setScrolled] = useState(false);
  const [nameVisible, setNameVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // Fire when a section crosses the middle band of the viewport,
      // so exactly one section is "active" at a time.
      { rootMargin: "-45% 0px -45% 0px" }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  // Both scroll-driven states share one handler: the backdrop, and the
  // handoff of the wordmark from the hero headline up to the bar. Reading
  // the headline's own edge (rather than observing it) keeps the swap
  // symmetric — it reverses on the way back up by construction.
  useEffect(() => {
    const heroName = document.getElementById("hero-name");

    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // No hero on this page — the bar is the only place the name appears.
      setNameVisible(
        heroName ? heroName.getBoundingClientRect().bottom < BAR_HEIGHT : true
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={`topbar${scrolled ? " is-scrolled" : ""}`}>
      <nav className="topbar-nav" aria-label="Page sections">
        {navSections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`topbar-link${activeId === id ? " is-active" : ""}`}
            aria-current={activeId === id ? "true" : undefined}
          >
            {label}
          </a>
        ))}
      </nav>

      <a
        href="#home"
        className={`topbar-name${nameVisible ? " is-visible" : ""}`}
        aria-hidden={nameVisible ? undefined : "true"}
        tabIndex={nameVisible ? undefined : -1}
      >
        {site.name}
      </a>

      <div className="topbar-external">
        {social.map((link) => (
          <a
            key={link.title}
            className="topbar-icon"
            href={link.href}
            {...(link.href.startsWith("mailto:")
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
            aria-label={`${link.title} — ${link.desc}`}
            title={link.title}
          >
            <SocialIcon name={link.icon} />
          </a>
        ))}
      </div>
    </header>
  );
}
