'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';

interface GlassInputProps extends HTMLMotionProps<"input"> {
  label?: string;
  icon?: React.ReactNode;
}

export const GlassInput = forwardRef<HTMLInputElement, GlassInputProps>(
  ({ className, label, icon, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="text-xs font-bold tracking-widest text-slate-400 uppercase ml-1">
            {label}
          </label>
        )}
        <div className="relative group">
          <motion.input
            ref={ref}
            whileFocus={{ scale: 1.01 }}
            className={cn(
              "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder:text-slate-500 outline-none transition-all duration-300",
              "focus:bg-white/10 focus:border-gold-500/50 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)]",
              className
            )}
            {...props}
          />
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-gold-400 transition-colors">
            {icon}
          </div>
        </div>
      </div>
    );
  }
);

GlassInput.displayName = 'GlassInput';
