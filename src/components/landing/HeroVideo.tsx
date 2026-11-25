import { useEffect, useRef, useState } from "react";
import heroPoster from "@/assets/hero-poster.jpg";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      connection?.saveData ||
      /(^|-)2g$/.test(connection?.effectiveType ?? "")
    )
      return;
    let idle: number | undefined;
    let fallback: number | undefined;
    const startWhenIdle = () => {
      if (typeof window.requestIdleCallback === "function") {
        idle = window.requestIdleCallback(() => setLoadVideo(true), { timeout: 2500 });
      } else {
        fallback = window.setTimeout(() => setLoadVideo(true), 250);
      }
    };
    // The original video starts after critical images, fonts and scripts finish.
    if (document.readyState === "complete") startWhenIdle();
    else window.addEventListener("load", startWhenIdle, { once: true });
    return () => {
      window.removeEventListener("load", startWhenIdle);
      if (idle !== undefined) window.cancelIdleCallback(idle);
      window.clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !loadVideo) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting && !document.hidden) void video.play().catch(() => {});
      else video.pause();
    });
    const visibility = () => {
      if (document.hidden) video.pause();
      else if (video.getBoundingClientRect().bottom > 0) void video.play().catch(() => {});
    };
    observer.observe(video);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [loadVideo]);

  return (
    <>
      <img
        src={heroPoster}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <video
        ref={videoRef}
        src={loadVideo ? "/videos/hero-barbershop.mp4" : undefined}
        preload="none"
        muted
        loop
        playsInline
        aria-hidden="true"
        onPlaying={() => setPlaying(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
