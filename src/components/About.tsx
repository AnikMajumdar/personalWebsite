import { siteConfig } from "@/data/site";
import { Reveal } from "./ui/Reveal";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <div className="surface-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.16),transparent_70%)] blur-2xl" />

          <div className="max-w-3xl">
            <Reveal>
              <span className="text-eyebrow text-accent-soft">About</span>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-h2 mt-5 text-gradient">{about.statement}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lead text-muted">
                {about.detail}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
