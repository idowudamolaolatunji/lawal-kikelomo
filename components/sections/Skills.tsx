"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Level = "Familiar" | "Proficient" | "Expert";

const ENV_SKILLS: { name: string; level: Level }[] = [
  { name: "Air Quality Monitoring & Analysis",  level: "Expert"    },
  { name: "Community Research & Scoping",        level: "Expert"    },
  { name: "Environmental Advocacy",              level: "Expert"    },
  { name: "Citizen Science Data Collection",     level: "Proficient"},
  { name: "Climate Content Creation",            level: "Proficient"},
  { name: "Youth-Led Campaign Design",           level: "Proficient"},
  { name: "Environmental Scoping",               level: "Expert"    },
];

const TECH_SKILLS: { name: string; level: Level }[] = [
  { name: "Frontend Development (React / Next.js)", level: "Proficient"},
  { name: "TypeScript & JavaScript",                level: "Proficient"},
  { name: "Tailwind CSS",                           level: "Expert"    },
  { name: "Data Visualization",                     level: "Familiar"  },
  { name: "Community Management",                   level: "Expert"    },
  { name: "Digital Storytelling",                   level: "Expert"    },
  { name: "Run Leadership & Event Coordination",    level: "Expert"    },
];

const FILL: Record<Level, string> = {
  Familiar:  "38%",
  Proficient: "65%",
  Expert:     "88%",
};

function SkillRow({ name, level, color }: { name: string; level: Level; color: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm" style={{ color: "var(--color-text)" }}>
          {name}
        </span>
        <span
          className="text-[10px] uppercase tracking-widest shrink-0"
          style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
        >
          {level}
        </span>
      </div>
      <div
        className="h-1 rounded-full overflow-hidden"
        style={{ background: "rgba(155, 110, 212, 0.1)" }}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: FILL[level] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
    </div>
  );
}

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
          Skills
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
          What I bring to the table.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Environmental skills */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xl">🌿</span>
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--color-mint)", fontFamily: "var(--font-playfair)" }}
              >
                Environmental Skills
              </h3>
            </div>
            {ENV_SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
              >
                <SkillRow
                  name={skill.name}
                  level={skill.level}
                  color="var(--color-mint)"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Tech skills */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xl">💻</span>
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--color-purple-soft)", fontFamily: "var(--font-playfair)" }}
              >
                Tech & Digital Skills
              </h3>
            </div>
            {TECH_SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.06 }}
              >
                <SkillRow
                  name={skill.name}
                  level={skill.level}
                  color="var(--color-purple-soft)"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
