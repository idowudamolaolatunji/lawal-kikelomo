"use client";

import { motion } from "framer-motion";
import { FiExternalLink, FiWind, FiDroplet, FiCode, FiMic } from "react-icons/fi";
import { MdDirectionsRun } from "react-icons/md";
import { type ElementType } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ROLES: {
  Icon: ElementType;
  org: string;
  orgColor: string;
  title: string;
  period: string;
  description: string;
  href: string;
}[] = [
  {
    Icon: MdDirectionsRun,
    org: "UrbanBetter",
    orgColor: "var(--color-mint)",
    title: "Run Leader & Environmental Researcher",
    period: "2023 — Present",
    description:
      "Leads citizen science data runs across Lagos, generating air quality evidence for policy advocacy. Part of the Running for Clean Air initiative with World Athletics.",
    href: "https://urbanbetter.science",
  },
  {
    Icon: FiWind,
    org: "CleanAir360",
    orgColor: "var(--color-lavender)",
    title: "Founder",
    period: "2023 — Present",
    description:
      "Tackles air pollution in Lagos's most vulnerable communities through monitoring, education, and community-driven action. Active in Itowolo and surrounding areas.",
    href: "",
  },
  {
    Icon: FiDroplet,
    org: "WaveWise",
    orgColor: "var(--color-sage)",
    title: "Co-Founder",
    period: "2023 — Present",
    description:
      "Youth-led climate resilience initiative addressing flooding and environmental degradation in Itowolo, Lagos. Launched June 5 — World Environment Day.",
    href: "",
  },
  {
    Icon: FiCode,
    org: "Frontend Development",
    orgColor: "var(--color-purple-soft)",
    title: "Developer",
    period: "Ongoing",
    description:
      "Builds web interfaces and digital tools — passionate about tech that serves environmental and community causes. React, Next.js, TypeScript.",
    href: "",
  },
  {
    Icon: FiMic,
    org: "Climate Speaking",
    orgColor: "var(--color-mint)",
    title: "Speaker & Content Creator",
    period: "Ongoing",
    description:
      "Creates content on air quality, community resilience, and climate action. Speaks at youth climate events and environmental conferences across Lagos.",
    href: "",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-28 sm:py-36" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mb-14"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontStyle: "italic",
            color: "var(--color-text)",
          }}
        >
          Where I show up.
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROLES.map((role, i) => (
            <motion.div
              key={role.org}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.08 }}
            >
              <motion.div
                whileHover={{ y: -5, boxShadow: "0 16px 48px rgba(107, 63, 160, 0.22)" }}
                transition={{ duration: 0.2 }}
                className="relative rounded-2xl p-6 border h-full flex flex-col gap-4 overflow-hidden"
                style={{
                  background: "var(--color-bg)",
                  borderColor: "var(--color-border)",
                  borderTopWidth: 2,
                  borderTopColor: role.orgColor,
                }}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-2">
                  <span style={{ color: role.orgColor }}>
                    <role.Icon size={22} />
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-widest px-2 py-1 rounded shrink-0"
                    style={{
                      color: "var(--color-muted)",
                      background: "rgba(155, 110, 212, 0.08)",
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    {role.period}
                  </span>
                </div>

                {/* Org + title */}
                <div>
                  <p
                    className="text-xs font-semibold mb-1.5 uppercase tracking-wider"
                    style={{ color: role.orgColor, fontFamily: "var(--font-dm-mono)" }}
                  >
                    {role.org}
                  </p>
                  <h3
                    className="text-base font-semibold leading-snug"
                    style={{
                      color: "var(--color-text)",
                      fontFamily: "var(--font-playfair)",
                    }}
                  >
                    {role.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: "var(--color-muted)" }}
                >
                  {role.description}
                </p>

                {/* External link */}
                {role.href && (
                  <a
                    href={role.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200 mt-auto"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = role.orgColor)
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
                    }
                  >
                    Visit site <FiExternalLink size={11} />
                  </a>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
