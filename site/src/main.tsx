import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { MotionProvider, PeacockButton, FluidCard, GlassMenu } from '../../src';
import { Sparkles, Layers, MousePointer2, Box } from 'lucide-react';
import '../../src/themes/globals.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: '1', label: 'Dashboard', icon: <Layers className="w-4 h-4" /> },
    { id: '2', label: 'Components', icon: <Box className="w-4 h-4" /> },
    { id: '3', label: 'Settings', icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <MotionProvider>
      <div className="min-h-screen bg-peacock-black text-white font-sans selection:bg-peacock-primary/30">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-peacock-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-peacock-primary text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>Introducing Peacock UI v1.0</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl font-bold tracking-tight mb-8"
            >
              Fluidity over <span className="text-transparent bg-clip-text bg-gradient-to-r from-peacock-primary via-peacock-success to-peacock-danger plumage-gradient">Staticity</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              A high-fidelity, motion-first design system for React 19. 
              Build immersive experiences with physics-based springs and glassmorphism.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-6"
            >
              <PeacockButton variant="primary" onClick={() => setIsMenuOpen(true)}>
                Open Command Menu <span className="text-white/40 ml-2 font-mono text-sm">⌘K</span>
              </PeacockButton>
              <PeacockButton variant="glass">
                Documentation
              </PeacockButton>
            </motion.div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FluidCard 
              title="Physics-Based Motion"
              description="No durations, just physics. Every interaction feels natural and reactive to user input."
              expandedContent={
                <div className="space-y-4">
                  <p>Our motion engine uses stiffness and damping to calculate realistic trajectories. This ensures that UI elements never feel 'robotic'.</p>
                  <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-peacock-primary"
                      animate={{ width: ["0%", "100%", "0%"] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                </div>
              }
            />
            <FluidCard 
              title="Glassmorphism & Light"
              description="Surface elevation is defined by blur intensity and noise textures, creating depth without shadows."
              expandedContent={
                <p>By utilizing backdrop-filter and custom noise layers, we achieve a high-end aesthetic that mirrors modern operating systems like macOS and Windows 11.</p>
              }
            />
          </div>
        </section>

        <GlassMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
          items={menuItems}
        />
      </div>
    </MotionProvider>
  );
};

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
