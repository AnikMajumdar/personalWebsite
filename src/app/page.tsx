import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navigation />
      <main id="main">
        <Hero />
        <Projects />
        {/* Sections added incrementally */}
        <section id="experience" className="min-h-screen scroll-mt-24" />
        <section id="skills" className="min-h-screen scroll-mt-24" />
        <section id="resume" className="min-h-screen scroll-mt-24" />
      </main>
    </>
  );
}

