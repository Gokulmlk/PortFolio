"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: "easeOut" as const },
});

const socials = [
  {
    label: "GitHub",
    href: siteConfig.github,
    img: "https://skillicons.dev/icons?i=github",
  },
  {
    label: "Twitter",
    href: siteConfig.twitter,
    img: "https://skillicons.dev/icons?i=twitter",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    img: "https://skillicons.dev/icons?i=linkedin",
  },
];

export default function Hero() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Sync theme
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") setTheme("light");
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const current = document.documentElement.getAttribute("data-theme");
      setTheme(current === "light" ? "light" : "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const imageSrc = theme === "dark" ? "/night.png" : "/day.png";

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 24px 90px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      {/* 🔥 Banner */}
      <div
        style={{
          width: "100%",
          height: 260,
          borderRadius: 24,
          overflow: "visible",
          position: "relative",
          border: "1px solid var(--border)",
          marginBottom: 90,
        }}
      >
        {/* Existing Banner */}
        <img
          src={imageSrc}
          alt="banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "all 0.5s ease",
          }}
        />

        {/* Existing Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              theme === "dark"
                ? "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))"
                : "transparent",
          }}
        />

        {/* Rounded Profile Button */}
        <div
          style={{
            position: "absolute",
            bottom: -55,
            left: 24,
            zIndex: 20,
          }}
        >
          {/* Click Me */}
          <div
            style={{
              position: "absolute",
              left: 125,
              top: 20,
              color: "#fff",
              fontSize: 13,
              fontWeight: 600,
              whiteSpace: "nowrap",
              animation: "moveArrow 1s infinite",
              pointerEvents: "none",
            }}
          >
            Click Me ➜
          </div>

          <div
            onClick={() => {
              const audio = new Audio("/click.mp3");
              audio.play();

              const img = document.getElementById(
                "profile-switch",
              ) as HTMLImageElement;

              if (!img) return;

              img.src = img.src.includes("profile1.png")
                ? "/profile2.png"
                : "/profile1.png";
            }}
            style={{
              width: 110,
              height: 110,
              borderRadius: "50%",
              overflow: "visible",
              cursor: "pointer",
              border: "4px solid white",
              boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
              background: "#fff",
              animation: "floatOnly 2s ease-in-out infinite",
            }}
          >
            <img
              id="profile-switch"
              src="/profile1.png"
              alt="profile"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes moveArrow {
            0%,
            100% {
              transform: translateX(0px);
            }
            50% {
              transform: translateX(8px);
            }
          }

          @keyframes floatOnly {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }

          @media (max-width: 768px) {
            div[style*="bottom: -40px"] {
              left: 50% !important;
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>

      {/* 🔥 Hero Content */}
      <motion.div {...fadeUp(0.05)} style={{ marginBottom: 28 }}>
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 999,
            padding: "5px 14px",
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
      </motion.div>

      <motion.p
        {...fadeUp(0.1)}
        style={{ fontSize: 16, color: "var(--muted)", marginBottom: 10 }}
      >
        {siteConfig.tagline}
      </motion.p>

      <motion.h1
        {...fadeUp(0.15)}
        style={{
          fontSize: "clamp(44px, 8vw, 80px)",
          fontWeight: 900,
          lineHeight: 1.03,
          letterSpacing: "-0.04em",
          marginBottom: 28,
        }}
      >
        A Full Stack <br />
        <span
          style={{
            background:
              "linear-gradient(135deg, var(--accent), var(--accent2))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Web Developer.
        </span>
      </motion.h1>

      <motion.p
        {...fadeUp(0.2)}
        style={{
          fontSize: 15,
          color: "var(--muted)",
          lineHeight: 1.75,
          maxWidth: 520,
          marginBottom: 40,
        }}
      >
        {siteConfig.bio}
      </motion.p>

      {/* Buttons */}
      <motion.div
        {...fadeUp(0.25)}
        style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
      >
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "var(--text)",
            color: "var(--bg)",
            fontWeight: 700,
            fontSize: 13,
            padding: "10px 22px",
            borderRadius: 999,
            textDecoration: "none",
          }}
        >
          Resume <ArrowUpRight size={13} />
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          style={{
            border: "1px solid var(--border)",
            padding: "10px 22px",
            borderRadius: 999,
            textDecoration: "none",
          }}
        >
          Contact
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div {...fadeUp(0.3)} style={{ marginTop: 50 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          {stats.map((s) => (
            <div key={s.label} style={{ padding: "18px" }}>
              <div style={{ fontWeight: 900 }}>{s.value}</div>
              <div style={{ fontSize: 11 }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 10, fontSize: 12 }}>
          <Zap size={12} /> {siteConfig.currentFocus}
        </div>
      </motion.div>
    </section>
  );
}
