'use client';

import { motion } from 'framer-motion';
import { 
  AlertTriangle, CheckCircle2, MousePointer2, Fingerprint, 
  Zap, Shield, Type, MousePointerClick,
  Code2,
  Image as ImageIcon, BoxSelect, Search,
  ArrowDownToLine, Eye, Layers
} from 'lucide-react';

/* 
  BENCHMARK VISUALS 
  Used in Teardowns and Laboratory detail pages
*/

const ScanningLine = () => (
  <motion.div 
    animate={{ top: ['0%', '100%'] }}
    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    className="absolute left-0 right-0 h-px bg-white/20 z-10 pointer-events-none"
  />
);

const TechnicalOverlay = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
    <div className="absolute top-2 left-2 text-[6px] font-mono text-white/40 uppercase">Forensic_Buffer_0x42</div>
    <div className="absolute bottom-2 right-2 text-[6px] font-mono text-white/40 uppercase tracking-widest">Architecture_Verified</div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
  </div>
);

export const MegaMenuChaos = () => (
  <div className="relative w-full h-full bg-[#f0f2f5] p-4 flex flex-col gap-2 overflow-hidden">
    <TechnicalOverlay />
    <div className="w-full h-8 bg-white shadow-sm flex items-center px-2 gap-2 border-b border-slate-200">
      <div className="w-4 h-4 bg-blue-600 rounded-sm" />
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="w-8 h-2 bg-slate-200 rounded-full" />
      ))}
    </div>
    <div className="w-full bg-white shadow-xl border border-slate-200 p-4 grid grid-cols-4 gap-4 z-10">
      {[1, 2, 3, 4].map(col => (
        <div key={col} className="space-y-2">
          <div className="w-12 h-2 bg-slate-400 rounded-full mb-3" />
          {[1, 2, 3, 4, 5].map(link => (
            <div key={link} className="w-full h-1.5 bg-slate-200 rounded-full" />
          ))}
        </div>
      ))}
    </div>
    <div className="flex-1 p-4 space-y-4 opacity-40">
      <div className="w-3/4 h-4 bg-slate-300 rounded" />
      <div className="w-full h-32 bg-slate-200 rounded" />
    </div>
    <div className="absolute inset-0 bg-red-500/5 flex items-center justify-center pointer-events-none">
       <div className="p-2 bg-red-500 text-white rounded-full animate-pulse">
         <AlertTriangle size={24} />
       </div>
    </div>
  </div>
);

export const GlassPortalSystem = () => (
  <div className="relative w-full h-full bg-metal-950 p-6 flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)]" />
    <ScanningLine />
    <TechnicalOverlay />
    
    <div className="grid grid-cols-3 gap-3 w-full max-w-[280px] z-10">
      {[1, 2, 3].map(i => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="aspect-square rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center p-3 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/5 to-transparent" />
          <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-2">
             <div className="w-3 h-3 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </div>
          <div className="w-10 h-1 bg-white/20 rounded-full" />
        </motion.div>
      ))}
    </div>

    <div className="mt-8 flex flex-col items-center gap-2 opacity-50">
       <div className="w-32 h-2 bg-white/10 rounded-full" />
       <div className="w-24 h-2 bg-white/5 rounded-full" />
    </div>
    
    <div className="absolute bottom-4 right-4 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">
       <CheckCircle2 size={20} />
    </div>
  </div>
);

export const InvisibleButtonChaos = () => (
  <div className="w-full h-full bg-slate-50 p-6 flex flex-col gap-4 overflow-hidden">
     <div className="w-full h-40 bg-slate-200 rounded-lg" />
     <div className="space-y-2">
        <div className="w-full h-3 bg-slate-300 rounded" />
        <div className="w-full h-3 bg-slate-300 rounded" />
        <div className="w-2/3 h-3 bg-slate-300 rounded" />
     </div>
     <div className="flex justify-end pt-4">
        <div className="px-4 py-2 bg-blue-600 rounded text-[8px] text-white font-bold opacity-80 flex items-center gap-1">
           SUBMIT <MousePointer2 size={8} className="text-red-400 animate-bounce" />
        </div>
     </div>
  </div>
);

