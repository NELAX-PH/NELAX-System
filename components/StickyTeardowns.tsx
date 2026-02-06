'use client';

import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TeardownCard, Teardown } from './TeardownCard';
import { MetallicText } from './MetallicText';
import { useLenis } from 'lenis/react';

interface StickyTeardownsProps {
  title?: string;
  subtitle?: string;
  teardowns: Teardown[];
}

export function StickyTeardowns({ title, subtitle, teardowns }: StickyTeardownsProps) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for down, -1 for up

  // Synchronize index with Lenis scroll position
  useLenis(({ scroll }) => {
    if (!targetRef.current) return;
    
    const rect = targetRef.current.getBoundingClientRect();
    const sectionHeight = targetRef.current.offsetHeight;
    
    const sectionTop = scroll + rect.top;
    const sectionProgress = (scroll - sectionTop) / (sectionHeight - window.innerHeight);
    
    if (sectionProgress >= 0 && sectionProgress <= 1) {
      const cardCount = teardowns.length;
      const newIndex = Math.min(
        Math.floor(sectionProgress * cardCount),
        cardCount - 1
      );
      
      if (newIndex !== index) {
        setDirection(newIndex > index ? 1 : -1);
        setIndex(newIndex);
      }
    }
  });

  // Set to 100vh per card as requested
  const dynamicHeight = `${teardowns.length * 100}vh`;

  const variants = {
    initial: (d: number) => ({
      opacity: 0,
      x: d > 0 ? 100 : -100,
      filter: 'blur(10px)'
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: 'blur(0px)'
    },
    exit: (d: number) => ({
      opacity: 0,
      x: d > 0 ? -100 : 100,
      filter: 'blur(10px)'
    })
  };

  return (
    <section ref={targetRef} style={{ height: dynamicHeight }} className="relative w-full">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden bg-black/40 backdrop-blur-3xl border-y border-white/5">
        
        <div className="mb-12 px-golden-1 text-center md:text-left max-w-7xl mx-auto w-full z-20">
          {title && (
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter italic">
              {title.split(' ').map((word, i) => (
                word.toLowerCase() === 'teardowns' || word.toLowerCase() === 'audit' ? 
                <MetallicText key={i} variant="gold">{word} </MetallicText> : word + ' '
              ))}
            </h2>
          )}
          {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
          
          {/* Progress Indicator */}
          <div className="flex gap-2 mt-6">
            {teardowns.map((_, i) => (
              <div 
                key={i} 
                className="h-1 flex-1 max-w-[100px] bg-white/10 rounded-full overflow-hidden"
              >
                <motion.div 
                  initial={false}
                  animate={{ 
                    width: i < index ? "100%" : i === index ? "100%" : "0%",
                    backgroundColor: i === index ? "#d4af37" : "#475569"
                  }}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full px-golden-1 h-[70vh] lg:h-[60vh] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full absolute"
            >
              <TeardownCard {...teardowns[index]} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Background Decorative Index */}
        <div className="absolute bottom-10 right-10 text-[20vh] font-black text-white/[0.02] select-none pointer-events-none italic">
          0{index + 1}
        </div>
      </div>
    </section>
  );
}