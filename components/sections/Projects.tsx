"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

function techIconUrl(name: string): string {
  const map: Record<string, string> = {
    react:      "https://skillicons.dev/icons?i=react",
    nodejs:     "https://skillicons.dev/icons?i=nodejs",
    express:    "https://skillicons.dev/icons?i=express",
    mongodb:    "https://skillicons.dev/icons?i=mongodb",
    redis:      "https://skillicons.dev/icons?i=redis",
    nextjs:     "https://skillicons.dev/icons?i=nextjs",
    python:     "https://skillicons.dev/icons?i=python",
    discord:    "https://skillicons.dev/icons?i=discord",
    cloudflare: "https://skillicons.dev/icons?i=cloudflare",
  };
  return map[name] ?? `https://skillicons.dev/icons?i=nodejs`;
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter(p => p.featured);
  const extra    = projects.filter(p => !p.featured);
  const visible  = showAll ? projects : featured;

  return (
    <section id="projects" style={{ padding: "80px 0" }}>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 44,
        }}
      >
        <div>
          <p style={{
            fontSize: 11, color: "var(--accent)", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
          }}>
            Featured
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900,
            letterSpacing: "-0.04em", color: "var(--text)",
          }}>
            Projects
          </h2>
        </div>
        <a
          href="https://github.com/yourusername"
          target="_blank" rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            fontSize: 12, fontWeight: 600, color: "var(--muted)",
            border: "1px solid var(--border)", borderRadius: 999,
            padding: "8px 16px", textDecoration: "none",
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--muted)"; }}
          onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
        >
          View All on GitHub <ArrowUpRight size={12} />
        </a>
      </motion.div>

      {/* Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(290px, 1fr))",
        gap: 14,
      }}>
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, y: 22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0,  scale: 1 }}
              exit={{    opacity: 0, y: 10,  scale: 0.95 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -5 }}
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition: "border-color 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
                (e.currentTarget as HTMLElement).style.boxShadow  = "0 8px 32px rgba(124,106,247,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.boxShadow  = "none";
              }}
            >
              {/* Banner */}
              <div style={{
                height: 148,
                background: `linear-gradient(${p.gradient})`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 54,
                borderBottom: "1px solid var(--border2)",
                position: "relative",
                overflow: "hidden",
              }}>
                {/* subtle grid overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }} />
                <span style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.4))" }}>
                  {p.emoji}
                </span>
              </div>

              {/* Body */}
              <div style={{ padding: "20px 22px 22px", flex: 1, display: "flex", flexDirection: "column" }}>

                {/* Title + status */}
                <div style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "flex-start", marginBottom: 10, gap: 8,
                }}>
                  <h3 style={{
                    fontSize: 15, fontWeight: 800, color: "var(--text)",
                    letterSpacing: "-0.02em", lineHeight: 1.2,
                  }}>
                    {p.name}
                  </h3>
                  <span style={{
                    display: "flex", alignItems: "center", gap: 4,
                    fontSize: 10, color: "var(--green)", fontWeight: 700,
                    background: "var(--green-bg)", borderRadius: 999,
                    padding: "3px 8px", flexShrink: 0,
                    border: "1px solid rgba(34,197,94,0.15)",
                  }}>
                    <span style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "var(--green)", display: "inline-block",
                      animation: "gpulse 2.5s infinite",
                    }} />
                    {p.status}
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  fontSize: 12.5, color: "var(--muted)", lineHeight: 1.65,
                  marginBottom: 16, flex: 1,
                }}>
                  {p.description}
                </p>

                {/* Tech stack icons */}
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 16, alignItems: "center" }}>
                  {p.techIcons.map((icon, idx) => (
                    <img
                      key={idx}
                      src={techIconUrl(icon)}
                      alt={p.tech[idx] ?? icon}
                      title={p.tech[idx] ?? icon}
                      width={22} height={22}
                      style={{ borderRadius: 4, opacity: 0.85 }}
                    />
                  ))}
                  {p.tech.length > p.techIcons.length && (
                    <span style={{
                      fontSize: 10, color: "var(--muted)",
                      background: "var(--bg2)", borderRadius: 6,
                      padding: "2px 6px", border: "1px solid var(--border)",
                    }}>
                      +{p.tech.length - p.techIcons.length} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <a
                  href={p.link}
                  target={p.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: 12, color: "var(--accent)", textDecoration: "none",
                    fontWeight: 700, letterSpacing: "-0.01em",
                    transition: "gap 0.15s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = "8px"}
                  onMouseLeave={e => e.currentTarget.style.gap = "4px"}
                >
                  View Details <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Show more / less */}
      {extra.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: 24 }}
        >
          <button
            onClick={() => setShowAll(v => !v)}
            style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: "var(--card)", border: "1px solid var(--border)",
              color: "var(--muted)", fontSize: 13, fontWeight: 600,
              padding: "10px 24px", borderRadius: 999, cursor: "pointer",
              transition: "color 0.2s, border-color 0.2s",
            }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--text)"; e.currentTarget.style.borderColor = "var(--muted)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; }}
          >
            {showAll
              ? <><ChevronUp size={14} /> Show Less</>
              : <><ChevronDown size={14} /> Show More ({extra.length} more)</>
            }
          </button>
        </motion.div>
      )}

      <style>{`
        @keyframes gpulse { 0%,100%{opacity:1} 50%{opacity:0.35} }
      `}</style>
    </section>
  );
}
