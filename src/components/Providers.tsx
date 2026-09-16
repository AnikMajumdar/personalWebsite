"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

/** Global motion configuration — honours the user's reduced-motion setting. */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
