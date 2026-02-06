'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { GlassPanel } from './GlassPanel';
import { X, Network } from 'lucide-react';
import { vibrate } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { Prototype } from '@/data/prototypes';

interface PrototypeDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  proto: Prototype | null;
}

export function PrototypeDetails({ isOpen, onClose, proto }: PrototypeDetailsProps) {
  const [nodeId, setNodeId] = useState('');

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setNodeId(Math.random().toString(36).substring(7).toUpperCase());
      });
    }
  }, [isOpen]);

  if (!isOpen || !proto) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-lg"
        >
          <GlassPanel className="border-gold-500/30 shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-[10px] text-gold-500 font-bold uppercase tracking-widest mb-2">Technical Schematic</div>
                <h3 className="text-2xl font-bold text-white">{proto.title}</h3>
              </div>
              <button 
                onClick={() => { vibrate(5); onClose(); }}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>

            <div className="space-y-6">
               <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/10 space-y-2">
                     <div className="text-[10px] text-slate-500 uppercase tracking-widest">Legacy Benchmark</div>
                     <div className="text-xl font-bold text-slate-400">{proto.legacyMetric}</div>
                     <div className="text-[8px] text-slate-600 uppercase tracking-tighter">{proto.legacyMetricLabel}</div>
                  </div>
                  <div className="p-4 rounded-lg bg-gold-500/5 border border-gold-500/20 space-y-2">
                     <div className="text-[10px] text-gold-500 uppercase tracking-widest">Laboratory Result</div>
                     <div className="text-xl font-bold text-white">{proto.metric}</div>
                     <div className="text-[8px] text-gold-600 uppercase tracking-tighter">{proto.metricLabel}</div>
                  </div>
               </div>

               <div className="space-y-2">
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest">Architecture Stack</div>
                  <div className="flex flex-wrap gap-2">
                     {proto.tags.map((tag: string) => (
                        <span key={tag} className="px-2 py-1 rounded bg-black/40 border border-white/10 text-[10px] font-mono text-gold-400">
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>
               
               <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-mono">
                     <Network size={12} />
                     <span>NODE_ID: {nodeId}</span>
                  </div>
               </div>
            </div>
          </GlassPanel>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
