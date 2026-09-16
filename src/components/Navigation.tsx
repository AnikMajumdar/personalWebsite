"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { useActiveSection, useScrolled } from "@/lib/hooks";
import { LogoMark } from "./ui/icons";
import { cn } from "@/lib/utils";

const sectionIds = siteConfig.nav.map((n) => n.id);

function Logo() {
  return (
    <a
      href="#home"
      aria-label="Home"
      className="group flex items-center gap-2.5"
    >
      <span className="relative grid h-8 w-8 place-items-center overflow-hidden rounded-[10px] bg-[linear-gradient(135deg,#8b97ff,#6f7bff_45%,#b18cff)] shadow-[0_6px_18px_-6px_rgba(111,123,255,0.8)]">
        <LogoMark className="h-4 w-4 text-[#0a0a12]" />
      </span>
      <span className="hidden text-sm font-semibold tracking-tight text-foreground/90 sm:block">
        {siteConfig.name}
      </span>
    </a>
  );
}

export function Navigation() {
  const scrolled = useScrolled(24);
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Scroll progress line */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-[linear-gradient(90deg,#7c8cff,#b18cff)]"
      />

      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3 sm:pt-4">
        <motion.nav
          aria-label="Primary"
          initial={false}
          animate={{
            width: scrolled ? "min(880px, 100%)" : "min(1040px, 100%)",
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "flex items-center justify-between gap-4 rounded-full px-3 py-2 transition-[background,box-shadow,border-color] duration-500 sm:px-4",
            scrolled
              ? "glass-strong border border-border shadow-[0_10px_40px_-16px_rgba(0,0,0,0.9)]"
              : "border border-transparent"
          )}
        >
          <Logo />

          {/* Desktop links */}
          <ul className="relative hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id} className="relative">
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative z-10 inline-block rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300",
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-white/[0.07] ring-1 ring-inset ring-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 32,
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#resume"
            className="hidden items-center gap-1.5 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-border-strong hover:bg-white/[0.06] md:inline-flex"
          >
            Resume
            <ArrowUpRight className="h-3.5 w-3.5 text-muted" />
          </a>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white/[0.03] text-foreground md:hidden"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </motion.nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.ul
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-x-4 top-20 flex flex-col gap-1 rounded-3xl glass-strong p-3"
            >
              {siteConfig.nav.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg transition-colors",
                      active === item.id
                        ? "bg-white/[0.06] text-foreground"
                        : "text-muted hover:bg-white/[0.04] hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
