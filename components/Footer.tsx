import { site } from "@/content/site";

/** External links live in the top bar — the footer is colophon only. */
export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-colophon">
        Designed &amp; built by {site.name} — Next.js · TypeScript · Gemini.{" "}
        <a href={site.repoUrl} target="_blank" rel="noopener noreferrer">
          Source ↗
        </a>
      </p>
      <p className="footer-copy">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  );
}
