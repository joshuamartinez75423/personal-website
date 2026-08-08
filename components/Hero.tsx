"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { site } from "@/content/site";
import ChatWidget from "./ChatWidget";

const easeOut = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: easeOut },
});

export default function Hero() {
  // Photo scrolls slower than the page for a subtle parallax depth cue.
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 900], [0, 160]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-frame" aria-hidden="true">
        <motion.div
          className="hero-bg"
          style={{ y: bgY }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src={site.headshot.src}
            alt=""
            fill
            priority
            sizes="(max-width: 900px) 100vw, 62vw"
            className="hero-bg-img"
          />
          <div className="hero-bg-overlay" />
        </motion.div>
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          {/* id is the hook TopBar watches to decide when its own
              wordmark should fade in — see components/TopBar.tsx. */}
          <motion.h1 id="hero-name" className="hero-name" {...fadeUp(0.05)}>
            {site.name}
          </motion.h1>

          <motion.p className="hero-bio" {...fadeUp(0.2)}>
            {site.bio}
          </motion.p>

          <motion.div className="hero-chat" {...fadeUp(0.35)}>
            <ChatWidget />
          </motion.div>
        </div>
      </div>

      <div className="scroll-hint">Scroll to explore ↓</div>
    </section>
  );
}
