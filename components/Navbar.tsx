"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/data";

const links = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", fn, { passive: true });

    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
        position: "fixed",
        top: 16,
        left: 0,
        right: 0,
        margin: "0 auto",
        zIndex: 200,
        width: scrolled
          ? "min(720px, calc(100vw - 16px))"
          : "min(920px, calc(100vw - 16px))",
        transition: "all 0.4s ease",
        background: isDark
          ? "rgba(12,12,12,0.75)"
          : "rgba(255,255,255,0.75)",
        backdropFilter: "blur(20px)",
        border: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid rgba(0,0,0,0.08)",
        borderRadius: 999,
        padding: "10px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      }}
      >
      {/* Logo */}
      <a
        href="/"
        style={{
          fontWeight: 800,
          fontSize: "clamp(14px, 2vw, 16px)",
          color: isDark ? "#fff" : "#111",
          textDecoration: "none",
          letterSpacing: "-0.04em",
          display: "flex",
          alignItems: "center",
          gap: 2,
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}
      >
          {siteConfig.name.split(" ")[0]}
          <span style={{ color: "var(--accent)" }}>.</span>
        </a>

  {/* Nav */}
  <nav
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "clamp(2px, 1vw, 8px)",
      flex: 1,
      overflow: "hidden",
    }}
  >
    {links.map((l) => (
      <a
        key={l.label}
        href={l.href}
        style={{
          fontSize: "clamp(11px, 1.8vw, 14px)",
          color: isDark ? "#d1d5db" : "#374151",
          textDecoration: "none",
          padding: "clamp(4px, 1vw, 8px) clamp(6px, 1.5vw, 14px)",
          borderRadius: 999,
          transition: "all 0.2s ease",
          fontWeight: 500,
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = isDark ? "#fff" : "#000";
          e.currentTarget.style.background = isDark
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.06)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = isDark
            ? "#d1d5db"
            : "#374151";
          e.currentTarget.style.background = "transparent";
        }}
      >
        {l.label}
      </a>
    ))}
  </nav>

  {/* Right Side */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexShrink: 0,
    }}
  >
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: isDark ? "#171717" : "#f3f4f6",
            border: isDark
              ? "1px solid rgba(255,255,255,0.08)"
              : "1px solid rgba(0,0,0,0.08)",
            borderRadius: 10,
            padding: "6px 8px",
            cursor: "pointer",
            color: isDark ? "#fff" : "#111",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        
        {/* Contact */}
        <a
          href={`mailto:${siteConfig.email}`}
          style={{
            background: "var(--accent)",
            color: "#fff",
            fontSize: "clamp(10px, 1.6vw, 13px)",
            fontWeight: 700,
            padding: "clamp(6px, 1vw, 8px) clamp(10px, 1.8vw, 16px)",
            borderRadius: 999,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Get in touch
        </a>
      </div>
    </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: 82,
              left: 0,
              right: 0,
              margin: "0 auto",
              width: "calc(100vw - 20px)",
              maxWidth: 420,
              zIndex: 199,
              background: isDark
                ? "rgba(12,12,12,0.95)"
                : "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              borderRadius: 24,
              padding: 14,
              border: isDark
                ? "1px solid rgba(255,255,255,0.08)"
                : "1px solid rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  textDecoration: "none",
                  color: isDark ? "#fff" : "#111",
                  padding: "12px 14px",
                  borderRadius: 12,
                  fontSize: 15,
                  fontWeight: 500,
                  background: isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(0,0,0,0.04)",
                }}
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .contact-btn {
            display: none !important;
          }

          .mobile-menu-btn {
            display: flex !important;
            align-items: center;
            justify-content: center;
          }

          header {
            width: calc(100vw - 16px) !important;
            padding: 10px 14px !important;
          }
        }
      `}</style>
    </>
  );
}