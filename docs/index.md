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