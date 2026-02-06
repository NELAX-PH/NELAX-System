'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  showShine?: boolean;
}

export function GlassPanel({ children, className, delay = 0, showShine = true }: GlassPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.22, 1, 0.36, 1] /* Custom bezier for "heavy" feel */
      }}
      className={cn(
        "glass-panel rounded-2xl p-6 md:p-8",
        className
      )}
    >
      {/* Subtle shine effect on top edge */}
      {showShine && (
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      )}
      
      {children}
    </motion.div>
  );
}
