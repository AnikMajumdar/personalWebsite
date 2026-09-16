import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Navigation />
      <main id="main">
        <Hero />
        <Projects />
        <ExperienceTimeline />
        <Skills />
        <About />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

