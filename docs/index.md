---
layout: home

hero:
  name: "Peacock UI"
  text: "The Quantum Interface Engine."
  tagline: "A high-fidelity, WebGL-accelerated design system for the next generation of React applications."
  image:
    src: /logo.svg
    alt: Peacock UI Logo
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/sploov/peacock-ui

features:
  - title: Quantum Engine
    details: Hybrid DOM + WebGL architecture for fluid, organic backgrounds and holographic interactions.
    icon: ⚛️
  - title: Discord-Grade Aesthetics
    details: Deep glassmorphism, noise textures, and neon accents inspired by high-end gaming platforms.
    icon: 🎮
  - title: React 19 Ready
    details: Built for the future with React Server Components, Ticks, and the new Hook architecture.
    icon: 🚀
  - title: Motion First
    details: Every interaction is physics-based. Stiffness, damping, and mass are first-class citizens.
    icon: 🌊
---

<HeroDemos />

<div class="max-w-6xl mx-auto px-6 py-24 space-y-32">

<section id="about" class="space-y-8 text-center py-12">
  <div class="text-5xl mb-6">✨</div>
  <h2 class="text-6xl font-black text-white tracking-tighter italic">Fluidity over Staticity</h2>
  <p class="text-2xl text-white/50 leading-relaxed max-w-3xl mx-auto font-medium">
    Peacock UI was born from a desire to make the web more <strong>tangible</strong>. We believe that digital interfaces shouldn't just be flat pixels—they should react with the weight and fluidity of physical objects. 
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16">
    <div class="space-y-3 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all hover:-translate-y-1 duration-300">
      <h4 class="text-peacock-primary font-black uppercase tracking-widest text-sm">Physics-First</h4>
      <p class="text-white/40 leading-relaxed">Real spring dynamics in every click. No more linear transitions.</p>
    </div>
    <div class="space-y-3 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all hover:-translate-y-1 duration-300">
      <h4 class="text-peacock-primary font-black uppercase tracking-widest text-sm">Quantum Engine</h4>
      <p class="text-white/40 leading-relaxed">WebGL-accelerated visual fidelity for organic glass effects.</p>
    </div>
    <div class="space-y-3 p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all hover:-translate-y-1 duration-300">
      <h4 class="text-peacock-primary font-black uppercase tracking-widest text-sm">React 19</h4>
      <p class="text-white/40 leading-relaxed">Built for the future. Zero-config React 19 integration.</p>
    </div>
  </div>
</section>

<section id="changelog" class="space-y-12">
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
    <div>
      <h2 class="text-5xl font-black text-white tracking-tight">Evolving Fast</h2>
      <p class="text-white/40 mt-2 text-lg">The journey to v3.0 stable continues.</p>
    </div>
    <a href="/guide/changelog" class="group flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-peacock-primary hover:border-peacock-primary transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)]">
      View Full Changelog
      <span class="w-4 h-4 text-white">✨</span>
    </a>
  </div>
  <div class="grid gap-6">
    <div class="plumage-glass rounded-[2.5rem] p-10 border border-white/10 space-y-6 group hover:border-peacock-primary/40 transition-all duration-500 relative overflow-hidden noise-texture">
      <div class="absolute -right-12 -top-12 w-48 h-48 bg-peacock-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-peacock-primary/20 transition-all"></div>
      <div class="flex items-center gap-4 relative z-10">
        <span class="px-4 py-1.5 rounded-xl bg-peacock-primary text-white text-xs font-black uppercase tracking-[0.2em]">v3.0.0-alpha.3</span>
        <span class="text-white/20 text-xs font-bold font-mono">DEC 26, 2025</span>
      </div>
      <div class="relative z-10">
        <h4 class="text-3xl font-black text-white mb-4">The Component Overhaul</h4>
        <p class="text-white/50 text-lg leading-relaxed max-w-3xl">Introduced the PeacockTabs system, advanced documentation previews, and localized coordinate fixes for Quantum components. Bridging the gap between Vue and React with sub-millisecond precision.</p>
      </div>
    </div>
  </div>
