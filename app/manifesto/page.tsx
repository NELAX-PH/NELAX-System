'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { MetallicText } from '@/components/MetallicText';
import { GlassPanel } from '@/components/GlassPanel';
import { SmoothScroll } from '@/components/SmoothScroll';
import { motion } from 'framer-motion';
import { Shield, Eye, Zap, Layers, Box, Cpu, Network, Sparkles } from 'lucide-react';

export default function ManifestoPage() {
  const principles = [
    {
      icon: Eye,
      title: "Visual Physics",
      text: "Interfaces should behave like physical matter. Depth, light, and refraction aren't 'decorations'—they are cognitive cues that guide the human eye through spatial depth."
    },
    {
      icon: Shield,
      title: "Zero Friction",
      text: "Every click is a tax on the user's focus. We aim for zero-friction architectures where the distance between intent and action is mathematically minimized."
    },
    {
      icon: Zap,
      title: "Speed as Trust",
      text: "A slow system is a broken promise. Performance is the foundation of digital authority. If an interaction doesn't resolve in under 100ms, the illusion of reality breaks."
    },
    {
      icon: Layers,
      title: "Divine Symmetry",
      text: "We use the Golden Ratio (φ) to architect every grid. Mathematical harmony creates a subconscious sense of reliability, prestige, and trust in the digital void."
    },
    {
      icon: Box,
      title: "Deterministic Design",
      text: "We reject the 'guess-and-check' methodology. Every shadow, margin, and animation is a calculated response to the Law of UI Physics. Design is a hard science."
    },
    {
      icon: Cpu,
      title: "Metal Hardened",
      text: "Beauty is fragile without strength. Our systems are built on 'Metal' stacks—Server Components and edge-caching—to ensure the interface remains unbreakable under load."
    }
  ];

  return (
    <SmoothScroll>
      <main className="min-h-screen flex flex-col items-center bg-metal-900 relative">
        <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-black to-black" />
        <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

        <div className="w-full z-10">
          <Navigation />

          <Section className="pt-48 pb-24 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-9xl font-bold text-white tracking-tighter italic">
                The <MetallicText variant="gold">Manifesto</MetallicText>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                We do not build websites. We install digital nervous systems. <br />
                This is our protocol for the next decade of the web.
              </p>
            </motion.div>
          </Section>

          <Section className="pb-32">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((p, i) => (
                <GlassPanel key={i} className="p-10 group hover:bg-white/5 transition-all duration-500 border-white/5">
                  <p.icon className="w-10 h-10 text-gold-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
                  <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{p.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {p.text}
                  </p>
                </GlassPanel>
              ))}
            </div>
          </Section>

          {/* New Philosophy Section */}
          <Section className="pb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                  Beyond the <br />
                  <MetallicText variant="silver">Interface.</MetallicText>
                </h2>
                <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                  <p>
                    Most 'agencies' focus on the surface. They build brochures that look good in a screenshot but fail in the user's hand. We believe the interface is merely the skin of a deeper, living organism.
                  </p>
                  <div className="flex gap-4 items-start">
                    <Network className="text-gold-500 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">Systemic Interconnectivity</h4>
                      <p className="text-sm">A website should not be a silo. It should be a node connected to your billing, your CRM, and your operational heart.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Sparkles className="text-gold-500 shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="text-white font-bold mb-1">The Human Hardware</h4>
                      <p className="text-sm">The human brain hasn't changed in 50,000 years. We design for the biology of sight and the psychology of trust.</p>
                    </div>
                  </div>
                </div>
              </div>
              <GlassPanel className="aspect-video flex items-center justify-center relative overflow-hidden p-0 border-white/10">
                 <div className="absolute inset-0 bg-metal-950/50" />
                 <div className="z-10 text-center space-y-4">
                    <div className="text-6xl font-bold text-white tracking-tighter italic">1.618</div>
                    <div className="text-xs uppercase tracking-[0.5em] text-gold-400">The Universal Constant</div>
                 </div>
                 <div className="absolute inset-0 bg-[url('/golden-spiral.svg')] opacity-10 bg-center bg-no-repeat invert" />
              </GlassPanel>
            </div>
          </Section>

          <Section className="pb-48">
            <GlassPanel className="p-12 md:p-24 text-center border-gold-500/20 bg-gradient-to-br from-gold-900/5 to-transparent relative overflow-hidden">
               <div className="absolute top-0 right-0 p-32 bg-gold-500/5 rounded-full blur-[100px] -mr-16 -mt-16" />
               <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 tracking-tighter relative z-10">
                 &quot;The <MetallicText variant="silver">System</MetallicText> is the only true competitive advantage.&quot;
               </h2>
               <p className="text-slate-400 max-w-3xl mx-auto text-xl italic font-light relative z-10">
                 Design trends fade. Frameworks change. But the laws of human psychology and mathematical proportion are eternal. We build on the constants, not the variables. When everyone else is building for today, we architect for the logic of tomorrow.
               </p>
               <div className="mt-12 flex justify-center gap-2 relative z-10">
                 {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-gold-500/50" />)}
               </div>
            </GlassPanel>
          </Section>
        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
