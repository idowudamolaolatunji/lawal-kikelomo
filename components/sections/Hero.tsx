"use client";

import { type ReactNode, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiChevronDown, FiWind, FiDroplet, FiAward } from "react-icons/fi";
import { MdDirectionsRun } from "react-icons/md";

const CAROUSEL = [
  "https://res.cloudinary.com/du8iw1efa/image/upload/c_fill,w_640,h_640,q_auto,f_auto/v1781283976/compressed-IMG_9119.JPG-Photoroom_m2drj1.png",
  "https://res.cloudinary.com/du8iw1efa/image/upload/c_fill,w_640,h_640,q_auto,f_auto/v1781284870/IMG_9461.JPG_-_Copy_zvab77.jpg",
  "https://res.cloudinary.com/du8iw1efa/image/upload/c_fill,w_640,h_640,q_auto,f_auto/v1783288813/WhatsApp_Image_2026-06-14_at_18.52.44_1_loy83v.jpg",
  "https://res.cloudinary.com/du8iw1efa/image/upload/c_fill,w_640,h_640,q_auto,f_auto/v1783288811/WhatsApp_Image_2026-06-14_at_18.52.44_qvfevq.jpg",
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ChipProps {
  children: ReactNode;
  delay: number;
  className: string;
}

function FloatingChip({ children, delay, className }: ChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={`absolute ${className} flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border whitespace-nowrap`}
      style={{
        background: "var(--color-chip-bg)",
        borderColor: "var(--color-chip-border)",
        color: "var(--color-lavender)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        fontFamily: "var(--font-dm-mono)",
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setImgIdx(i => (i + 1) % CAROUSEL.length), 4200);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-5 gap-12 items-center py-28">
        {/* ── Left: text ── */}
        <div className="lg:col-span-3 flex flex-col gap-7 items-center lg:items-start text-center lg:text-left">
          {/* Currently status */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.05 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-xs"
            style={{
              background: "var(--color-status-bg)",
              borderColor: "var(--color-status-border)",
              color: "var(--color-muted)",
              fontFamily: "var(--font-dm-mono)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{
                background: "var(--color-mint)",
                boxShadow: "0 0 6px var(--color-mint)",
              }}
            />
            Currently: Team Lead of Active Transport
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
          >
            Environmental Advocate · Run Leader · Climate Griot
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
            className="font-bold leading-[0.95]"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "clamp(3.5rem, 9vw, 7rem)",
              color: "var(--color-text)",
            }}
          >
            Kikelomo
            <br />
            <span
              style={{
                color: "var(--color-purple-soft)",
                fontStyle: "italic",
              }}
            >
              Lawal.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
            className="text-lg leading-[1.75] max-w-md mx-auto lg:mx-0"
            style={{ color: "var(--color-muted)" }}
          >
            I observe the air we breathe,
            <br />
            run the streets to measure it,
            <br />
            and build the tools to share it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.55 }}
            className="flex gap-3"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{ background: "var(--color-purple-mid)", color: "var(--color-white)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "var(--color-purple-soft)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.background =
                  "var(--color-purple-mid)")
              }
            >
              Explore My Work →
            </button>
            <button
              onClick={() => scrollTo("#contact")}
              className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-200 cursor-pointer whitespace-nowrap"
              style={{
                borderColor: "rgba(155, 110, 212, 0.35)",
                color: "var(--color-lavender)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--color-purple-soft)";
                el.style.color = "var(--color-text)";
                el.style.background = "rgba(107, 63, 160, 0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "rgba(155, 110, 212, 0.35)";
                el.style.color = "var(--color-lavender)";
                el.style.background = "transparent";
              }}
            >
              Get In Touch
            </button>
          </motion.div>
        </div>

        {/* ── Right: portrait carousel + chips ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="lg:col-span-2 relative flex flex-col justify-center items-center gap-5 py-16 lg:py-0"
        >
          {/* Portrait circle with auto-cycling carousel */}
          <div className="relative">
            <div
              className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-104 lg:h-104 rounded-full overflow-hidden"
              style={{
                border: "2px solid rgba(155, 110, 212, 0.3)",
                boxShadow: "0 0 60px rgba(107, 63, 160, 0.2)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={imgIdx}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.7, ease: EASE }}
                  className="absolute inset-0"
                >
                  <Image
                    src={CAROUSEL[imgIdx]}
                    alt="Kikelomo Lawal"
                    fill
                    className="object-cover object-top"
                    priority={imgIdx === 0}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Floating chips */}
            <FloatingChip delay={0.65} className="-top-2 -left-4 sm:-left-10">
              <MdDirectionsRun size={13} />
              Run Leader @ UrbanBetter
            </FloatingChip>
            <FloatingChip delay={0.75} className="top-15 -right-25 sm:-right-8">
              <FiAward size={12} />
              Fellow · Cities &amp; Climate Lab
            </FloatingChip>
            <FloatingChip delay={0.88} className="bottom-16 -right-2 sm:-right-6">
              <FiWind size={12} />
              CleanAir360 Founder
            </FloatingChip>
            <FloatingChip delay={1.0} className="-bottom-2 left-0 sm:left-4">
              <FiDroplet size={12} />
              WaveWise Co-founder
            </FloatingChip>
          </div>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center">
            {CAROUSEL.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIdx(i)}
                aria-label={`View photo ${i + 1}`}
                className="transition-all duration-300 cursor-pointer"
                style={{
                  width: i === imgIdx ? "18px" : "6px",
                  height: "6px",
                  borderRadius: "9999px",
                  background: i === imgIdx
                    ? "var(--color-purple-soft)"
                    : "var(--color-border)",
                  border: "none",
                  padding: 0,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        aria-label="Scroll down"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer ${
          prefersReduced ? "" : "scroll-bounce"
        }`}
        style={{ color: "var(--color-muted)" }}
      >
        <span
          className="text-[10px] uppercase tracking-widest"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          scroll
        </span>
        <FiChevronDown size={18} />
      </motion.button>
    </section>
  );
}
