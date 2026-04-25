"use client";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import {GitHubCalendar} from "react-github-calendar"; // ✅ Added package

export default function GitHubActivity() {
  return (
    <section style={{ padding: "80px 0" }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
      >
        <p
          style={{
            fontSize: 11,
            color: "var(--accent)",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          Open Source
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "var(--text)",
            }}
          >
            GitHub Activity
          </h2>

          {/* ✅ Removed fake total count */}
          <span style={{ fontSize: 13, color: "var(--muted)" }}>
            Live Contributions from GitHub
          </span>
        </div>

        {/* ✅ Main Card */}
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 24,
            overflowX: "auto",
          }}
        >
          {/* ✅ Real GitHub Contribution Graph */}
          <GitHubCalendar
            username="YOUR_GITHUB_USERNAME" // 🔥 Change username here
            colorScheme="dark" // ✅ Dark mode
            blockSize={12}
            blockMargin={4}
            fontSize={12}
          />
        </div>

        {/* ✅ Bottom GitHub Button */}
        <div
          style={{
            marginTop: 16,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              color: "var(--muted)",
              textDecoration: "none",
              border: "1px solid var(--border)",
              borderRadius: 999,
              padding: "7px 14px",
              fontWeight: 600,
              transition: "color 0.2s",
            }}
          >
            <img
              src="https://skillicons.dev/icons?i=github"
              alt="GitHub"
              width={14}
              height={14}
              style={{ borderRadius: 3 }}
            />
            View Profile <ExternalLink size={11} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}