'use client';

import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { MetallicText } from '@/components/MetallicText';
import { ContactForm } from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-metal-900 relative flex flex-col items-center">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-900/10 via-black to-black" />
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="w-full z-10">
        <Navigation />

        <Section className="pt-48 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
              Request <MetallicText variant="gold">Demo</MetallicText>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Initialize a forensic preview of the Glass-Metal system architecture.
            </p>
          </motion.div>
        </Section>

        <Section className="pb-48">
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </Section>
      </div>

      <Footer />
    </main>
  );
}
