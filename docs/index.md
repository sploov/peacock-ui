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

<div className="max-w-4xl mx-auto px-6 py-24 space-y-24">
  <section id="about" className="space-y-6">
    <h2 className="text-3xl font-bold text-white">About Peacock UI</h2>
    <p className="text-lg text-white/60 leading-relaxed">
      Peacock UI was born from a desire to make the web more <strong>tangible</strong>. We believe that digital interfaces shouldn't just be flat pixels—they should react with the weight and fluidity of physical objects. 
    </p>
    <p className="text-lg text-white/60 leading-relaxed">
      By combining <strong>React 19</strong>'s concurrency with <strong>Framer Motion</strong>'s physics engine and a custom <strong>WebGL</strong> layer, we've created a system that feels alive.
    </p>
  </section>

  <section id="changelog" className="space-y-6">
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-bold text-white">Latest Updates</h2>
      <a href="/guide/changelog" className="text-peacock-primary hover:underline">View Full Changelog →</a>
    </div>
    <div className="grid gap-4">
      <div className="plumage-glass rounded-2xl p-6 border border-white/5 space-y-2">
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-full bg-peacock-primary/20 text-peacock-primary text-xs font-bold">v3.0.0-alpha.2</span>
          <span className="text-white/40 text-xs">Today</span>
        </div>
        <h4 className="text-white font-semibold">The Component Overhaul</h4>
        <p className="text-sm text-white/60">Added PeacockTabs, updated the Motion Engine documentation, and introduced the new ComponentPreview system.</p>
      </div>
    </div>
  </section>

  <section id="credits" className="space-y-6">
    <h2 className="text-3xl font-bold text-white">Credits & Inspiration</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="space-y-2">
        <h4 className="text-white font-medium">Core Technologies</h4>
        <ul className="text-sm text-white/40 space-y-1">
          <li>React 19 (Meta)</li>
          <li>Framer Motion (Framer)</li>
          <li>Three.js / React Three Fiber</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
      <div className="space-y-2">
        <h4 className="text-white font-medium">Design Inspiration</h4>
        <ul className="text-sm text-white/40 space-y-1">
          <li>Discord Desktop Client</li>
          <li>Linear's Glassmorphism</li>
          <li>Apple's macOS Dock Physics</li>
          <li>Vercel's Design System</li>
        </ul>
      </div>
    </div>
  </section>

  <footer className="pt-24 text-center border-t border-white/5">
    <p className="text-sm text-white/20">
      Built with ❤️ by Sploov and the community.
    </p>
  </footer>
</div>

<style>
/* Landing Page Specific Overrides */
.VPHomeHero .name {
  background: linear-gradient(120deg, #5865F2, #23a559, #f43f5e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 30px rgba(88, 101, 242, 0.5));
}

.VPHome {
  background-image: 
    radial-gradient(circle at 50% 0%, rgba(88, 101, 242, 0.15), transparent 60%),
    url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}
</style>