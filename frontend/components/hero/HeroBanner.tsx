"use client";

import { useRef, useState } from "react";

interface Props {
  theme: "dark" | "light";
}

export default function HeroBanner({ theme }: Props) {
  const imageSrc = theme === "dark" ? "/night.png" : "/Day.png";

  const [profileImage, setProfileImage] = useState("/profile10.png");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleProfileClick = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/click.wav");
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});

    setProfileImage((prev) =>
      prev === "/profile10.png"
        ? "/profile2.png"
        : "/profile10.png"
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: "clamp(180px, 35vw, 260px)",
        borderRadius: 24,
        overflow: "visible",
        position: "relative",
        border: "1px solid var(--border)",
        marginBottom: 90,
      }}
    >
      <img
        src={imageSrc}
        alt="banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: 24,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 24,
          background:
            theme === "dark"
              ? "linear-gradient(to bottom, transparent, rgba(0,0,0,0.5))"
              : "transparent",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: -55,
          left: 24,
          zIndex: 20,
        }}
      >
        <div className="click-arrow">
          Click Me ➜
        </div>

        <div
          onClick={handleProfileClick}
          style={{
            width: "clamp(80px, 22vw, 110px)",
            height: "clamp(80px, 22vw, 110px)",
            borderRadius: "50%",
            overflow: "hidden",
            cursor: "pointer",
            border: "4px solid white",
            boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
            animation: "floatOnly 2s ease-in-out infinite",
            background: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={profileImage}
            alt="profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        .click-arrow {
          position: absolute;
          left: 110%;
          top: 50%;
          transform: translateY(-50%);
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          animation: moveArrow 1s infinite;
          pointer-events: none;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
        }

        @keyframes moveArrow {
          0%,
          100% {
            transform: translateY(-50%) translateX(0);
          }
          50% {
            transform: translateY(-50%) translateX(8px);
          }
        }

        @keyframes floatOnly {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @media (max-width: 600px) {
          .click-arrow {
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  );
}