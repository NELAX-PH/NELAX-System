'use client';

import { useState, useEffect } from 'react';
import { GlassPanel } from '@/components/GlassPanel';
import { GlassButton } from '@/components/GlassButton';
import { GlassInput } from '@/components/GlassInput';
import { Navigation } from '@/components/Navigation';
import { ArrowRight, ArrowLeft, CheckCircle2, Terminal, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { vibrate } from '@/lib/utils';

// Define the steps with branching logic
interface StepOption {
  label: string;
  value: string;
  next: string;
}

interface StepField {
  id: string;
  label: string;
  type: string;
  placeholder: string;
}

interface Step {
  title: string;
  subtitle: string;
  fields?: StepField[];
  options?: StepOption[];
  next?: string;
}

const STEPS: Record<string, Step> = {
  identity: {
    title: 'Identity Verification',
    subtitle: 'Who is authorizing this transmission?',
    fields: [
      { id: 'name', label: 'Name', type: 'text', placeholder: 'Jane Doe' },
      { id: 'email', label: 'Email', type: 'email', placeholder: 'jane@company.com' },
      { id: 'company', label: 'Company/Brand Name', type: 'text', placeholder: 'Acme Corp' }
    ],
    next: 'objective'
  },
  objective: {
    title: 'Strategic Intent',
    subtitle: 'What is the primary objective of this system upgrade?',
    options: [
      { label: 'The Rebuild Protocol (Full Next.js PWA)', value: 'rebuild', next: 'rebuild_features' },
      { label: 'The Forensic Audit (Performance & Conversion)', value: 'audit', next: 'audit_fields' },
      { label: 'The Growth Retainer (Ongoing Support)', value: 'retainer', next: 'retainer_level' },
      { label: 'Other / Custom Protocol', value: 'custom', next: 'aesthetics' }
    ]
  },
  // ... (rebuild branch remains same)
  // Branch: Rebuild
  rebuild_features: {
    title: 'Core Modules',
    subtitle: 'Which modules are critical for the new system?',
    options: [
      { label: 'Sales / E-commerce', value: 'commerce', next: 'integrations' },
      { label: 'Booking / Scheduling', value: 'booking', next: 'integrations' },
      { label: 'Internal Dashboard', value: 'dashboard', next: 'integrations' },
      { label: 'Customer Portal', value: 'portal', next: 'integrations' }
    ]
  },
  integrations: {
    title: 'Data Nervous System',
    subtitle: 'What third-party organs must we connect?',
    options: [
      { label: 'Payment Gateway', value: 'payments', next: 'content_assets' },
      { label: 'Customer Database (CRM)', value: 'crm', next: 'content_assets' },
      { label: 'Email / SMS Automation', value: 'automation', next: 'content_assets' },
      { label: 'None / Greenfield', value: 'none', next: 'content_assets' }
    ]
  },
  content_assets: {
    title: 'Asset Readiness',
    subtitle: 'Do we have the raw materials (Text/Images)?',
    options: [
      { label: 'Assets Ready for Injection', value: 'ready', next: 'aesthetics' },
      { label: 'Generate via AI Models', value: 'ai_gen', next: 'aesthetics' },
      { label: 'Migrate from Legacy Site', value: 'migrate', next: 'aesthetics' },
      { label: 'Requires Copywriting', value: 'copy', next: 'aesthetics' }
    ]
  },
  // Branch: Audit
  audit_fields: {
    title: 'Digital Footprint',
    subtitle: 'Where is the friction occurring?',
    fields: [
      { id: 'url', label: 'Target URL', type: 'text', placeholder: 'https://your-site.com' }
    ],
    next: 'audit_focus'
  },
  audit_focus: {
    title: 'Priority Metric',
    subtitle: 'Choose the most critical focus area.',
    options: [
      { label: 'Slow Load Times (Performance)', value: 'speed', next: 'access_level' },
      { label: 'Low Sales (Conversion)', value: 'conversion', next: 'access_level' },
      { label: 'Outdated Design (UX Debt)', value: 'debt', next: 'access_level' },
      { label: 'Navigation Architecture', value: 'nav', next: 'access_level' }
    ]
  },
  access_level: {
    title: 'Clearance Level',
    subtitle: 'What access can you provide immediately?',
    options: [
      { label: 'Full Technical Access (Source Code/Hosting)', value: 'full', next: 'aesthetics' },
      { label: 'Limited Access (Dashboard/Editor)', value: 'frontend', next: 'aesthetics' },
      { label: 'Black Box (External View Only)', value: 'none', next: 'aesthetics' },
      { label: 'Staging Environment', value: 'staging', next: 'aesthetics' }
    ]
  },
  // Branch: Retainer
  retainer_level: {
    title: 'Support Frequency',
    subtitle: 'What level of ongoing evolution is required?',
    options: [
      { label: 'Weekly Rapid Iterations', value: 'weekly', next: 'aesthetics' },
      { label: 'Monthly Strategic Updates', value: 'monthly', next: 'aesthetics' },
      { label: 'On-Call Technical Security', value: 'security', next: 'aesthetics' },
      { label: 'Content & UI Maintenance', value: 'maintenance', next: 'aesthetics' }
    ]
  },
  aesthetics: {
    title: 'System Aesthetics',
    subtitle: 'Choose the visual language for the interface.',
    options: [
      { label: 'Glass-Metal (High Refraction)', value: 'glass', next: 'timeline' },
      { label: 'Industrial Dark (High Contrast)', value: 'metal', next: 'timeline' },
      { label: 'Minimalist Void (Clean/Dark)', value: 'void', next: 'timeline' },
      { label: 'Experimental / Brutalist', value: 'brutalist', next: 'timeline' }
    ]
  },
  timeline: {
    title: 'Operation Timeline',
    subtitle: 'When must this system be operational?',
    options: [
      { label: 'Urgent (Under 2 Weeks)', value: 'urgent', next: 'budget' },
      { label: 'Standard (4 Weeks)', value: 'standard', next: 'budget' },
      { label: 'Strategic (Q3/Q4)', value: 'strategic', next: 'budget' },
      { label: 'Flexible Evolution', value: 'flexible', next: 'budget' }
    ]
  },
  budget: {
    title: 'Resource Allocation',
    subtitle: 'What is the authorized budget for this operation?',
    options: [
      { label: 'Starter (₱20,000 - ₱50,000)', value: 'tier1', next: 'complete' },
      { label: 'Growth (₱50,000 - ₱100,000)', value: 'tier2', next: 'complete' },
      { label: 'Professional (₱100,000 - ₱200,000)', value: 'tier3', next: 'complete' },
      { label: 'Enterprise (₱200,000+)', value: 'tier4', next: 'complete' }
    ]
  }
};

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
}

