import { prototypes } from '@/data/prototypes';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/Section';
import { GlassPanel } from '@/components/GlassPanel';
import { GlassButton } from '@/components/GlassButton';
import { BeforeAfterToggle } from '@/components/BeforeAfterToggle';
import { ArrowLeft, CheckCircle2, AlertTriangle, Zap, Beaker } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { 
  LegacyOnboarding, ResearchOnboarding,
  LegacyPerformance, ResearchPerformance,
  LegacyDashboard, ResearchDashboard,
  LegacySecurity, ResearchSecurity,
  LegacyAnalytics, ResearchAnalytics,
  LegacyHaptics, ResearchHaptics,
  LegacyState, ResearchState
} from '@/components/PrototypeVisuals';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return prototypes.map((proto) => ({
    slug: proto.slug,
  }));
}

export default async function PrototypePage({ params }: Props) {
  const { slug } = await params;
  const proto = prototypes.find((p) => p.slug === slug);

  if (!proto) {
    notFound();
  }

  const getVisuals = () => {
    switch (slug) {
      case 'omni-interface':
        return { before: <LegacyOnboarding />, after: <ResearchOnboarding /> };
      case 'performance-core':
        return { before: <LegacyPerformance />, after: <ResearchPerformance /> };
      case 'predictive-dashboard':
        return { before: <LegacyDashboard />, after: <ResearchDashboard /> };
      case 'encrypted-vault':
        return { before: <LegacySecurity />, after: <ResearchSecurity /> };
      case 'harmonic-analytics':
        return { before: <LegacyAnalytics />, after: <ResearchAnalytics /> };
      case 'haptic-physics':
        return { before: <LegacyHaptics />, after: <ResearchHaptics /> };
      case 'state-protocol':
        return { before: <LegacyState />, after: <ResearchState /> };
      default:
        return { before: null, after: null };
    }
  };

  const visuals = getVisuals();

  return (
    <main className="min-h-screen flex flex-col items-center bg-metal-900 relative">
       {/* Background */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <div className="w-full z-10">
        <Navigation />

        {/* Header */}
        <Section className="pt-40 pb-12">
          <Link href="/laboratory" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors uppercase tracking-widest text-xs font-bold mb-8">
            <ArrowLeft size={14} /> Return to Laboratory
          </Link>
          
          <div className="flex flex-col md:flex-row gap-6 md:items-end justify-between mb-12">
            <div className="space-y-4 max-w-3xl">
              <div className="flex gap-2">
                {proto.tags.map(tag => (
                   <span key={tag} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-gold-400 uppercase tracking-widest">
                     {tag}
                   </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                {proto.title}
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                {proto.summary}
              </p>
            </div>
            
            {/* Hero Metric */}
            <div className="flex flex-col items-center justify-center p-6 bg-gold-500/10 border border-gold-500/20 rounded-2xl backdrop-blur-md min-w-[200px]">
               <span className="text-5xl font-bold text-white mb-1">{proto.metric}</span>
               <span className="text-xs text-gold-400 uppercase tracking-widest font-bold">{proto.metricLabel}</span>
            </div>
          </div>

          <BeforeAfterToggle 
            beforeNode={visuals.before}
            afterNode={visuals.after}
            beforeLabel="Legacy Benchmark"
            afterLabel="Laboratory System"
            beforeMetric={proto.legacyMetric}
            afterMetric={proto.metric}
          />
        </Section>

        <Section className="pb-32 grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Sidebar Info */}
           <div className="md:col-span-1 space-y-6">
              <GlassPanel>
                 <h3 className="text-sm text-slate-500 uppercase tracking-widest font-bold mb-4">Prototype Overview</h3>
                 <div className="space-y-4">
                    <div>
                      <span className="block text-xs text-slate-600 uppercase">Prototype ID</span>
                      <span className="text-lg text-white font-medium">{proto.type}</span>
                    </div>
                    <div>
                      <span className="block text-xs text-slate-600 uppercase">Research Area</span>
                      <span className="text-lg text-white font-medium">System Performance</span>
                    </div>
                    <div>
                       <span className="block text-xs text-slate-600 uppercase">Status</span>
                       <span className="text-lg text-gold-400 font-medium flex items-center gap-2">
                         <Beaker size={16} /> Verified Benchmark
                       </span>
                    </div>
                 </div>
              </GlassPanel>
           </div>

           {/* Main Content */}
           <div className="md:col-span-2 space-y-12">
              
              {/* Problem */}
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                   <AlertTriangle className="text-red-400" /> The Hypothesis
                 </h2>
                 <p className="text-slate-300 leading-loose text-lg">
                   {proto.challenge}
                 </p>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                   <Zap className="text-gold-400" /> The System Implementation
                 </h2>
                 <p className="text-slate-300 leading-loose text-lg">
                   {proto.solution}
                 </p>
              </div>

              {/* Impact */}
              <div className="space-y-4">
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                   <CheckCircle2 className="text-green-400" /> Research Outcome
                 </h2>
                 <p className="text-slate-300 leading-loose text-lg">
                   {proto.impact}
                 </p>
              </div>
              
              <div className="pt-8 border-t border-white/10">
                 <h3 className="text-white font-bold mb-4">Interested in deploying this architecture?</h3>
                 <Link href="/initiate">
                   <GlassButton className="w-full md:w-auto">
                     Initiate System Deployment
                   </GlassButton>
                 </Link>
              </div>

           </div>
        </Section>
      </div>
      <Footer />
    </main>
  );
}