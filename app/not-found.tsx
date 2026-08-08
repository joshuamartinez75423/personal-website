import Link from "next/link";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function NotFound() {
  return (
    <main className="notfound">
      <AnimatedBackground />
      <h1 className="notfound-code">404</h1>
      <p className="notfound-text">
        This page doesn&apos;t exist. Unlike Project N.O.A.H, this site has
        always had a fail state.
      </p>
      <Link className="notfound-link" href="/">
        ← Back to the site
      </Link>
    </main>
  );
}
