'use client';

import { motion } from 'framer-motion';
import { 
  Fingerprint, Zap, Database, 
  Cpu, MousePointerClick, AlertTriangle, 
  Lock, Unlock, Gauge, BarChart3, Layers
} from 'lucide-react';

/* 
  RESEARCH GRADE VISUALS 
  Specifically for Laboratory R&D Benchmarks
*/

// --- OMNI-INTERFACE (Onboarding) ---
export const LegacyOnboarding = () => (
  <div className="w-full h-full bg-[#f8fafc] p-8 flex flex-col gap-4 text-slate-900 overflow-hidden">
    <div className="flex items-center justify-between border-b pb-4 mb-2">
       <div className="w-24 h-4 bg-slate-200 rounded" />
       <div className="w-8 h-8 rounded-full bg-slate-200" />
    </div>
    <div className="space-y-4">
      <div className="space-y-1.5">
        <div className="w-20 h-2 bg-slate-300 rounded" />
        <div className="w-full h-10 border border-slate-300 rounded bg-white shadow-sm" />
      </div>
      <div className="space-y-1.5">
        <div className="w-24 h-2 bg-slate-300 rounded" />
        <div className="w-full h-10 border border-slate-300 rounded bg-white shadow-sm" />
      </div>
      <div className="space-y-1.5">
        <div className="w-16 h-2 bg-slate-300 rounded" />
        <div className="w-full h-10 border border-slate-300 rounded bg-white shadow-sm" />
      </div>
    </div>
    <div className="w-full h-12 bg-[#2563eb] text-white rounded-md flex items-center justify-center font-bold text-sm mt-4 shadow-md">
      COMPLETE REGISTRATION
    </div>
    <div className="text-[8px] text-center text-slate-400 mt-2 italic uppercase tracking-wider">Target: Top 10% of Screen // Low Affordance</div>
  </div>
);

export const ResearchOnboarding = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex flex-col justify-center items-center gap-8 overflow-hidden relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)]" />
    
    <div className="w-full max-w-[320px] space-y-6 relative z-10">
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <div className="text-[10px] tracking-[0.3em] text-gold-500 font-bold uppercase">Step 01/03</div>
          <div className="text-2xl font-bold text-white tracking-tighter">Biometric Auth</div>
        </div>
        <Fingerprint className="text-gold-500/50" size={32} />
      </div>
      
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div 
          initial={{ width: "0%" }}
          animate={{ width: "33%" }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          className="h-full bg-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.5)]" 
        />
      </div>

      <GlassPanel className="p-6 border-white/10 bg-white/5 backdrop-blur-xl">
         <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center bg-gold-500/5">
               <div className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
            </div>
            <div className="space-y-2 flex-1">
               <div className="w-full h-1.5 bg-white/10 rounded-full" />
               <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
            </div>
         </div>
      </GlassPanel>
      <div className="text-[8px] text-center text-gold-500/50 uppercase tracking-[0.3em] font-bold">Target: Bottom 30% // Thumb-Zone Optimized</div>
    </div>
  </div>
);

// --- PERFORMANCE-CORE ---
export const LegacyPerformance = () => (
  <div className="w-full h-full bg-slate-100 flex flex-col items-center justify-center p-8 relative overflow-hidden text-slate-900">
    <div className="flex flex-col items-center gap-6">
       <div className="w-16 h-16 border-4 border-slate-300 border-t-blue-600 rounded-full animate-spin" />
       <div className="text-center space-y-2">
          <div className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Hydrating Client State...</div>
          <div className="text-4xl font-black text-slate-300">42/100</div>
          <div className="text-[10px] text-red-500 font-bold uppercase border border-red-200 bg-red-50 px-2 py-1 rounded">FAIL: LCP &gt; 2.5s</div>
       </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200">
       <motion.div 
         animate={{ x: ["-100%", "100%"] }} 
         transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
         className="w-1/3 h-full bg-blue-500" 
       />
    </div>
  </div>
);