</section>

<section id="credits" class="space-y-16">
  <h2 class="text-5xl font-black text-white tracking-tight text-center">Engineered with Precision</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Core Technologies Card -->
    <div class="space-y-8 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative group overflow-hidden noise-texture transition-all duration-500 hover:border-peacock-primary/20">
      <div class="absolute inset-0 bg-gradient-to-br from-peacock-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div class="text-4xl relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">💻</div>
      <div class="space-y-4 relative z-10">
        <h4 class="text-2xl font-black text-white">Core Technologies</h4>
        <p class="text-white/40 leading-relaxed">Built on a foundation of industry-leading open source tools designed for performance and scale.</p>
        <div class="flex flex-wrap gap-2 pt-4 text-xs font-bold">
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30 transition-all cursor-default uppercase tracking-wider">React 19</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30 transition-all cursor-default uppercase tracking-wider">Framer Motion 12</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30 transition-all cursor-default uppercase tracking-wider">Three.js</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30 transition-all cursor-default uppercase tracking-wider">Tailwind CSS</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30 transition-all cursor-default uppercase tracking-wider">Vite</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-primary hover:bg-peacock-primary/10 hover:border-peacock-primary/30 transition-all cursor-default uppercase tracking-wider">Lucide Icons</span>
        </div>
      </div>
    </div>

    <!-- Design Inspiration Card -->
    <div class="space-y-8 p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 relative group overflow-hidden noise-texture transition-all duration-500 hover:border-peacock-success/20">
      <div class="absolute inset-0 bg-gradient-to-br from-peacock-success/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div class="text-4xl relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">🎨</div>
      <div class="space-y-4 relative z-10">
        <h4 class="text-2xl font-black text-white">Design Inspiration</h4>
        <p class="text-white/40 leading-relaxed">Inspired by the most refined digital experiences in the productivity and gaming space.</p>
        <div class="flex flex-wrap gap-2 pt-4 text-xs font-bold">
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30 transition-all cursor-default uppercase tracking-wider">Discord</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30 transition-all cursor-default uppercase tracking-wider">Linear</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30 transition-all cursor-default uppercase tracking-wider">macOS</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30 transition-all cursor-default uppercase tracking-wider">Vercel</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30 transition-all cursor-default uppercase tracking-wider">Stripe</span>
           <span class="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-white/60 hover:text-peacock-success hover:bg-peacock-success/10 hover:border-peacock-success/30 transition-all cursor-default uppercase tracking-wider">Dynamic Island</span>
        </div>
      </div>
    </div>
  </div>
</section>

<footer class="pt-40 pb-20 text-center relative overflow-hidden">
  <div class="absolute left-1/2 bottom-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
  <div class="flex flex-col items-center gap-8">
    <div class="relative group">
      <div class="absolute inset-0 bg-peacock-primary blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
      <img src="/logo.svg" class="w-16 h-16 relative z-10 opacity-80 group-hover:opacity-100 transition-all group-hover:scale-110" alt="Peacock UI Logo" />
    </div>
    <div class="space-y-2">
      <p class="text-white font-black tracking-[0.3em] uppercase text-xs">Spread Your Plumage</p>
      <p class="text-sm text-white/20 font-medium leading-relaxed">
        Released under the MIT License.<br>
        Built with ❤️ by Sploov and the community.
      </p>
    </div>
  </div>
</footer>

</div>

<style>
/* Landing Page Specific Overrides */
.VPHomeHero .name {
  background: linear-gradient(120deg, #5865F2, #23a559, #f43f5e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 40px rgba(88, 101, 242, 0.4));
}

.VPHome {
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(88, 101, 242, 0.1), transparent 50%),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
}

.VPFeature {
  background-color: rgba(255, 255, 255, 0.02) !important;
  backdrop-filter: blur(10px);
  border-radius: 2rem !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.VPFeature:hover {
  border-color: rgba(88, 101, 242, 0.2) !important;
}
</style>
