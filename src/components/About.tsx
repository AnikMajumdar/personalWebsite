import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "./ui/Reveal";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <div className="surface-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.16),transparent_70%)] blur-2xl" />

          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div>
              <Reveal>
                <span className="text-eyebrow text-accent-soft">About</span>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-h2 mt-5 text-gradient">{about.statement}</p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-xl text-lead text-muted">
                  {about.detail}
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="lg:pt-2">
                <p className="text-eyebrow text-[10px] text-faint">
                  Areas of Interest
                </p>
                <ul className="mt-4 space-y-2.5">
                  {about.interests.map((interest) => (
                    <li
                      key={interest}
                      className="group flex items-center justify-between gap-3 border-b border-border pb-2.5 text-foreground/85"
                    >
                      <span className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {interest}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-faint transition-colors group-hover:text-accent-soft" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
