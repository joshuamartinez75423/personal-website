"use client";

import { motion } from "framer-motion";
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
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        aria-hidden="true"
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

      <div className="hero-inner">
        <div className="hero-content">
          <motion.h1 className="hero-name" {...fadeUp(0.1)}>
            {site.name}
          </motion.h1>

          <motion.p className="hero-bio" {...fadeUp(0.25)}>
            {site.bio}
          </motion.p>

          <motion.div className="hero-chat" {...fadeUp(0.4)}>
            <ChatWidget />
          </motion.div>
        </div>
      </div>

      <div className="scroll-hint">Scroll to explore ↓</div>
    </section>
  );
}
