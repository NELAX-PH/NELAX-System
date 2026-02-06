'use client';

import { useState, useRef } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterToggleProps {
  beforeNode: React.ReactNode;
  afterNode: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  beforeMetric?: string;
  afterMetric?: string;
}

export function BeforeAfterToggle({ 
  beforeNode, 
  afterNode, 
  beforeLabel = "Legacy Friction", 
  afterLabel = "The System",
  beforeMetric,
  afterMetric
}: BeforeAfterToggleProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 bg-black group select-none cursor-ew-resize shadow-2xl"
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={onMouseMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
      onTouchMove={onTouchMove}
    >
      {/* Forensic Overlays */}
      <div className="absolute inset-0 z-40 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-white/20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-white/20" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-white/20" />
      </div>

      {/* Coordinate HUD */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-40 pointer-events-none flex gap-8 items-center">
         <div className="text-[8px] font-mono text-white/30 uppercase tracking-[0.3em]">X-AXIS: {sliderPosition.toFixed(2)}%</div>
         <div className="w-12 h-px bg-white/10" />
         <div className="text-[8px] font-mono text-white/30 uppercase tracking-[0.3em]">SCAN_MODE: FORENSIC</div>
      </div>

      {/* After (The Foundation) */}
      <div className="absolute inset-0 bg-metal-950">
        <div className="absolute top-6 right-8 z-20 flex items-center gap-3">
           {afterMetric && (
             <div className="px-3 py-1 rounded bg-black/60 border border-gold-500/30 backdrop-blur-md">
                <span className="text-xl font-bold text-white leading-none">{afterMetric}</span>
             </div>
           )}
           <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-md h-full">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">{afterLabel}</span>
           </div>
        </div>
        {afterNode}
      </div>

      {/* Before (The Overlay) */}
      <div 
        className="absolute inset-0 z-10 border-r border-white/20 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div 
          className="h-full relative bg-slate-900 grayscale brightness-75"
          style={{ width: `${100 * (100 / sliderPosition)}%` }}
        >
          <div className="absolute top-6 left-8 z-20 flex items-center gap-3">
             <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md h-full">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">{beforeLabel}</span>
             </div>
             {beforeMetric && (
               <div className="px-3 py-1 rounded bg-black/60 border border-white/10 backdrop-blur-md">
                  <span className="text-xl font-bold text-slate-300 leading-none">{beforeMetric}</span>
               </div>
             )}
          </div>
          {beforeNode}
          
          {/* Scanning Line on the edge of the before side */}
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/10 blur-sm" />
        </div>
      </div>



      {/* Slider Line */}

      <div 

        className="absolute top-0 bottom-0 z-30 w-px bg-white/50"

        style={{ left: `${sliderPosition}%` }}

      >

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/50 bg-black/80 backdrop-blur-xl flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform">

          <div className="flex flex-col items-center gap-0.5">

            <MoveHorizontal size={18} />

            <div className="text-[6px] font-mono opacity-50 uppercase">Slide</div>

          </div>

        </div>

      </div>



      {/* Technical Metadata Corner */}

      <div className="absolute bottom-4 right-6 z-40 pointer-events-none text-right">

         <div className="text-[8px] font-mono text-white/20 uppercase">Internal_Research_Node_049</div>

         <div className="text-[8px] font-mono text-white/20 uppercase tracking-tighter">LAT: 14.5995 N / LONG: 120.9842 E</div>

      </div>

    </div>

  );

}
