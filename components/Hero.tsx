"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Zap, X, ExternalLink } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: "easeOut" },
});

// Use img tags for social icons since lucide doesn't have Github/LinkedIn
const socials = [
  { label: "GitHub",    href: siteConfig.github,    img: "https://skillicons.dev/icons?i=github" },
  { label: "Twitter",   href: siteConfig.twitter,   img: "https://skillicons.dev/icons?i=twitter" },
  { label: "LinkedIn",  href: siteConfig.linkedin,  img: "https://skillicons.dev/icons?i=linkedin" },
];

export default function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "130px 24px 90px",
      position: "relative",
      overflow: "hidden",
      maxWidth: 900,
      margin: "0 auto",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "fixed", top: "15%", left: "30%",
        width: 700, height: 400,
        background: "radial-gradient(ellipse, rgba(124,106,247,0.06) 0%, transparent 65%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{ width: "100%", zIndex: 1 }}>

        {/* Availability pill */}
        <motion.div {...fadeUp(0.05)} style={{ marginBottom: 28 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 999, padding: "5px 14px",
            fontSize: 12, color: "var(--muted)",
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: "50%",
              background: "var(--green)",
              boxShadow: "0 0 8px var(--green)",
              display: "inline-block",
              animation: "gpulse 2s infinite",
            }} />
            Open to work
          </span>
        </motion.div>

        {/* Heading */}
        <motion.p {...fadeUp(0.1)} style={{
          fontSize: 16, color: "var(--muted)", marginBottom: 10, fontWeight: 500,
        }}>
          {siteConfig.tagline}
        </motion.p>

        <motion.h1 {...fadeUp(0.15)} style={{
          fontSize: "clamp(44px, 8vw, 80px)",
          fontWeight: 900,
          lineHeight: 1.03,
          letterSpacing: "-0.04em",
          marginBottom: 28,
          color: "var(--text)",
        }}>
          A Full Stack
          <br />
          <span style={{
            background: "linear-gradient(135deg, var(--accent) 20%, var(--accent2) 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            Web Developer.
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.2)} style={{
          fontSize: 15, color: "var(--muted)", lineHeight: 1.75,
          maxWidth: 520, marginBottom: 40,
        }}>
          {siteConfig.bio}
        </motion.p>

        {/* CTAs + Socials */}
        <motion.div {...fadeUp(0.25)} style={{
          display: "flex", gap: 10, flexWrap: "wrap",
          alignItems: "center", marginBottom: 56,
        }}>
          <a href={siteConfig.resumeUrl} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "var(--text)", color: "var(--bg)",
            fontWeight: 700, fontSize: 13, padding: "10px 22px",
            borderRadius: 999, textDecoration: "none",
            letterSpacing: "-0.02em",
          }}>
            Resume / CV <ArrowUpRight size={13} />
          </a>
          <a href={`mailto:${siteConfig.email}`} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "transparent", border: "1px solid var(--border)",
            color: "var(--text)", fontWeight: 600, fontSize: 13,
            padding: "10px 22px", borderRadius: 999, textDecoration: "none",
            transition: "border-color 0.2s",
          }}>
            Get in touch
          </a>

          {/* Socials */}
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
              title={s.label}
              style={{
                background: "var(--card)", border: "1px solid var(--border)",
                padding: "7px", borderRadius: 10,
                display: "inline-flex", alignItems: "center", textDecoration: "none",
                transition: "border-color 0.2s",
              }}
            >
              <img src={s.img} alt={s.label} width={20} height={20} style={{ borderRadius: 4 }} />
            </a>
          ))}
        </motion.div>

        {/* Stats bar */}
        <motion.div {...fadeUp(0.3)}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
            gap: 1,
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ background: "var(--card)", padding: "18px 20px" }}>
                <div style={{
                  fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 900,
                  color: "var(--text)", letterSpacing: "-0.04em",
                }}>
                  {s.value}
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 3, fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Current focus */}
          <div style={{
            marginTop: 12, display: "flex", alignItems: "center", gap: 6,
            fontSize: 12, color: "var(--muted)",
          }}>
            <Zap size={12} style={{ color: "var(--accent)" }} />
            Current Focus:
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              {siteConfig.currentFocus}
            </span>
          </div>
        </motion.div>

      </div>

      <style>{`
        @keyframes gpulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 600px) {
          h1 { font-size: 44px !important; }
        }
      `}</style>
    </section>
  );
}
