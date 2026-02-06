'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

import { MagneticButton } from './MagneticButton';
import { vibrate } from '@/lib/utils';

interface GlassButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  glow?: boolean;
}

export function GlassButton({ 
  children, 
  className, 
  variant = 'primary', 
  glow = true,
  onClick,
  ...props 
}: GlassButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    vibrate(10);
    onClick?.(e);
  };

  return (
    <MagneticButton className="inline-block">
      <motion.button
        onClick={handleClick}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "relative group px-golden-2 py-4 rounded-full font-medium transition-all duration-300",
          "border border-white/10 backdrop-blur-md",
          variant === 'primary' ? "bg-white/5 text-white" : "bg-transparent text-white/60 hover:text-white hover:bg-white/5",
          className
        )}
        {...props}
      >
        {/* Background Glow */}
        {glow && (
          <div className="absolute inset-0 rounded-full bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors duration-500 -z-10 blur-xl" />
        )}

        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </motion.button>
    </MagneticButton>
  );
}
