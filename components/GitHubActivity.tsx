"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { ExternalLink } from "lucide-react";

function genGrid() {
  const seed = [0.2,0.8,0.1,0.9,0.5,0.3,0.7,0.4,0.6,0.2,0.85,0.15,0.55,0.45,0.75];
  const grid: number[][] = [];
  let si = 0;
  for (let w = 0; w < 53; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const v = seed[si % seed.length];
      si++;
      week.push(v < 0.35 ? 0 : v < 0.55 ? 1 : v < 0.72 ? 2 : v < 0.88 ? 3 : 4);
    }
    grid.push(week);
  }
  return grid;
}
const grid = genGrid();
const LEVELS = ["#1a1a1a","#1e3a2f","#26a641","#39d353","#6ef99a"];

export default function GitHubActivity() {
  return (
    <section style={{ padding: "80px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <p style={{
          fontSize: 11, color: "var(--accent)", fontWeight: 700,
          letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
        }}>
          Open Source
        </p>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", flexWrap: "wrap", gap: 12, marginBottom: 32,
        }}>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900,
            letterSpacing: "-0.04em", color: "var(--text)",
          }}>
            GitHub Activity
          </h2>
          <span style={{ fontSize: 13, color: "var(--muted)" }}>
            Total: <strong style={{ color: "var(--text)" }}>2,071</strong> contributions this year
          </span>
        </div>

        <div style={{
          background: "var(--card)", border: "1px solid var(--border)",
          borderRadius: 16, padding: 24, overflowX: "auto",
        }}>
          <div style={{ display: "flex", gap: 3, minWidth: "fit-content" }}>
            {grid.map((week, wi) => (
              <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                {week.map((level, di) => (
                  <div key={di} style={{
                    width: 11, height: 11, borderRadius: 2,
                    background: LEVELS[level],
                    cursor: "default",
                  }} title={`${level} contribution${level !== 1 ? "s" : ""}`} />
                ))}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 14, display: "flex", alignItems: "center",
            gap: 5, justifyContent: "flex-end",
          }}>
            <span style={{ fontSize: 10, color: "var(--muted)" }}>Less</span>
            {LEVELS.map((c, i) => (
              <div key={i} style={{ width: 10, height: 10, borderRadius: 2, background: c }} />
            ))}
            <span style={{ fontSize: 10, color: "var(--muted)" }}>More</span>
          </div>
        </div>

        <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 12, color: "var(--muted)", textDecoration: "none",
            border: "1px solid var(--border)", borderRadius: 999,
            padding: "7px 14px", fontWeight: 600,
            transition: "color 0.2s",
          }}>
            <img src="https://skillicons.dev/icons?i=github" alt="GitHub" width={14} height={14} style={{ borderRadius: 3 }} />
            View Profile <ExternalLink size={11} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
