import { ReactNode } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiTailwindcss,
  SiDocker,
  SiNginx,
  SiGit,
  SiVercel,
  SiFramer,
  SiSocketdotio,
  SiLinux,
  SiPostman,
  SiGreensock,
  SiPostgresql,
  SiDiscord,
  SiCloudflare,
  SiMapbox,
  SiGooglegemini,
  SiJsonwebtokens,
  SiDotenv,
  SiGooglecalendar,
  SiGithub,
} from "react-icons/si";

// ─── Types ──────────────────────────────────────────────────────

export type TechIconEntry = {
  icon: ReactNode;
  bg: string;
  color?: string;
};

// ─── Helpers ────────────────────────────────────────────────────

const iconStyle = (color: string, size = 18): React.CSSProperties => ({
  color,
  width: size,
  height: size,
  flexShrink: 0,
});

/** Skillicons.dev fallback for tech without a react-icons entry */
function SkillImg({
  slug,
  size = 18,
  alt = "",
}: {
  slug: string;
  size?: number;
  alt?: string;
}) {
  return (
    <img
      src={`https://skillicons.dev/icons?i=${slug}`}
      alt={alt}
      width={size}
      height={size}
      style={{ display: "block", flexShrink: 0 }}
    />
  );
}

function entry(
  icon: ReactNode,
  bg: string,
  color?: string
): TechIconEntry {
  return { icon, bg, color };
}

// ─── Icon builders (brand colors) ───────────────────────────────

const I = {
  react: (s = 18) => (
    <SiReact style={iconStyle("#61DAFB", s)} aria-hidden />
  ),
  nextjs: (s = 18) => (
    <SiNextdotjs style={iconStyle("#ffffff", s)} aria-hidden />
  ),
  node: (s = 18) => (
    <SiNodedotjs style={iconStyle("#339933", s)} aria-hidden />
  ),
  express: (s = 18) => (
    <SiExpress style={iconStyle("#ffffff", s)} aria-hidden />
  ),
  mongo: (s = 18) => (
    <SiMongodb style={iconStyle("#47A248", s)} aria-hidden />
  ),
  redis: (s = 18) => (
    <SiRedis style={iconStyle("#DC382D", s)} aria-hidden />
  ),
  discord: (s = 18) => (
    <SiDiscord style={iconStyle("#5865F2", s)} aria-hidden />
  ),
  cloudflare: (s = 18) => (
    <SiCloudflare style={iconStyle("#F38020", s)} aria-hidden />
  ),
  mapbox: (s = 18) => (
    <SiMapbox style={iconStyle("#4264FB", s)} aria-hidden />
  ),
  gemini: (s = 18) => (
    <SiGooglegemini style={iconStyle("#8E75B2", s)} aria-hidden />
  ),
  jwt: (s = 18) => (
    <SiJsonwebtokens style={iconStyle("#000000", s)} aria-hidden />
  ),
  dotenv: (s = 18) => (
    <SiDotenv style={iconStyle("#ECD53F", s)} aria-hidden />
  ),
  calendar: (s = 18) => (
    <SiGooglecalendar style={iconStyle("#4285F4", s)} aria-hidden />
  ),
  js: (s = 18) => (
    <SiJavascript style={iconStyle("#F7DF1E", s)} aria-hidden />
  ),
  ts: (s = 18) => (
    <SiTypescript style={iconStyle("#3178C6", s)} aria-hidden />
  ),
  python: (s = 18) => (
    <SiPython style={iconStyle("#3776AB", s)} aria-hidden />
  ),
  tailwind: (s = 18) => (
    <SiTailwindcss style={iconStyle("#06B6D4", s)} aria-hidden />
  ),
  docker: (s = 18) => (
    <SiDocker style={iconStyle("#2496ED", s)} aria-hidden />
  ),
  nginx: (s = 18) => (
    <SiNginx style={iconStyle("#009639", s)} aria-hidden />
  ),
  git: (s = 18) => (
    <SiGit style={iconStyle("#F05032", s)} aria-hidden />
  ),
  vercel: (s = 18) => (
    <SiVercel style={iconStyle("#ffffff", s)} aria-hidden />
  ),
  framer: (s = 18) => (
    <SiFramer style={iconStyle("#ffffff", s)} aria-hidden />
  ),
  socketio: (s = 18) => (
    <SiSocketdotio style={iconStyle("#010101", s)} aria-hidden />
  ),
  linux: (s = 18) => (
    <SiLinux style={iconStyle("#FCC624", s)} aria-hidden />
  ),
  postman: (s = 18) => (
    <SiPostman style={iconStyle("#FF6C37", s)} aria-hidden />
  ),
  gsap: (s = 18) => (
    <SiGreensock style={iconStyle("#88CE02", s)} aria-hidden />
  ),
  postgres: (s = 18) => (
    <SiPostgresql style={iconStyle("#4169E1", s)} aria-hidden />
  ),
  github: (s = 18) => (
    <SiGithub style={iconStyle("#ffffff", s)} aria-hidden />
  ),
};