export const ThumbZoneSystem = () => (
  <div className="w-full h-full bg-metal-950 p-6 flex flex-col gap-4 overflow-hidden relative">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.1),transparent)]" />
     <TechnicalOverlay />
     <ScanningLine />
     <div className="w-full h-40 bg-white/5 rounded-2xl border border-white/10 relative z-10" />
     <div className="space-y-2 relative z-10">
        <div className="w-full h-2 bg-white/10 rounded" />
        <div className="w-2/3 h-2 bg-white/5 rounded" />
     </div>
     
     {/* Thumb Zone CTA */}
     <div className="absolute bottom-6 left-6 right-6 h-14 bg-gold-500 rounded-2xl shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-between px-6 z-20">
        <div className="w-24 h-2 bg-black/20 rounded-full" />
        <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center">
           <Fingerprint size={20} className="text-black/60" />
        </div>
     </div>
     
     <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10">
        <div className="w-32 h-32 rounded-full border border-gold-500/20 bg-gold-500/5 animate-ping opacity-20" />
     </div>
  </div>
);

export const FormChaos = () => (
  <div className="w-full h-full bg-slate-100 p-4 flex flex-col gap-2 overflow-hidden relative">
    <div className="absolute inset-0 bg-red-500/[0.02]" />
    <div className="w-16 h-2 bg-slate-400 rounded-full mb-2 relative z-10" />
    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
      <div key={i} className="w-full h-6 bg-white border border-slate-300 rounded-sm relative z-10" />
    ))}
    <div className="w-full h-8 bg-blue-600 rounded-sm mt-2 relative z-10" />
  </div>
);

export const SteppedTunnelSystem = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex flex-col justify-center gap-6 overflow-hidden relative">
    <TechnicalOverlay />
    <ScanningLine />
    <div className="flex gap-2 w-full relative z-10">
      <div className="h-1 bg-gold-500 flex-1 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
      <div className="h-1 bg-white/10 flex-1 rounded-full" />
      <div className="h-1 bg-white/10 flex-1 rounded-full" />
    </div>
    <div className="space-y-4 relative z-10">
      <div className="w-24 h-2 bg-gold-400/50 rounded-full" />
      <div className="w-full h-12 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md" />
    </div>
    <div className="w-full h-12 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center relative z-10">
      <div className="w-16 h-2 bg-white/20 rounded-full" />
    </div>
  </div>
);

export const GridChaos = () => (
  <div className="w-full h-full bg-slate-200 p-4 relative overflow-hidden">
    <div className="absolute top-4 left-6 w-24 h-24 bg-white shadow-sm border border-slate-300" />
    <div className="absolute top-8 right-4 w-32 h-12 bg-white shadow-sm border border-slate-300" />
    <div className="absolute bottom-10 left-2 w-40 h-20 bg-white shadow-sm border border-slate-300" />
    <div className="absolute bottom-4 right-8 w-16 h-16 bg-white shadow-sm border border-slate-300" />
    <div className="absolute inset-0 border-[0.5px] border-red-500/20 flex items-center justify-center">
       <div className="w-full h-px bg-red-500/40 rotate-12" />
       <div className="w-full h-px bg-red-500/40 -rotate-45" />
    </div>
  </div>
);

export const HarmonicGridSystem = () => (
  <div className="w-full h-full bg-metal-950 p-6 flex items-center justify-center overflow-hidden relative">
    <div className="absolute inset-0 opacity-20">
      <div className="absolute left-[38.2%] top-0 bottom-0 w-px bg-gold-500" />
      <div className="absolute left-[61.8%] top-0 bottom-0 w-px bg-gold-500" />
      <div className="absolute top-[38.2%] left-0 right-0 h-px bg-gold-500" />
    </div>
    
    <div className="grid grid-cols-2 gap-4 w-full h-full z-10 p-4">
       <div className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm" />
       <div className="space-y-4">
          <div className="h-1/3 bg-gold-500/10 border border-gold-500/20 rounded-2xl" />
          <div className="h-2/3 bg-white/5 border border-white/10 rounded-2xl" />
       </div>
    </div>
  </div>
);

