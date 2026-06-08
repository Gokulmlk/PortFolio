"use client";
import { useThemeSync } from "@/hooks/useThemeSync";
import HeroBanner  from "@/components/hero/HeroBanner";
import HeroBio     from "@/components/hero/HeroBio";
import HeroButtons from "@/components/hero/HeroButtons";
import HeroSocials from "@/components/hero/HeroSocials";
import HeroSpotify from "@/components/hero/HeroSpotify";

export default function Hero() {
  const theme = useThemeSync();

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 24px 30px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <HeroBanner  theme={theme} />
      <HeroBio     />
      <HeroButtons />
      <HeroSocials />
      <HeroSpotify />
    </section>
  );
}