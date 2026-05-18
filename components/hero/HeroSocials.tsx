"use client";
import { siteConfig } from "@/lib/data";

const socials = [
  {
    label: "GitHub",
    href: siteConfig.github,
    img: "https://skillicons.dev/icons?i=github",
  },
  {
    label: "Twitter",
    href: siteConfig.twitter,
    img: "https://skillicons.dev/icons?i=twitter",
  },
  {
    label: "LinkedIn",
    href: siteConfig.linkedin,
    img: "https://skillicons.dev/icons?i=linkedin",
  },
];

export default function HeroSocials() {
  return (
    <div
      style={{
        position: "relative",
        width: "fit-content",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 18,
          marginBottom: 50,
          opacity: 0.8,
        }}
      >
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
          >
            <img
              src={s.img}
              alt={s.label}
              style={{
                width: 24,
                height: 24,
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}