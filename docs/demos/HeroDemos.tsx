import React from 'react';
import { HolographicCard, PeacockButton, PeacockBadge, PeacockTabs } from '../../src';
import { Sparkles, Zap, Flame } from 'lucide-react';

export const HeroDemos = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 max-w-6xl mx-auto px-4">
      <HolographicCard className="w-full">
        <div className="space-y-4">
          <PeacockBadge variant="glass" className="mb-2">Quantum Core</PeacockBadge>
          <h3 className="text-3xl font-bold text-white tracking-tight">Holographic Precision</h3>
          <p className="text-white/60 leading-relaxed">
            Every pixel is calculated with physical accuracy. Our 3D engine tracks your movement with sub-millisecond latency.
          </p>
          <div className="pt-4 flex gap-3">
            <PeacockButton variant="primary" size="sm">
              <Zap className="w-4 h-4" /> Initialize
            </PeacockButton>
            <PeacockButton variant="glass" size="sm">
              <Sparkles className="w-4 h-4" /> Explore
            </PeacockButton>
          </div>
        </div>
      </HolographicCard>

      <div className="flex flex-col gap-8">
        <div className="plumage-glass rounded-3xl p-8 noise-texture border border-white/10">
          <PeacockTabs 
            items={[
              { id: '1', label: 'Performance', icon: <Zap className="w-4 h-4" />, content: <p className="text-white/60 mt-2">60fps animations even on mobile devices.</p> },
              { id: '2', label: 'Design', icon: <Flame className="w-4 h-4" />, content: <p className="text-white/60 mt-2">Discord-grade aesthetics out of the box.</p> }
            ]} 
          />
        </div>
        
        <div className="flex gap-4">
          <div className="flex-1 plumage-glass rounded-2xl p-6 border border-white/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">12kb</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Gzipped</div>
            </div>
          </div>
          <div className="flex-1 plumage-glass rounded-2xl p-6 border border-white/5 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">0ms</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Latency</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