export const SlowLoadChaos = () => (
  <div className="w-full h-full bg-slate-100 p-6 flex flex-col gap-4 overflow-hidden relative">
    <div className="w-full h-32 bg-slate-200 animate-pulse rounded" />
    <div className="space-y-2">
      <div className="w-full h-2 bg-slate-200 animate-pulse rounded" />
      <div className="w-full h-2 bg-slate-200 animate-pulse rounded" />
      <div className="w-2/3 h-2 bg-slate-200 animate-pulse rounded" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center bg-white/40 backdrop-blur-[2px]">
      <div className="w-10 h-10 border-4 border-slate-300 border-t-blue-500 rounded-full animate-spin" />
    </div>
  </div>
);

export const InstantMetalSystem = () => (
  <div className="w-full h-full bg-metal-950 p-6 flex flex-col gap-4 overflow-hidden relative">
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full h-32 bg-white/10 border border-white/20 rounded-2xl"
    />
    <div className="space-y-2">
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="w-full h-2 bg-gold-500/20 rounded" />
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="w-full h-2 bg-white/10 rounded" />
      <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="w-2/3 h-2 bg-white/5 rounded" />
    </div>
    <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] text-green-400 font-bold bg-black/40 px-2 py-1 rounded">
      <Zap size={10} /> 0.8s
    </div>
  </div>
);

export const TrustGapChaos = () => (
  <div className="w-full h-full bg-white p-6 flex flex-col gap-4 overflow-hidden">
    <div className="flex items-center gap-2 border-b pb-2">
      <div className="w-6 h-6 bg-slate-200 rounded-full" />
      <div className="w-20 h-2 bg-slate-200 rounded" />
    </div>
    <div className="space-y-2 pt-4">
      <div className="w-full h-8 bg-slate-50 border border-dashed border-slate-300 flex items-center px-3">
        <div className="w-full h-2 bg-slate-200 rounded" />
      </div>
      <div className="w-full h-8 bg-slate-50 border border-dashed border-slate-300 flex items-center px-3">
        <div className="w-full h-2 bg-slate-200 rounded" />
      </div>
    </div>
    <div className="mt-auto flex justify-between">
      <div className="w-12 h-4 bg-slate-200 rounded" />
      <div className="w-16 h-8 bg-blue-600 rounded" />
    </div>
  </div>
);

export const CertifiedVaultSystem = () => (
  <div className="w-full h-full bg-metal-950 p-6 flex flex-col gap-4 overflow-hidden relative">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent)]" />
    <div className="flex items-center justify-between border-b border-white/10 pb-2">
      <Shield size={16} className="text-gold-400" />
      <div className="w-24 h-1.5 bg-white/10 rounded-full" />
    </div>
    <div className="space-y-4 pt-4">
      <div className="w-full h-12 bg-white/5 border border-white/10 rounded-xl flex items-center px-4 gap-3">
        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
        <div className="w-32 h-1 bg-white/20 rounded-full" />
      </div>
      <div className="w-full h-12 bg-white/5 border border-white/10 rounded-xl flex items-center px-4 gap-3">
        <div className="w-2 h-2 rounded-full bg-gold-400" />
        <div className="w-24 h-1 bg-white/10 rounded-full" />
      </div>
    </div>
    <div className="mt-auto flex justify-center">
      <div className="w-full h-10 bg-gold-500 rounded-lg flex items-center justify-center gap-2">
        <div className="w-12 h-1 bg-black/20 rounded-full" />
        <Fingerprint size={16} className="text-black/40" />
      </div>
    </div>
  </div>
);

export const TypographyChaos = () => (
  <div className="w-full h-full bg-slate-50 p-6 flex flex-col gap-4 overflow-hidden">
    <div className="text-3xl font-serif text-blue-900 leading-tight">Mismatched <span className="font-sans italic text-red-500">Fonts</span></div>
    <div className="text-xs font-mono text-slate-500 uppercase">And generic mono text</div>
    <div className="space-y-2">
      <div className="w-full h-2 bg-slate-200 rounded" />
      <div className="w-4/5 h-2 bg-slate-200 rounded" />
    </div>
    <div className="mt-auto border-t pt-4">
      <button className="px-4 py-2 bg-blue-600 text-white rounded text-[10px]">READ MORE</button>
    </div>
  </div>
);

