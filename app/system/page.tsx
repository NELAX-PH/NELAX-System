'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import Link from 'next/link';
import { MetallicText } from '@/components/MetallicText';
import { GlassPanel } from '@/components/GlassPanel';
import { GlassButton } from '@/components/GlassButton';
import { CurrencyPrice } from '@/components/CurrencyPrice';
import { ArchitectureGrid } from '@/components/ArchitectureGrid';
import { MagneticButton } from '@/components/MagneticButton';
import { CheckCircle2, Hexagon, Code2, Globe2, ShieldCheck, Rocket, Database, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

function LayersIcon() {
  return (
    <div className="relative w-32 h-32">
      <div className="absolute top-0 left-0 w-20 h-20 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm z-10" />
      <div className="absolute top-6 left-6 w-20 h-20 bg-white/10 border border-white/20 rounded-lg backdrop-blur-md z-20 shadow-xl" />
      <div className="absolute top-12 left-12 w-20 h-20 bg-white/20 border border-white/30 rounded-lg backdrop-blur-xl z-30 shadow-2xl flex items-center justify-center">
        <Code2 className="text-white" />
      </div>
    </div>
  )
}

export default function SystemPage() {
  return (
    <main className="min-h-screen bg-metal-900 relative">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-black to-black" />
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="w-full flex flex-col items-center">
        <div className="w-full z-10">
          <Navigation />

        <Section className="pt-48 pb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter"
          >
            The <MetallicText variant="gold">System</MetallicText>
          </motion.h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Our proprietary architecture for building high-conversion digital assets.
          </p>
        </Section>

        <Section className="pb-32 space-y-32">
          {/* Law 1: Divine Proportions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <MagneticButton>
              <GlassPanel className="aspect-square flex items-center justify-center p-0 relative overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[url('/golden-spiral.svg')] opacity-10 bg-contain bg-center bg-no-repeat invert" />
                <div className="relative z-10 text-center">
                  <Hexagon size={64} className="text-gold-400 mx-auto mb-6" />
                  <span className="text-7xl font-bold text-white">1.618</span>
                </div>
              </GlassPanel>
            </MagneticButton>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">Divine Proportions</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                We don&apos;t guess spacing. Every margin, padding, and font-size in our system is calculated using the Golden Ratio (φ). This creates a subconscious sense of &quot;rightness&quot; and trust in the user&apos;s brain.
              </p>
              <ul className="space-y-3">
                {['Harmonic Grids', 'Modular Typography', 'Rhythmic Vertical Spacing'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-slate-300">
                     <CheckCircle2 className="text-gold-400" size={18} /> {item}
                   </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Law 2: Glassmorphism */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl font-bold text-white">Glass Physics Engine</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Flat design is dead. We use multi-layered optical refractions (background blur, saturation boost, border highlights) to create a sense of depth and hierarchy. Users know exactly where they are in the Z-space.
              </p>
              <ul className="space-y-3">
                {['Backdrop Blur Compositing', 'Specular Lighting', 'Physical Depth Stacking'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-slate-300">
                     <CheckCircle2 className="text-gold-400" size={18} /> {item}
                   </li>
                ))}
              </ul>
            </div>
            <MagneticButton>
              <GlassPanel className="aspect-square flex items-center justify-center relative overflow-hidden order-1 md:order-2 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
                <div className="absolute inset-10 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl flex items-center justify-center">
                  <LayersIcon />
                </div>
              </GlassPanel>
            </MagneticButton>
          </div>

          {/* Law 3: Conversion Funnel Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <MagneticButton>
              <GlassPanel className="aspect-square flex items-center justify-center relative overflow-hidden group p-12 cursor-pointer">
                <div className="w-full h-full rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden">
                  <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gold-500/20 backdrop-blur-md border-t border-gold-500/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gold-400 animate-pulse shadow-[0_0_30px_rgba(212,175,55,0.5)]" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="w-3/4 h-4 bg-white/10 rounded" />
                    <div className="w-full h-32 bg-white/5 rounded border border-white/5" />
                  </div>
                </div>
              </GlassPanel>
            </MagneticButton>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">The Thumb-Zone Protocol</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Most websites are designed for mice, but used by thumbs. We architect our interfaces around the &quot;Natural Thumb Zone,&quot; placing critical conversion actions within a 30% reach radius.
              </p>
              <ul className="space-y-3">
                {["Fitt's Law Optimization", "Bottom-Weighted CTAs", "Haptic-First Feedback"].map(item => (
                   <li key={item} className="flex items-center gap-3 text-slate-300">
                     <CheckCircle2 className="text-gold-400" size={18} /> {item}
                   </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Law 4: Forensic Infrastructure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-4xl font-bold text-white">Metal-Hard Performance</h2>
              <p className="text-lg text-slate-400 leading-relaxed">
                Beauty is useless if it&apos;s slow. Our &quot;Metal&quot; infrastructure uses Next.js Server Components and edge-caching to deliver sub-800ms interactive times. Zero-latency is a business requirement, not a feature.
              </p>
              <ul className="space-y-3">
                {['100/100 Lighthouse Scores', 'Edge-Runtime Deployment', 'Predictive Resource Prefetching'].map(item => (
                   <li key={item} className="flex items-center gap-3 text-slate-300">
                     <CheckCircle2 className="text-gold-400" size={18} /> {item}
                   </li>
                ))}
              </ul>
            </div>
            <MagneticButton>
              <GlassPanel className="aspect-square flex flex-col items-center justify-center gap-8 order-1 md:order-2 cursor-pointer">
                <div className="flex gap-4">
                  {[100, 100, 100, 100].map((score, i) => (
                    <div key={i} className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 rounded-full border-4 border-green-500 flex items-center justify-center text-white font-bold text-xs">
                        {score}
                      </div>
                      <div className="w-8 h-1 bg-white/10 rounded-full" />
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">0.8s</div>
                  <div className="text-xs tracking-widest uppercase text-slate-500">Interactive Time</div>
                </div>
              </GlassPanel>
            </MagneticButton>
          </div>
        </Section>

        {/* The Digital Nervous System (Architecture Grid) */}
        <Section className="py-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 italic">The Digital <MetallicText variant="silver">Nervous System</MetallicText></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Your business isn&apos;t a website; it&apos;s a living organism. Our system integrates directly into your core operations.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                   <ShieldCheck className="text-gold-400" /> Hardened Core
                 </h3>
                 <p className="text-slate-400 leading-relaxed">
                   Stateless HMAC signatures and edge-security ensure your data remains your own. No passwords, no session hijacking, just cryptographic proof.
                 </p>
              </div>
              <div className="space-y-4">
                 <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                   <Database className="text-gold-400" /> Live Data Streams
                 </h3>
                 <p className="text-slate-400 leading-relaxed">
                   Real-time synchronization between your CRM, inventory, and the interface. The system reflects reality instantly, not eventually.
                 </p>
              </div>
              <GlassButton variant="secondary">View Security Whitepaper</GlassButton>
            </div>
            <div className="flex-1 w-full">
              <ArchitectureGrid />
            </div>
          </div>
        </Section>

        {/* Operational Forensic - The Business System */}
        <Section className="py-32 bg-gradient-to-b from-black/20 to-transparent">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              The <MetallicText variant="gold">Operational</MetallicText> Leak
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed">
              Most businesses lose 30% of their digital efficiency through &quot;Information Silos&quot;—data that exists but isn&apos;t actionable. Our system bridges the gap between your core operations and your user interface.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
               <GlassPanel className="text-left space-y-4 border-red-500/20">
                  <div className="text-red-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <AlertTriangle size={14} /> The Sinking Ship
                  </div>
                  <h3 className="text-xl font-bold text-white">Fragmented Tools</h3>
                  <p className="text-sm text-slate-400">Manual CSV exports, delayed client updates, and non-secure email communication. This is where your profit dies.</p>
               </GlassPanel>
               <GlassPanel className="text-left space-y-4 border-green-500/20">
                  <div className="text-green-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                    <CheckCircle2 size={14} /> The Systemic Solution
                  </div>
                  <h3 className="text-xl font-bold text-white">Unified Glass Portal</h3>
                  <p className="text-sm text-slate-400">A centralized, HMAC-secured interface where CRM, Billing, and Project Delivery exist in one harmonic environment.</p>
               </GlassPanel>
            </div>
          </div>
        </Section>

        {/* Process Timeline */}
        <Section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Execution <MetallicText variant="silver">Protocol</MetallicText></h2>
            <p className="text-slate-400">A rigorous 4-week sprint to system deployment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[ 
              { week: '01', title: 'Forensic Audit', icon: ShieldCheck, desc: 'We tear down your current metrics and identify the conversion leaks.' },
              { week: '02', title: 'Wireframe Core', icon: Code2, desc: 'Architecting the user journey using Hick\'s Law to remove friction.' },
              { week: '03', title: 'Glass UI', icon: Globe2, desc: 'Applying the visual physics engine and Divine Proportions.' },
              { week: '04', title: 'Deployment', icon: Rocket, desc: 'Launch, testing, and handover of the "Digital Nervous System".' },
            ].map((step, i) => (
              <GlassPanel key={i} className="relative overflow-hidden group hover:bg-white/5 transition-colors">
                <div className="absolute -right-4 -top-4 text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors select-none">
                  {step.week}
                </div>
                <step.icon className="w-10 h-10 text-gold-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </GlassPanel>
            ))}
          </div>
        </Section>

        {/* Investment / Pricing */}
        <Section className="py-24 pb-48">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Investment <MetallicText variant="gold">Tiers</MetallicText></h2>
            <p className="text-slate-400">Transparent pricing optimized for your region.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Tier 1 */}
            <GlassPanel className="flex flex-col border-white/5">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Performance Audit</h3>
                <p className="text-sm text-slate-400">For businesses with slow sites or low conversions.</p>
              </div>
              <div className="text-4xl font-bold text-white mb-8">
                <CurrencyPrice phpPrice={15000} usdPrice={300} />
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> Next.js Core Web Vitals Report</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> PWA Readiness Check</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> 1-Hour Strategy Call</li>
              </ul>
              <Link href="/demo">
                <GlassButton variant="secondary" className="w-full text-sm">Request Audit</GlassButton>
              </Link>
            </GlassPanel>

            {/* Tier 2 */}
            <GlassPanel className="flex flex-col border-white/5">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">The "Glass-Metal" Landing Page</h3>
                <p className="text-sm text-slate-400">For brands that need to convert on the first impression.</p>
              </div>
              <div className="text-4xl font-bold text-white mb-8">
                <CurrencyPrice phpPrice={45000} usdPrice={900} />
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> High-Performance Next.js Site</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> Signature UI with Framer Motion</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> PWA Lite: Home Screen Installable</li>
              </ul>
              <Link href="/initiate">
                <GlassButton variant="secondary" className="w-full text-sm">Initiate Project</GlassButton>
              </Link>
            </GlassPanel>

            {/* Tier 3 - Featured */}
            <GlassPanel className="flex flex-col border-gold-500/30 bg-gradient-to-b from-gold-900/10 to-transparent relative lg:transform lg:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
              <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-gold-400 border border-gold-500/30 px-2 py-1 rounded-full bg-gold-500/10">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">The Modular Web App</h3>
                <p className="text-sm text-slate-400">For businesses moving operations to the cloud.</p>
              </div>
              <div className="text-3xl font-bold text-white mb-8">
                <div className="flex flex-col">
                  <CurrencyPrice phpPrice={85000} usdPrice={1700} />
                  <span className="text-lg text-slate-500">to ₱120k ($2.4k)</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> Full Next.js PWA with Push Support</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> Custom Admin Dashboard</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> Supabase or MongoDB Integration</li>
              </ul>
              <Link href="/initiate">
                <GlassButton className="w-full text-sm bg-gold-500 hover:bg-gold-400 text-black border-none font-bold">Initialize App</GlassButton>
              </Link>
            </GlassPanel>

            {/* Tier 4 */}
            <GlassPanel className="flex flex-col border-white/5">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise PWA Protocol</h3>
                <p className="text-sm text-slate-400">A proprietary ecosystem for high-volume businesses.</p>
              </div>
              <div className="text-4xl font-bold text-white mb-8">
                <CurrencyPrice phpPrice={150000} usdPrice={3000} suffix="+" />
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> Full System Architecture</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> GCash/Maya & custom API integrations</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle2 size={16} className="text-gold-400 shrink-0" /> 60 Days Hyper-Care Support</li>
              </ul>
              <Link href="/initiate">
                <GlassButton variant="secondary" className="w-full text-sm">Request Protocol</GlassButton>
              </Link>
            </GlassPanel>
          </div>
        </Section>
      </div>
    </div>

      <Footer />
    </main>
  );
}