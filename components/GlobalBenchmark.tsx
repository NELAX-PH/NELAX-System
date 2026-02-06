'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Cpu } from 'lucide-react';
import { GlassPanel } from '@/components/GlassPanel';

export function GlobalBenchmark() {
  const [showBenchmark, setShowBenchmark] = useState(false);
  const [fps, setFps] = useState(60);

  // Listen for a custom event to toggle the benchmark from any page
  useEffect(() => {
    const handleToggle = () => setShowBenchmark(prev => !prev);
    window.addEventListener('toggle-benchmark', handleToggle);
    return () => window.removeEventListener('toggle-benchmark', handleToggle);
  }, []);

  useEffect(() => {
    if (!showBenchmark) return;
    let frameCount = 0;
    let lastTime = performance.now();
    const updateFps = () => {
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(frameCount);
        frameCount = 0;
        lastTime = now;
      }
      requestAnimationFrame(updateFps);
    };
    const animId = requestAnimationFrame(updateFps);
    return () => cancelAnimationFrame(animId);
  }, [showBenchmark]);

  return (
    <AnimatePresence>
      {showBenchmark && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="fixed bottom-6 right-6 md:bottom-12 md:right-12 z-[100] pointer-events-auto"
        >
          <GlassPanel className="p-4 md:p-6 border-gold-500/30 bg-black/80 backdrop-blur-2xl w-56 md:w-64 shadow-[0_0_40px_rgba(212,175,55,0.1)]">
             <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-bold text-gold-500 uppercase tracking-widest">System Monitor</span>
                <Activity size={14} className="text-gold-500 animate-pulse" />
             </div>
             <div className="space-y-6">
                <div className="flex justify-between items-end">
                   <span className="text-[10px] text-slate-500 uppercase">Frame Rate</span>
                   <span className="text-2xl font-mono text-white leading-none">{fps} FPS</span>
                </div>
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                     animate={{ width: `${(fps / 60) * 100}%` }}
                     className="h-full bg-green-500" 
                   />
                </div>
                
                <div className="flex justify-between items-end">
                   <span className="text-[10px] text-slate-500 uppercase">GPU Acceleration</span>
                   <span className="text-xs font-bold text-green-400 uppercase">Optimal</span>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                   <Cpu size={12} className="text-slate-500" />
                   <span className="text-[8px] text-slate-500 uppercase tracking-widest">Protocol: Active</span>
                </div>
                
                <button 
                  onClick={() => setShowBenchmark(false)}
                  className="w-full pt-2 text-[8px] text-slate-600 hover:text-red-400 uppercase tracking-widest transition-colors"
                >
                  Terminate Monitor
                </button>
             </div>
          </GlassPanel>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
