"use client";

import { type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FiChevronDown, FiWind, FiDroplet } from "react-icons/fi";
import { MdDirectionsRun } from "react-icons/md";

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
        background: "rgba(19, 17, 30, 0.92)",
        borderColor: "var(--color-border)",
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

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="hero-bg relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-5 gap-12 items-center py-28">
        {/* ── Left: text ── */}
        <div className="lg:col-span-3 flex flex-col gap-7">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
          >
            Environmental Advocate · Run Leader · Developer
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
            className="text-lg leading-[1.75] max-w-md"
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
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="px-7 py-3 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer"
              style={{ background: "var(--color-purple-mid)", color: "var(--color-text)" }}
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
              className="px-7 py-3 rounded-full text-sm font-semibold border transition-all duration-200 cursor-pointer"
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

        {/* ── Right: portrait + floating chips ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="lg:col-span-2 relative flex justify-center items-center py-16 lg:py-0"
        >
          {/* Portrait circle */}
          <div
            className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden"
            style={{
              border: "2px solid rgba(155, 110, 212, 0.3)",
              boxShadow: "0 0 60px rgba(107, 63, 160, 0.2)",
            }}
          >
            <Image
              src="https://pbs.twimg.com/profile_images/1804584419560198144/JtdcGEo5_400x400.jpg"
              alt="Kikelomo Lawal"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating chips */}
          <FloatingChip delay={0.65} className="-top-2 -left-4 sm:-left-10">
            <MdDirectionsRun size={13} />
            Run Leader @ UrbanBetter
          </FloatingChip>
          <FloatingChip delay={0.8} className="bottom-16 -right-2 sm:-right-6">
            <FiWind size={12} />
            CleanAir360 Founder
          </FloatingChip>
          <FloatingChip delay={0.95} className="-bottom-2 left-0 sm:left-4">
            <FiDroplet size={12} />
            WaveWise Co-founder
          </FloatingChip>
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
