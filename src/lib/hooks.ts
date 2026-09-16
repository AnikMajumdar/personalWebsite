"use client";

import { useEffect, useState } from "react";

/** True once the page has scrolled past `threshold` pixels. */
export function useScrolled(threshold = 12): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

/** Tracks which section id is currently in view (scroll spy). */
export function useActiveSection(ids: string[], offset = 0.4): string {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: `-${Math.round(offset * 100)}% 0px -${Math.round(
          (1 - offset) * 100
        )}% 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, offset]);

  return active;
}
