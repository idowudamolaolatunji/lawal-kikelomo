"use client";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiWind } from "react-icons/fi";

const NAV_LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Work",     href: "#work"     },
  { label: "Projects", href: "#projects" },
  { label: "Speaking", href: "#speaking" },
  { label: "Contact",  href: "#contact"  },
];

const SOCIAL = [
  {
    icon: <FaInstagram size={16} />,
    label: "@allahspec",
    href: "https://www.instagram.com/allahspec/",
  },
  {
    icon: <FaLinkedinIn size={16} />,
    label: "Kikelomo Lawal",
    href: "https://www.linkedin.com/in/kikelomo-lawal-7b84ba288/",
  },
  {
    icon: <FaXTwitter size={16} />,
    label: "@allahspec",
    href: "https://x.com/allahspec",
  },
  {
    icon: <FiMail size={16} />,
    label: "kikelomolawal@gmail.con",
    href: "mailto:kikelomolawal@gmail.con",
  },
];

export default function Footer() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="border-t"
      style={{ background: "var(--color-bg)", borderColor: "var(--color-border)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <FiWind size={15} style={{ color: "var(--color-mint)" }} />
              <span
                className="text-sm font-medium uppercase tracking-[0.18em]"
                style={{ color: "var(--color-text)", fontFamily: "var(--font-dm-mono)" }}
              >
                allahspec
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Environmental advocate, run leader, and frontend developer based in Lagos, Nigeria.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-5"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm transition-colors duration-200 cursor-pointer"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "var(--color-lavender)")
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
          </div>

          {/* Social / Contact */}
          <div>
            <p
              className="text-[10px] uppercase tracking-widest mb-5"
              style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
            >
              Connect
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {SOCIAL.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-2.5 text-sm transition-colors duration-200"
                    style={{ color: "var(--color-muted)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-lavender)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color = "var(--color-muted)")
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--color-muted)", fontFamily: "var(--font-dm-mono)" }}
          >
            © 2025 Kikelomo Lawal · allahspec
          </p>
          <p className="text-xs" style={{ color: "var(--color-muted)" }}>
            Designed & built with intention. 💜
          </p>
        </div>
      </div>
    </footer>
  );
}
