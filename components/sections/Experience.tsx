"use client";
import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
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
          Career Path
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900,
          letterSpacing: "-0.04em", color: "var(--text)",
        }}>
          Experience & Impact
        </h2>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {experience.map((exp, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 16,
              padding: "28px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: 2,
              background: "linear-gradient(90deg, var(--accent), transparent)",
            }} />

            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", flexWrap: "wrap",
              gap: 12, marginBottom: 22,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div style={{
                  background: "var(--accent-bg)", border: "1px solid var(--accent-border)",
                  borderRadius: 10, padding: 10, flexShrink: 0,
                }}>
                  <Briefcase size={16} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h3 style={{
                    fontSize: 17, fontWeight: 800, color: "var(--text)",
                    letterSpacing: "-0.02em", marginBottom: 3,
                  }}>
                    {exp.role}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--accent)", fontWeight: 600 }}>
                    {exp.company}
                  </p>
                </div>
              </div>
              <span style={{
                background: "var(--accent-bg)", color: "var(--accent)",
                fontSize: 11, fontWeight: 700, padding: "5px 12px",
                borderRadius: 999, border: "1px solid var(--accent-border)",
                flexShrink: 0,
              }}>
                {exp.period}
              </span>
            </div>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11, paddingLeft: 0 }}>
              {exp.points.map((p, j) => (
                <li key={j} style={{
                  display: "flex", gap: 10, fontSize: 13,
                  color: "var(--muted)", lineHeight: 1.65,
                }}>
                  <span style={{
                    color: "var(--accent)", flexShrink: 0,
                    marginTop: 1, fontWeight: 700, fontSize: 14,
                  }}>→</span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
