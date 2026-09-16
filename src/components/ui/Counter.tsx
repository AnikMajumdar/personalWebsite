"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

interface CounterProps {
  value: string;
  className?: string;
  duration?: number;
}

/** Parse "5,000+" -> { prefix:"", num:5000, suffix:"+", decimals:0, comma:true }. */
function parse(value: string) {
  const match = value.match(/^([^\d]*)([\d.,]+)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const comma = numStr.includes(",");
  const clean = numStr.replace(/,/g, "");
  const decimals = clean.includes(".") ? clean.split(".")[1].length : 0;
  return { prefix, target: parseFloat(clean), suffix, decimals, comma };
}

function format(n: number, decimals: number, comma: boolean) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
    useGrouping: comma,
  });
}

/** Animated number that counts up when scrolled into view. */
export function Counter({ value, className, duration = 1.6 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const parsed = parse(value);

  useEffect(() => {
    if (!inView || !parsed || !ref.current) return;
    const node = ref.current;

    if (reduce) {
      node.textContent =
        parsed.prefix + format(parsed.target, parsed.decimals, parsed.comma) + parsed.suffix;
      return;
    }

    const controls = animate(0, parsed.target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(latest) {
        node.textContent =
          parsed.prefix +
          format(latest, parsed.decimals, parsed.comma) +
          parsed.suffix;
      },
    });
    return () => controls.stop();
  }, [inView, parsed, reduce, duration]);

  if (!parsed) return <span className={className}>{value}</span>;

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}0{parsed.suffix}
    </span>
  );
}
