"use client";

import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Sync with your navbar theme
  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light") setTheme("light");
  }, []);

  // Listen for theme changes
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

  const imageSrc = theme === "dark" ? "/night.jpg" : "/day.jpg";

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "40px auto",
        padding: "0 24px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 260,
          borderRadius: 24,
          overflow: "hidden",
          position: "relative",
          border: "1px solid var(--border)",
        }}
      >
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

        {/* Optional dark overlay for better UI */}
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
      </div>
    </div>
  );
}