export const HarmonicTypeSystem = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex flex-col gap-6 overflow-hidden relative">
    <div className="absolute top-0 right-0 p-4 opacity-10">
      <Type size={120} className="text-gold-500" />
    </div>
    <div className="space-y-1">
      <div className="text-[10px] tracking-[0.3em] uppercase text-gold-500 font-bold">Protocol 01</div>
      <div className="text-4xl font-bold text-white tracking-tighter leading-none">Harmonic <br/> Scale.</div>
    </div>
    <div className="space-y-3">
      <div className="w-full h-1.5 bg-white/10 rounded-full" />
      <div className="w-full h-1.5 bg-white/10 rounded-full" />
      <div className="w-2/3 h-1.5 bg-white/5 rounded-full" />
    </div>
    <div className="mt-auto">
       <div className="w-24 h-px bg-gold-500/50" />
       <div className="text-[10px] text-slate-500 mt-2 font-mono uppercase tracking-widest">Type: Playfair Display</div>
    </div>
  </div>
);

export const FeedbackChaos = () => (
  <div className="w-full h-full bg-slate-100 p-8 flex items-center justify-center overflow-hidden">
    <div className="w-32 h-12 bg-blue-600 rounded flex items-center justify-center text-white font-bold shadow-sm relative group">
       CLICK ME
       <div className="absolute -right-4 -top-4 text-red-500 animate-bounce">
         <MousePointer2 size={16} />
       </div>
    </div>
  </div>
);

export const TactileMetalSystem = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center overflow-hidden relative">
    <motion.div 
      whileTap={{ scale: 0.95 }}
      className="w-48 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-center gap-3">
        <MousePointerClick size={20} className="text-gold-400" />
        <div className="w-20 h-2 bg-white/20 rounded-full" />
      </div>
      <motion.div 
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full h-full"
      />
    </motion.div>
    <div className="absolute bottom-4 text-[8px] text-gold-500/50 uppercase tracking-[0.4em]">Haptic Protocol Active</div>
  </div>
);

export const ImageChaos = () => (
  <div className="w-full h-full bg-slate-200 flex items-center justify-center p-8 opacity-40">
    <div className="w-full aspect-square border-2 border-dashed border-slate-400 rounded flex flex-col items-center justify-center gap-2">
       <ImageIcon size={48} className="text-slate-400" />
       <div className="text-[10px] font-mono">FILE_TOO_LARGE.JPG (4.2MB)</div>
    </div>
  </div>
);

export const PhysicsVectorSystem = () => (
  <div className="w-full h-full bg-metal-950 flex items-center justify-center p-8 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent)]" />
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      className="w-48 h-48 border border-gold-500/20 rounded-full flex items-center justify-center"
    >
       <div className="w-32 h-32 border border-gold-500/40 rounded-full flex items-center justify-center">
          <Code2 className="text-gold-400" size={32} />
       </div>
    </motion.div>
    <div className="absolute bottom-4 text-[8px] text-gold-500 font-bold uppercase tracking-[0.4em]">SVG_CODE_OPTIMIZED</div>
  </div>
);

export const ModalChaos = () => (
  <div className="w-full h-full bg-slate-300 p-4 relative overflow-hidden opacity-50">
    <div className="absolute inset-4 bg-white shadow-2xl rounded border border-slate-200 z-10 p-4">
       <div className="w-12 h-2 bg-slate-200 rounded mb-4" />
       <div className="space-y-2">
          <div className="w-full h-1.5 bg-slate-100 rounded" />
          <div className="w-full h-1.5 bg-slate-100 rounded" />
       </div>
    </div>
    <div className="absolute inset-0 bg-black/20" />
  </div>
);

export const InlinePortalSystem = () => (
  <div className="w-full h-full bg-metal-950 p-6 flex flex-col gap-4 overflow-hidden">
    <div className="w-full h-12 bg-white/5 border border-white/10 rounded-xl flex items-center px-4 justify-between">
       <div className="w-24 h-1.5 bg-white/20 rounded-full" />
       <BoxSelect size={16} className="text-gold-400" />
    </div>
    <motion.div 
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      className="w-full bg-gold-500/5 border border-gold-500/20 rounded-2xl p-6"
    >
       <div className="space-y-3">
          <div className="w-1/2 h-2 bg-gold-400/30 rounded-full" />
          <div className="w-full h-1.5 bg-white/5 rounded-full" />
          <div className="w-3/4 h-1.5 bg-white/5 rounded-full" />
       </div>
    </motion.div>
  </div>
);

