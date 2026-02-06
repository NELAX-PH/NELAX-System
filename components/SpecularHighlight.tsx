'use client';

import { useMousePosition } from '@/lib/hooks/use-mouse-position';
import { motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export function SpecularHighlight() {
  const { x, y } = useMousePosition();
  const [isMobile, setIsMobile] = useState(false);

  const springConfig = { damping: 30, stiffness: 200 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMobile(window.innerWidth < 768);
    });
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    mouseX.set(x);
    mouseY.set(y);
  }, [x, y, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <div
      className="fixed inset-0 z-[60] pointer-events-none overflow-hidden"
    >
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, rgba(212,175,55,0.01) 30%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
    </div>
  );
}
