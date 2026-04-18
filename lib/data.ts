// ─── SITE CONFIG ────────────────────────────────────────────────
export const siteConfig = {
  name: "Your Name",
  title: "Full Stack Web Developer",
  tagline: "Hi, I'm Your Name",
  bio: "I build modern, interactive web applications using TypeScript, React, Next.js, Node.js, and MongoDB, with a strong emphasis on clean UI, Performance, and User Experience.",
  email: "you@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter: "https://twitter.com/yourusername",
  instagram: "https://instagram.com/yourusername",
  resumeUrl: "#",
  location: "Hyderabad, India",
  currentFocus: "Building cool products",
};

// ─── STATS ──────────────────────────────────────────────────────
export const stats = [
  { value: "8+",    label: "Projects Shipped" },
  { value: "1846",  label: "GitHub Commits" },
  { value: "12+",   label: "Technologies" },
  { value: "Hyderabad", label: "Based in" },
];

// ─── TECH STACK ─────────────────────────────────────────────────
export const techStack = [
  { name: "JavaScript",    icon: "https://skillicons.dev/icons?i=js",       category: "Language" },
  { name: "TypeScript",    icon: "https://skillicons.dev/icons?i=ts",       category: "Language" },
  { name: "Python",        icon: "https://skillicons.dev/icons?i=python",   category: "Language" },
  { name: "React",         icon: "https://skillicons.dev/icons?i=react",    category: "UI Library" },
  { name: "Next.js",       icon: "https://skillicons.dev/icons?i=nextjs",   category: "Framework" },
  { name: "Tailwind",      icon: "https://skillicons.dev/icons?i=tailwind", category: "Styling" },
  { name: "Node.js",       icon: "https://skillicons.dev/icons?i=nodejs",   category: "Runtime" },
  { name: "Express.js",    icon: "https://skillicons.dev/icons?i=express",  category: "Backend" },
  { name: "MongoDB",       icon: "https://skillicons.dev/icons?i=mongodb",  category: "Database" },
  { name: "Redis",         icon: "https://skillicons.dev/icons?i=redis",    category: "Caching" },
  { name: "Docker",        icon: "https://skillicons.dev/icons?i=docker",   category: "DevOps" },
  { name: "Nginx",         icon: "https://skillicons.dev/icons?i=nginx",    category: "Web Server" },
  { name: "Git",           icon: "https://skillicons.dev/icons?i=git",      category: "Version Control" },
  { name: "Vercel",        icon: "https://skillicons.dev/icons?i=vercel",   category: "Deployment" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/white",         category: "Animations" },
  { name: "Socket.io",     icon: "https://cdn.simpleicons.org/socketdotio/white",    category: "Real-time" },
  { name: "Linux",         icon: "https://skillicons.dev/icons?i=linux",    category: "OS" },
  { name: "Postman",       icon: "https://skillicons.dev/icons?i=postman",  category: "API Testing" },
  { name: "GSAP",          icon: "https://cdn.simpleicons.org/greensock/white",      category: "Animations" },
  { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini/white",  category: "AI API" },
  { name: "PostgreSQL",    icon: "https://skillicons.dev/icons?i=postgres", category: "Database" },
];

// ─── EXPERIENCE ─────────────────────────────────────────────────
export const experience = [
  {
    role: "Full-Stack Developer",
    company: "Personal Projects & Freelance",
    period: "2025 - Present",
    points: [
      "Built and deployed multiple full-stack web applications on VPS and cloud platforms",
      "Implemented JWT-based authentication with access & refresh tokens and role-based flows",
      "Integrated payments, email services, caching, and secure API workflows in production",
      "Designed scalable backend architectures with Redis caching and async job handling",
    ],
  },
];

// ─── PROJECTS (all 8 — extracted by TinyFish) ───────────────────
export const projects = [
  {
    name: "DaemonDoc",
    description: "AI-powered platform that automatically generates and keeps GitHub READMEs in sync using webhooks, background workers, and large language models.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redis", "BullMQ"],
    techIcons: ["react","nodejs","express","mongodb","redis","redis"],
    status: "Live",
    link: "https://www.daemondoc.online",
    emoji: "🤖",
    gradient: "135deg, #1a1a2e 0%, #16213e 100%",
    featured: true,
  },
  {
    name: "NovaDrive",
    description: "A next-generation cloud storage platform with chunked uploads, secure file handling, and AI-powered organization with automation and productivity focus.",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudflare R2"],
    techIcons: ["react","nodejs","mongodb","cloudflare"],
    status: "Live",
    link: "https://www.novadrive.space",
    emoji: "☁️",
    gradient: "135deg, #0f2027 0%, #203a43 100%",
    featured: true,
  },
  {
    name: "BreathClean",
    description: "A health-focused navigation platform that recommends routes based on air quality, weather, and traffic. Computes a real-time health score using live AQI, weather data, and congestion analysis.",
    tech: ["Next.js", "React", "Pathway", "Express", "MongoDB", "Mapbox"],
    techIcons: ["nextjs","react","python","express","mongodb"],
    status: "Live",
    link: "https://breathe.daemondoc.online",
    emoji: "🌿",
    gradient: "135deg, #0a2818 0%, #0d3320 100%",
    featured: true,
  },
  {
    name: "RemindMe",
    description: "A smart Discord bot that lets users create reminders using natural language. Supports recurring reminders, DM & email notifications, Google Calendar sync, and AI-powered intent parsing.",
    tech: ["Node.js", "Discord.js", "MongoDB", "Express", "Google Calendar API"],
    techIcons: ["nodejs","discord","mongodb","express"],
    status: "Live",
    link: "#",
    emoji: "⏰",
    gradient: "135deg, #1a0530 0%, #2d0f52 100%",
    featured: true,
  },
  {
    name: "DisDrive",
    description: "A full-stack cloud storage system that uses Discord as a backend, featuring JWT auth, file streaming, Discord bot commands, and metadata persistence.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Discord.js", "JWT"],
    techIcons: ["react","nodejs","express","mongodb","discord"],
    status: "Live",
    link: "#",
    emoji: "💾",
    gradient: "135deg, #0d1117 0%, #161b22 100%",
    featured: false,
  },
  {
    name: "Authoritative DNS Server",
    description: "A minimal authoritative DNS server built in Node.js with Redis-backed storage and environment-based configuration.",
    tech: ["Node.js", "dns2", "Redis", "dotenv"],
    techIcons: ["nodejs","redis"],
    status: "Live",
    link: "#",
    emoji: "🌐",
    gradient: "135deg, #0c1a0c 0%, #122012 100%",
    featured: false,
  },
  {
    name: "TitleForge",
    description: "AI-powered platform for generating high-performing YouTube titles using modern NLP models and the Google Gemini API.",
    tech: ["React.js", "Node.js", "MongoDB", "Gemini"],
    techIcons: ["react","nodejs","mongodb"],
    status: "Live",
    link: "#",
    emoji: "✨",
    gradient: "135deg, #1a1200 0%, #2d2000 100%",
    featured: false,
  },
  {
    name: "ResolveIQ",
    description: "An issue tracking platform with structured workflows and role-based access control — think Jira but lightweight and developer-first.",
    tech: ["React.js", "Node.js", "MongoDB", "Express.js"],
    techIcons: ["react","nodejs","mongodb","express"],
    status: "Live",
    link: "#",
    emoji: "🎯",
    gradient: "135deg, #0a0f1e 0%, #0f1a35 100%",
    featured: false,
  },
];

