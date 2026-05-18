"use client";
import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { Trophy, ExternalLink, Award } from "lucide-react";

export default function Achievements() {
  return (
    <section style={{ padding: "80px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        style={{ marginBottom: 44 }}
      >
        <p style={{
          fontSize: 11, color: "var(--accent)", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
        }}>
          Achievements
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900,
          letterSpacing: "-0.04em", color: "var(--text)",
        }}>
          Achievements
        </h2>
      </motion.div>

      {achievements.map((a, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.1 }}
          style={{
            background: "var(--card)", border: "1px solid var(--border)",
            borderRadius: 20, padding: "32px",
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: 28,
            alignItems: "start",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Gold gradient top */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 2,
            background: "linear-gradient(90deg, #f59e0b, #fbbf24, transparent)",
          }} />

          {/* Rank badge */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              width: 72, height: 72, borderRadius: "50%",
              background: "linear-gradient(135deg, #f59e0b, #d97706)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexDirection: "column",
              boxShadow: "0 0 24px rgba(245,158,11,0.2)",
              marginBottom: 8,
            }}>
              <span style={{ fontSize: 24, fontWeight: 900, color: "#fff", letterSpacing: "-0.04em" }}>
                {a.rank}
              </span>
            </div>
            <span style={{
              fontSize: 10, color: "#f59e0b", fontWeight: 700,
              background: "rgba(245,158,11,0.1)", borderRadius: 999,
              padding: "2px 8px", border: "1px solid rgba(245,158,11,0.2)",
            }}>
              {a.percentile}
            </span>
          </div>

          {/* Content */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{
                fontSize: 10, fontWeight: 700, color: "#f59e0b",
                background: "rgba(245,158,11,0.1)", borderRadius: 999,
                padding: "3px 10px", border: "1px solid rgba(245,158,11,0.2)",
              }}>
                {a.badge}
              </span>
              <span style={{ fontSize: 10, color: "var(--muted)" }}>
                {a.rank} / {a.total}
              </span>
            </div>

            <h3 style={{
              fontSize: 20, fontWeight: 900, color: "var(--text)",
              letterSpacing: "-0.03em", marginBottom: 4,
            }}>
              {a.title}
            </h3>
            <p style={{ fontSize: 12, color: "var(--muted)", marginBottom: 14 }}>
              {a.subtitle}
            </p>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, marginBottom: 18 }}>
              {a.description}
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <a href={a.verifyUrl} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 5,
                fontSize: 11, color: "var(--accent)", fontWeight: 700,
                border: "1px solid var(--accent-border)", borderRadius: 999,
                padding: "5px 12px", textDecoration: "none",
                background: "var(--accent-bg)",
              }}>
                <ExternalLink size={11} /> Verify Credential
              </a>
              <span style={{ fontSize: 10, color: "var(--muted)", fontFamily: "var(--font-mono, monospace)" }}>
                REF: {a.refId}
              </span>
            </div>
          </div>

          <style>{`@media (max-width: 600px) { .ach-grid { grid-template-columns: 1fr !important; } }`}</style>
        </motion.div>
      ))}
    </section>
  );
}