export const SearchChaos = () => (
  <div className="w-full h-full bg-slate-50 p-8 flex flex-col gap-4 opacity-40">
    <div className="w-full h-10 border border-slate-300 rounded flex items-center px-4 gap-2">
       <Search size={16} className="text-slate-400" />
       <div className="w-32 h-2 bg-slate-200 rounded" />
    </div>
    <div className="text-[10px] text-slate-400">4,209 results found...</div>
  </div>
);

export const CommandPaletteSystem = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center overflow-hidden">
    <div className="w-full max-w-[300px] bg-black/60 border border-white/10 rounded-2xl backdrop-blur-3xl p-4 shadow-2xl relative">
       <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
       <div className="flex items-center gap-3 border-b border-white/5 pb-3">
          <div className="w-4 h-4 rounded bg-gold-500/20 flex items-center justify-center">
             <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          <div className="w-24 h-2 bg-white/20 rounded-full" />
       </div>
       <div className="pt-3 space-y-2">
          {[1, 2].map(i => (
            <div key={i} className="flex items-center justify-between opacity-40">
               <div className="w-16 h-1 bg-white/10 rounded" />
               <div className="w-4 h-4 bg-white/5 rounded" />
            </div>
          ))}
       </div>
    </div>
  </div>
);

export const ColorAnarchy = () => (
  <div className="w-full h-full bg-white p-6 grid grid-cols-4 gap-2 opacity-40">
    {['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500', 'bg-pink-500', 'bg-cyan-500', 'bg-yellow-500'].map(c => (
      <div key={c} className={`aspect-square rounded ${c}`} />
    ))}
  </div>
);

export const MetallicNeutralitySystem = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex flex-col gap-6 overflow-hidden">
    <div className="flex gap-4">
       {['bg-metal-900', 'bg-white/10', 'bg-gold-500', 'bg-black'].map((c, i) => (
         <div key={i} className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-xl border border-white/10 ${c}`} />
            <div className="text-[6px] font-mono text-slate-500 uppercase tracking-widest">LAYER_0{i+1}</div>
         </div>
       ))}
    </div>
    <div className="space-y-2">
       <div className="w-full h-px bg-white/5" />
       <div className="text-[10px] text-gold-500/50 uppercase tracking-[0.4em]">Chromatographic Balance: 100%</div>
    </div>
  </div>
);

export const SpacingAnarchy = () => (
  <div className="w-full h-full bg-slate-100 p-4 flex flex-col opacity-40">
    <div className="h-12 bg-slate-300 w-1/2 mb-2" />
    <div className="h-4 bg-slate-200 w-full mb-8" />
    <div className="h-32 bg-slate-300 w-full mb-3" />
    <div className="h-8 bg-blue-500 w-32" />
  </div>
);

export const PhiScaleSystem = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex flex-col overflow-hidden relative">
    <div className="absolute right-0 top-0 bottom-0 w-px bg-gold-500/20" />
    <div className="absolute left-[61.8%] top-0 bottom-0 w-px bg-gold-500/20" />
    
    <div className="space-y-golden-1 relative z-10">
       <div className="h-golden-2 bg-white/5 border border-white/10 rounded-xl" />
       <div className="h-golden-1 bg-gold-500/10 border border-gold-500/20 rounded-xl" />
       <div className="h-golden-3 bg-white/5 border border-white/10 rounded-xl" />
    </div>
    <div className="absolute top-4 right-4 text-[8px] font-mono text-gold-500">φ = 1.618</div>
  </div>
);

export const ScrollChaos = () => (
  <div className="w-full h-full bg-slate-200 p-6 flex flex-col gap-4 opacity-40 overflow-hidden">
    <div className="flex flex-col gap-4 animate-bounce">
       {[1, 2, 3, 4, 5].map(i => (
         <div key={i} className="w-full h-20 bg-white border border-slate-300 rounded shadow-sm" />
       ))}
    </div>
  </div>
);

export const SnapIndexedSystem = () => (
  <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center overflow-hidden">
    <div className="w-full space-y-8">
       <div className="flex justify-between items-center px-4">
          <div className="flex gap-2">
             {[1, 2, 3].map(i => <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 1 ? 'bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'bg-white/10'}`} />)}
          </div>
          <div className="text-[8px] font-mono text-slate-500">INDEX_01 // STAGE_ALPHA</div>
       </div>
       <div className="w-full h-40 bg-white/5 border border-white/10 rounded-3xl relative flex items-center justify-center">
          <div className="w-3/4 h-1 bg-white/10 rounded-full" />
          <div className="absolute bottom-4 right-6 flex items-center gap-2">
             <div className="w-8 h-8 rounded-full border border-gold-500/30 flex items-center justify-center">
                <ArrowDownToLine size={12} className="text-gold-400" />
             </div>
          </div>
       </div>
    </div>
  </div>
);

