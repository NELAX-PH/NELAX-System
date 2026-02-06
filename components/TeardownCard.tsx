'use client';

import { GlassPanel } from '@/components/GlassPanel';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

import { 
  MegaMenuChaos, 
  GlassPortalSystem, 
  InvisibleButtonChaos, 
  ThumbZoneSystem,
  FormChaos,
  SteppedTunnelSystem,
  GridChaos,
  HarmonicGridSystem,
  SlowLoadChaos,
  InstantMetalSystem,
  TrustGapChaos,
  CertifiedVaultSystem,
  TypographyChaos,
  HarmonicTypeSystem,
  FeedbackChaos,
  TactileMetalSystem,
  ImageChaos,
  PhysicsVectorSystem,
  ModalChaos,
  InlinePortalSystem,
  SearchChaos,
  CommandPaletteSystem,
  ColorAnarchy,
  MetallicNeutralitySystem,
  SpacingAnarchy,
  PhiScaleSystem,
  ScrollChaos,
  SnapIndexedSystem,
  FeedbackAnarchy,
  SpecularAffordanceSystem,
  NotificationChaos,
  RefractivePulseSystem,
  TrailChaos,
  SpatialLandmarkSystem,
  SpreadsheetChaos,
  HighDensityNodeSystem,
  FormLatencyChaos,
  HolographicSigSystem,
  MotionJitterChaos,
  PhysicsSpatialSystem
} from './TeardownVisuals';

export interface Teardown {
  title: string;
  law: string;
  problem: string;
  solution: string;
  visualType: 'menu' | 'button' | 'form' | 'grid' | 'speed' | 'security' | 'typography' | 'feedback' | 'image' | 'modal' | 'search' | 'color' | 'spacing' | 'scroll' | 'affordance' | 'alert' | 'landmark' | 'data' | 'auth' | 'continuity';
  beforeLabel?: string;
  afterLabel?: string;
  isActive?: boolean;
}

export function TeardownCard({ 
  title, 
  law, 
  problem, 
  solution,
  visualType,
  beforeLabel = "Standard",
  afterLabel = "Nelax System",
  isActive = false
}: Teardown) {
  
  const renderBefore = () => {
    switch(visualType) {
      case 'menu': return <MegaMenuChaos />;
      case 'button': return <InvisibleButtonChaos />;
      case 'form': return <FormChaos />;
      case 'grid': return <GridChaos />;
      case 'speed': return <SlowLoadChaos />;
      case 'security': return <TrustGapChaos />;
      case 'typography': return <TypographyChaos />;
      case 'feedback': return <FeedbackChaos />;
      case 'image': return <ImageChaos />;
      case 'modal': return <ModalChaos />;
      case 'search': return <SearchChaos />;
      case 'color': return <ColorAnarchy />;
      case 'spacing': return <SpacingAnarchy />;
      case 'scroll': return <ScrollChaos />;
      case 'affordance': return <FeedbackAnarchy />;
      case 'alert': return <NotificationChaos />;
      case 'landmark': return <TrailChaos />;
      case 'data': return <SpreadsheetChaos />;
      case 'auth': return <FormLatencyChaos />;
      case 'continuity': return <MotionJitterChaos />;
      default: return null;
    }
  };

  const renderAfter = () => {
    switch(visualType) {
      case 'menu': return <GlassPortalSystem />;
      case 'button': return <ThumbZoneSystem />;
      case 'form': return <SteppedTunnelSystem />;
      case 'grid': return <HarmonicGridSystem />;
      case 'speed': return <InstantMetalSystem />;
      case 'security': return <CertifiedVaultSystem />;
      case 'typography': return <HarmonicTypeSystem />;
      case 'feedback': return <TactileMetalSystem />;
      case 'image': return <PhysicsVectorSystem />;
      case 'modal': return <InlinePortalSystem />;
      case 'search': return <CommandPaletteSystem />;
      case 'color': return <MetallicNeutralitySystem />;
      case 'spacing': return <PhiScaleSystem />;
      case 'scroll': return <SnapIndexedSystem />;
      case 'affordance': return <SpecularAffordanceSystem />;
      case 'alert': return <RefractivePulseSystem />;
      case 'landmark': return <SpatialLandmarkSystem />;
      case 'data': return <HighDensityNodeSystem />;
      case 'auth': return <HolographicSigSystem />;
      case 'continuity': return <PhysicsSpatialSystem />;
      default: return null;
    }
  };

  return (
    <GlassPanel 
      showShine={false}
      className={cn(
        "p-0 overflow-hidden group transition-all duration-700",
        isActive ? "border-gold-500/50 bg-white/5" : "border-white/5"
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        
        {/* Visual Comparison */}
        <div className="relative h-72 sm:h-80 lg:h-auto border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 overflow-hidden pointer-events-none lg:pointer-events-auto">
          <div className="absolute inset-0 flex">
            {/* Before Side */}
            <div className={cn(
              "w-1/2 h-full relative border-r border-white/5 transition-all duration-700 overflow-hidden",
              isActive ? "grayscale-0 opacity-100" : "grayscale opacity-60"
            )}>
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 text-[8px] sm:text-[10px] tracking-widest uppercase text-red-400 font-bold flex items-center gap-1 bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                <AlertTriangle size={10} className="sm:w-3 sm:h-3" /> {beforeLabel}
              </span>
              {renderBefore()}
            </div>

            {/* After Side */}
            <div className="w-1/2 h-full relative overflow-hidden">
              <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 text-[8px] sm:text-[10px] tracking-widest uppercase text-green-400 font-bold flex items-center gap-1 bg-black/60 px-2 py-1 rounded backdrop-blur-md">
                <CheckCircle2 size={10} className="sm:w-3 sm:h-3" /> {afterLabel}
              </span>
              {renderAfter()}
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <div className="mb-4">
            <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs text-gold-400 tracking-widest uppercase mb-2 sm:mb-3">
              Violation: {law}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">{title}</h3>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-red-400 uppercase tracking-wide mb-1.5 sm:mb-2 flex items-center gap-2">
                <AlertTriangle size={12} className="sm:w-3.5 sm:h-3.5" /> The Friction
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {problem}
              </p>
            </div>

            <div className="w-full h-px bg-white/5" />

            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-green-400 uppercase tracking-wide mb-1.5 sm:mb-2 flex items-center gap-2">
                <CheckCircle2 size={12} className="sm:w-3.5 sm:h-3.5" /> The System Fix
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </GlassPanel>
  );
}
