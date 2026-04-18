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

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
        zIndex: 200,
        width: scrolled ? "min(680px, calc(100vw - 32px))" : "min(840px, calc(100vw - 32px))",
        transition: "width 0.4s ease",
        background: "rgba(12,12,12,0.75)",
        backdropFilter: "blur(20px) saturate(1.8)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid var(--border)",
        borderRadius: 999,
        padding: "9px 18px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Logo */}
      <a href="/" style={{
        fontWeight: 800, fontSize: 16, color: "var(--text)",
        textDecoration: "none", letterSpacing: "-0.04em",
        display: "flex", alignItems: "center", gap: 2,
      }}>
        {siteConfig.name.split(" ")[0]}
        <span style={{ color: "var(--accent)" }}>.</span>
      </a>

      {/* Desktop Nav */}
      <nav style={{ display: "flex", gap: 6 }} className="md-nav">
        {links.map((l) => (
          <a key={l.label} href={l.href} style={{
            fontSize: 13, color: "var(--muted)", textDecoration: "none",
            padding: "5px 12px", borderRadius: 999,
            transition: "color 0.2s, background 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = "var(--text)";
            e.currentTarget.style.background = "var(--bg2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = "var(--muted)";
            e.currentTarget.style.background = "transparent";
          }}>
            {l.label}
          </a>
        ))}
      </nav>

      {/* Right actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button onClick={toggleTheme} style={{
          background: "var(--card)", border: "1px solid var(--border)",
          borderRadius: 8, padding: "6px 8px", cursor: "pointer",
          color: "var(--muted)", display: "flex", alignItems: "center",
          transition: "color 0.2s",
        }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
        >
          {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        <a href={`mailto:${siteConfig.email}`} style={{
          background: "var(--accent)", color: "#fff",
          fontSize: 12, fontWeight: 700, padding: "7px 16px",
          borderRadius: 999, textDecoration: "none",
          letterSpacing: "-0.01em",
        }}>
          Get in touch
        </a>
      </div>
    </motion.header>
  );
}
