"use client";
import { motion } from "framer-motion";
import { siteConfig, aboutSkills } from "@/lib/data";
import { MapPin, Zap, Mail } from "lucide-react";

export default function About() {
  return (
    <section id="about" style={{ padding: "80px 0" }}>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 40,
        alignItems: "center",
      }}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p style={{
            fontSize: 11, color: "var(--accent)", fontWeight: 700,
            letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10,
          }}>
            About
          </p>
          <h2 style={{
            fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 900,
            letterSpacing: "-0.04em", marginBottom: 20, color: "var(--text)",
          }}>
            Me
          </h2>
          <p style={{
            fontSize: 14, color: "var(--muted)", lineHeight: 1.8,
            marginBottom: 20,
          }}>
            I'm a Full Stack web developer passionate about building scalable SaaS and AI-powered
            applications. I love solving real-world problems and crafting seamless user experiences.
          </p>
          <p style={{
            fontSize: 14, color: "var(--muted)", lineHeight: 1.8,
            marginBottom: 32,
          }}>
            Currently deep in full-stack development — building production-grade apps with modern
            tech stacks, and actively preparing for engineering roles where I can make a real impact.
          </p>

          {/* Skills strip */}
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontSize: 11, color: "var(--muted)", fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>
              Skills
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {aboutSkills.map((s, i) => (
                <motion.img
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  src={s} alt="" width={30} height={30}
                  style={{ borderRadius: 6 }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "32px 28px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Inner glow */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: 200, height: 100,
            background: "radial-gradient(ellipse, var(--accent-bg) 0%, transparent 70%)",
          }} />

          {/* Avatar */}
          <div style={{
            width: 90, height: 90, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            margin: "0 auto 20px",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 40,
            boxShadow: "0 0 0 4px var(--card), 0 0 0 5px var(--border)",
          }}>
            👨‍💻
          </div>

          <h3 style={{
            fontSize: 20, fontWeight: 900, color: "var(--text)",
            letterSpacing: "-0.03em", marginBottom: 4,
          }}>
            {siteConfig.name}
          </h3>
          <p style={{
            fontSize: 13, color: "var(--accent)", fontWeight: 600, marginBottom: 22,
          }}>
            {siteConfig.title}
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { icon: <MapPin size={13} />, text: siteConfig.location },
              { icon: <Zap size={13} />, text: siteConfig.currentFocus },
              { icon: <Mail size={13} />, text: siteConfig.email },
            ].map(({ icon, text }) => (
              <div key={text} style={{
                display: "flex", alignItems: "center", gap: 10,
                fontSize: 12.5, color: "var(--muted)",
                background: "var(--bg2)", borderRadius: 8,
                padding: "9px 14px", textAlign: "left",
              }}>
                <span style={{ color: "var(--accent)", flexShrink: 0 }}>{icon}</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          #about > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
