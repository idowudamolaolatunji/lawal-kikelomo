"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { type ElementType } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TOPICS = [
  "Air Quality in African Cities",
  "Citizen Science for Advocacy",
  "Youth Climate Leadership",
  "Clean Air & Public Health",
  "Running as Environmental Activism",
  "Community-Led Research",
];

const IG_POSTS: {
  photo?: string;
  Icon?: ElementType;
  iconColor?: string;
  caption: string;
  date: string;
  gradient: string;
}[] = [
  {
    photo:
      "https://pbs.twimg.com/media/HJGqyqpXIAAa69f?format=jpg&name=large",
    caption:
      "Data run at National Stadium, Surulere. Measuring air quality along marathon routes — every step counts.",
    date: "March 2025",
    gradient: "135deg, rgba(19,77,80,0.3) 0%, rgba(13,13,18,0.5) 100%",
  },
  {
    photo:
      "https://pbs.twimg.com/media/HIhc-y6W0AALjaP?format=jpg&name=large",
    caption:
      "CleanAir360 community workshop in Itowolo — because every community deserves clean air.",
    date: "February 2025",
    gradient: "135deg, rgba(61,31,107,0.3) 0%, rgba(13,13,18,0.5) 100%",
  },
  {
    photo: "https://pbs.twimg.com/media/HJGqyqfWcAAFImk?format=jpg&name=large",
    iconColor: "var(--color-purple-soft)",
    caption:
      "Speaking at Youth Climate Forum Lagos. The data is clear. The air doesn't lie.",
    date: "January 2025",
    gradient: "135deg, rgba(107,63,160,0.5) 0%, rgba(13,13,18,0.8) 100%",
  },
];

export default function Speaking() {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="speaking" className="py-28 sm:py-36" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
        >
          Speaking & Content
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mb-5"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontStyle: "italic",
            color: "var(--color-text)",
          }}
        >
          I talk about things that matter.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.14 }}
          className="max-w-2xl text-base leading-relaxed mb-10"
          style={{ color: "var(--color-muted)" }}
        >
          Kikelomo speaks at youth climate events, environmental conferences, and community
          gatherings — translating data and field observations into stories that move people.
        </motion.p>

        {/* Topic pills */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {TOPICS.map((topic, i) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 + i * 0.07, ease: EASE }}
              className="px-4 py-2 rounded-full text-sm border"
              style={{
                color: "var(--color-lavender)",
                borderColor: "rgba(196, 168, 232, 0.22)",
                background: "rgba(196, 168, 232, 0.06)",
              }}
            >
              {topic}
            </motion.span>
          ))}
        </motion.div>

        {/* Book CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mb-20"
        >
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border transition-all duration-200"
            style={{
              borderColor: "var(--color-purple-soft)",
              color: "var(--color-lavender)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--color-purple-mid)";
              el.style.color = "var(--color-text)";
              el.style.borderColor = "var(--color-purple-mid)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.color = "var(--color-lavender)";
              el.style.borderColor = "var(--color-purple-soft)";
            }}
          >
            Book Me for Your Event →
          </a>
        </motion.div>

        {/* Instagram teaser */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <FaInstagram size={17} style={{ color: "var(--color-lavender)" }} />
              <span
                className="text-sm font-medium"
                style={{ color: "var(--color-lavender)", fontFamily: "var(--font-dm-mono)" }}
              >
                @allahspec
              </span>
            </div>
            <a
              href="https://www.instagram.com/allahspec/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
              style={{ color: "var(--color-muted)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-lavender)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
              }
            >
              Follow on Instagram <FiExternalLink size={12} />
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {IG_POSTS.map((post, i) => (
              <motion.a
                key={post.date}
                href="https://www.instagram.com/allahspec/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="rounded-2xl overflow-hidden border block"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
              >
                <div
                  className="h-44 relative overflow-hidden"
                  style={{ background: `linear-gradient(${post.gradient})` }}
                >
                  {post.photo ? (
                    <Image
                      src={post.photo}
                      alt={post.caption}
                      fill
                      className="object-cover"
                    />
                  ) : post.Icon ? (
                    <div className="flex items-center justify-center h-full">
                      <post.Icon size={44} style={{ color: post.iconColor, opacity: 0.8 }} />
                    </div>
                  ) : null}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(13,13,18,0.55) 100%)",
                    }}
                  />
                </div>
                <div className="p-4">
                  <p
                    className="text-xs leading-relaxed mb-2.5"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {post.caption}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
                  >
                    {post.date}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