// ─── Main map (keys must match `project.tech` strings in data.ts) ─

export const techIcons: Record<string, TechIconEntry> = {
  // Projects
  React: entry(I.react(), "rgba(97, 218, 251, 0.12)", "#61DAFB"),
  "React.js": entry(I.react(), "rgba(97, 218, 251, 0.12)", "#61DAFB"),
  "Next.js": entry(I.nextjs(), "rgba(255, 255, 255, 0.08)", "#ffffff"),
  "Node.js": entry(I.node(), "rgba(51, 153, 51, 0.12)", "#339933"),
  Express: entry(I.express(), "rgba(255, 255, 255, 0.08)", "#ffffff"),
  "Express.js": entry(I.express(), "rgba(255, 255, 255, 0.08)", "#ffffff"),
  MongoDB: entry(I.mongo(), "rgba(71, 162, 72, 0.12)", "#47A248"),
  Redis: entry(I.redis(), "rgba(220, 56, 45, 0.12)", "#DC382D"),
  BullMQ: entry(
    <SkillImg slug="redis" alt="BullMQ" />,
    "rgba(220, 56, 45, 0.12)"
  ),
  "Cloudflare R2": entry(
    I.cloudflare(),
    "rgba(243, 128, 32, 0.12)",
    "#F38020"
  ),
  Pathway: entry(I.python(), "rgba(55, 118, 171, 0.12)", "#3776AB"),
  Mapbox: entry(I.mapbox(), "rgba(66, 100, 251, 0.12)", "#4264FB"),
  "Discord.js": entry(I.discord(), "rgba(88, 101, 242, 0.12)", "#5865F2"),
  "Google Calendar API": entry(
    I.calendar(),
    "rgba(66, 133, 244, 0.12)",
    "#4285F4"
  ),
  JWT: entry(I.jwt(), "rgba(0, 0, 0, 0.15)", "#000000"),
  dns2: entry(I.node(), "rgba(51, 153, 51, 0.12)", "#339933"),
  dotenv: entry(I.dotenv(), "rgba(236, 213, 63, 0.12)", "#ECD53F"),
  Gemini: entry(I.gemini(), "rgba(142, 117, 178, 0.12)", "#8E75B2"),

  // Tech stack section (from data.ts `techStack`)
  JavaScript: entry(I.js(), "rgba(247, 223, 30, 0.12)", "#F7DF1E"),
  TypeScript: entry(I.ts(), "rgba(49, 120, 198, 0.12)", "#3178C6"),
  Python: entry(I.python(), "rgba(55, 118, 171, 0.12)", "#3776AB"),
  Tailwind: entry(I.tailwind(), "rgba(6, 182, 212, 0.12)", "#06B6D4"),
  Docker: entry(I.docker(), "rgba(36, 150, 237, 0.12)", "#2496ED"),
  Nginx: entry(I.nginx(), "rgba(0, 150, 57, 0.12)", "#009639"),
  Git: entry(I.git(), "rgba(240, 80, 50, 0.12)", "#F05032"),
  Vercel: entry(I.vercel(), "rgba(255, 255, 255, 0.08)", "#ffffff"),
  "Framer Motion": entry(I.framer(), "rgba(255, 255, 255, 0.08)", "#ffffff"),
  "Socket.io": entry(I.socketio(), "rgba(1, 1, 1, 0.2)", "#010101"),
  Linux: entry(I.linux(), "rgba(252, 198, 36, 0.12)", "#FCC624"),
  Postman: entry(I.postman(), "rgba(255, 108, 55, 0.12)", "#FF6C37"),
  GSAP: entry(I.gsap(), "rgba(136, 206, 2, 0.12)", "#88CE02"),
  "Google Gemini": entry(I.gemini(), "rgba(142, 117, 178, 0.12)", "#8E75B2"),
  PostgreSQL: entry(I.postgres(), "rgba(65, 105, 225, 0.12)", "#4169E1"),
};

// ─── Utilities for other components ─────────────────────────────

export function getTechIcon(name: string): TechIconEntry | undefined {
  return techIcons[name];
}

type TechIconProps = {
  name: string;
  size?: number;
  showLabel?: boolean;
  className?: string;
};

/** Reusable pill — use anywhere: `<TechBadge name="React" />` */
export function TechBadge({
  name,
  size = 18,
  showLabel = true,
}: TechIconProps) {
  const data = getTechIcon(name);

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 14px",
        borderRadius: 999,
        background: data?.bg ?? "rgba(255,255,255,0.05)",
        border: "1px solid var(--border)",
        color: "var(--text)",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      <span style={{ display: "flex", alignItems: "center", fontSize: 17 }}>
        {data?.icon ?? "⚡"}
      </span>
      {showLabel && <span>{name}</span>}
    </div>
  );
}

/** Icon only — e.g. hero, about, lists */
export function TechIcon({ name, size = 22 }: TechIconProps) {
  const data = getTechIcon(name);
  if (!data) return <span aria-hidden>⚡</span>;
  return <span style={{ display: "inline-flex", alignItems: "center" }}>{data.icon}</span>;
}