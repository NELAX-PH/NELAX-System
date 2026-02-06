'use client';

import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Zap, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [log, setLog] = useState('INITIALIZING_CORE...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logs = [
      'LOADING_NEURAL_WEIGHTS...',
      'ESTABLISHING_HMAC_PORTAL...',
      'CALIBRATING_GLASS_ENGINE...',
      'SYNCHRONIZING_METAL_RUNTIME...',
      'OPTIMIZING_SPATIAL_NODES...',
      'CORE_SYSTEM_READY'
    ];
    
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < logs.length) {
        setLog(logs[logIndex]);
        logIndex++;
      }
    }, 400);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-metal-950 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Matrix-like grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ['-10%', '110%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[2px] bg-gold-500/20 shadow-[0_0_20px_rgba(212,175,55,0.5)] z-10"
      />

      <div className="w-full max-w-xs space-y-12 relative z-20">
         <div className="relative flex justify-center">
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-24 h-24 border border-gold-500/20 rounded-full flex items-center justify-center"
            >
               <Cpu className="text-gold-500 w-10 h-10" />
            </motion.div>
            
            {/* Orbital Rings */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] border border-white/5 rounded-full border-t-white/20"
            />
         </div>
         
         <div className="space-y-6">
           <div className="space-y-2">
             <div className="flex justify-between items-end">
                <div className="flex items-center gap-2 text-gold-500 font-mono text-[10px] tracking-widest uppercase">
                  <Terminal size={12} />
                  <motion.span
                    key={log}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    {log}
                  </motion.span>
                </div>
                <span className="text-gold-500 font-mono text-[10px]">{Math.min(100, Math.floor(progress))}%</span>
             </div>
             <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                  animate={{ width: `${progress}%` }}
                />
             </div>
           </div>

           <div className="grid grid-cols-3 gap-2">
              {[Activity, Shield, Zap].map((Icon, i) => (
                <div key={i} className="flex flex-col items-center gap-1 p-2 bg-white/5 border border-white/10 rounded">
                   <Icon size={12} className="text-slate-500" />
                   <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                        className="w-full h-full bg-gold-500/40"
                      />
                   </div>
                </div>
              ))}
           </div>
         </div>

         <div className="text-[8px] text-slate-600 font-mono uppercase tracking-[0.4em] text-center opacity-50">
           Digital Nervous System Deployment // Nelax_OS_v2
         </div>
      </div>
    </div>
  );
}
