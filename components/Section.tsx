'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: 'none' | 'small' | 'medium' | 'large';
}

export function Section({ 
  children, 
  className, 
  spacing = 'medium' 
}: SectionProps) {
  const spacingMap = {
    none: 'py-0',
    small: 'py-golden-1',
    medium: 'py-golden-2',
    large: 'py-golden-3'
  };

  return (
    <section className={cn(
      "max-w-7xl mx-auto px-golden-1 w-full",
      spacingMap[spacing],
      className
    )}>
      {children}
    </section>
  );
}
