"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: "easeOut" as const },
});

const badgeStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
  padding: "4px 10px",
  margin: "0 4px",
  borderRadius: 12,
  border: "1px solid var(--border)",
  background: "var(--card)",
  verticalAlign: "middle",
  fontSize: 14,
  fontWeight: 600,
  color: "var(--text)",
};

const iconStyle: React.CSSProperties = {
  width: 16,
  height: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "scale(0.75)",
  flexShrink: 0,
};

export default function HeroBio() {
  return (
    <>
      {/* Open to Work Badge */}
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
          Open to Work
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
        }}
      >
        Hi, I'm{" "}
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

        <div
          style={{
            color: "var(--accent)",
            fontSize: "clamp(22px, 3vw, 32px)",
            marginTop: 12,
          }}
        >
          Full Stack Web Developer
        </div>
      </motion.h1>

      {/* Bio */}
      <motion.div
        {...fadeUp(0.15)}
        style={{
          fontSize: 17,
          color: "var(--muted)",
          lineHeight: 2,
          maxWidth: 780,
          marginBottom: 42,
        }}
      >
        I build modern, interactive web applications using{" "}
        <span style={badgeStyle}>
          <span style={iconStyle}>
            <StackIcon name="typescript" />
          </span>
          TypeScript
        </span>
        <span style={badgeStyle}>
          <span style={iconStyle}>
            <StackIcon name="react" />
          </span>
          React
        </span>
        <span style={badgeStyle}>
          <span style={iconStyle}>
            <StackIcon name="nextjs" />
          </span>
          Next.js
        </span>
        <span style={badgeStyle}>
          <span style={iconStyle}>
            <StackIcon name="nodejs" />
          </span>
          Node.js
        </span>
        <span style={badgeStyle}>
          <span style={iconStyle}>
            <StackIcon name="mongodb" />
          </span>
          MongoDB
        </span>{" "}
        with a strong emphasis on clean UI, performance, and user experience.
      </motion.div>
    </>
  );
}