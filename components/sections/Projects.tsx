"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Globe,
  Github,
  ChevronDown,
  ChevronUp,
  ArrowUpRight,
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
  SiExpress,
  SiPostgresql,
  SiDocker,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

import { projects } from "@/lib/data";

const techIcons: any = {
  React: {
    icon: <SiReact color="#61DAFB" />,
    bg: "rgba(97,218,251,0.12)",
  },

  "Next.js": {
    icon: <SiNextdotjs color="currentColor" />,
    bg: "rgba(255,255,255,0.08)",
  },

  TypeScript: {
    icon: <SiTypescript color="#3178C6" />,
    bg: "rgba(49,120,198,0.12)",
  },

  Tailwind: {
    icon: <SiTailwindcss color="#38BDF8" />,
    bg: "rgba(56,189,248,0.12)",
  },

  MongoDB: {
    icon: <SiMongodb color="#47A248" />,
    bg: "rgba(71,162,72,0.12)",
  },

  Firebase: {
    icon: <SiFirebase color="#FFCA28" />,
    bg: "rgba(255,202,40,0.12)",
  },

  Node: {
    icon: <SiNodedotjs color="#5FA04E" />,
    bg: "rgba(95,160,78,0.12)",
  },

  JavaScript: {
    icon: <SiJavascript color="#F7DF1E" />,
    bg: "rgba(247,223,30,0.12)",
  },

  Express: {
    icon: <SiExpress color="currentColor" />,
    bg: "rgba(255,255,255,0.08)",
  },

  PostgreSQL: {
    icon: <SiPostgresql color="#336791" />,
    bg: "rgba(51,103,145,0.12)",
  },

  Docker: {
    icon: <SiDocker color="#2496ED" />,
    bg: "rgba(36,150,237,0.12)",
  },

  Redux: {
    icon: <SiRedux color="#764ABC" />,
    bg: "rgba(118,74,188,0.12)",
  },

  SocketIO: {
    icon: <SiSocketdotio color="currentColor" />,
    bg: "rgba(255,255,255,0.08)",
  },
};

