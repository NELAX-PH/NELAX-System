'use client';

import { useEffect } from 'react';
import { GlassPanel } from '@/components/GlassPanel';
import { GlassButton } from '@/components/GlassButton';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-metal-900 relative p-6">
      <div className="fixed inset-0 z-0 pointer-events-none bg-black" />
      <div className="fixed inset-0 bg-[url('/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none" />

      <GlassPanel className="p-12 border-red-500/20 bg-red-900/5 backdrop-blur-xl flex flex-col items-center gap-6 max-w-lg text-center">
        <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
           <AlertTriangle size={32} className="text-red-500" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Critical System Failure
          </h1>
          <p className="text-slate-400 text-sm">
            An unrecoverable runtime error has occurred in the active protocol.
          </p>
        </div>

        <div className="w-full bg-black/40 rounded p-4 text-left overflow-auto max-h-32 border border-white/5">
           <code className="text-[10px] font-mono text-red-400 break-all">
             {error.message || "Unknown Error Protocol"}
           </code>
        </div>

        <GlassButton onClick={() => reset()} className="w-full">
          <RefreshCw size={16} /> Reboot System
        </GlassButton>
      </GlassPanel>
    </main>
  );
}
