'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { MetallicText } from '@/components/MetallicText';
import { GlassPanel } from '@/components/GlassPanel';
import { SmoothScroll } from '@/components/SmoothScroll';
import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
                  Privacy <MetallicText variant="silver">Protocol</MetallicText>
                </h1>
                <p className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">Code: SEC-ENCRYPT-2026 &bull; Forensic Privacy</p>
              </div>
              
              <GlassPanel className="p-8 md:p-16 space-y-16 leading-relaxed text-slate-300 border-white/5">
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[01]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Data Signal Collection</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    We only collect data that is essential for the initialization and forensic auditing of your system. This includes identity markers (Name, Email), organization details, and technical metadata. During any protocol uplink (Initiate or Demo), our system captures forensic data including IP address, hardware specifications, and geolocation to ensure signal integrity and provide accurate architectural reports.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[02]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Encryption Standards</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    All transmissions through the Nelax portal are protected by industry-standard SSL/TLS encryption. Furthermore, internal system uplinks utilize Base64 obfuscation and HMAC-signed signatures to prevent interception. Your architectural data is treated as high-clearance information and is stored within secure, encrypted environments.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[03]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Cookie & State Management</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    Our system uses minimal, non-invasive session cookies solely to maintain state during the multi-phase &apos;Initiate&apos; protocol. We do not utilize third-party tracking pixels, cross-site behavioral monitoring, or fingerprinting techniques for advertising purposes. Our interest is in your system architecture, not your browsing history.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[04]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Data Sovereignty</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    You retain full ownership of your data signals. At any point, you may request a &apos;Forensic Wipe&apos; (deletion) of your information from our active transmission logs. Upon project completion, all preliminary audit data is archived or purged according to your specific security clearance level.
                  </p>
                </section>

                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="text-gold-500 font-mono text-sm">[05]</span>
                    <h2 className="text-xl font-bold text-white uppercase tracking-widest letter-spacing-2">Third-Party Signal Isolation</h2>
                  </div>
                  <p className="pl-12 text-slate-400">
                    NELAX does not sell, trade, or leak your system data to external entities. The only third-party signals we interface with are those required for system functionality (e.g., Map APIs for geolocation tracking, SMTP relays for secure communication), and these are governed by strict operational security protocols.
                  </p>
                </section>

                <div className="pt-12 border-t border-white/5 text-center">
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em]">Signal Integrity Verified &bull; Nelax Systems 2026</p>
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
