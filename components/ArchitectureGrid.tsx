'use client';

import { GlassPanel } from '@/components/GlassPanel';
import { motion } from 'framer-motion';
import { Database, Cpu, Layout, Smartphone, Zap } from 'lucide-react';

const systems = [
  { icon: Database, label: 'Core Data', color: 'text-blue-400' },
  { icon: Cpu, label: 'Logic Engine', color: 'text-gold-400' },
  { icon: Layout, label: 'Glass UI', color: 'text-white' },
  { icon: Smartphone, label: 'PWA Native', color: 'text-green-400' },
];

export function ArchitectureGrid() {
  return (
    <div className="relative p-10">
      {/* Connecting Lines (Animated) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#d4af37" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="50%" y1="20%" x2="50%" y2="80%" stroke="url(#line-gradient)" strokeWidth="1" />
        <line x1="20%" y1="50%" x2="80%" y2="50%" stroke="url(#line-gradient)" strokeWidth="1" />
        <circle cx="50%" cy="50%" r="100" stroke="rgba(255,255,255,0.1)" fill="none" />
        <circle cx="50%" cy="50%" r="50" stroke="rgba(212,175,55,0.2)" fill="none" />
      </svg>

      <div className="grid grid-cols-2 gap-12 relative z-10 max-w-2xl mx-auto">
        {systems.map((sys, i) => (
          <GlassPanel key={i} className="flex flex-col items-center justify-center p-8 aspect-square hover:bg-white/10 transition-colors group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`p-4 rounded-2xl bg-white/5 border border-white/10 mb-4 ${sys.color} shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500`}
            >
              <sys.icon size={32} />
            </motion.div>
            <span className="text-sm font-bold tracking-widest uppercase text-slate-400 group-hover:text-white transition-colors">{sys.label}</span>
          </GlassPanel>
        ))}
      </div>
      
      {/* Central Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-black/80 rounded-full border border-gold-500/50 flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.2)] backdrop-blur-xl z-20">
        <Zap className="text-gold-400 w-8 h-8 animate-pulse" />
      </div>
    </div>
  );
}
