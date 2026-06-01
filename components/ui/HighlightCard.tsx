"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

interface HighlightCardProps {
  title: string;
  subtitle: string;
  gradient: string;
  href?: string;
}

export default function HighlightCard({
  title,
  subtitle,
  gradient,
  href = "#",
}: HighlightCardProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.22 }}
      className="group relative shrink-0 w-72 sm:w-auto rounded-2xl overflow-hidden block"
      style={{ minHeight: 340 }}
    >
      <div className="absolute inset-0" style={{ background: gradient }} />
      <div className="absolute inset-0 bg-linear-to-t from-[#0F0F1A] via-[#0F0F1A]/40 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <p
          className="text-xs uppercase tracking-widest mb-1"
          style={{ color: "var(--color-violet-light)" }}
        >
          {subtitle}
        </p>
        <h3
          className="text-white text-lg font-semibold leading-snug mb-3"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {title}
        </h3>
        <span className="inline-flex items-center gap-1 text-sm text-white/70 group-hover:text-white transition-colors">
          View <FiArrowRight size={14} />
        </span>
      </div>
    </motion.a>
  );
}
