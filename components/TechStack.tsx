"use client";
import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="work" style={{ padding: "80px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: 44 }}
      >
        <p style={{
          fontSize: 11, color: "var(--accent)", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
        }}>
          Expertise
        </p>
        <h2 style={{
          fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900,
          letterSpacing: "-0.04em", color: "var(--text)",
        }}>
          Tech Stack & Tools
        </h2>
      </motion.div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
        gap: 10,
      }}>
        {techStack.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.025, duration: 0.4 }}
            whileHover={{ y: -4, transition: { duration: 0.15 } }}
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "16px 10px",
              textAlign: "center",
              cursor: "default",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--accent-border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px var(--accent-border)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <img src={t.icon} alt={t.name} width={30} height={30}
              style={{ margin: "0 auto 10px", display: "block" }} />
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--text)", marginBottom: 2 }}>
              {t.name}
            </div>
            <div style={{ fontSize: 10, color: "var(--muted)" }}>{t.category}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
