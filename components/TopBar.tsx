"use client";

import { useEffect, useState } from "react";
import { sections, site } from "@/content/site";

/**
 * Fixed top navigation: name on the left, section links on the right.
 * Tracks the section currently on screen via IntersectionObserver.
 */
export default function TopBar() {
  const [activeId, setActiveId] = useState(sections[0]?.id ?? "");

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

  return (
    <header className="topbar">
      <a href="#home" className="topbar-name">
        {site.name}
      </a>
      <nav className="topbar-links" aria-label="Page sections">
        {sections.map(({ id, label }) => (
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
    </header>
  );
}
