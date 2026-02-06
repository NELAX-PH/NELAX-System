'use client';

import { ReactNode } from 'react';
import { ReactLenis } from 'lenis/react';

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{
        duration: 1.5,
        lerp: 0.07,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        syncTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
