import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  MotionProvider, 
  PeacockButton, 
  FluidCard, 
  GlassMenu, 
  PeacockInput, 
  PeacockSwitch,
  PeacockBadge,
  PeacockTooltip
} from '../../src';
import { 
  Sparkles, 
  Layers, 
  MousePointer2, 
  Box, 
  Search, 
  Command, 
  Zap, 
  ShieldCheck,
  Palette,
  Github,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../src/themes/globals.css';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('getting-started');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [switchState, setSwitchState] = useState(true);

  const menuItems = [
    { id: '1', label: 'Dashboard', icon: <Layers className="w-4 h-4" /> },
    { id: '2', label: 'Components', icon: <Box className="w-4 h-4" /> },
    { id: '3', label: 'Settings', icon: <Sparkles className="w-4 h-4" /> },
  ];

  const sidebarLinks = [
    { id: 'getting-started', label: 'Getting Started', icon: <Zap className="w-4 h-4" /> },
    { id: 'theming', label: 'Theming', icon: <Palette className="w-4 h-4" /> },
    { id: 'motion', label: 'Motion Engine', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'button', label: 'Button', icon: <MousePointer2 className="w-4 h-4" /> },
    { id: 'input', label: 'Input', icon: <Search className="w-4 h-4" /> },
    { id: 'card', label: 'Fluid Card', icon: <Layers className="w-4 h-4" /> },
  ];

  return (
    <MotionProvider>
      <div className="min-h-screen bg-peacock-black text-white font-sans selection:bg-peacock-primary/30 flex overflow-hidden">
        
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="w-72 border-r border-white/10 bg-peacock-dark p-6 flex flex-col gap-8 relative z-40 h-screen overflow-y-auto shrink-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peacock-primary to-peacock-danger flex items-center justify-center font-bold text-xl">
                  P
                </div>
                <span className="font-bold text-lg tracking-tight">Peacock UI</span>
              </div>

              <nav className="flex flex-col gap-1">
                {sidebarLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => setActiveTab(link.id)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300",
                      activeTab === link.id 
                        ? "bg-peacock-primary/20 text-peacock-primary border border-peacock-primary/20" 
                        : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                    )}
                  >
                    {link.icon}
                    <span className="font-medium text-sm">{link.label}</span>
                  </button>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-white/10">
                <a 
                  href="https://github.com/sploov/peacock-ui" 
                  className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">GitHub Repository</span>
                </a>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 h-screen overflow-y-auto relative bg-noise">
          {/* Header */}
          <header className="sticky top-0 z-30 border-b border-white/10 bg-peacock-black/80 backdrop-blur-md px-8 py-4 flex items-center justify-between">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-lg hover:bg-white/5 text-white/60 transition-colors"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="flex items-center gap-4">
              <PeacockTooltip content="Search commands (⌘K)">
                <button 
                  onClick={() => setIsMenuOpen(true)}
                  className="p-2 rounded-lg hover:bg-white/5 text-white/60 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </PeacockTooltip>
              <PeacockButton variant="primary" className="py-2 text-sm px-4 rounded-xl">
                Get Started
              </PeacockButton>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-8 py-12">
            <AnimatePresence mode="wait">
              {activeTab === 'getting-started' && (
                <motion.div
                  key="gs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <PeacockBadge variant="primary" className="mb-4">v1.0.0-rc</PeacockBadge>
                    <h1 className="text-5xl font-extrabold mb-4">Getting Started</h1>
                    <p className="text-xl text-white/40 leading-relaxed">
                      Scaffolded with React 19, Peacock UI is designed for high-performance interactive interfaces.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Installation</h2>
                    <div className="bg-peacock-dark border border-white/10 rounded-2xl p-6 font-mono text-sm group relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="text-white/40 hover:text-white transition-colors">Copy</button>
                      </div>
                      <span className="text-peacock-success">$</span> npm install @peacock-ui/core framer-motion tailwindcss
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold">Quick Start</h2>
                    <p className="text-white/40">Wrap your application in the <code className="text-peacock-primary font-mono">PeacockProvider</code> to enable global styles and motion orchestration.</p>
                    <div className="bg-peacock-dark border border-white/10 rounded-2xl p-6 font-mono text-sm overflow-x-auto whitespace-pre">
                      <span className="text-peacock-primary">import</span> &#123; PeacockProvider, PeacockButton &#125; <span className="text-peacock-primary">from</span> <span className="text-peacock-success">'@peacock-ui/core'</span>;<br/><br/>
                      <span className="text-peacock-primary">function</span> App() &#123;<br/>
                      &nbsp;&nbsp;<span className="text-peacock-primary">return</span> (<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-peacock-primary">PeacockProvider</span>&gt;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-peacock-primary">PeacockButton</span>&gt;Hello World&lt;/<span className="text-peacock-primary">PeacockButton</span>&gt;<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-peacock-primary">PeacockProvider</span>&gt;<br/>
                      &nbsp;&nbsp;);<br/>
                      &#125;
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'button' && (
                <motion.div
                  key="btn"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Button</h1>
                  
                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Variants</h2>
                    <div className="bg-peacock-dark border border-white/10 rounded-3xl p-12 flex flex-wrap items-center gap-6 noise-texture">
                      <PeacockButton variant="primary">Primary</PeacockButton>
                      <PeacockButton variant="outline">Outline</PeacockButton>
                      <PeacockButton variant="glass">Glassmorphism</PeacockButton>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Magnetic Haptics</h2>
                    <p className="text-white/40">Buttons inherit physics-based spring transitions. Click and hover to feel the haptic feedback.</p>
                    <div className="bg-peacock-dark border border-white/10 rounded-3xl p-12 flex items-center justify-center gap-8 bg-noise">
                      <PeacockButton glowSize={250} className="w-64 h-20 text-xl">
                        Hover Me
                      </PeacockButton>
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'input' && (
                <motion.div
                  key="inp"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-12"
                >
                  <h1 className="text-5xl font-extrabold">Input</h1>
                  
                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Interactive Feedback</h2>
                    <p className="text-white/40">Inputs use multi-layered glow borders that activate on focus, guiding the user's attention.</p>
                    <div className="bg-peacock-dark border border-white/10 rounded-3xl p-12 space-y-6">
                      <PeacockInput 
                        label="Email Address" 
                        placeholder="you@example.com"
                        icon={<Sparkles className="w-4 h-4" />}
                      />
                      <PeacockInput 
                        label="Password" 
                        type="password"
                        placeholder="••••••••"
                        error="Password must be at least 8 characters"
                      />
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-bold">Controls</h2>
                    <div className="bg-peacock-dark border border-white/10 rounded-3xl p-12 flex flex-col gap-8">
                      <PeacockSwitch 
                        label="Enable Motion Engine" 
                        checked={switchState} 
                        onChange={setSwitchState} 
                      />
                      <div className="flex gap-4">
                        <PeacockBadge variant="success">Active</PeacockBadge>
                        <PeacockBadge variant="danger">High Priority</PeacockBadge>
                        <PeacockBadge variant="glass">Beta Feature</PeacockBadge>
                      </div>
                    </div>
                  </section>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>

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