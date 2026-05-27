"use client";
import { useSpotify } from "@/hooks/useSpotify";

export default function HeroSpotify() {
  const { song, loading } = useSpotify();

  // Loading skeleton
  if (loading) {
    return (
      <div
        style={{
          border: "1px solid var(--border)",
          borderRadius: 24,
          padding: 20,
          background: "var(--card)",
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 62,
            height: 62,
            borderRadius: 16,
            background: "var(--border)",
            animation: "pulse 1.5s infinite",
          }}
        />
        <div style={{ flex: 1 }}>
          <div
            style={{
              height: 10,
              background: "var(--border)",
              borderRadius: 4,
              marginBottom: 8,
              width: "40%",
            }}
          />
          <div
            style={{
              height: 14,
              background: "var(--border)",
              borderRadius: 4,
              marginBottom: 6,
              width: "70%",
            }}
          />
          <div
            style={{
              height: 12,
              background: "var(--border)",
              borderRadius: 4,
              width: "50%",
            }}
          />
        </div>
      </div>
    );
  }

  // No song at all
  if (!song) return null;

  return (
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
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {/* Album art */}
        {song.image ? (
          <img
            src={song.image}
            alt="album"
            style={{
              width: 62,
              height: 62,
              borderRadius: 16,
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 16,
              background: "#1db954",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
            }}
          >
            🎵
          </div>
        )}

        <div>
          {/* Label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 11,
              color: "#1db954",
              fontWeight: 700,
              marginBottom: 4,
              letterSpacing: "0.06em",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#1db954">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            {song.isPlaying ? "NOW PLAYING" : "LAST PLAYED"}
          </div>

          <div style={{ fontWeight: 700, fontSize: 15 }}>{song.title}</div>

          <div style={{ fontSize: 14, color: "var(--muted)" }}>
            {song.artist}
          </div>
        </div>
      </div>

      {/* Right side */}
      {/* Right side */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Animated bars when live */}
        {song.isPlaying && (
          <div style={{ display: "flex", alignItems: "flex-end", gap: 3 }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  width: 3,
                  borderRadius: 2,
                  background: "#1db954",
                  animation: `bar${i} 0.8s ease infinite alternate`,
                  height: i === 2 ? 14 : 10,
                }}
              />
            ))}
          </div>
        )}

        <a
          href={song.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: 34,
            opacity: 0.7,
            textDecoration: "none",
          }}
        >
          ▶
        </a>
      </div>
    </div>
  );
}