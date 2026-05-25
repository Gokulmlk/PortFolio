"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Globe,
  Github,
  ArrowRight,
  X,
} from "lucide-react";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiNodedotjs,
  SiJavascript,
} from "react-icons/si";

import { projects } from "@/lib/data";

const techIcons: any = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  Tailwind: <SiTailwindcss />,
  MongoDB: <SiMongodb />,
  Firebase: <SiFirebase />,
  Node: <SiNodedotjs />,
  JavaScript: <SiJavascript />,
};

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  const [visibleCount, setVisibleCount] = useState(4);

  const [selected, setSelected] = useState<any>(null);

  const visibleProjects = useMemo(
    () => featured.slice(0, visibleCount),
    [featured, visibleCount]
  );

  return (
    <>
      <section
        id="projects"
        style={{
          padding: "90px 18px",
          background: "#090909",
        }}
      >
        {/* Heading */}
        <div
          style={{
            marginBottom: 50,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 20,
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                color: "#8b8b8b",
                marginBottom: 8,
                fontWeight: 600,
              }}
            >
              Featured Work
            </p>

            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(2.3rem,8vw,4rem)",
                fontWeight: 900,
                lineHeight: 1,
                letterSpacing: "-0.05em",
              }}
            >
              Projects
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: 24,
          }}
        >
          {visibleProjects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
              }}
              transition={{
                delay: i * 0.08,
              }}
              viewport={{ once: true }}
              onClick={() => setSelected(p)}
              style={{
                background:
                  "linear-gradient(145deg,#121212,#0b0b0b)",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                transition: "0.3s",
                boxShadow:
                  "0 10px 35px rgba(0,0,0,0.35)",
              }}
            >
              {/* Glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at top right, rgba(255,120,80,0.15), transparent 45%)",
                  pointerEvents: "none",
                }}
              />

              {/* Image */}
              <div
                style={{
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  src={p.image}
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: 190,
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Hover Links */}
                <div
                  className="hover-links"
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "rgba(0,0,0,0.45)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 14,
                    opacity: 0,
                    transition: "0.3s",
                  }}
                >
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                    style={buttonStyle}
                  >
                    <Globe size={18} />
                    Live
                  </a>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) =>
                      e.stopPropagation()
                    }
                    style={buttonStyle}
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  padding: 20,
                }}
              >
                {/* Title */}
                <div
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    marginBottom: 14,
                    gap: 10,
                  }}
                >
                  <h3
                    style={{
                      color: "#fff",
                      fontSize:
                        "clamp(1.2rem,4vw,1.7rem)",
                      fontWeight: 800,
                    }}
                  >
                    {p.name}
                  </h3>

                  <ArrowRight
                    size={20}
                    color="#888"
                  />
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "#a1a1aa",
                    fontSize: 14,
                    lineHeight: 1.8,
                    marginBottom: 18,
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
                  {p.tech.map(
                    (
                      tech: string,
                      idx: number
                    ) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          padding:
                            "7px 12px",
                          borderRadius: 999,
                          background:
                            "rgba(255,255,255,0.05)",
                          border:
                            "1px solid rgba(255,255,255,0.08)",
                          color: "#d4d4d8",
                          fontSize: 13,
                          fontWeight: 500,
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            fontSize: 15,
                          }}
                        >
                          {techIcons[tech]}
                        </span>

                        {tech}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Hover Effect */}
              <style jsx>{`
                div:hover > .hover-links {
                  opacity: 1;
                }
              `}</style>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < featured.length && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: 50,
            }}
          >
            <button
              onClick={() =>
                setVisibleCount(
                  (prev) => prev + 4
                )
              }
              style={{
                width: 65,
                height: 65,
                borderRadius: "50%",
                border: "none",
                cursor: "pointer",
                background:
                  "linear-gradient(135deg,#ff784e,#ff4d4d)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  "0 10px 25px rgba(255,100,80,0.35)",
              }}
            >
              <ArrowRight size={26} />
            </button>
          </div>
        )}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setSelected(null)
            }
            style={{
              position: "fixed",
              inset: 0,
              background:
                "rgba(0,0,0,0.75)",
              backdropFilter: "blur(8px)",
              zIndex: 999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 18,
            }}
          >
            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              style={{
                width: "100%",
                maxWidth: 780,
                background: "#111",
                borderRadius: 24,
                overflow: "hidden",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                position: "relative",
              }}
            >
              {/* Close */}
              <button
                onClick={() =>
                  setSelected(null)
                }
                style={{
                  position: "absolute",
                  top: 14,
                  right: 14,
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  border: "none",
                  background:
                    "rgba(255,255,255,0.08)",
                  color: "#fff",
                  cursor: "pointer",
                  zIndex: 10,
                }}
              >
                <X size={20} />
              </button>

              {/* Image */}
              <img
                src={selected.image}
                alt={selected.name}
                style={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <div
                style={{
                  padding: 24,
                }}
              >
                <h2
                  style={{
                    color: "#fff",
                    fontSize:
                      "clamp(1.8rem,5vw,2.5rem)",
                    fontWeight: 900,
                    marginBottom: 16,
                  }}
                >
                  {selected.name}
                </h2>

                <p
                  style={{
                    color: "#b4b4b4",
                    lineHeight: 1.9,
                    marginBottom: 24,
                  }}
                >
                  {selected.description}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: 14,
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={modalButton}
                  >
                    <Globe size={18} />
                    Live Demo
                  </a>

                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={modalButton}
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  padding: "10px 16px",
  borderRadius: 12,
  background: "#fff",
  color: "#111",
  fontWeight: 700,
};

const modalButton = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  padding: "12px 18px",
  borderRadius: 14,
  background:
    "linear-gradient(135deg,#ff784e,#ff4d4d)",
  color: "#fff",
  fontWeight: 700,
};