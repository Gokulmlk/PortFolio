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
      {/* 🔥 Hero Content */}
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

      {/* Buttons */}
      <motion.div
        {...fadeUp(0.2)}
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          marginBottom: 30,
        }}
      >
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          className="hero-btn glow-btn"
        >
          Resume / CV <ArrowUpRight size={14} />
        </a>

        <a
          href={`mailto:${siteConfig.email}`}
          className="hero-btn glow-btn secondary-btn"
        >
          Get in touch
        </a>

        <style jsx>{`
          .hero-btn {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 10px 20px;
            border-radius: 14px;
            text-decoration: none;
            font-size: 13px;
            font-weight: 700;
            overflow: hidden;
            transition: 0.35s ease;
            z-index: 1;
          }

          .glow-btn {
            background: var(--card);
            color: var(--text);
            border: 1px solid rgba(255, 255, 255, 0.08);
          }

          .secondary-btn {
            background: transparent;
          }

          .glow-btn::before {
            content: "";
            position: absolute;
            inset: -2px;
            border-radius: inherit;
            background: linear-gradient(
              90deg,
              #ff0080,
              #7928ca,
              #0070f3,
              #00c6ff,
              #00ff94,
              #ff0080
            );
            background-size: 300% 300%;
            z-index: -2;
            opacity: 0;
            transition: opacity 0.35s ease;
          }

          .glow-btn::after {
            content: "";
            position: absolute;
            inset: 1px;
            border-radius: inherit;
            background: var(--card);
            z-index: -1;
          }

          /* Desktop Hover */
          .glow-btn:hover::before {
            opacity: 1;
            animation: rgbBorder 3s linear infinite;
          }

          .glow-btn:hover {
            transform: translateY(-2px);
            box-shadow:
              0 0 12px rgba(255, 0, 128, 0.25),
              0 0 24px rgba(0, 112, 243, 0.22),
              0 0 36px rgba(0, 255, 148, 0.18);
          }

          /* Mobile Always Glow */
          @media (max-width: 768px) {
            .glow-btn::before {
              opacity: 1;
              animation: rgbBorder 3s linear infinite;
            }

            .glow-btn {
              box-shadow:
                0 0 12px rgba(255, 0, 128, 0.2),
                0 0 22px rgba(0, 112, 243, 0.18),
                0 0 30px rgba(0, 255, 148, 0.15);
            }
          }

          @keyframes rgbBorder {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
        `}</style>
      </motion.div>

      {/* Socials */}
      <div
        style={{
          display: "flex",
          gap: 18,
          marginBottom: 50,
          fontSize: 26,
          opacity: 0.8,
        }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            style={{
              transition: "0.3s",
            }}
          >
            <img
              src={s.img}
              alt={s.label}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </a>
        ))}
      </div>

      {/* Spotify Card */}
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: 24,
          padding: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "var(--card)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          <img
            src="/album.jpg"
            alt="album"
            style={{
              width: 62,
              height: 62,
              borderRadius: 16,
              objectFit: "cover",
            }}
          />

          <div>
            <div
              style={{
                fontSize: 12,
                color: "var(--muted)",
                marginBottom: 4,
              }}
            >
              LAST PLAYED
            </div>

            <div style={{ fontWeight: 700 }}>No Lie</div>

            <div
              style={{
                fontSize: 14,
                color: "var(--muted)",
              }}
            >
              Sean Paul, Dua Lipa
            </div>
          </div>
        </div>

        <div style={{ fontSize: 34, opacity: 0.7 }}>▶</div>
      </div>
    </section>
  );
}
