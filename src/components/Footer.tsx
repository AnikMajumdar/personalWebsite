import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site";
import { LogoMark } from "./ui/icons";

const footerLinks = siteConfig.nav.filter((n) => n.id !== "home");

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="container-page py-14 sm:py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5" aria-label="Home">
              <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[linear-gradient(135deg,#8b97ff,#6f7bff_45%,#b18cff)]">
                <LogoMark className="h-4 w-4 text-[#0a0a12]" />
              </span>
              <span className="text-sm font-semibold tracking-tight text-foreground/90">
                {siteConfig.name}
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 font-mono text-xs text-faint">
              Built with modern web technologies.
            </p>
          </div>

          {/* Nav + socials */}
          <div className="flex gap-12 sm:gap-20">
            <nav aria-label="Footer">
              <p className="text-eyebrow text-[10px] text-faint">Navigate</p>
              <ul className="mt-4 space-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="text-eyebrow text-[10px] text-faint">Connect</p>
              <ul className="mt-4 space-y-2.5">
                {siteConfig.socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <li key={social.label}>
                      <a
                        href={social.href}
                        target={social.href.startsWith("#") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
                      >
                        <Icon className="h-4 w-4" />
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="font-mono text-xs text-faint">
            © 2026 {siteConfig.name}
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <span className="grid h-6 w-6 place-items-center rounded-full border border-border transition-colors group-hover:border-border-strong">
              <ArrowUp className="h-3 w-3" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