export default function InitiatePage() {
  const [currentStepId, setCurrentStepId] = useState<string>('identity');
  const [history, setHistory] = useState<string[]>([]);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (isComplete) {
      requestAnimationFrame(() => {
        const newParticles = [...Array(12)].map((_, i) => ({
          id: i,
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          delay: Math.random() * 2
        }));
        setParticles(newParticles);
      });
    }
  }, [isComplete]);

  const currentStep = STEPS[currentStepId];

  const handleOptionSelect = (value: string, nextId: string) => {
    vibrate(5);
    const updatedData = { ...formData, [currentStepId]: value };
    setFormData(updatedData);
    
    if (nextId === 'complete') {
      handleSubmit(updatedData);
    } else {
      setHistory([...history, currentStepId]);
      setCurrentStepId(nextId);
    }
  };

  const handleNextFields = () => {
    // Basic validation for fields step
    if (currentStep.fields) {
      const isMissingField = currentStep.fields.some(field => !formData[field.id]?.trim());
      if (isMissingField) {
        vibrate(10); // Error vibration
        return;
      }

      if (currentStep.next) {
        setHistory([...history, currentStepId]);
        setCurrentStepId(currentStep.next);
      }
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const prevStepId = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentStepId(prevStepId);
    }
  };

  const handleSubmit = async (finalData: Record<string, string>) => {
    setIsSubmitting(true);
    
    // Enrich data with labels for the email report
    const enrichedData: Record<string, string> = { 
      ...finalData,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
    };
    Object.keys(finalData).forEach(stepId => {
      const step = STEPS[stepId];
      if (step && step.options) {
        const option = step.options.find(opt => opt.value === finalData[stepId]);
        if (option) {
          enrichedData[stepId] = option.label; // Replace value with label for the report
        }
      }
    });

    try {
      const response = await fetch('/api/transmit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enrichedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Transmission Signal Lost');
      }

      console.log('Transmission Protocol Success:', result.hash);
      setIsComplete(true);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Transmission Signal Lost';
      alert(message);
      vibrate(20);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-metal-900 relative overflow-hidden p-6">
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-900/10 via-black to-black" />
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" />

      <Navigation />

      <div className="w-full max-w-2xl z-10">
        <GlassPanel className="min-h-[500px] flex flex-col relative overflow-hidden border-gold-500/20">
          
          {/* Progress Indicator */}
          <div className="absolute top-0 left-0 h-1 bg-white/5 w-full">
            <motion.div 
              className="h-full bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
              initial={{ width: '0%' }}
              animate={{ width: `${(history.length / 6) * 100}%` }}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center p-8 md:p-12">
            
            {isComplete ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-12"
              >
                <div className="relative">
                   <motion.div 
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ type: "spring", damping: 12, stiffness: 200 }}
                     className="w-24 h-24 bg-green-500/10 rounded-full border border-green-500/50 flex items-center justify-center mx-auto shadow-[0_0_50px_rgba(34,197,94,0.3)] relative z-10"
                   >
                     <CheckCircle2 size={48} className="text-green-400" />
                   </motion.div>
                   
                   {/* "Metallic Confetti" - Animated particles */}
                   {particles.map((p) => (
                     <motion.div
                       key={p.id}
                       initial={{ scale: 0, x: 0, y: 0 }}
                       animate={{ 
                         scale: [0, 1, 0], 
                         x: p.x, 
                         y: p.y 
                       }}
                       transition={{ duration: 2, delay: 0.2, repeat: Infinity, repeatDelay: p.delay }}
                       className="absolute top-1/2 left-1/2 w-1 h-1 bg-gold-400 rounded-full blur-[1px]"
                     />
                   ))}
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">System Calibrated</h2>
                  <div className="h-px w-24 bg-gold-500 mx-auto opacity-50" />
                  
                  {/* Configuration Summary */}
                  <div className="max-w-md mx-auto mt-8 p-6 rounded-xl border border-white/5 bg-white/5 text-left space-y-4">
                    <h3 className="text-[10px] font-bold text-gold-400 uppercase tracking-[0.2em] border-b border-white/10 pb-2">Transmission Summary</h3>
                    <div className="grid grid-cols-2 gap-y-3 text-xs">
                      {formData.name && (
                        <>
                          <span className="text-slate-500 uppercase tracking-widest">Authorized By</span>
                          <span className="text-white font-mono">{formData.name}</span>
                        </>
                      )}
                      {formData.company && (
                        <>
                          <span className="text-slate-500 uppercase tracking-widest">Organization</span>
                          <span className="text-white font-mono">{formData.company}</span>
                        </>
                      )}
                      
                      {/* Mapping selected options to labels */}
                      {Object.entries(formData).map(([stepId, value]) => {
                        const step = STEPS[stepId];
                        if (!step || stepId === 'name' || stepId === 'company' || stepId === 'email') return null;
                        
                        const selectedOption = step.options?.find(opt => opt.value === value);
                        if (!selectedOption) return null;

                        return (
                          <div key={stepId} className="contents">
                            <span className="text-slate-500 uppercase tracking-widest">{step.title}</span>
                            <span className="text-gold-400 font-medium">{selectedOption.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <p className="text-slate-400 max-w-md mx-auto leading-relaxed text-sm pt-4">
                    Transmission complete. Your architectural requirements have been integrated into our neural pipeline. Establish secure contact in 24 hours.
                  </p>
                </div>

                <div className="pt-8">
                  <GlassButton onClick={() => window.location.href = '/'} variant="secondary" className="px-12 py-6">
                    Return to Surface
                  </GlassButton>
                </div>
              </motion.div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStepId}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-gold-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4">
                      <Terminal size={14} /> Protocol Phase {history.length + 1}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{currentStep.title}</h2>
                    <p className="text-slate-400 text-lg">{currentStep.subtitle}</p>
                  </div>

                  {/* Dynamic Fields/Options */}
                  <div className="space-y-4 pt-4">
                    {currentStep.fields ? (
                      <div className="space-y-4">
                        {currentStep.fields.map((field, i: number) => (
                          <GlassInput 
                            key={field.id}
                            placeholder={field.placeholder}
                            type={field.type}
                            className="text-lg py-6"
                            autoFocus={i === 0}
                            value={formData[field.id] || ''}
                            onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentStep.options?.map((option, i: number) => (
                          <button
                            key={i}
                            onClick={() => handleOptionSelect(option.value, option.next)}
                            className="text-left p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 group relative overflow-hidden"
                          >
                            <div className="absolute inset-0 bg-gold-500/0 group-hover:bg-gold-500/5 transition-colors" />
                            <span className="text-white font-medium group-hover:text-gold-400 transition-colors relative z-10">{option.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}

          </div>

          {/* Footer Controls */}
          {!isComplete && (
             <div className="p-8 border-t border-white/5 flex justify-between items-center bg-black/20 backdrop-blur-md">
               <button 
                 onClick={handleBack}
                 disabled={history.length === 0}
                 className="flex items-center gap-2 text-xs text-slate-500 hover:text-white disabled:opacity-30 disabled:hover:text-slate-500 transition-colors uppercase tracking-widest font-bold"
               >
                 <ArrowLeft size={14} /> Back
               </button>

               {currentStep.fields && (
                 <GlassButton onClick={handleNextFields} className="px-8" disabled={isSubmitting}>
                   {isSubmitting ? 'Transmitting...' : 'Initialize Uplink'} 
                   {!isSubmitting && <ArrowRight size={16} />}
                 </GlassButton>
               )}
               
               {isSubmitting && (
                 <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
                    <div className="text-center space-y-4">
                       <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                       >
                         <Cpu className="w-12 h-12 text-gold-500" />
                       </motion.div>
                       <p className="text-gold-400 text-xs font-bold uppercase tracking-[0.3em]">Establishing Secure Connection...</p>
                    </div>
                 </div>
               )}
             </div>
          )}

        </GlassPanel>
      </div>
    </main>
  );
}