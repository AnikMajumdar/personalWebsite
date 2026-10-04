import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Reveal } from "./ui/Reveal";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-28">
      <div className="container-page">
        <div className="surface-card relative overflow-hidden rounded-[2rem] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(124,140,255,0.16),transparent_70%)] blur-2xl" />

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
            <Reveal className="lg:sticky lg:top-28">
              <div className="ring-accent relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-[1.75rem] border border-border">
                <Image
                  src={about.image}
                  alt={about.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 320px, 320px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <div className="max-w-2xl">
              <Reveal>
                <span className="text-eyebrow text-accent-soft">About</span>
              </Reveal>
              <div className="mt-5 space-y-4 leading-relaxed text-muted">
                {about.bio.map((paragraph, i) => (
                  <Reveal key={i} delay={0.1 + i * 0.05}>
                    <p>{paragraph}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

