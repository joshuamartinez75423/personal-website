"use client";

import { useEffect, useRef } from "react";

/**
 * Muted, looping, autoplaying inline video (Apple-style ambient clip).
 * Client component because React doesn't reliably render the `muted`
 * attribute in server HTML, and autoplay is blocked without it —
 * so we set muted via the DOM and kick playback on mount.
 */
export default function AutoplayVideo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay can still be blocked (e.g. data-saver mode); the
      // poster frame simply stays put — nothing to handle.
    });
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
  );
}
