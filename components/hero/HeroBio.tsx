"use client";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: "easeOut" as const },
});

const badgeStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "8px 14px",
  margin: "0 6px",
  borderRadius: 14,
  border: "1px dashed var(--border)",
  background: "var(--card)",
  fontWeight: 700,
  fontSize: 15,
};

export default function HeroBio() {
  return (
    <>
      {/* Open to work badge */}
      <div style={{ marginBottom: 18 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 999,
            padding: "6px 16px",
            fontSize: 12,
            color: "var(--muted)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--green)",
              boxShadow: "0 0 8px var(--green)",
            }}
          />
          Open to work
        </span>
      </div>

      {/* Heading */}
      <motion.h1
        {...fadeUp(0.1)}
        style={{
          fontSize: "clamp(36px, 6vw, 62px)",
          fontWeight: 900,
          lineHeight: 1.08,
          letterSpacing: "-0.045em",
          marginBottom: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <span>Hi, I'm</span>
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "var(--accent)",
              textUnderlineOffset: 7,
              textDecorationThickness: 3,
            }}
          >
            Gokul
          </span>
        </span>

        <span
          style={{
            color: "var(--accent)",
            fontSize: "clamp(40px, 3vw, 28px)",
            marginTop: 10,
            maxWidth: 900,
          }}
        >
          A Full Stack web developer.
        </span>
      </motion.h1>

      {/* Bio with tech badges */}
      <motion.div
        {...fadeUp(0.15)}
        style={{
          fontSize: 17,
          color: "var(--muted)",
          lineHeight: 2.2,
          maxWidth: 780,
          marginBottom: 42,
        }}
      >
        I build modern, interactive web applications using
        <span style={badgeStyle}>⚡ TypeScript</span>
        <span style={badgeStyle}>⚛ React</span>
        <span style={badgeStyle}>▲ Next.js</span>
        <span style={badgeStyle}>🟢 Node.js</span>
        <span style={badgeStyle}>🍃 MongoDB</span>
        with a strong emphasis on clean UI, Performance, and User Experience.
      </motion.div>
    </>
  );
}