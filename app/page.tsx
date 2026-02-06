'use client';

import { GlassPanel } from '@/components/GlassPanel';
import { MetallicText } from '@/components/MetallicText';
import { GlassButton } from '@/components/GlassButton';
import { Section } from '@/components/Section';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';
import { ArchitectureGrid } from '@/components/ArchitectureGrid';
import { CurrencyPrice } from '@/components/CurrencyPrice';
import { HorizontalTeardowns } from '@/components/HorizontalTeardowns';
import { MagneticButton } from '@/components/MagneticButton';
import { ArrowRight, Layers, Box, CheckCircle, CheckCircle2, Cpu, Zap } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import Link from 'next/link';
import { useMousePosition } from '@/lib/hooks/use-mouse-position';

export default function Home() {
  const { scrollY } = useScroll();
  const { x: mouseX, y: mouseY } = useMousePosition();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  // Smooth mouse follow
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(0, springConfig);
  const mouseYSpring = useSpring(0, springConfig);

  useEffect(() => {
    mouseXSpring.set(mouseX);
    mouseYSpring.set(mouseY);
  }, [mouseX, mouseY, mouseXSpring, mouseYSpring]);

  return (
    <main className="min-h-screen bg-metal-900 relative">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Interactive Hover Glow - Centered logic */}
        <motion.div 
          className="absolute w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px] opacity-50"
          style={{
            x: mouseXSpring,
            y: mouseYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />

        <motion.div 
          style={{ y: y1, x: -50 }} 
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] opacity-40 will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
        >
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(23,37,84,0.4)_0%,transparent_60%)]" />
        </motion.div>

        <motion.div 
          style={{ y: y2, x: 50 }} 
          className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] opacity-30 will-change-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        >
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)]" />
        </motion.div>

        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="w-full z-10 relative">
        
        {/* Navigation - Hick's Law (Minimal) */}
        <Navigation />

        {/* Hero Section */}
        <Section className="min-h-screen flex flex-col justify-center items-center text-center pt-32 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-golden-1 max-w-5xl mx-auto"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white leading-[0.9]">
              The <MetallicText variant="gold">System</MetallicText> <br />
              Is The Product
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
              We architect the digital nervous system that powers your business. A centralized, glass-metal portal for you and your clients.
            </p>

            <div className="pt-golden-2 flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link href="/initiate" className="w-full md:w-auto">
                <GlassButton className="min-w-[200px] text-lg h-14 w-full">
                  Initialize System <ArrowRight className="w-5 h-5" />
                </GlassButton>
              </Link>
              <Link href="/demo" className="w-full md:w-auto">
                <GlassButton 
                  variant="secondary" 
                  glow={false} 
                  className="min-w-[200px] text-lg h-14 w-full"
                >
                  Request Demo
                </GlassButton>
              </Link>
            </div>
          </motion.div>
        </Section>

        {/* The System Anatomy - Replaces Architecture Grid */}
        <Section className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="text-center mb-24 relative z-10">
            <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tighter italic">System <MetallicText variant="gold">Anatomy</MetallicText></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">A forensic breakdown of the digital nervous system layers.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Pillar */}
            <div className="lg:col-span-4 space-y-8">
              <MagneticButton>
                <GlassPanel className="relative group hover:border-gold-500/30 transition-all cursor-pointer">
                  <div className="absolute -right-4 top-1/2 w-8 h-px bg-gold-500/20 hidden lg:block" />
                  <Cpu className="text-gold-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">The Neural Core</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Proprietary logic engine handling HMAC-signed transactions and real-time operational state synchronization.</p>
                  <div className="mt-4 flex gap-2">
                    {['SHA-256', 'Stateless', 'Edge'].map(t => <span key={t} className="text-[8px] border border-white/10 px-2 py-0.5 rounded text-slate-500 uppercase tracking-widest">{t}</span>)}
                  </div>
                </GlassPanel>
              </MagneticButton>

              <MagneticButton>
                <GlassPanel className="relative group hover:border-gold-500/30 transition-all cursor-pointer">
                  <div className="absolute -right-4 top-1/2 w-8 h-px bg-gold-500/20 hidden lg:block" />
                  <Layers className="text-gold-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Refractive UI</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Multi-layered glassmorphism physics engine with specular lighting and backdrop-blur compositing.</p>
                </GlassPanel>
              </MagneticButton>
            </div>

            {/* Central Schematic */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">
                 <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
                 <div className="absolute inset-8 border border-gold-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                 <div className="absolute inset-16 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                 
                 <div className="z-20 w-32 h-32 bg-black/80 rounded-2xl border border-gold-500/50 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_50px_rgba(212,175,55,0.2)] group cursor-pointer overflow-hidden">
                    <Zap className="text-gold-400 w-12 h-12 animate-pulse group-hover:scale-110 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 to-transparent" />
                 </div>

                 {/* Pulse lines */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-t from-gold-500/50 to-transparent" />
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold-500/50 to-transparent" />
                 <div className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-16 bg-gradient-to-l from-gold-500/50 to-transparent" />
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 h-px w-16 bg-gradient-to-r from-gold-500/50 to-transparent" />
              </div>
            </div>

            {/* Right Pillar */}
            <div className="lg:col-span-4 space-y-8">
              <MagneticButton>
                <GlassPanel className="relative group hover:border-gold-500/30 transition-all cursor-pointer">
                  <div className="absolute -left-4 top-1/2 w-8 h-px bg-gold-500/20 hidden lg:block" />
                  <Box className="text-gold-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Geometric Rigor</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Layouts strictly anchored to the φ-Scale (1.618), ensuring mathematical harmony in every pixel.</p>
                </GlassPanel>
              </MagneticButton>

              <MagneticButton>
                <GlassPanel className="relative group hover:border-gold-500/30 transition-all cursor-pointer">
                  <div className="absolute -left-4 top-1/2 w-8 h-px bg-gold-500/20 hidden lg:block" />
                  <CheckCircle2 className="text-gold-400 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-white mb-2">Metal Runtime</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">Zero-latency PWA foundation with sub-800ms interactivity and perfect Lighthouse scores.</p>
                </GlassPanel>
              </MagneticButton>
            </div>
          </div>
        </Section>

        {/* System vs Website - The Mindset Shift */}
        <Section className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
                Stop Building <br />
                <MetallicText variant="silver">Websites.</MetallicText>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                A website is a brochure. A <span className="text-gold-400">System</span> is a business asset that generates revenue, secures data, and scales operations autonomously.
              </p>
              
              <div className="space-y-4">
                {[
                  { label: 'Website', status: 'Fragile', desc: 'Broken links, slow loads, inconsistent branding.' },
                  { label: 'System', status: 'Hardened', desc: 'Edge-caching, HMAC security, Golden Ratio rigor.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-gold-500/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-2 ${i === 1 ? 'bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.5)]' : 'bg-slate-500'}`} />
                    <div>
                      <div className="flex items-center gap-2">
                         <span className="font-bold text-white">{item.label}</span>
                         <span className="text-[10px] uppercase tracking-widest text-slate-500">{item.status}</span>
                      </div>
                      <p className="text-sm text-slate-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
               <GlassPanel className="aspect-square flex items-center justify-center p-0 overflow-hidden">
                  <div className="absolute inset-0 bg-metal-950 opacity-50" />
                  <ArchitectureGrid />
                  <div className="absolute inset-0 bg-gradient-to-t from-metal-900 via-transparent to-transparent" />
               </GlassPanel>
               <div className="absolute -bottom-6 -right-6">
                  <GlassPanel className="p-6 border-gold-500/30">
                    <div className="text-3xl font-bold text-white">400%</div>
                    <div className="text-[10px] uppercase tracking-widest text-gold-400 font-bold">ROI Increase</div>
                  </GlassPanel>
               </div>
            </div>
          </div>
        </Section>

        {/* The Evidence: Teardowns */}
        <HorizontalTeardowns 
          title="Forensic Teardowns"
          subtitle="We diagnose why standard interfaces fail to convert."
          teardowns={[
            {
              title: "The 'Mega-Menu' Trap",
              law: "Hick's Law",
              visualType: "menu",
              problem: "Standard corporate sites bombard users with 40+ navigation links. This cognitive overload triggers 'Decision Fatigue', causing 42% of users to bounce immediately.",
              solution: "We group options into 3 intent-based portals, hiding the rest behind a 'Glass' menu, reducing decision time by 60%."
            },
            {
              title: "The Invisible Button",
              law: "Fitt's Law",
              visualType: "button",
              problem: "Small, buried 'Buy' buttons are physically difficult to target on mobile, violating the fundamental law of touch mechanics.",
              solution: "We anchor CTAs in the Thumb-Zone. Increasing target size and placing it in the natural thumb sweep increases click-through by 3x.",
              beforeLabel: "Hard to Reach",
              afterLabel: "Thumb Zone"
            },
            {
              title: "The Performance Drag",
              law: "0.4s Threshold",
              visualType: "speed",
              problem: "Every 100ms of latency costs 7% in conversions. Standard React sites often suffer from hydration lag and layout shifts.",
              solution: "Our 'Metal' stack uses Server Components to deliver an instant interactive state, maintaining a perfect 100 Lighthouse score.",
              beforeLabel: "Standard JS",
              afterLabel: "Metal Stack"
            },
            {
              title: "The Trust Gap",
              law: "Social Proof",
              visualType: "security",
              problem: "Generic login forms and 'shady' input fields reduce user trust. If the interface looks amateur, users assume the security is too.",
              solution: "We use HMAC-signed biometric simulations and glass-vault aesthetics to project high-level security and authority.",
              beforeLabel: "Generic Auth",
              afterLabel: "Certified Vault"
            },
            {
              title: "The Form Monster",
              law: "Miller's Law",
              visualType: "form",
              problem: "20+ fields at once triggers immediate mental shutdown. Users perceive long forms as high-effort, leading to a 55% abandonment rate.",
              solution: "Our Stepped Tunnel Protocol breaks complexity into 3 logical phases, maintaining user momentum and completion focus.",
              beforeLabel: "Standard Form",
              afterLabel: "Stepped Tunnel"
            },
            {
              title: "The Precision Deficit",
              law: "Divine Proportions",
              visualType: "grid",
              problem: "Random spacing and non-harmonic layouts create a subconscious 'chaos effect' that reduces brand authority.",
              solution: "We enforce the φ-Scale. Every margin is a multiple of the Golden Ratio, creating a harmonic rhythm that projects precision.",
              beforeLabel: "Amateur Grid",
              afterLabel: "Harmonic Grid"
            },
            {
              title: "Typography Chaos",
              law: "Continuity",
              visualType: "typography",
              problem: "Using generic fonts or mismatched weights signals a lack of professional rigor and decreases reading comprehension by 25%.",
              solution: "Our system uses the Playfair-Geist scale. A strictly controlled typographic hierarchy that ensures authority and clarity.",
              beforeLabel: "Mismatched",
              afterLabel: "Harmonic Type"
            },
            {
              title: "The Feedback Void",
              law: "Newton's 3rd Law",
              visualType: "feedback",
              problem: "Buttons that don't react to touch feel 'dead'. Users often double-click or abandon if the interface doesn't confirm their action.",
              solution: "We implement Haptic-Simulated UI. Every interaction triggers a visual 'refraction pulse', confirming intent instantly.",
              beforeLabel: "Static UI",
              afterLabel: "Tactile Metal"
            },
            {
              title: "The Asset Bloat",
              law: "Page Weight",
              visualType: "image",
              problem: "Heavy raster images (JPG/PNG) throttle mobile bandwidth, causing layout shifts and increasing bounce rates by 20%.",
              solution: "Our system replaces static assets with Physics-based Vectors (SVG) and edge-optimized dynamic shaders.",
              beforeLabel: "Raster Lag",
              afterLabel: "Vector Flow"
            },
            {
              title: "Context Fragmentation",
              law: "Modal Maze",
              visualType: "modal",
              problem: "Standard pop-ups and modals break the user's flow, requiring high cognitive effort to re-orient after closing.",
              solution: "We utilize Inline Glass Portals that expand the current context without hiding the parent state.",
              beforeLabel: "Modal Chaos",
              afterLabel: "Inline Portal"
            },
            {
              title: "The Search Friction",
              law: "Intent Locality",
              visualType: "search",
              problem: "Generic search bars provide a wall of irrelevant text, forcing users to manually filter data in their head.",
              solution: "Our Glass Command Palette uses fuzzy-logic matching and predictive results, finding the target in <200ms.",
              beforeLabel: "Static Bar",
              afterLabel: "Cmd Palette"
            },
            {
              title: "Brand Inconsistency",
              law: "Visual Stress",
              visualType: "color",
              problem: "Random color palettes create 'Visual Noise', making the interface feel amateur and reducing brand trust.",
              solution: "We enforce Metallic Neutrality. A strictly balanced chromatographic scale that projects authority and focus.",
              beforeLabel: "Vibrant Noise",
              afterLabel: "Metal Neutral"
            },
            {
              title: "Vertical Anarchy",
              law: "Fibonacci Scale",
              visualType: "spacing",
              problem: "Inconsistent vertical spacing breaks the eye's natural reading rhythm, leading to faster user fatigue.",
              solution: "Every vertical gap is mathematically derived from the φ-Scale, ensuring a harmonic scroll journey.",
              beforeLabel: "Random Gaps",
              afterLabel: "φ-Verticality"
            },
            {
              title: "Orientation Fatigue",
              law: "Indexing",
              visualType: "scroll",
              problem: "Infinite scrolling without landmarks causes 'Location Amnesia', where users lose their place in the system.",
              solution: "Our Snap-Indexed Protocol uses haptic landmarks and visible stage-indexing to maintain orientation.",
              beforeLabel: "Infinite Void",
              afterLabel: "Snap Indexed"
            },
            {
              title: "The Affordance Gap",
              law: "Signifiers",
              visualType: "affordance",
              problem: "Flat buttons provide no clue they are interactive. Users shouldn't have to 'hunt' for clickable areas.",
              solution: "We use Specular Highlights and refractive depth to make interactable nodes physically obvious.",
              beforeLabel: "Flat Tap",
              afterLabel: "Specular UI"
            },
            {
              title: "Alert Overload",
              law: "Habituation",
              visualType: "alert",
              problem: "Constant red notifications trigger user anxiety and eventual 'blindness', where users ignore critical system warnings.",
              solution: "Our Refractive Pulse System uses gentle luminance shifts to signify priority without hijacking the user's attention.",
              beforeLabel: "Red Noise",
              afterLabel: "Pulse UI"
            },
            {
              title: "Breadcrumb Amnesia",
              law: "Spatial Memory",
              visualType: "landmark",
              problem: "Flat text-based navigation trails fail to engage the brain's spatial processing, leaving users feeling 'lost' in deep hierarchies.",
              solution: "We implement Spatial Glass Landmarks. A visual system of physical stages that anchors the user's position in 3D space.",
              beforeLabel: "Text Trail",
              afterLabel: "Spatial Path"
            },
            {
              title: "The Data Noise",
              law: "Signal-to-Noise",
              visualType: "data",
              problem: "Overwhelming spreadsheets hide critical insights in a wall of borders and text, increasing the time-to-insight by 40%.",
              solution: "Our High-Density Node System uses scannable glass nodes and mathematical grouping to surface the data that matters.",
              beforeLabel: "Spreadsheet",
              afterLabel: "Node Grid"
            },
            {
              title: "The Auth Wall",
              law: "Dopamine Delta",
              visualType: "auth",
              problem: "Lengthy login sequences and slow 2FA checks kill the user's momentum before they even enter your system.",
              solution: "We utilize Holographic Signatures and HMAC-biometrics to provide instant, stateless entry with zero-latency proof.",
              beforeLabel: "Auth Lag",
              afterLabel: "Instant Sig"
            },
            {
              title: "Animation Jitter",
              law: "Continuity",
              visualType: "continuity",
              problem: "Standard CSS animations often drop frames or feel 'robotic', breaking the illusion of a premium digital environment.",
              solution: "Our Physics-Based Spatial Engine uses GPU-accelerated transforms to ensure 120fps fluid continuity in every transition.",
              beforeLabel: "CSS Jitter",
              afterLabel: "Physics Flow"
            }
          ]}
        />

        {/* Investment Tiers */}
        <Section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter italic">Investment <MetallicText variant="gold">Tiers</MetallicText></h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Transparent pricing for systems that scale. Select your entry point.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Tier 1 */}
            <GlassPanel className="flex flex-col border-white/5 bg-black/20">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Performance Audit</h3>
                <p className="text-sm text-slate-400">For slow sites or low conversions.</p>
              </div>
              <div className="text-4xl font-bold text-white mb-8">
                <CurrencyPrice phpPrice={15000} usdPrice={300} />
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> Core Web Vitals Report</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> PWA Readiness Check</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> 1-Hour Strategy Call</li>
              </ul>
              <Link href="/demo">
                <GlassButton variant="secondary" className="w-full text-sm">Request Audit</GlassButton>
              </Link>
            </GlassPanel>

            {/* Tier 2 */}
            <GlassPanel className="flex flex-col border-white/5 bg-black/20">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">The "Glass-Metal" Landing</h3>
                <p className="text-sm text-slate-400">High-conversion first impressions.</p>
              </div>
              <div className="text-4xl font-bold text-white mb-8">
                <CurrencyPrice phpPrice={45000} usdPrice={900} />
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> Next.js Static Site</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> Framer Motion UI</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> PWA Lite Protocol</li>
              </ul>
              <Link href="/initiate">
                <GlassButton variant="secondary" className="w-full text-sm">Initiate</GlassButton>
              </Link>
            </GlassPanel>

            {/* Tier 3 - Most Popular */}
            <GlassPanel className="flex flex-col border-gold-500/30 bg-gradient-to-b from-gold-900/10 to-transparent relative lg:transform lg:-translate-y-4">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-50" />
              <div className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-gold-400 border border-gold-500/30 px-2 py-1 rounded-full bg-gold-500/10">
                Most Popular
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Modular Web App</h3>
                <p className="text-sm text-slate-400">Cloud operations & inventory.</p>
              </div>
              <div className="text-3xl font-bold text-white mb-8">
                <div className="flex flex-col">
                  <CurrencyPrice phpPrice={85000} usdPrice={1700} />
                  <span className="text-lg text-slate-500">to ₱120k ($2.4k)</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> Full PWA + Push</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> Custom Admin Dashboard</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> Database Integration</li>
              </ul>
              <Link href="/initiate">
                <GlassButton className="w-full text-sm bg-gold-500 hover:bg-gold-400 text-black border-none font-bold">Initialize</GlassButton>
              </Link>
            </GlassPanel>

            {/* Tier 4 */}
            <GlassPanel className="flex flex-col border-white/5 bg-black/20">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Protocol</h3>
                <p className="text-sm text-slate-400">High-volume business ecosystem.</p>
              </div>
              <div className="text-4xl font-bold text-white mb-8">
                <CurrencyPrice phpPrice={150000} usdPrice={3000} suffix="+" />
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> Full Architecture</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> Advanced Integrations</li>
                <li className="flex gap-3 text-sm text-slate-300"><CheckCircle size={16} className="text-gold-400 shrink-0" /> 60-Day Hyper-Care</li>
              </ul>
              <Link href="/initiate">
                <GlassButton variant="secondary" className="w-full text-sm">Request Access</GlassButton>
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
