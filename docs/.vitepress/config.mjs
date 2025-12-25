import { defineConfig } from 'vitepress'
import react from '@vitejs/plugin-react'

export default defineConfig({
  title: "Peacock UI",
  vite: {
    plugins: [react()]
  },
  description: "A high-fidelity, motion-first design system for React 19.",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Components', link: '/components/button' },
      { text: 'v1.0.0', items: [
        { text: 'Changelog', link: 'https://github.com/sploov/peacock-ui/releases' },
        { text: 'Contributing', link: 'https://github.com/sploov/peacock-ui/blob/main/CONTRIBUTING.md' }
      ]}
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Theming', link: '/guide/theming' },
          { text: 'Motion Engine', link: '/guide/motion' }
        ]
      },
      {
        text: 'Quantum Components',
        items: [
          { text: 'Holographic Card', link: '/components/holographic-card' },
          { text: 'Dock', link: '/components/dock' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Fluid Card', link: '/components/card' },
          { text: 'Glass Menu', link: '/components/menu' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Tooltip', link: '/components/tooltip' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Command Palette', link: '/components/command' },
          { text: 'Toast', link: '/components/toast' },
          { text: 'Skeleton', link: '/components/skeleton' },
          { text: 'Code Block', link: '/components/code' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sploov/peacock-ui' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Sploov'
    }
  },
  appearance: 'dark',
  cleanUrls: true
})
