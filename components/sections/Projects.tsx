"use client";

import { motion } from "framer-motion";
import { Globe, Github, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      style={{
        padding: "100px 0",
        background: "#090909",
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 50,
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        <div>
          <p
            style={{
              color: "#7c7c7c",
              fontSize: 18,
              marginBottom: 8,
              fontWeight: 500,
            }}
          >
            Featured
          </p>

          <h2
            style={{
              color: "#fff",
              fontSize: "4rem",
              fontWeight: 800,
              letterSpacing: "-0.06em",
              lineHeight: 1,
            }}
          >
            Projects
          </h2>
        </div>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#a1a1aa",
            display: "flex",
            alignItems: "center",
            gap: 6,
            textDecoration: "none",
            fontWeight: 600,
            fontSize: 16,
            transition: "0.2s",
          }}
        >
          View All on GitHub
          <ArrowUpRight size={18} />
        </a>
      </motion.div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(500px,1fr))",
          gap: 30,
        }}
      >
        {featured.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -8,
            }}
            style={{
              background: "#111111",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 30,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {/* Top Glow Section */}
            <div
              style={{
                position: "relative",
                padding: 28,
                background:
                  "radial-gradient(circle at center, rgba(255,160,122,0.45), rgba(255,0,0,0.25), transparent 75%)",
              }}
            >
              {/* Image Wrapper */}
              <div
                style={{
                  position: "relative",
                  borderRadius: 24,
                  overflow: "hidden",
                  background: "#0f0f0f",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
                }}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "280px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                padding: "30px",
              }}
            >
              {/* Title + Icons */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 18,
                }}
              >
                <h3
                  style={{
                    color: "#fff",
                    fontSize: "2.2rem",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {p.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: 14,
                  }}
                >
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#a1a1aa",
                    }}
                  >
                    <Globe size={24} />
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#a1a1aa",
                    }}
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p
                style={{
                  color: "#9ca3af",
                  fontSize: "1.05rem",
                  lineHeight: 1.9,
                  marginBottom: 24,
                }}
              >
                {p.description}
              </p>

              {/* Tech Stack */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {p.tech.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    style={{
                      padding: "8px 14px",
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#d4d4d8",
                      fontSize: 14,
                      fontWeight: 500,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}