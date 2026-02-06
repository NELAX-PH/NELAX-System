'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { MetallicText } from '@/components/MetallicText';
import { GlassPanel } from '@/components/GlassPanel';
import { ArrowRight, Info, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';
import { prototypes, Prototype } from '@/data/prototypes';
import { 
  ResearchOnboarding, 
  ResearchPerformance, 
  ResearchDashboard, 
  ResearchSecurity, 
  ResearchAnalytics,
  ResearchHaptics,
  ResearchState
} from '@/components/PrototypeVisuals';
import Link from 'next/link';
import { useState } from 'react';

import { PrototypeDetails } from '@/components/PrototypeDetails';
import { vibrate } from '@/lib/utils';

export default function LaboratoryPage() {
  const [isActive, setIsActive] = useState(false);
  const [selectedProto, setSelectedProto] = useState<Prototype | null>(null);

  const toggleGlobalBenchmark = () => {
    vibrate(20);
    setIsActive(!isActive);
    window.dispatchEvent(new CustomEvent('toggle-benchmark'));
  };

  const handleDetailsClick = (e: React.MouseEvent, proto: Prototype) => {
    e.preventDefault();
    e.stopPropagation();
    vibrate(10);
    setSelectedProto(proto);
  };

  const renderVisual = (slug: string) => {
    switch(slug) {
      case 'omni-interface': return <ResearchOnboarding />;
      case 'performance-core': return <ResearchPerformance />;
      case 'predictive-dashboard': return <ResearchDashboard />;
      case 'encrypted-vault': return <ResearchSecurity />;
      case 'harmonic-analytics': return <ResearchAnalytics />;
      case 'haptic-physics': return <ResearchHaptics />;
      case 'state-protocol': return <ResearchState />;
      default: return null;
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center bg-metal-900 relative">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="w-full z-10">
        <Navigation />

        <Section className="pt-48 pb-12 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The <MetallicText variant="silver">Laboratory</MetallicText>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Research and development benchmarks for the next generation of digital systems.
            </p>
            
            <div className="pt-8">
               <button 
                 onClick={toggleGlobalBenchmark}
                 className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500 font-bold uppercase tracking-[0.2em] text-[10px] ${
                   isActive ? 'bg-gold-500 border-gold-500 text-black' : 'bg-white/5 border-white/10 text-gold-400 hover:border-gold-500/50'
                 }`}
               >
                 <Gauge size={14} className={isActive ? 'animate-spin-slow' : ''} />
                 {isActive ? 'System Benchmarking Active' : 'Initialize Performance Benchmark'}
               </button>
            </div>
          </motion.div>
        </Section>

        {/* Transparency Note */}
        <Section className="pb-12">
           <GlassPanel className="border-gold-500/20 bg-gold-500/5 p-6 flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                 <Info size={24} />
              </div>
              <div className="text-sm text-slate-300 leading-relaxed">
                <span className="text-gold-400 font-bold uppercase tracking-widest mr-2">Transparency Protocol:</span>
                We are currently in a launch phase. The systems below are not previous client projects; they are internal **Research Prototypes** developed to stress-test our &quot;Glass-Metal&quot; architecture against industry standards. They serve as a baseline for what we will deploy for our founding clients.
              </div>
           </GlassPanel>
        </Section>

        <Section className="pb-32">
          <div className="grid grid-cols-1 gap-12">
            {prototypes.map((proto, i) => (
              <Link key={proto.slug} href={`/laboratory/${proto.slug}`}>
                <GlassPanel className="group border-white/5 p-0 overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-0 items-stretch min-h-[400px]">
                    {/* Visual Research Block */}
                    <div className="w-full md:w-2/5 relative border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
                       <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r" />
                       <div className="h-full w-full transition-all duration-700">
                          {renderVisual(proto.slug)}
                       </div>
                       
                       {/* Floating Metric Badge */}
                       <div 
                         onClick={(e) => handleDetailsClick(e, proto)}
                         className="absolute top-6 left-6 z-20 cursor-pointer hover:scale-105 transition-transform"
                       >
                          <div className="px-3 py-2 rounded bg-black/60 backdrop-blur-md border border-white/10 group-hover:border-gold-500/50 transition-colors">
                             <div className="flex items-end gap-2 mb-1">
                                <div className="text-2xl font-bold text-white leading-none">{proto.metric}</div>
                                <div className="text-[10px] text-slate-500 font-medium pb-0.5 line-through decoration-red-500/50">{proto.legacyMetric}</div>
                             </div>
                             <div className="text-[8px] uppercase tracking-widest text-gold-400 font-bold flex items-center gap-1">
                               {proto.metricLabel} <Info size={8} />
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-8 md:p-12 space-y-6 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
                        <span className="text-gold-500/80 font-bold">{proto.type}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-500" />
                        <span>Research Phase 0{i+1}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white transition-colors tracking-tighter">
                        {proto.title}
                      </h3>
                      
                      <p className="text-slate-400 leading-relaxed text-lg line-clamp-3">
                        {proto.summary}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {proto.tags.map(tag => (
                          <span key={tag} className="px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] text-slate-500 uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-6 flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-[0.3em] cursor-pointer transition-all">
                        View Laboratory Data <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </Link>
            ))}
          </div>
        </Section>
      </div>

      <Footer />
      <PrototypeDetails 
        isOpen={!!selectedProto} 
        onClose={() => setSelectedProto(null)} 
        proto={selectedProto} 
      />
    </main>
  );
}