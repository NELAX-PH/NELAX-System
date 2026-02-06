'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface MetallicTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'gold' | 'silver' | 'none';
}

export function MetallicText({ children, className, variant = 'gold' }: MetallicTextProps) {
  const gradients = {
    gold: 'bg-gradient-to-br from-[#f2d06b] via-[#d4af37] to-[#8a6d3b]',
    silver: 'bg-gradient-to-br from-[#e2e8f0] via-[#94a3b8] to-[#475569]',
    none: ''
  };

  return (
    <span 
      className={cn(
        variant !== 'none' && "bg-clip-text text-transparent animate-pulse-slow",
        gradients[variant],
        className
      )}
      style={{
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: variant !== 'none' ? 'transparent' : 'inherit'
      }}
    >
      {children}
    </span>
  );
}
