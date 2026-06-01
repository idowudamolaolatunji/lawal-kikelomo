"use client";

import { useState, type CSSProperties } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiCheck } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const FIELD_BASE: CSSProperties = {
  background: "var(--color-bg)",
  border: "1px solid var(--color-border)",
  color: "var(--color-text)",
  borderRadius: "0.75rem",
  padding: "0.75rem 1rem",
  width: "100%",
  fontSize: "0.9rem",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "var(--font-dm-sans)",
};

const FOCUSED_BORDER = "var(--color-purple-soft)";

const SOCIAL_LINKS = [
  {
    icon: <FaInstagram size={19} />,
    label: "Instagram",
    handle: "@allahspec",
    href: "https://www.instagram.com/allahspec/",
    color: "var(--color-lavender)",
  },
  {
    icon: <FaLinkedinIn size={19} />,
    label: "LinkedIn",
    handle: "Kikelomo Lawal",
    href: "https://www.linkedin.com/in/kikelomo-lawal-7b84ba288/",
    color: "var(--color-lavender)",
  },
  {
    icon: <FaXTwitter size={19} />,
    label: "Twitter/X",
    handle: "@allahspec",
    href: "https://x.com/allahspec",
    color: "var(--color-lavender)",
  },
  {
    icon: <FiMail size={19} />,
    label: "Email",
    handle: "kikelomolawal@gmail.con",
    href: "mailto:kikelomolawal@gmail.con",
    color: "var(--color-mint)",
  },
];

export default function Contact() {
  const [form, setForm]           = useState({ name: "", email: "", message: "" });
  const [loading, setLoading]     = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const onFocus  = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = FOCUSED_BORDER);
  const onBlur   = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    (e.currentTarget.style.borderColor = "var(--color-border)");

  return (
    <section id="contact" className="py-28 sm:py-36" style={{ background: "var(--color-surface)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
          style={{ color: "var(--color-mint)", fontFamily: "var(--font-dm-mono)" }}
        >
          Let&apos;s Connect
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.08 }}
          className="mb-4 max-w-xl"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontStyle: "italic",
            color: "var(--color-text)",
            lineHeight: 1.2,
          }}
        >
          Let&apos;s breathe life into something together.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="max-w-lg text-base leading-relaxed mb-14"
          style={{ color: "var(--color-muted)" }}
        >
          Whether it&apos;s a collaboration, speaking opportunity, dev project, or just a
          conversation about clean air — Kikelomo is open.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* ── Contact form ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex flex-col items-center justify-center gap-6 py-20 rounded-2xl border text-center"
                  style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 220 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(126, 206, 196, 0.12)",
                      color: "var(--color-mint)",
                    }}
                  >
                    <FiCheck size={30} />
                  </motion.div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ fontFamily: "var(--font-playfair)", color: "var(--color-text)" }}
                    >
                      Message sent!
                    </h3>
                    <p className="text-sm" style={{ color: "var(--color-muted)" }}>
                      Thanks for reaching out — Kikelomo will be in touch soon.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5"
                >
                  {/* Name */}
                  <div>
                    <label
                      className="block text-[10px] font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      required
                      placeholder="Your name"
                      style={FIELD_BASE}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-[10px] font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      required
                      placeholder="your@email.com"
                      style={FIELD_BASE}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-[10px] font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={onFocus}
                      onBlur={onBlur}
                      required
                      rows={5}
                      placeholder="Tell me about your project, event, or idea…"
                      style={{ ...FIELD_BASE, resize: "vertical" }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 disabled:opacity-60 cursor-pointer"
                    style={{ background: "var(--color-purple-mid)", color: "var(--color-text)" }}
                    onMouseEnter={(e) => {
                      if (!loading)
                        (e.currentTarget as HTMLButtonElement).style.background =
                          "var(--color-purple-soft)";
                    }}
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.background =
                        "var(--color-purple-mid)")
                    }
                  >
                    {loading ? (
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-4 h-4 rounded-full border-2"
                        style={{
                          borderColor: "rgba(240,237,248,0.3)",
                          borderTopColor: "var(--color-text)",
                        }}
                      />
                    ) : (
                      <>
                        Send Message <FiMail size={15} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Direct contact links ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
            className="flex flex-col gap-4 lg:pt-2"
          >
            <p className="text-sm mb-2" style={{ color: "var(--color-muted)" }}>
              Prefer direct contact? Reach out here:
            </p>

            {SOCIAL_LINKS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.1 + i * 0.09 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 rounded-xl border transition-colors duration-200"
                style={{
                  background: "var(--color-bg)",
                  borderColor: "var(--color-border)",
                }}
              >
                <span style={{ color: item.color }}>{item.icon}</span>
                <div>
                  <p
                    className="text-[10px] uppercase tracking-widest mb-0.5"
                    style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-sm font-medium" style={{ color: "var(--color-text)" }}>
                    {item.handle}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
