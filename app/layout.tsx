import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Name | Full Stack Developer & Web Engineer",
  description: "Full Stack Developer building modern, interactive web applications with TypeScript, React, Next.js, Node.js, and MongoDB.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
