import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import GitHubActivity from "@/components/sections/GitHubActivity";
import Achievements from "@/components/sections/Achievements";
import Guestbook from "@/components/sections/Guestbook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <TechStack />
        <Experience />
        <Projects />
        <About />
        <GitHubActivity />
        <Achievements />
        <Guestbook />
      </main>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
        <Footer />
      </div>
    </>
  );
}
