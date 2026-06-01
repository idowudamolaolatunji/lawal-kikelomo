"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FACT_CARDS = [
  { icon: "📍", label: "Location",   value: "Lagos, Nigeria"        },
  { icon: "🌍", label: "Org",        value: "UrbanBetter Fellow"    },
  { icon: "🏃", label: "Activity",   value: "Cityzens Run Leader"   },
  { icon: "🌊", label: "Initiative", value: "WaveWise Co-Founder"   },
  { icon: "💨", label: "Initiative", value: "CleanAir360 Founder"   },
  { icon: "💻", label: "Role",       value: "Frontend Developer"    },
  { icon: "🎤", label: "Role",       value: "Climate Speaker"       },
];

export default function About() {
  return (
    <section id="about" className="py-28 sm:py-36" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mb-16"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontStyle: "italic",
            color: "var(--color-text)",
            lineHeight: 1.2,
          }}
        >
          The person behind the work.
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          {/* ── Bio text ── */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
              className="text-base leading-[1.95]"
              style={{ color: "var(--color-text)" }}
            >
              Kikelomo Lawal — known as{" "}
              <em style={{ color: "var(--color-lavender)" }}>Nana</em> or{" "}
              <em style={{ color: "var(--color-lavender)" }}>allahspec</em> online — is a
              Lagos-based environmental advocate, community researcher, and frontend developer.
              She believes cities should be places where everyone can breathe freely, move
              safely, and live well.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.17 }}
              className="text-base leading-[1.95]"
              style={{ color: "var(--color-text)" }}
            >
              As a{" "}
              <strong style={{ color: "var(--color-lavender)", fontWeight: 600 }}>
                Run Leader at UrbanBetter
              </strong>
              , she leads citizen science data runs across Lagos, gathering real-world air
              quality evidence to power youth-led advocacy. Her initiative{" "}
              <strong style={{ color: "var(--color-mint)", fontWeight: 600 }}>
                CleanAir360
              </strong>{" "}
              takes that work deeper — directly into vulnerable communities like Itowolo,
              where flooding and pollution compound each other.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: EASE, delay: 0.24 }}
              className="text-base leading-[1.95]"
              style={{ color: "var(--color-text)" }}
            >
              She is also a co-founder of{" "}
              <strong style={{ color: "var(--color-sage)", fontWeight: 600 }}>WaveWise</strong>
              , a multiphase campaign blending climate education, youth leadership, and
              institutional accountability. Beyond the field, she creates climate content,
              speaks at events, and codes frontend interfaces — bridging the gap between
              environmental science and technology.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: EASE, delay: 0.31 }}
              className="flex items-center gap-2.5 text-sm"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
            >
              <span
                className="inline-block w-6 h-px"
                style={{ background: "var(--color-purple-soft)" }}
              />
              Based in Lagos · Working with UrbanBetter · Building the future
            </motion.p>
          </div>

          {/* ── Fact cards ── */}
          <div className="lg:col-span-2 flex flex-col gap-2.5">
            {FACT_CARDS.map((card, i) => (
              <motion.div
                key={card.value}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.07 }}
                className="flex items-center gap-3.5 px-4 py-3 rounded-xl border"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span className="text-xl shrink-0">{card.icon}</span>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-widest mb-0.5"
                    style={{
                      color: "var(--color-muted)",
                      fontFamily: "var(--font-dm-mono)",
                    }}
                  >
                    {card.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--color-lavender)" }}>
                    {card.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
