"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: "GitHub",   href: siteConfig.github,   img: "https://skillicons.dev/icons?i=github" },
  { label: "Twitter",  href: siteConfig.twitter,  img: "https://skillicons.dev/icons?i=twitter" },
  { label: "LinkedIn", href: siteConfig.linkedin, img: "https://skillicons.dev/icons?i=linkedin" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      padding: "60px 0 40px",
    }}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: "center" }}
      >
        <p style={{
          fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 900,
          color: "var(--text)", letterSpacing: "-0.03em", marginBottom: 8,
        }}>
          Let's build something amazing.
        </p>
        <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 28 }}>
          Open to freelance projects and collaborations
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
          <a href={`mailto:${siteConfig.email}`} style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            background: "var(--accent)", color: "#fff",
            fontSize: 13, fontWeight: 700, padding: "10px 22px",
            borderRadius: 999, textDecoration: "none",
          }}>
            {siteConfig.email} <ArrowUpRight size={13} />
          </a>
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.label}
              style={{
                background: "var(--card)", border: "1px solid var(--border)",
                padding: "9px", borderRadius: 10,
                display: "inline-flex", textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <img src={s.img} alt={s.label} width={20} height={20} style={{ borderRadius: 4 }} />
            </a>
          ))}
        </div>

        <p style={{ fontSize: 11, color: "var(--faint)" }}>
          © {year} Crafted with ♥ by {siteConfig.name}
        </p>
      </motion.div>
    </footer>
  );
}
