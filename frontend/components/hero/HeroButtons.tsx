"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.55, ease: "easeOut" as const },
});

export default function HeroButtons() {
  return (
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
        rel="noopener noreferrer"
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

        /* Desktop hover */
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

        /* Mobile always glow */
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
  );
}