export const FeedbackAnarchy = () => (
  <div className="w-full h-full bg-white p-12 flex items-center justify-center opacity-40">
    <div className="w-16 h-16 border-2 border-slate-300 rounded-lg flex items-center justify-center group cursor-pointer active:scale-95 transition-transform">
       <MousePointer2 size={24} className="text-slate-400" />
    </div>
  </div>
);

export const SpecularAffordanceSystem = () => (
  <div className="w-full h-full bg-metal-950 p-12 flex items-center justify-center relative overflow-hidden">
    <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative group overflow-hidden">
       <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Eye className="text-gold-400" size={32} />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
           </div>
           <div className="absolute bottom-4 flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-gold-500/20" />)}
           </div>
         </div>
       );
       
       export const NotificationChaos = () => (
         <div className="w-full h-full bg-slate-200 p-4 flex flex-col gap-2 opacity-40 overflow-hidden">
           {[1, 2, 3, 4].map(i => (
             <div key={i} className="w-full p-3 bg-white border border-red-200 rounded shadow-sm flex gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1 shrink-0" />
                <div className="space-y-1 w-full">
                   <div className="w-1/2 h-1.5 bg-slate-200 rounded" />
                   <div className="w-full h-1 bg-slate-100 rounded" />
                </div>
             </div>
           ))}
         </div>
       );
       
       export const RefractivePulseSystem = () => (
         <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-gold-500/5 animate-pulse" />
           <motion.div 
             animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
             transition={{ duration: 3, repeat: Infinity }}
             className="w-32 h-32 rounded-full border border-gold-500/20 flex items-center justify-center"
           >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-3xl flex items-center justify-center">
                 <Zap className="text-gold-400" size={24} />
              </div>
           </motion.div>
           <div className="absolute top-4 right-6 text-[8px] font-mono text-gold-500 tracking-[0.4em]">PRIORITY_INTERRUPT_ACTIVE</div>
         </div>
       );
       
       export const TrailChaos = () => (
         <div className="w-full h-full bg-slate-50 p-6 flex items-start gap-2 opacity-40">
           {['Home', 'Products', 'Systems', 'Internal', 'Node_01'].map((t, i) => (
             <div key={t} className="flex items-center gap-2">
                <span className="text-[10px] text-slate-400">{t}</span>
                {i < 4 && <span className="text-[10px] text-slate-300">/</span>}
             </div>
           ))}
         </div>
       );
       
       export const SpatialLandmarkSystem = () => (
         <div className="w-full h-full bg-metal-950 p-8 flex flex-col gap-6 overflow-hidden">
           <div className="flex gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex-1 h-24 rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
                   <div className={`absolute inset-0 bg-gradient-to-t ${i === 2 ? 'from-gold-500/20' : 'from-transparent'} to-transparent`} />
                   <div className="absolute bottom-3 left-4 text-[8px] font-mono text-white/40 uppercase tracking-widest">Stage_0{i}</div>
                </div>
              ))}
           </div>
           <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10" />
              <div className="text-[10px] font-bold text-gold-500 tracking-[0.3em]">LOCATED</div>
              <div className="h-px flex-1 bg-white/10" />
           </div>
         </div>
       );
       
       export const SpreadsheetChaos = () => (
         <div className="w-full h-full bg-white p-4 flex flex-col gap-1 opacity-40 overflow-hidden">
           {[1, 2, 3, 4, 5, 6, 7, 8].map(r => (
             <div key={r} className="flex gap-1 h-4">
                {[1, 2, 3, 4, 5].map(c => (
                  <div key={c} className="flex-1 bg-slate-100 border border-slate-200" />
                ))}
             </div>
           ))}
         </div>
       );
       
       export const HighDensityNodeSystem = () => (
         <div className="w-full h-full bg-metal-950 p-6 grid grid-cols-3 gap-4 overflow-hidden relative">
           {[1, 2, 3, 4, 5, 6].map(i => (
             <div key={i} className="aspect-square rounded-2xl bg-white/5 border border-white/10 p-3 flex flex-col justify-between">
                <div className="flex justify-between">
                   <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-gold-500" />
                   </div>
                   <div className="w-6 h-1 bg-white/10 rounded-full" />
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full" />
             </div>
           ))}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)]" />
         </div>
       );
       
       export const FormLatencyChaos = () => (
         <div className="w-full h-full bg-slate-100 p-8 flex flex-col gap-4 opacity-40 justify-center">
           <div className="w-full h-10 border border-slate-300 rounded bg-white" />
           <div className="w-full h-10 bg-blue-600 rounded flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
           </div>
         </div>
       );
       
       export const HolographicSigSystem = () => (
         <div className="w-full h-full bg-metal-950 p-12 flex flex-col items-center justify-center gap-6 overflow-hidden relative">
           <div className="relative">
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-40 h-24 bg-gold-500/10 border border-gold-500/30 rounded-full blur-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <Fingerprint className="text-gold-400" size={48} />
              </div>
           </div>
           <div className="text-[10px] font-mono text-green-500 uppercase tracking-[0.5em] animate-pulse">Signature_Signed</div>
         </div>
       );
       
       export const MotionJitterChaos = () => (
         <div className="w-full h-full bg-slate-200 p-8 flex items-center justify-center opacity-40 overflow-hidden relative">
           <div className="absolute top-4 left-4 text-[8px] font-mono text-red-500">FRAME_DROP: 42%</div>
           <motion.div 
             animate={{ 
               x: [0, 40, -20, 60, 0],
               y: [0, -10, 30, -40, 0],
               rotate: [0, 90, 180, 270, 360]
             }}
             transition={{ 
               duration: 0.8, 
               repeat: Infinity, 
               ease: "linear",
               times: [0, 0.1, 0.4, 0.7, 1] // Irregular timing to simulate jitter
             }}
             className="w-12 h-12 bg-blue-600 rounded shadow-lg flex items-center justify-center"
           >
              <div className="w-4 h-4 border-2 border-white/50 rounded-full" />
           </motion.div>
           {/* Ghosting effect */}
           <div className="absolute w-12 h-12 border border-blue-400/30 rounded" />
         </div>
       );
       
       export const PhysicsSpatialSystem = () => (
         <div className="w-full h-full bg-metal-950 p-8 flex items-center justify-center overflow-hidden relative">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05),transparent)]" />
           
           <motion.div 
             animate={{ 
               x: [0, 30, 0, -30, 0],
               y: [0, -20, 20, -10, 0],
               scale: [1, 1.1, 0.9, 1.05, 1],
               borderRadius: ["20%", "40%", "30%", "50%", "20%"]
             }}
             transition={{ 
               duration: 4, 
               repeat: Infinity, 
               ease: [0.22, 1, 0.36, 1] // Premium smooth cubic bezier
             }}
             className="w-24 h-24 bg-white/5 border border-white/10 flex items-center justify-center relative group backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.1)]"
           >
              <div className="absolute inset-0 bg-gold-500/5 group-hover:bg-gold-500/10 transition-colors" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Layers className="text-gold-400" size={32} />
              </motion.div>
              
              {/* High-fidelity orbital rings */}
              <motion.div 
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-10px] border border-white/5 rounded-full"
              />
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.4, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-20px] border border-white/5 rounded-full"
              />
           </motion.div>
           
           <div className="absolute bottom-4 text-[8px] font-mono text-green-500 uppercase tracking-[0.4em]">Engine: Spatial_Core_120Hz</div>
         </div>
       );       