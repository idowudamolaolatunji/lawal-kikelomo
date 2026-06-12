"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Work",     href: "#work"     },
  { label: "Projects", href: "#projects" },
  { label: "Speaking", href: "#speaking" },
  { label: "Gallery",  href: "#gallery"  },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" aria-label="Kikelomo Lawal — home" className="flex items-center gap-2">
          <Image src="/kikelomo.png" alt="Kikelome" width={100} height={100} priority className="w-5 h-5" />
          <span
            className="text-sm font-medium uppercase tracking-[0.18em]"
            style={{ color: "var(--color-text)", fontFamily: "var(--font-dm-mono)" }}
          >
            allahspec
          </span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium transition-colors duration-200 cursor-pointer"
                style={{ color: "var(--color-muted)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color = "var(--color-lavender)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLButtonElement).style.color = "var(--color-muted)")
                }
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right: social icons + CTA */}
        <div className="flex items-center gap-2">
          <a
            href="https://www.instagram.com/allahspec/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hidden sm:flex p-2 rounded-lg transition-colors duration-200"
            style={{ color: "var(--color-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-mint)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
            }
          >
            <FaInstagram size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/kikelomo-lawal-7b84ba288/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:flex p-2 rounded-lg transition-colors duration-200"
            style={{ color: "var(--color-muted)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-lavender)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
            }
          >
            <FaLinkedinIn size={17} />
          </a>

          <button
            onClick={() => handleNavClick("#contact")}
            className="hidden sm:block ml-1 px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer"
            style={{
              borderColor: "var(--color-purple-soft)",
              color: "var(--color-lavender)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "var(--color-purple-mid)";
              el.style.color = "var(--color-text)";
              el.style.borderColor = "var(--color-purple-mid)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "transparent";
              el.style.color = "var(--color-lavender)";
              el.style.borderColor = "var(--color-purple-soft)";
            }}
          >
            Say Hello →
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2 rounded-lg transition-colors duration-200"
            style={{ color: "var(--color-text)" }}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden nav-glass border-t"
            style={{ borderColor: "var(--color-border)" }}
          >
            <ul className="flex flex-col py-4 px-6 gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left py-3 text-base font-medium transition-colors duration-200 cursor-pointer"
                    style={{ color: "var(--color-text)" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li
                className="flex gap-4 pt-4 mt-2 border-t"
                style={{ borderColor: "var(--color-border)" }}
              >
                <a
                  href="https://www.instagram.com/allahspec/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ color: "var(--color-muted)" }}
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kikelomo-lawal-7b84ba288/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ color: "var(--color-muted)" }}
                >
                  <FaLinkedinIn size={20} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
