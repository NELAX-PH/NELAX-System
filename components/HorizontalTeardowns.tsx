'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TeardownCard, Teardown } from './TeardownCard';
import { MetallicText } from './MetallicText';

interface HorizontalTeardownsProps {
  title?: string;
  subtitle?: string;
  teardowns: Teardown[];
}

export function HorizontalTeardowns({ title, subtitle, teardowns }: HorizontalTeardownsProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Dynamic active index calculation to only animate the card in view (saves GPU)
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const index = Math.min(
        Math.floor(latest * teardowns.length * 1.05),
        teardowns.length - 1
      );
      if (index !== activeIndex) setActiveIndex(Math.max(0, index));
    });
    return () => unsubscribe();
  }, [scrollYProgress, teardowns.length, activeIndex]);

  // Calculate dynamic height: 300vh per card for ultra-smooth, slow forensic scrolling
  const dynamicHeight = `${teardowns.length * 300}vh`;

  // Calculate horizontal translation. 
  // -95% ensures the final card reaches the edge properly.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

  return (
    <section 
      ref={targetRef} 
      style={{ height: dynamicHeight }} 
      className="relative bg-metal-950/50 w-full min-h-screen"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden border-y border-white/5">
        
        {/* Header Area */}
        <div className="absolute top-12 md:top-20 left-0 right-0 z-20 px-golden-1 max-w-7xl mx-auto w-full">
          {title && (
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tighter italic">
              {title.split(' ').map((word, i) => (
                word.toLowerCase() === 'teardowns' || word.toLowerCase() === 'audit' ? 
                <MetallicText key={i} variant="gold">{word} </MetallicText> : word + ' '
              ))}
            </h2>
          )}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            {subtitle && <p className="text-slate-400 max-w-2xl text-lg">{subtitle}</p>}
            
            {/* Progress Indicator */}
            <div className="flex items-center gap-4">
               <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    style={{ scaleX: scrollYProgress }} 
                    className="h-full bg-gold-500 origin-left shadow-[0_0_10px_rgba(212,175,55,0.5)]" 
                  />
               </div>
               <span className="text-[10px] font-mono text-gold-500 font-bold uppercase tracking-widest">Analysis_Progress</span>
            </div>
          </div>
        </div>

        {/* Horizontal Container */}
        <div className="flex items-center pt-24 md:pt-32">
          <motion.div 
            style={{ x, translateZ: 0 }} 
            className="flex gap-6 md:gap-12 items-stretch px-[5vw] md:px-[10vw] will-change-transform"
          >
            {teardowns.map((proto, i) => (
              <div key={i} className="w-[90vw] md:w-[75vw] lg:w-[70vw] shrink-0">
                <TeardownCard 
                  {...proto} 
                  isActive={i === activeIndex} 
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Background Decorative Index */}
        <div className="absolute bottom-10 left-10 text-[15vh] font-black text-white/[0.02] select-none pointer-events-none italic uppercase">
          Forensic_Analysis
        </div>
        
        {/* Visual indicator of "more" */}
        <div className="absolute bottom-12 right-12 flex items-center gap-4 group">
           <div className="text-[10px] font-bold text-gold-500/50 uppercase tracking-[0.4em] group-hover:text-gold-400 transition-colors">Scroll to Inspect</div>
           <div className="w-12 h-px bg-gold-500/20 group-hover:w-20 transition-all duration-500" />
        </div>
      </div>
    </section>
  );
}
