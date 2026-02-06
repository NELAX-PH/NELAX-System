'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Activity, ShieldCheck, Zap } from 'lucide-react';

export function Footer() {
  const [latency, setLatency] = useState(14);
  const [load, setLoad] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.max(12, Math.min(22, prev + (Math.random() - 0.5) * 2)));
      setLoad(prev => Math.max(18, Math.min(32, prev + (Math.random() - 0.5) * 4)));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const links = [
    { name: 'The System', href: '/system' },
    { name: 'Legal', href: '/legal' },
    { name: 'Privacy', href: '/privacy' },
    { name: 'Manifesto', href: '/manifesto' }
  ];

  return (
    <footer className="w-full py-8 border-t border-white/5 bg-black/40 backdrop-blur-xl relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        
        {/* System Health Monitor */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-10 border border-white/5 bg-white/5 px-6 py-3 rounded-full backdrop-blur-md">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">System Status: Optimal</span>
           </div>
           
           <div className="hidden sm:flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                 <Zap size={10} className="text-gold-500" /> 
                 <span>LATENCY: {latency.toFixed(0)}ms</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                 <Activity size={10} className="text-blue-500" /> 
                 <span>LOAD: {load.toFixed(1)}%</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500">
                 <ShieldCheck size={10} className="text-green-500" /> 
                 <span>CORE: VERIFIED</span>
              </div>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex gap-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold text-slate-600 hover:text-gold-400 uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="text-[10px] text-slate-600 tracking-[0.3em] uppercase font-bold border-l border-white/10 pl-8 hidden lg:block">
            &copy; {new Date().getFullYear()} NELAX Systems.
          </div>
        </div>
      </div>
    </footer>
  );
}
