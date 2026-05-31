"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import GitHubCalendar from "react-github-calendar";
import { useThemeSync } from "@/hooks/useThemeSync";

function githubUsernameFromUrl(url: string): string {
  try {
    const segment = new URL(url).pathname.replace(/^\/+|\/+$/g, "");
    return segment.split("/")[0] ?? "";
  } catch {
    return url
      .replace(/^https?:\/\/(www\.)?github\.com\/?/i, "")
      .split("/")[0]
      .replace(/\/$/, "");
  }
}

export default function GitHubActivity() {
  const theme = useThemeSync();
  const username =
    siteConfig.githubUsername ?? githubUsernameFromUrl(siteConfig.github);

  return (
    <section id="github" style={{ padding: "80px 0" }}>
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

          <span style={{ fontSize: 13, color: "var(--muted)" }}>
            @{username} · last 12 months
          </span>
        </div>

        <div
          className="github-activity-calendar"
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
            padding: 24,
            overflowX: "auto",
            minHeight: 180,
          }}
        >
          <GitHubCalendar
            username={username}
            colorScheme={theme}
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            style={{ width: "100%" }}
          />
        </div>

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
