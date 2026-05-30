// ─── SITE CONFIG ────────────────────────────────────────────────
export const siteConfig = {
  name: "Gokul Malik",
  title: "Full Stack Web Developer",
  tagline: "Hi, I'm Gokul",
  bio: "I build modern, interactive web applications using TypeScript, React, Next.js, Node.js, and MongoDB, with a strong emphasis on clean UI, Performance, and User Experience.",
  email: "gokulmlk21@gmail.com",
  github: "https://github.com/Gokulmlk",
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

// ─── PROJECTS ─────────────────────────────────────────────────
export const projects = [
  {
    name: "Youtube Clone",
    image: "Youtubeclon.png",
    description:
      " A YouTube-inspired video platform where users can upload, stream, and explore videos with secure authentication and a responsive user experience.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Redis"],
    techIcons: ["react", "Node.js", "express", "mongodb", "redis"],
    status: "Live",
    link: "https://youtube-clone-gmxq.vercel.app/",
    gradient: "135deg, #1a1a2e 0%, #16213e 100%",
    featured: true,
  },

  {
    name: "ShopyGlobe",
    image: "Shopyglobe.png",
    description:
      "A responsive online shopping platform with product browsing, secure checkout, and dynamic cart management. Built using MERN stack for speed, scalability, and smooth user experience.",
    tech: ["React.js", "Node.js", "MongoDB", "Cloudflare R2"],
    techIcons: ["react", "nodejs", "mongodb", "cloudflare"],
    status: "Live",
    link: "https://shoppy-globe-woad.vercel.app/",
    emoji: "☁️",
    gradient: "135deg, #0f2027 0%, #203a43 100%",
    featured: true,
  },
];

// ─── ACHIEVEMENTS ────────────────────────────────────────────────
export const achievements = [
  {
    title: "Best Personal Project"
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
  { name: "Roy S.",  avatar: "🧑‍💻", message: "Amazing portfolio! Love the dark aesthetic.",              time: "2d ago" },
  { name: "Sam K.",  avatar: "👨‍🎨", message: "Clean work and great project ideas. Keep it up!",         time: "5d ago" },
  { name: "Jhon M.",    avatar: "🙂",   message: "The DNS server project is so underrated!",                 time: "1w ago" },
];
