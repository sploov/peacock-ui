import React, { useState, useEffect } from 'react';
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
  X,
  Type,
  ToggleLeft,
  Info,
  ExternalLink,
  Copy,
  Check,
  ArrowRight,
  ArrowLeft,
  Terminal
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../src/hooks/utils';
import '../../src/themes/globals.css';

const CodeBlock = ({ code, language = "bash" }: { code: string, language?: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group rounded-xl overflow-hidden bg-peacock-dark border border-white/10 my-6">
      <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/10">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-white/40" />
          <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{language}</span>
        </div>
        <button 
          onClick={copyToClipboard}
          className="p-1.5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-all"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-peacock-success" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
      </div>
      <pre className="p-4 text-sm font-mono text-white/80 overflow-x-auto whitespace-pre">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const SectionHeader = ({ title, description }: { title: string, description?: string }) => (
  <div className="space-y-2 mb-8">
    <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
    {description && <p className="text-lg text-white/40 leading-relaxed">{description}</p>}
  </div>
);

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
    { 
      group: 'Getting Started', 
      links: [
        { id: 'getting-started', label: 'Introduction', icon: <Zap className="w-4 h-4" /> },
        { id: 'theming', label: 'Theming', icon: <Palette className="w-4 h-4" /> },
        { id: 'motion', label: 'Motion Guide', icon: <Sparkles className="w-4 h-4" /> },
      ]
    },
    { 
      group: 'Components', 
      links: [
        { id: 'button', label: 'Button', icon: <MousePointer2 className="w-4 h-4" /> },
        { id: 'input', label: 'Input', icon: <Type className="w-4 h-4" /> },
        { id: 'switch', label: 'Switch', icon: <ToggleLeft className="w-4 h-4" /> },
        { id: 'card', label: 'Fluid Card', icon: <Layers className="w-4 h-4" /> },
        { id: 'menu', label: 'Glass Menu', icon: <Command className="w-4 h-4" /> },
        { id: 'badge', label: 'Badge', icon: <ShieldCheck className="w-4 h-4" /> },
        { id: 'tooltip', label: 'Tooltip', icon: <Info className="w-4 h-4" /> },
      ]
    }
  ];

  const allLinks = sidebarLinks.flatMap(g => g.links);
  const activeIndex = allLinks.findIndex(l => l.id === activeTab);
  const nextLink = allLinks[activeIndex + 1];
  const prevLink = allLinks[activeIndex - 1];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsMenuOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <MotionProvider>
      <div className="min-h-screen bg-peacock-black text-white font-sans selection:bg-peacock-primary/30 flex overflow-hidden">
        
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <motion.aside
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="w-72 border-r border-white/10 bg-peacock-dark p-6 flex flex-col gap-8 relative z-40 h-screen overflow-y-auto shrink-0 scrollbar-hide"
            >
              <div className="flex items-center gap-3 px-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-peacock-primary via-peacock-primary to-peacock-danger flex items-center justify-center font-bold text-xl shadow-lg shadow-peacock-primary/20 plumage-gradient">
                  P
                </div>
                <div>
                  <span className="font-bold text-lg tracking-tight block leading-none">Peacock UI</span>
                  <span className="text-[10px] text-white/20 font-mono uppercase tracking-widest mt-1 block">Framework v1.0.0</span>
                </div>
              </div>

              <div className="space-y-10">
                {sidebarLinks.map((group) => (
                  <div key={group.group} className="space-y-3">
                    <h3 className="px-4 text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">{group.group}</h3>
                    <nav className="flex flex-col gap-1">
                      {group.links.map((link) => (
                        <button
                          key={link.id}
                          onClick={() => setActiveTab(link.id)}
                          className={cn(
                            "group flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300",
                            activeTab === link.id 
                              ? "bg-peacock-primary/10 text-peacock-primary border border-peacock-primary/20 shadow-inner" 
                              : "text-white/40 hover:text-white hover:bg-white/5 border border-transparent"
                          )}
                        >
                          <span className={cn(
                            "transition-transform group-hover:scale-110",
                            activeTab === link.id ? "text-peacock-primary" : "text-white/20 group-hover:text-white/60"
                          )}>
                            {link.icon}
                          </span>
                          <span className="font-medium text-sm">{link.label}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <a 
                  href="https://github.com/sploov/peacock-ui" 
                  target="_blank"
                  className="flex items-center justify-between px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-white/40 group-hover:text-white" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-white" />
                </a>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 h-screen overflow-y-auto relative bg-noise scroll-smooth">
          {/* Header */}
          <header className="sticky top-0 z-30 border-b border-white/10 bg-peacock-black/80 backdrop-blur-xl px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-lg hover:bg-white/5 text-white/60 transition-colors"
                aria-label="Toggle Sidebar"
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />
              <div className="text-sm font-medium hidden sm:flex items-center gap-2">
                <span className="text-white/40">Docs</span>
                <ChevronRight className="w-3 h-3 text-white/20" />
                <span>{allLinks.find(l => l.id === activeTab)?.label}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div 
                onClick={() => setIsMenuOpen(true)}
                className="hidden md:flex items-center gap-10 px-4 py-2 bg-white/5 border border-white/10 rounded-xl cursor-pointer hover:bg-white/10 transition-all text-white/40 hover:text-white/60 group"
              >
                <div className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  <span className="text-sm font-medium">Quick search...</span>
                </div>
                <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px] font-mono">
                  <Command className="w-2.5 h-2.5" /> K
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <PeacockTooltip content="Release Notes">
                  <button className="p-2 rounded-lg hover:bg-white/5 text-white/60">
                    <Zap className="w-4 h-4" />
                  </button>
                </PeacockTooltip>
                <PeacockButton variant="primary" className="py-2 text-xs px-4 rounded-xl font-bold tracking-wide">
                  SPREED
                </PeacockButton>
              </div>
            </div>
          </header>

          <div className="max-w-4xl mx-auto px-8 py-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'getting-started' && (
                  <div className="space-y-12">
                    <header className="space-y-6">
                      <div className="flex items-center gap-3">
                        <PeacockBadge variant="glass">New Release</PeacockBadge>
                        <PeacockBadge variant="primary">v1.0.0-rc.1</PeacockBadge>
                      </div>
                      <h1 className="text-6xl font-extrabold tracking-tight">Introduction</h1>
                      <p className="text-xl text-white/40 leading-relaxed max-w-3xl">
                        A high-fidelity, motion-first design system for React 19. Peacock UI replaces staticity with fluid, physics-based interactions.
                      </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4 noise-texture">
                        <div className="w-12 h-12 rounded-2xl bg-peacock-primary/20 flex items-center justify-center text-peacock-primary">
                          <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">React 19 Core</h3>
                        <p className="text-white/40 leading-relaxed">Leveraging the latest React features like actions and optimized hydration for blazing fast performance.</p>
                      </div>
                      <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-4 noise-texture">
                        <div className="w-12 h-12 rounded-2xl bg-peacock-success/20 flex items-center justify-center text-peacock-success">
                          <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Motion First</h3>
                        <p className="text-white/40 leading-relaxed">Animation isn't an afterthought; it's built into the DNA of every primitive using spring physics.</p>
                      </div>
                    </div>

                    <SectionHeader title="Installation" description="Get started by installing the core package and its motion engine." />
                    <CodeBlock code="npm install @peacock-ui/core framer-motion tailwindcss" />

                    <SectionHeader title="Basic Usage" description="Wrap your application in the PeacockProvider to inject global styles and motion configuration." />
                    <CodeBlock 
                      language="tsx" 
                      code={`import { PeacockProvider, PeacockButton } from '@peacock-ui/core';

export default function App() {
  return (
    <PeacockProvider theme="dark">
      <PeacockButton>Let's Spread</PeacockButton>
    </PeacockProvider>
  );
}`} 
                    />
                  </div>
                )}

                {activeTab === 'motion' && (
                  <div className="space-y-12">
                    <header className="space-y-4">
                      <h1 className="text-6xl font-extrabold tracking-tight">Motion Guide</h1>
                      <p className="text-xl text-white/40">The physics-based engine that powers every Peacock interaction.</p>
                    </header>

                    <div className="p-1 rounded-3xl bg-gradient-to-br from-peacock-primary/20 via-transparent to-peacock-danger/20 border border-white/10">
                      <div className="p-8 space-y-6">
                        <h2 className="text-2xl font-bold text-white">Why Physics?</h2>
                        <p className="text-white/60 leading-relaxed">
                          Standard CSS durations create robotic, linear movements. Peacock UI uses <span className="text-white font-semibold">Spring Physics</span> which calculates movement based on mass, tension, and friction. This results in UI that feels reactive and organic.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="space-y-4">
                        <div className="h-2 w-full bg-peacock-primary rounded-full" />
                        <h3 className="font-bold">Stiffness (260)</h3>
                        <p className="text-sm text-white/40">The "snap" of the spring. Higher stiffness creates more aggressive, fast-paced transitions.</p>
                      </div>
                      <div className="space-y-4">
                        <div className="h-2 w-full bg-peacock-success rounded-full" />
                        <h3 className="font-bold">Damping (20)</h3>
                        <p className="text-sm text-white/40">The "friction". Lower damping allows the element to oscillate before settling.</p>
                      </div>
                      <div className="space-y-4">
                        <div className="h-2 w-full bg-peacock-danger rounded-full" />
                        <h3 className="font-bold">Mass (1)</h3>
                        <p className="text-sm text-white/40">The inertia. Higher mass makes the element feel heavier and harder to stop.</p>
                      </div>
                    </div>

                    <SectionHeader title="Customizing Physics" description="You can override global physics in the PeacockProvider." />
                    <CodeBlock 
                      language="tsx" 
                      code={`<MotionProvider physics={{ stiffness: 400, damping: 40, mass: 2 }}>
  {children}
</MotionProvider>`} 
                    />
                  </div>
                )}

                {activeTab === 'button' && (
                  <div className="space-y-12">
                    <header className="space-y-4">
                      <h1 className="text-6xl font-extrabold tracking-tight">Button</h1>
                      <p className="text-xl text-white/40">The light-source reactive primary action component.</p>
                    </header>

                    <div className="p-12 rounded-[2rem] bg-peacock-dark border border-white/10 flex flex-wrap items-center justify-center gap-8 noise-texture bg-noise min-h-[300px]">
                      <PeacockButton variant="primary">Primary Action</PeacockButton>
                      <PeacockButton variant="outline">Secondary</PeacockButton>
                      <PeacockButton variant="glass">Glass Surface</PeacockButton>
                    </div>

                    <SectionHeader title="Props" />
                    <div className="border border-white/10 rounded-2xl overflow-hidden">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-white/5 border-b border-white/10 font-mono text-white/40">
                          <tr>
                            <th className="px-6 py-3">Prop</th>
                            <th className="px-6 py-3">Type</th>
                            <th className="px-6 py-3">Default</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          <tr>
                            <td className="px-6 py-4 font-mono text-peacock-primary">variant</td>
                            <td className="px-6 py-4 text-white/60">'primary' | 'outline' | 'glass'</td>
                            <td className="px-6 py-4 text-white/20">'primary'</td>
                          </tr>
                          <tr>
                            <td className="px-6 py-4 font-mono text-peacock-primary">glowSize</td>
                            <td className="px-6 py-4 text-white/60">number</td>
                            <td className="px-6 py-4 text-white/20">150</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'input' && (
                  <div className="space-y-12">
                    <header className="space-y-4">
                      <h1 className="text-6xl font-extrabold tracking-tight">Input</h1>
                      <p className="text-xl text-white/40">Text fields with focus-glow engine and error states.</p>
                    </header>

                    <div className="p-12 rounded-[2rem] bg-peacock-dark border border-white/10 space-y-8 noise-texture max-w-2xl mx-auto w-full">
                      <PeacockInput label="Name" placeholder="Enter your full name" icon={<Type className="w-4 h-4" />} />
                      <PeacockInput label="Secret Key" type="password" placeholder="••••••••" error="Key is incorrect" />
                    </div>

                    <SectionHeader title="Features" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <h4 className="font-bold mb-2">Glow Engine</h4>
                        <p className="text-sm text-white/40">Inputs use a multi-layered border glow that expands based on focus state.</p>
                      </div>
                      <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <h4 className="font-bold mb-2">Haptic Feedback</h4>
                        <p className="text-sm text-white/40">Subtle scale animations on interaction provide haptic-like confirmation.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Footer */}
                <div className="mt-24 pt-12 border-t border-white/10 flex items-center justify-between">
                  {prevLink ? (
                    <button 
                      onClick={() => setActiveTab(prevLink.id)}
                      className="group text-left"
                    >
                      <span className="block text-xs font-bold text-white/20 uppercase tracking-widest mb-2">Previous</span>
                      <div className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-lg font-semibold">{prevLink.label}</span>
                      </div>
                    </button>
                  ) : <div />}
                  
                  {nextLink ? (
                    <button 
                      onClick={() => setActiveTab(nextLink.id)}
                      className="group text-right"
                    >
                      <span className="block text-xs font-bold text-white/20 uppercase tracking-widest mb-2">Next</span>
                      <div className="flex items-center gap-3 text-white/60 group-hover:text-white transition-colors">
                        <span className="text-lg font-semibold">{nextLink.label}</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </button>
                  ) : <div />}
                </div>
              </motion.div>
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