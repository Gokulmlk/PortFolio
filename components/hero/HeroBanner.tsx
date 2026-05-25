"use client";

interface Props {
  theme: "dark" | "light";
}

export default function HeroBanner({ theme }: Props) {
  const imageSrc = theme === "dark" ? "/night.png" : "/day.png";

  function handleProfileClick() {
    const audio = new Audio("/click.wav");
    audio.play().catch(() => {});

    const img = document.getElementById("profile-switch") as HTMLImageElement;
    if (!img) return;
    img.src = img.src.includes("profile10.png")
      ? "/profile2.png"
      : "/profile10.png";
  }

  return (
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
      {/* Banner Image */}
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

      {/* Dark Overlay */}
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

      {/* Profile Picture */}
      <div
        style={{
          position: "absolute",
          bottom: -55,
          left: 24,
          zIndex: 20,
        }}
      >
        {/* Click Me Arrow */}
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

        {/* Profile Image */}
        <div
          onClick={handleProfileClick}
          style={{
            width: 110,
            height: 110,
            borderRadius: "50%",
            overflow: "hidden",
            cursor: "pointer",
            border: "4px solid white",
            boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes moveArrow {
          0%, 100% { transform: translateX(0px); }
          50%       { transform: translateX(8px); }
        }
        @keyframes floatOnly {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}