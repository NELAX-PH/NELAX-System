'use client';

import { GlassPanel } from '@/components/GlassPanel';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pt-6 pointer-events-none hidden md:flex">
      <GlassPanel className="py-3 px-6 rounded-full pointer-events-auto flex items-center gap-8 bg-black/20 backdrop-blur-xl border-white/5">
        <Link href="/" className="text-sm font-bold tracking-[0.2em] text-white/90 hover:text-gold-400 transition-colors">
          NELAX
        </Link>
        <div className="w-px h-4 bg-white/10"></div>
        
        <Link 
          href="/system" 
          className={cn(
            "text-xs font-medium tracking-widest transition-colors uppercase",
            isActive('/system') ? "text-gold-400" : "text-white/60 hover:text-white"
          )}
        >
          System
        </Link>
        
        <Link 
          href="/laboratory" 
          className={cn(
            "text-xs font-medium tracking-widest transition-colors uppercase",
            isActive('/laboratory') ? "text-gold-400" : "text-white/60 hover:text-white"
          )}
        >
          Laboratory
        </Link>
        
        <Link 
          href="/initiate" 
          className={cn(
            "text-xs font-medium tracking-widest transition-colors uppercase",
            isActive('/initiate') ? "text-gold-400" : "text-white/60 hover:text-white"
          )}
        >
          Initiate
        </Link>
      </GlassPanel>
    </nav>
  );
}
