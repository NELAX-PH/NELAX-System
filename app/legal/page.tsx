'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { MetallicText } from '@/components/MetallicText';
import { GlassPanel } from '@/components/GlassPanel';
import { SmoothScroll } from '@/components/SmoothScroll';
import { motion } from 'framer-motion';

export default function LegalPage() {
  return (
    <SmoothScroll>
      <main className="min-h-screen flex flex-col items-center bg-metal-900 relative">
        <div className="fixed inset-0 z-0 pointer-events-none bg-black" />
        <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

        <div className="w-full z-10">
          <Navigation />

          <Section className="pt-40 pb-48">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-4xl mx-auto"
            >
              <div className="mb-12">
                <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 tracking-tighter italic">
                  Legal <MetallicText variant="gold">Directives</MetallicText>
                </h1>
                <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">Version 2026.01 &bull; System Compliance</p>
              </div>
              
              <GlassPanel className="p-8 md:p-16 space-y-16 leading-relaxed text-slate-300 border-white/5">
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[01]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Terms of Engagement</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    By accessing the NELAX architectural portal, you agree to abide by our system standards. Authorized access is granted solely for the purpose of project initialization and forensic audit requests. Unauthorized attempts to reverse-engineer our proprietary Glass-Metal UI engines or physics-based animations are strictly prohibited and monitored.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[02]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Intellectual Property</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    All interface schematics, code architecture, and system philosophies presented on this platform are the exclusive intellectual property of NELAX. Upon full payment of a project, a perpetual license is granted to the client for the specific system instance deployed, while the underlying &apos;Neural Core&apos; architecture remains the property of the studio.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[03]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Protocol Initiation</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    Transmission of data through the &apos;Initiate&apos; or &apos;Demo&apos; protocols does not constitute a formal contract. A binding engagement is only established once a &apos;System Deployment Agreement&apos; is signed by both parties and initial resource allocation (deposit) is confirmed.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[04]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Service Delivery</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    Project timelines provided during &apos;Initiation&apos; are strategic estimates. Actual deployment phases depend on the complexity of the integrated system nodes. NELAX maintains a standard 4-week sprint cycle for core system rebuilds.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[05]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Limitation of Liability</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    NELAX is not liable for system performance degradation or conversion drops resulting from client-side modifications that violate the established &apos;Laws of UI Physics&apos; provided during the handover documentation.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[06]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Privacy & Data Signal</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    We collect forensic metadata (IP, Device, Geolocation) during system uplinks solely for security verification and to customize the forensic audit reports. Your data is encrypted and never sold to external third-party entities.
                  </p>
                </section>

                <div className="pt-12 border-t border-white/5 text-center">
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em]">End of Directive &bull; Nelax Systems 2026</p>
                </div>
              </GlassPanel>
            </motion.div>
          </Section>
        </div>

        <Footer />
      </main>
    </SmoothScroll>
  );
}
