'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { GlassPanel } from '@/components/GlassPanel';
import { GlassButton } from '@/components/GlassButton';
import { AlertTriangle, Home } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-metal-900 relative">
      <div className="fixed inset-0 z-0 pointer-events-none bg-black" />
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

      <div className="w-full z-10 flex flex-col items-center">
        <Navigation />

        <div className="pt-24 pb-24 text-center max-w-2xl px-6">
          <GlassPanel className="p-12 md:p-16 border-red-500/20 bg-red-900/5 backdrop-blur-xl flex flex-col items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center animate-pulse">
               <AlertTriangle size={48} className="text-red-500" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter">
                404
              </h1>
              <div className="text-sm font-mono text-red-400 uppercase tracking-[0.3em] font-bold">
                Signal_Lost // Path_Unknown
              </div>
            </div>

            <p className="text-slate-400 text-lg leading-relaxed">
              The requested node does not exist within the active system architecture. 
              It may have been purged during a forensic audit or never initialized.
            </p>

            <Link href="/">
              <GlassButton className="min-w-[200px]">
                <Home size={16} /> Return to Grid
              </GlassButton>
            </Link>
          </GlassPanel>
        </div>
      </div>

      <Footer />
    </main>
  );
}
