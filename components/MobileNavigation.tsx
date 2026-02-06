'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Cpu, Beaker, Rocket } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { GlassPanel } from './GlassPanel';
import { vibrate } from '@/lib/utils';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/system', label: 'System', icon: Cpu },
    { href: '/laboratory', label: 'Laboratory', icon: Beaker },
    { href: '/initiate', label: 'Initiate', icon: Rocket },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-6 z-50 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 space-y-2 pointer-events-auto"
          >
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => { vibrate(5); setIsOpen(false); }}
              >
                <GlassPanel 
                  className={cn(
                    "p-4 flex items-center gap-4 hover:bg-white/10 transition-colors border-white/5",
                    pathname === link.href ? "bg-gold-500/10 border-gold-500/30" : "bg-black/90"
                  )}
                >
                  <link.icon size={18} className={pathname === link.href ? "text-gold-400" : "text-slate-400"} />
                  <span className={cn(
                    "text-sm font-bold tracking-widest uppercase",
                    pathname === link.href ? "text-white" : "text-slate-400"
                  )}>
                    {link.label}
                  </span>
                </GlassPanel>
              </Link>
            ))}
            
            {/* Mobile Status Indicator */}
            <div className="px-4 py-2 flex items-center gap-3 bg-black/40 backdrop-blur-md rounded-full border border-white/5 w-fit">
               <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
               <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest">Core: Optimal</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-gold-500 text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.3)] pointer-events-auto"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={24} />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Menu size={24} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
