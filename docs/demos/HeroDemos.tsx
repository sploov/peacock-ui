import React from 'react';
import { motion } from 'framer-motion';
import { 
  HolographicCard, 
  PeacockButton, 
  PeacockBadge, 
  PeacockTabs, 
  PeacockDock,
  PeacockAvatar,
  PeacockAvatarImage,
  PeacockAvatarFallback,
  PeacockSkeleton,
} from '../../src';
import { 
  Sparkles, 
  Zap, 
  Flame, 
  Shield, 
  Cpu, 
  Layout, 
  Home, 
  User,
  Activity,
  Globe,
  Star,
  GitBranch,
  Terminal,
  Layers
} from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export const HeroDemos = () => {
  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8 mt-24 max-w-7xl mx-auto px-6 mb-32"
    >
      {/* GitHub-style Header */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/5">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-xl bg-peacock-primary/20 flex items-center justify-center text-peacock-primary border border-peacock-primary/20">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h1 class="text-2xl font-bold text-white flex items-center gap-2">
              Quantum Dashboard
              <PeacockBadge variant="glass">Public Beta</PeacockBadge>
            </h1>
            <p class="text-white/40 text-sm">Real-time interface synthesis engine v3.0.0</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <PeacockButton variant="outline" size="sm" className="px-4 h-10">
            <Star className="w-4 h-4 mr-2" /> Star Project
          </PeacockButton>
          <PeacockButton variant="primary" size="sm" className="px-4 h-10">
            <GitBranch className="w-4 h-4 mr-2" /> Fork Core
          </PeacockButton>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column - Core Pulse */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          <motion.div variants={item}>
            <HolographicCard className="w-full h-full min-h-[400px]">
              <div className="flex flex-col h-full justify-between">
                <div class="space-y-6">
                  <div class="flex items-center gap-3">
                    <PeacockBadge variant="primary" className="rounded-md px-2">QUANTUM_01</PeacockBadge>
                    <span class="text-white/20 font-mono text-xs">/src/engine/physics.ts</span>
                  </div>
                  <h2 class="text-5xl font-black text-white leading-tight">
                    High Fidelity <br/>
                    Digital <span class="text-peacock-primary">Matter</span>
                  </h2>
                  <p class="text-lg text-white/50 max-w-xl">
                    Experience the next generation of React components. Built with a focus on tactile interaction and sub-millisecond motion physics.
                  </p>
                </div>

                <div class="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: 'Latency', value: '0.4ms', icon: <Terminal /> },
                    { label: 'Refresh', value: '144Hz', icon: <Activity /> },
                    { label: 'Bundle', value: '12.4kb', icon: <Zap /> },
                    { label: 'Uptime', value: '99.9%', icon: <Globe /> },
                  ].map((stat, i) => (
                    <div key={i} class="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.08] transition-colors">
                      <div class="text-peacock-primary mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                      <div class="text-xl font-bold text-white">{stat.value}</div>
                      <div class="text-[10px] text-white/30 uppercase font-bold tracking-widest mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </HolographicCard>
          </motion.div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={item} className="plumage-glass rounded-3xl p-8 border border-white/10 noise-texture">
              <h4 class="text-white font-bold mb-6 flex items-center gap-2">
                <Layout className="w-5 h-5 text-peacock-primary" />
                Control Center
              </h4>
              <PeacockTabs 
                variant="pill"
                layoutId="hero-tabs-1"
                items={[
                  { 
                    id: 'an', 
                    label: 'Analytics', 
                    content: <div class="mt-4 space-y-3">
                      <PeacockSkeleton className="h-4 w-full rounded-md" />
                      <PeacockSkeleton className="h-4 w-2/3 rounded-md opacity-50" />
                      <div class="pt-2 flex gap-2">
                        <div class="h-12 flex-1 bg-peacock-primary/10 rounded-xl border border-peacock-primary/20"></div>
                        <div class="h-12 flex-1 bg-white/5 rounded-xl border border-white/10"></div>
                      </div>
                    </div>
                  },
                  { 
                    id: 'se', 
                    label: 'Security', 
                    content: <div class="mt-4 p-4 rounded-xl bg-peacock-danger/10 border border-peacock-danger/20 text-xs text-peacock-danger">
                      Protocol active. Node synchronization 100%.
                    </div>
                  }
                ]} 
              />
            </motion.div>

            <motion.div variants={item} className="plumage-glass rounded-3xl p-8 border border-white/10 flex flex-col justify-center items-center text-center gap-4">
               <PeacockAvatar status="online" className="w-20 h-20">
                  <PeacockAvatarImage src="https://github.com/sploov.png" />
                  <PeacockAvatarFallback>SP</PeacockAvatarFallback>
               </PeacockAvatar>
               <div>
                 <div class="text-white text-lg font-bold">Quantum Team</div>
                 <div class="text-xs text-white/40 font-mono">Contributor Network</div>
               </div>
               <div class="flex -space-x-3 mt-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} class="w-8 h-8 rounded-full border-2 border-[#0f0f12] bg-peacock-surface-3 flex items-center justify-center text-[10px] text-white font-bold">
                      +{i}
                    </div>
                  ))}
               </div>
            </motion.div>
          </div>
        </div>

        {/* Right Column - Activity & Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div variants={item} className="plumage-glass rounded-3xl p-6 border border-white/10 flex-1 flex flex-col gap-6">
            <h4 class="text-sm font-bold text-white/40 uppercase tracking-[0.2em]">Live Activity</h4>
            
            <div class="space-y-6">
              {[
                { user: 'Alpha-01', action: 'merged pull request', time: '2m ago', icon: <Zap /> },
                { user: 'Beta-Core', action: 'optimized shaders', time: '14m ago', icon: <Sparkles /> },
                { user: 'Sploov', action: 'released v3.0.0-alpha', time: '1h ago', icon: <Flame /> },
                { user: 'System', action: 'quantum sync stable', time: '2h ago', icon: <Shield /> },
              ].map((activity, i) => (
                <div key={i} class="flex items-start gap-4">
                  <div class="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40">
                    {activity.icon}
                  </div>
                  <div>
                    <div class="text-sm text-white/80"><span class="font-bold text-white">{activity.user}</span> {activity.action}</div>
                    <div class="text-[10px] text-white/30 uppercase font-medium mt-1">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>

            <div class="mt-auto pt-6 border-t border-white/5">
              <PeacockButton variant="glass" className="w-full justify-between group">
                System Status <Activity className="w-4 h-4 text-peacock-success animate-pulse" />
              </PeacockButton>
            </div>
          </motion.div>

          <motion.div variants={item} className="bg-peacock-primary/10 rounded-3xl p-8 border border-peacock-primary/20 relative overflow-hidden group">
            <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <Cpu className="w-32 h-32 text-peacock-primary" />
            </div>
            <h4 class="text-xl font-bold text-white mb-2">Join the Collective</h4>
            <p class="text-sm text-white/60 mb-6 leading-relaxed">
              Become part of the most advanced UI movement in the React ecosystem.
            </p>
            <PeacockButton variant="primary" className="w-full shadow-[0_0_30px_rgba(88,101,242,0.3)]">
              Get Started Now
            </PeacockButton>
          </motion.div>
        </div>
      </div>

      {/* Dock - Centered at bottom */}
      <motion.div variants={item} className="flex justify-center mt-12">
        <PeacockDock 
          items={[
            { id: '1', icon: <Home className="w-full h-full p-0.5" />, label: 'Home' },
            { id: '2', icon: <Search className="w-full h-full p-0.5" />, label: 'Search' },
            { id: '3', icon: <Sparkles className="w-full h-full p-0.5" />, label: 'Quantum' },
            { id: '4', icon: <User className="w-full h-full p-0.5" />, label: 'Profile' },
            { id: '5', icon: <Settings className="w-full h-full p-0.5" />, label: 'Settings' },
          ]} 
        />
      </motion.div>
    </motion.div>
  );
};
