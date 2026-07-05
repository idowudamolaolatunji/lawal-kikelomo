"use client";

import { motion } from "framer-motion";
import { FiWind, FiUsers, FiMic } from "react-icons/fi";
import { type ElementType } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface ExpertiseArea {
  Icon: ElementType;
  title: string;
  description: string;
  tags: string[];
  iconColor: string;
  tagColor: string;
}

const AREAS: ExpertiseArea[] = [
  {
    Icon: FiWind,
    title: "Air Quality & Environment",
    description:
      "Field-based monitoring and analysis of urban air pollution, with a focus on Lagos communities most impacted by environmental inequality.",
    tags: ["Air Quality Monitoring", "Citizen Science", "Field Data Collection", "Environmental Scoping", "PM2.5 Analysis"],
    iconColor: "var(--color-mint)",
    tagColor: "rgba(126,206,196,0.12)",
  },
  {
    Icon: FiUsers,
    title: "Community & Advocacy",
    description:
      "Designing and leading campaigns that turn environmental data into community action — from vulnerable neighbourhoods to national policy conversations.",
    tags: ["Community Research", "Youth Leadership", "Campaign Design", "Policy Engagement", "Run Leadership"],
    iconColor: "var(--color-sage)",
    tagColor: "rgba(126,206,196,0.08)",
  },
  {
    Icon: FiMic,
    title: "Climate Communication",
    description:
      "Translating complex environmental issues into compelling stories for public audiences, online platforms, and live events.",
    tags: ["Public Speaking", "Digital Storytelling", "Climate Content", "Social Media", "Workshop Facilitation"],
    iconColor: "var(--color-lavender)",
    tagColor: "rgba(155,110,212,0.12)",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 sm:py-36" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
        >
          Expertise
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mb-4"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontStyle: "italic",
            color: "var(--color-text)",
          }}
        >
          What I bring to the table.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="max-w-2xl text-base leading-relaxed mb-14"
          style={{ color: "var(--color-muted)" }}
        >
          Four intersecting disciplines — grounded in fieldwork, driven by community, and built to last.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-5">
          {AREAS.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
              className="flex flex-col gap-5 p-7 rounded-2xl border"
              style={{
                background: "var(--color-bg)",
                borderColor: "var(--color-border)",
              }}
            >
              {/* Icon + title */}
              <div className="flex items-start gap-4">
                <div
                  className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: area.tagColor }}
                >
                  <area.Icon size={19} style={{ color: area.iconColor }} />
                </div>
                <h3
                  className="text-base font-semibold leading-snug pt-1"
                  style={{ color: "var(--color-text)", fontFamily: "var(--font-playfair)" }}
                >
                  {area.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm leading-[1.85]" style={{ color: "var(--color-muted)" }}>
                {area.description}
              </p>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1 rounded-full"
                    style={{
                      background: area.tagColor,
                      color: area.iconColor,
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
