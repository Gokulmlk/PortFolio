import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import GitHubActivity from "@/components/GitHubActivity";
import Achievements from "@/components/Achievements";
import Guestbook from "@/components/Guestbook";
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