export default function Projects() {
  const featured = projects.filter(
    (p) => p.featured
  );

  const [showAll, setShowAll] =
    useState(false);

  const [selected, setSelected] =
    useState<any>(null);

  const visibleProjects = showAll
    ? featured
    : featured.slice(0, 4);

  return (
    <>
      <section
        id="projects"
        style={{
          padding: "100px 20px",
          background: "var(--bg)",
          transition: "0.3s ease",
        }}
      >
        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          style={{
            marginBottom: 55,
          }}
        >
          <p
            style={{
              color: "var(--muted)",
              marginBottom: 10,
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            Featured Work
          </p>

          <h2
            style={{
              color: "var(--text)",
              fontSize:
                "clamp(2.8rem,8vw,5rem)",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.06em",
            }}
          >
            Projects
          </h2>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: 28,
          }}
        >
          <AnimatePresence>
            {visibleProjects.map(
              (p, i) => (
                <motion.div
                  key={p.name}
                  initial={{
                    opacity: 0,
                    y: 50,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: i * 0.08,
                  }}
                  viewport={{
                    once: true,
                  }}
                  onClick={() =>
                    setSelected(p)
                  }
                  style={{
                    background:
                      "var(--card)",
                    border:
                      "1px solid var(--border)",
                    borderRadius: 28,
                    overflow: "hidden",
                    cursor: "pointer",
                    position: "relative",
                    transition: "0.3s ease",
                    boxShadow:
                      "0 12px 35px rgba(0,0,0,0.12)",
                  }}
                >
                  {/* Glow */}
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at top right, rgba(255,120,80,0.14), transparent 45%)",
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
                        height: 230,
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    {/* Hover Links */}
                    <div
                      className="hover-links"
                      style={{
                        position:
                          "absolute",
                        inset: 0,
                        background:
                          "rgba(0,0,0,0.45)",
                        display: "flex",
                        justifyContent:
                          "center",
                        alignItems:
                          "center",
                        gap: 14,
                        opacity: 0,
                        transition:
                          "0.3s",
                      }}
                    >
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                        style={
                          buttonStyle
                        }
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
                        style={
                          buttonStyle
                        }
                      >
                        <Github size={18} />
                        GitHub
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: 24,
                    }}
                  >
                    {/* Title */}
                    <div
                      style={{
                        display:
                          "flex",
                        justifyContent:
                          "space-between",
                        alignItems:
                          "center",
                        marginBottom: 14,
                        gap: 12,
                      }}
                    >
                      <h3
                        style={{
                          color:
                            "var(--text)",
                          fontSize:
                            "clamp(1.4rem,4vw,2rem)",
                          fontWeight: 800,
                          letterSpacing:
                            "-0.04em",
                        }}
                      >
                        {p.name}
                      </h3>

                      <ArrowUpRight
                        size={22}
                        color="var(--muted)"
                      />
                    </div>

                    {/* Description */}
                    <p
                      style={{
                        color:
                          "var(--muted)",
                        fontSize: 14,
                        lineHeight: 1.9,
                        marginBottom: 22,
                      }}
                    >
                      {p.description}
                    </p>

                    {/* Tech Stack */}
                    <div
                      style={{
                        display:
                          "flex",
                        flexWrap:
                          "wrap",
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
                              display:
                                "flex",
                              alignItems:
                                "center",
                              gap: 8,
                              padding:
                                "9px 14px",
                              borderRadius: 999,
                              background:
                                techIcons[
                                  tech
                                ]?.bg ||
                                "rgba(255,255,255,0.05)",
                              border:
                                "1px solid var(--border)",
                              color:
                                "var(--text)",
                              fontSize: 13,
                              fontWeight: 600,
                            }}
                          >
                            <span
                              style={{
                                display:
                                  "flex",
                                fontSize: 17,
                              }}
                            >
                              {techIcons[
                                tech
                              ]?.icon ||
                                "⚡"}
                            </span>

                            {tech}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <style jsx>{`
                    div:hover
                      > .hover-links {
                      opacity: 1;
                    }
                  `}</style>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {/* Show More */}
        {featured.length > 4 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            style={{
              display: "flex",
              justifyContent:
                "center",
              marginTop: 60,
            }}
          >
            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                setShowAll(
                  !showAll
                )
              }
              style={{
                width: 74,
                height: 74,
                borderRadius: "50%",
                border:
                  "1px solid var(--border)",
                background:
                  "var(--card)",
                color:
                  "var(--text)",
                display: "flex",
                alignItems:
                  "center",
                justifyContent:
                  "center",
                cursor: "pointer",
                boxShadow:
                  "0 10px 35px rgba(0,0,0,0.15)",
              }}
            >
              {showAll ? (
                <ChevronUp
                  size={30}
                />
              ) : (
                <ChevronDown
                  size={30}
                />
              )}
            </motion.button>
          </motion.div>
        )}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setSelected(null)
            }
            style={{
              position: "fixed",
              inset: 0,
              background:
                "rgba(0,0,0,0.72)",
              backdropFilter:
                "blur(8px)",
              zIndex: 999,
              display: "flex",
              justifyContent:
                "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
              }}
              onClick={(e) =>
                e.stopPropagation()
              }
              style={{
                width: "100%",
                maxWidth: 820,
                background:
                  "var(--card)",
                borderRadius: 30,
                overflow: "hidden",
                border:
                  "1px solid var(--border)",
                position:
                  "relative",
              }}
            >
              <button
                onClick={() =>
                  setSelected(null)
                }
                style={{
                  position:
                    "absolute",
                  top: 16,
                  right: 16,
                  width: 42,
                  height: 42,
                  borderRadius:
                    "50%",
                  border: "none",
                  background:
                    "rgba(255,255,255,0.08)",
                  color:
                    "white",
                  cursor: "pointer",
                }}
              >
                <X size={22} />
              </button>

              <img
                src={selected.image}
                alt={selected.name}
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  padding: 28,
                }}
              >
                <h2
                  style={{
                    color:
                      "var(--text)",
                    fontSize:
                      "clamp(2rem,5vw,3rem)",
                    fontWeight: 900,
                    marginBottom: 16,
                  }}
                >
                  {selected.name}
                </h2>

                <p
                  style={{
                    color:
                      "var(--muted)",
                    lineHeight: 2,
                    marginBottom: 28,
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
                    href={
                      selected.live
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      modalButton
                    }
                  >
                    <Globe size={18} />
                    Live Demo
                  </a>

                  <a
                    href={
                      selected.github
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    style={
                      modalButton
                    }
                  >
                    <Github
                      size={18}
                    />
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
  padding: "11px 18px",
  borderRadius: 14,
  background: "#ffffff",
  color: "#111111",
  fontWeight: 700,
};

const modalButton = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  padding: "13px 18px",
  borderRadius: 14,
  background:
    "linear-gradient(135deg,#ff784e,#ff4d4d)",
  color: "#ffffff",
  fontWeight: 700,
};