export const ResearchPerformance = () => (
  <div className="w-full h-full bg-metal-950 p-12 flex flex-col items-center justify-center gap-8 overflow-hidden relative">
    <div className="flex gap-12 items-end relative z-10">
       {[40, 70, 100, 85].map((h, i) => (
         <div key={i} className="flex flex-col items-center gap-4">
            <motion.div 
              initial={{ height: 0 }}
              animate={{ height: h * 1.5 }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className={`w-8 rounded-t-lg bg-gradient-to-t ${i === 2 ? 'from-gold-600 to-gold-400' : 'from-white/5 to-white/10'} border-x border-t border-white/10 shadow-[0_0_20px_rgba(212,175,55,0.1)]`}
            />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">M0{i+1}</span>
         </div>
       ))}
    </div>
    
    <div className="text-center relative z-10">
       <div className="text-6xl font-black text-white tracking-tighter italic shadow-gold-500/20 drop-shadow-2xl">100<span className="text-gold-500">/100</span></div>
       <div className="text-[10px] text-gold-500 uppercase tracking-[0.5em] font-bold mt-2 border border-gold-500/30 px-3 py-1 rounded bg-gold-500/5 backdrop-blur-sm">Interactive: 0.8s</div>
    </div>

    <div className="absolute inset-0 opacity-5 pointer-events-none">
       <div className="absolute top-1/2 left-0 w-full h-px bg-white" />
       <div className="absolute left-1/2 top-0 w-px h-full bg-white" />
       <div className="absolute inset-0 bg-[url('/noise.svg')] mix-blend-overlay" />
    </div>
  </div>
);

// --- PREDICTIVE-DASHBOARD ---
export const LegacyDashboard = () => (
  <div className="w-full h-full bg-[#f1f5f9] p-4 flex flex-col gap-3 text-slate-900 overflow-hidden">
    <div className="grid grid-cols-12 gap-3 h-full">
       <div className="col-span-3 bg-white border border-slate-200 rounded p-3 space-y-4 shadow-sm">
          <div className="w-full h-4 bg-slate-100 rounded" />
          {[1,2,3,4,5,6,7,8].map(i => <div key={i} className="w-full h-2 bg-slate-50 rounded" />)}
       </div>
       <div className="col-span-9 space-y-3">
          <div className="h-12 bg-white border border-slate-200 rounded shadow-sm flex items-center px-4 justify-between">
             <div className="w-32 h-4 bg-slate-100 rounded" />
             <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100" />
                <div className="w-8 h-8 rounded-full bg-slate-100" />
             </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
             <div className="h-24 bg-white border border-slate-200 rounded shadow-sm p-3">
                <div className="w-12 h-2 bg-slate-100 rounded mb-2" />
                <div className="w-full h-8 bg-slate-50 rounded" />
             </div>
             <div className="h-24 bg-white border border-slate-200 rounded shadow-sm p-3">
                <div className="w-12 h-2 bg-slate-100 rounded mb-2" />
                <div className="w-full h-8 bg-slate-50 rounded" />
             </div>
             <div className="h-24 bg-white border border-slate-200 rounded shadow-sm p-3 text-red-500 flex items-center justify-center gap-2">
                <AlertTriangle size={16} /> <span className="text-[10px] font-bold">ERROR_OVERLOAD</span>
             </div>
          </div>
          <div className="flex-1 bg-white border border-slate-200 rounded shadow-sm p-4 space-y-2">
             <div className="w-full h-2 bg-slate-100 rounded" />
             <div className="w-full h-2 bg-slate-100 rounded" />
             <div className="w-2/3 h-2 bg-slate-100 rounded" />
          </div>
       </div>
    </div>
  </div>
);

export const ResearchDashboard = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center overflow-hidden relative">
    <div className="relative w-full max-w-[400px] aspect-square">
       {/* Central Data Node */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="w-24 h-24 bg-gold-500/10 border border-gold-500/30 rounded-3xl backdrop-blur-2xl flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.2)]">
             <Zap className="text-gold-400" size={32} />
          </div>
       </div>

       {/* Orbiting Modules */}
       {[0, 90, 180, 270].map((deg, i) => (
         <motion.div
           key={i}
           animate={{ rotate: 360 }}
           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
           className="absolute inset-0"
         >
           <div 
             style={{ transform: `rotate(${deg}deg) translateY(-120px)` }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
           >
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md hover:border-gold-500/50 transition-colors">
                 {i === 0 ? <Database size={20} className="text-white/40" /> : 
                  i === 1 ? <Layers size={20} className="text-white/40" /> : 
                  i === 2 ? <Cpu size={20} className="text-white/40" /> : 
                  <Gauge size={20} className="text-white/40" />}
              </div>
           </div>
         </motion.div>
       ))}

       <div className="absolute inset-0 border border-white/5 rounded-full animate-spin-slow opacity-20" />
       <div className="absolute inset-16 border border-white/5 rounded-full animate-spin-reverse opacity-20" />
    </div>
    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end px-4">
       <div className="space-y-1">
          <div className="text-[8px] text-slate-500 uppercase tracking-widest font-bold">Predictive Index</div>
          <div className="text-lg font-bold text-white tracking-tighter">Verified_99.2%</div>
       </div>
       <div className="text-[10px] text-gold-500 font-bold border border-gold-500/30 px-2 py-0.5 rounded bg-gold-500/10 uppercase tracking-widest">Cognitive_Load: -75%</div>
    </div>
  </div>
);

// --- ENCRYPTED-VAULT ---
export const LegacySecurity = () => (
  <div className="w-full h-full bg-slate-900 p-12 flex flex-col gap-6 items-center justify-center overflow-hidden relative">
    <div className="w-full h-1 bg-red-500/50 absolute top-0 animate-pulse" />
    <Unlock size={64} className="text-red-500 animate-pulse" />
    <div className="text-center space-y-4 w-full">
       <div className="text-red-400 font-mono text-[10px] uppercase tracking-widest">VULNERABILITY_DETECTED</div>
       <div className="w-full h-10 bg-slate-800 rounded border border-red-500/30 flex items-center px-4">
          <div className="w-32 h-2 bg-slate-700 rounded" />
       </div>
       <div className="text-[8px] text-slate-500 uppercase font-bold tracking-widest">Session_Cookie: Exposed // CSRF: Possible</div>
    </div>
    <div className="mt-4 px-4 py-2 border border-slate-700 rounded bg-slate-800 text-slate-400 text-[10px] font-mono">
       LAST_BYPASS: 4m ago
    </div>
  </div>
);

export const ResearchSecurity = () => (
  <div className="w-full h-full bg-metal-950 p-12 flex flex-col items-center justify-center gap-8 overflow-hidden relative">
    <div className="relative">
       <div className="w-32 h-32 rounded-full border border-gold-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.1)]">
          <motion.div 
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-24 h-24 rounded-full border border-gold-500/40 bg-gold-500/5 flex items-center justify-center"
          >
             <Lock className="text-gold-400" size={32} />
          </motion.div>
       </div>
       {/* Scanning Rings */}
       <div className="absolute inset-[-20px] border border-white/5 rounded-full animate-spin-slow opacity-20" />
       <div className="absolute inset-[-40px] border border-white/5 rounded-full animate-spin-reverse opacity-10" />
    </div>
    
    <div className="space-y-3 text-center">
       <div className="text-[10px] font-mono text-green-500 tracking-[0.4em] uppercase font-bold border border-green-500/30 px-4 py-1 rounded-full bg-green-500/5">HMAC_SIG_VERIFIED</div>
       <div className="flex flex-col gap-1">
          <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest">SHA-256 // AES-GCM-256</div>
          <div className="text-[8px] font-mono text-gold-500 uppercase tracking-widest font-bold italic">BYPASS_RATE: 0.00%</div>
       </div>
    </div>
  </div>
);

// --- HARMONIC-ANALYTICS ---
export const LegacyAnalytics = () => (
  <div className="w-full h-full bg-white p-8 flex flex-col text-slate-900 overflow-hidden">
    <div className="text-[10px] font-bold uppercase text-slate-400 mb-4 border-b pb-2 tracking-widest">Monthly_Report.xlsx</div>
    <div className="flex-1 flex items-end gap-3 px-4 relative">
      {[60, 30, 80, 45, 90, 20, 55, 75, 40, 85].map((h, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-2">
           <div style={{ height: `${h}%` }} className="w-full bg-slate-200 border border-slate-300 rounded-t shadow-sm" />
           <div className="text-[6px] text-slate-400 font-bold">W0{i+1}</div>
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col justify-around pointer-events-none">
         {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-slate-100" />)}
      </div>
    </div>
    <div className="mt-4 pt-4 border-t flex justify-between items-center px-2">
       <div className="text-[8px] font-bold text-slate-500 uppercase">Analysis_Speed: Low</div>
       <div className="text-[8px] font-bold text-slate-400 uppercase italic">Standard 12-Col Grid</div>
    </div>
  </div>
);

export const ResearchAnalytics = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center overflow-hidden relative">
    <svg className="absolute inset-0 w-full h-full opacity-20">
      {/* Golden Spiral Path */}
      <path 
        d="M 200,200 m -150,0 a 150,150 0 1,0 300,0 a 150,150 0 1,0 -300,0" 
        stroke="#d4af37" 
        fill="none" 
        strokeWidth="0.5" 
        strokeDasharray="4 4"
      />
      <line x1="0" y1="50%" x2="100%" y2="50%" stroke="white" strokeWidth="0.1" />
      <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="0.1" />
    </svg>
    
    <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full p-8">
       <div className="bg-gold-500/10 border border-gold-500/30 rounded-2xl backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.1)]">
          <span className="text-4xl font-bold text-white tracking-tighter">1.618</span>
          <span className="text-[8px] text-gold-500 uppercase tracking-widest font-bold">Divine_Ratio</span>
       </div>
       <div className="space-y-4">
          <div className="h-1/2 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center p-4">
             <div className="w-full h-1 bg-gold-500/20 rounded-full mb-2">
                <motion.div animate={{ width: "100%" }} transition={{ duration: 2, repeat: Infinity }} className="h-full bg-gold-500" />
             </div>
             <span className="text-[10px] font-bold text-white">INSIGHT_SYNC</span>
          </div>
          <div className="h-1/2 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center">
             <BarChart3 size={24} className="text-gold-400/40" />
          </div>
       </div>
    </div>
    <div className="absolute bottom-4 text-[8px] font-mono text-gold-500 uppercase tracking-widest font-bold italic">Impact: +40% Insight Detection Speed</div>
  </div>
);

// --- HAPTIC-PHYSICS ---
export const LegacyHaptics = () => (
  <div className="w-full h-full bg-[#f1f5f9] p-12 flex flex-col items-center justify-center gap-6 text-slate-900">
    <button className="w-40 h-14 bg-[#2563eb] rounded flex items-center justify-center text-white text-xs font-bold shadow-lg uppercase tracking-widest active:scale-[0.98] transition-transform">
      Click Button
    </button>
    <div className="space-y-2 text-center opacity-40">
       <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Response Latency</div>
       <div className="text-xl font-bold text-slate-500">120ms</div>
       <div className="text-[8px] uppercase tracking-widest font-bold italic text-slate-400">Static Component</div>
    </div>
  </div>
);

export const ResearchHaptics = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center overflow-hidden relative">
    <motion.div 
      animate={{ 
        scale: [1, 1.05, 1],
        rotate: [0, 1, -1, 0]
      }}
      transition={{ duration: 4, repeat: Infinity }}
      className="w-40 h-40 bg-gold-500/10 border border-gold-500/30 rounded-full flex items-center justify-center relative shadow-[0_0_40px_rgba(212,175,55,0.1)]"
    >
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.2),transparent)] animate-pulse" />
       <motion.div 
         animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
         transition={{ duration: 6, repeat: Infinity }}
         className="w-16 h-16 bg-white/10 rounded-full blur-xl" 
       />
       <MousePointerClick className="text-gold-400 relative z-10" size={32} />
    </motion.div>
    <div className="absolute bottom-4 flex flex-col items-center gap-1">
       <div className="text-[8px] font-mono text-gold-500 uppercase tracking-widest font-bold">Physics_Engine: Liquid_Metal</div>
       <div className="text-[10px] font-mono text-white tracking-tighter italic">Latency: 0.02ms</div>
    </div>
  </div>
);

// --- STATE-PROTOCOL ---
export const LegacyState = () => (
  <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-8 gap-6 overflow-hidden relative">
    <div className="flex flex-col items-center gap-4 text-center">
       <div className="w-16 h-16 border-2 border-slate-800 border-t-red-500 rounded-full animate-spin shadow-[0_0_20px_rgba(239,68,68,0.2)]" />
       <div className="space-y-2">
          <div className="text-red-500 font-mono text-xs font-bold uppercase tracking-widest animate-pulse">CONNECTION_FAILED</div>
          <div className="text-slate-500 font-mono text-[8px] uppercase tracking-widest">Status: Offline // Retrying in 5s...</div>
       </div>
    </div>
    <div className="w-full bg-slate-900 border border-slate-800 rounded p-3 opacity-30">
       <div className="flex gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-slate-700" />
          <div className="w-2 h-2 rounded-full bg-slate-700" />
       </div>
       <div className="w-full h-2 bg-slate-800 rounded mb-1" />
       <div className="w-2/3 h-2 bg-slate-800 rounded" />
    </div>
  </div>
);

export const ResearchState = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center overflow-hidden relative text-white">
    <div className="grid grid-cols-3 gap-4 relative z-10">
       {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
         <motion.div 
           key={i}
           animate={{ opacity: [0.2, 1, 0.2] }}
           transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
           className="w-10 h-10 bg-gold-500/20 border border-gold-500/40 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.1)]"
         >
            <div className="w-1.5 h-1.5 bg-gold-400 rounded-full shadow-[0_0_10px_#d4af37]" />
         </motion.div>
       ))}
    </div>
    {/* Interconnecting lines */}
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
       <div className="w-full h-px bg-gold-500" />
       <div className="h-full w-px bg-gold-500" />
       <div className="w-full h-px bg-gold-500 rotate-45" />
       <div className="w-full h-px bg-gold-500 -rotate-45" />
    </div>
    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center px-2">
       <div className="text-[8px] font-mono text-green-500 uppercase tracking-widest font-bold border border-green-500/30 px-2 py-0.5 rounded bg-green-500/5">Protocol: Decentralized_Core</div>
       <div className="text-[8px] font-mono text-white/40 uppercase tracking-widest font-bold">Sync_Accuracy: 100%</div>
    </div>
  </div>
);

// Utility component used within visuals
function GlassPanel({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`rounded-xl border border-white/10 bg-white/5 backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}
