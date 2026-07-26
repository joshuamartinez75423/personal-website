"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Fixed background: two blue depth fields plus one small warm ember,
 * gently parallaxed by scroll, under a faint film-grain layer.
 * Idle drift comes from CSS keyframes on the inner blob; scroll motion is
 * applied to the wrapper so the two transforms never conflict.
 */
export default function AnimatedBackground() {
  const { scrollYProgress } = useScroll();

  const blueY = useTransform(scrollYProgress, [0, 1], [0, -280]);
  const blueOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.55]);

  const deepY = useTransform(scrollYProgress, [0, 1], [0, 320]);
  const deepOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.8]);

  // The ember warms up mid-page, then settles.
  const emberY = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const emberOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.35, 1, 0.6]
  );

  return (
    <div className="bg-canvas" aria-hidden="true">
      <motion.div
        className="bg-wrap bg-wrap--blue"
        style={{ y: blueY, opacity: blueOpacity }}
      >
        <div className="bg-blob bg-blob--blue" />
      </motion.div>

      <motion.div
        className="bg-wrap bg-wrap--deep"
        style={{ y: deepY, opacity: deepOpacity }}
      >
        <div className="bg-blob bg-blob--deep" />
      </motion.div>

      <motion.div
        className="bg-wrap bg-wrap--ember"
        style={{ y: emberY, opacity: emberOpacity }}
      >
        <div className="bg-blob bg-blob--ember" />
      </motion.div>

      <div className="bg-grain" />
    </div>
  );
}
