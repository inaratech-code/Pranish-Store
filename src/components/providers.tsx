"use client";

import { ReactLenis } from "lenis/react";
import { MotionConfig } from "framer-motion";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ReactLenis root options={{ duration: 1.05, smoothWheel: true }}>
        {children}
      </ReactLenis>
    </MotionConfig>
  );
}