// ─── ACHIEVEMENTS ────────────────────────────────────────────────
export const achievements = [
  {
    rank: "#18",
    title: "HackFest 2025",
    subtitle: "Organized by GDG Cloud New Delhi × Agora",
    description: "Secured a position in the Top 18 globally. Engineered and pitched a technical MVP within a strict 24-hour window. One of only 21 teams selected for the final evaluation phase.",
    badge: "Global Finalist Status",
    percentile: "TOP 6% PERCENTILE",
    total: "300+ Teams",
    verifyUrl: "https://www.creadefy.com/verify/CERT-4CB901B3-F587-4535",
    refId: "CERT-4CB901B3-F587-4535",
  },
];

// ─── ABOUT SKILLS ────────────────────────────────────────────────
export const aboutSkills = [
  "https://skillicons.dev/icons?i=react",
  "https://skillicons.dev/icons?i=js",
  "https://skillicons.dev/icons?i=ts",
  "https://skillicons.dev/icons?i=mongodb",
  "https://skillicons.dev/icons?i=nodejs",
  "https://skillicons.dev/icons?i=nextjs",
  "https://skillicons.dev/icons?i=postgres",
  "https://skillicons.dev/icons?i=vercel",
];

// ─── SAMPLE GUESTBOOK ───────────────────────────────────────────
export const sampleMessages = [
  { name: "Priya S.",  avatar: "🧑‍💻", message: "Amazing portfolio! Love the dark aesthetic.",              time: "2d ago" },
  { name: "Rahul K.",  avatar: "👨‍🎨", message: "Clean work and great project ideas. Keep it up!",         time: "5d ago" },
  { name: "Dev M.",    avatar: "🙂",   message: "The DNS server project is so underrated!",                 time: "1w ago" },
];
