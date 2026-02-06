'use client';

import { GlassPanel } from '@/components/GlassPanel';
import { GlassInput } from '@/components/GlassInput';
import { GlassButton } from '@/components/GlassButton';
import { Send, User, Mail, Globe, MessageSquare, CheckCircle2, Cpu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { vibrate } from '@/lib/utils';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    url: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    vibrate(20);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("All critical fields are required for transmission.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          userAgent: navigator.userAgent
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Signal Interrupted');
      }

      setIsComplete(true);
      vibrate([10, 50, 10]);
    } catch (error: any) {
      alert(error.message);
      vibrate(20);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassPanel className="max-w-3xl mx-auto border-gold-500/10 bg-black/40 backdrop-blur-2xl relative overflow-hidden">
      <AnimatePresence mode="wait">
        {isSent ? (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-6"
          >
            <div className="w-20 h-20 bg-green-500/10 rounded-full border border-green-500/50 flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <CheckCircle2 size={40} className="text-green-400" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Signal Received</h3>
              <p className="text-slate-400 max-w-sm mx-auto text-sm leading-relaxed">
                Transmission logged into our neural core. A system analyst will establish contact shortly.
              </p>
            </div>
            <GlassButton variant="secondary" onClick={() => {
              setIsComplete(false);
              setFormData({ name: '', email: '', url: '', message: '' });
            }}>
              Send Another Signal
            </GlassButton>
          </motion.div>
        ) : (
          <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white mb-2 tracking-tight uppercase">Initialize Protocol</h3>
              <p className="text-slate-400 text-sm italic">
                Secure line established. Brief us on your requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <GlassInput 
                  label="Officer Name" 
                  placeholder="John Doe" 
                  required
                  icon={<User size={18} />}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <GlassInput 
                  label="Secure Email" 
                  placeholder="john@company.com" 
                  type="email"
                  required
                  icon={<Mail size={18} />}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              
              <GlassInput 
                label="Target System (URL)" 
                placeholder="https://current-website.com" 
                required
                icon={<Globe size={18} />}
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              />

              <div className="space-y-2">
                <label className="text-xs font-bold tracking-widest text-slate-400 uppercase ml-1">
                  Mission Brief
                </label>
                <div className="relative group">
                  <motion.textarea
                    whileFocus={{ scale: 1.01 }}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full h-32 bg-white/5 border border-white/10 rounded-xl px-4 py-4 pl-12 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:bg-white/10 focus:border-gold-500/50 focus:shadow-[0_0_20px_rgba(212,175,55,0.1)] resize-none"
                    placeholder="Describe your current bottlenecks..."
                  />
                  <div className="absolute left-4 top-4 text-slate-500 group-focus-within:text-gold-400 transition-colors">
                    <MessageSquare size={18} />
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <GlassButton type="submit" className="w-full text-lg group" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <Cpu className="animate-spin" size={20} /> Transmitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Transmit Signal <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </GlassButton>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassPanel>
  );
}
