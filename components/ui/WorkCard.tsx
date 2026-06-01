"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface WorkCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export default function WorkCard({ icon: Icon, title, description }: WorkCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 40px rgba(124,58,237,0.18)" }}
      transition={{ duration: 0.2 }}
      className="group relative rounded-2xl p-7 border border-(--color-line) bg-white overflow-hidden"
      style={{ borderTopWidth: 3, borderTopColor: "var(--color-violet)" }}
    >
      <div className="mb-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-(--color-violet-dim)">
        <Icon size={22} color="var(--color-violet)" />
      </div>
      <h3
        className="mb-2 text-lg font-semibold leading-snug"
        style={{ color: "var(--color-ink)", fontFamily: "var(--font-playfair)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--color-smoke)" }}>
        {description}
      </p>
    </motion.div>
  );
}
