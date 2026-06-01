"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiWind, FiDroplet, FiCode } from "react-icons/fi";
import { MdDirectionsRun } from "react-icons/md";
import { type ElementType } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const PROJECTS: {
  title: string;
  tags: string[];
  tagColor: string;
  description: string;
  status: string;
  statusColor: string;
  Visual: ElementType;
  bgGradient: string;
  href: string;
}[] = [
  {
    title: "WaveWise",
    tags: ["Climate Resilience", "Community"],
    tagColor: "var(--color-sage)",
    description:
      "A multiphase initiative in Itowolo, Lagos State — combining climate education, youth leadership, and advocacy to tackle persistent flooding and environmental degradation. Co-founded with Munnir Adams (Clime With Me).",
    status: "Active",
    statusColor: "var(--color-sage)",
    Visual: FiDroplet,
    bgGradient: "135deg, rgba(61,31,107,0.55) 0%, rgba(13,13,18,0.75) 100%",
    href: "",
  },
  {
    title: "CleanAir360",
    tags: ["Air Quality", "Community Research"],
    tagColor: "var(--color-mint)",
    description:
      "An initiative to bring air quality monitoring and education directly to vulnerable Lagos communities. Evidence gathered powers advocacy campaigns for cleaner air.",
    status: "Active",
    statusColor: "var(--color-mint)",
    Visual: FiWind,
    bgGradient: "135deg, rgba(19,77,80,0.55) 0%, rgba(13,13,18,0.75) 100%",
    href: "",
  },
  {
    title: "Lagos — Running for Clean Air",
    tags: ["Citizen Science", "UrbanBetter"],
    tagColor: "var(--color-lavender)",
    description:
      "Monthly fitness drives at National Stadium Surulere, Lagos. Data runs measuring PM2.5, temperature, and pollutants along marathon routes, feeding into World Athletics' global clean air initiative.",
    status: "Ongoing",
    statusColor: "var(--color-lavender)",
    Visual: MdDirectionsRun,
    bgGradient: "135deg, rgba(61,31,107,0.4) 0%, rgba(19,77,80,0.4) 100%",
    href: "https://urbanbetter.science",
  },
  {
    title: "Portfolio Website",
    tags: ["Frontend Development"],
    tagColor: "var(--color-purple-soft)",
    description:
      "This very site — built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Designed to breathe.",
    status: "You're looking at it",
    statusColor: "var(--color-purple-soft)",
    Visual: FiCode,
    bgGradient: "135deg, rgba(61,31,107,0.6) 0%, rgba(107,63,160,0.3) 100%",
    href: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 sm:py-36" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
        >
          Projects
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mb-3"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontStyle: "italic",
            color: "var(--color-text)",
          }}
        >
          Things I&apos;ve built and fought for.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14 text-base italic"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-playfair)" }}
        >
          From data runs to grassroots campaigns.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(107, 63, 160, 0.28)" }}
                transition={{ duration: 0.22 }}
                className="rounded-2xl border overflow-hidden h-full flex flex-col"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                {/* Visual header */}
                <div
                  className="h-36 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(${project.bgGradient})` }}
                >
                  <project.Visual size={52} style={{ color: project.tagColor, opacity: 0.75 }} />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse at 50% 0%, rgba(107,63,160,0.25) 0%, transparent 70%)",
                    }}
                  />
                </div>

                <div className="p-6 flex flex-col gap-4 flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border"
                        style={{
                          color: project.tagColor,
                          borderColor: `color-mix(in srgb, ${project.tagColor} 30%, transparent)`,
                          background: `color-mix(in srgb, ${project.tagColor} 8%, transparent)`,
                          fontFamily: "var(--font-dm-mono)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title + description */}
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {project.description}
                    </p>
                  </div>

                  {/* Footer: status + link */}
                  <div
                    className="flex items-center justify-between mt-auto pt-4 border-t"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <span
                      className="text-[11px] font-medium px-3 py-1 rounded-full"
                      style={{
                        color: project.statusColor,
                        background: `color-mix(in srgb, ${project.statusColor} 12%, transparent)`,
                        fontFamily: "var(--font-dm-mono)",
                      }}
                    >
                      ● {project.status}
                    </span>
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                        style={{ color: "var(--color-muted)" }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color = project.tagColor)
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLAnchorElement).style.color =
                            "var(--color-muted)")
                        }
                      >
                        Learn more <FiExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
