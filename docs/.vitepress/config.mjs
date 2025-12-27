import { defineConfig } from 'vitepress'
import react from '@vitejs/plugin-react'

export default defineConfig({
  title: "Peacock UI",
  vite: {
    plugins: [react()],
    resolve: {
      alias: {
        '@react-three/cannon': '@react-three/cannon/dist/index.js'
      }
    }
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
      { text: 'v3.0.1', items: [
        { text: 'Changelog', link: '/guide/changelog' },
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
          { text: 'Motion Engine', link: '/guide/motion' },
          { text: 'Changelog', link: '/guide/changelog' }
        ]
      },
      {
        text: 'Quantum Components',
        items: [
          { text: 'Holographic Card', link: '/components/holographic-card' },
          { text: 'Carousel 3D', link: '/components/carousel' },
          { text: 'Dock', link: '/components/dock' },
          { text: 'Physics', link: '/components/physics' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Breadcrumb', link: '/components/breadcrumb' },
          { text: 'Tabs', link: '/components/tabs' },
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Drawer', link: '/components/drawer' },
          { text: 'Input', link: '/components/input' },
          { text: 'Checkbox', link: '/components/checkbox' },
          { text: 'Radio Group', link: '/components/radio-group' },
          { text: 'Select', link: '/components/select' },
          { text: 'Textarea', link: '/components/textarea' },
          { text: 'Switch', link: '/components/switch' },
          { text: 'Slider', link: '/components/slider' },
          { text: 'Dropdown Menu', link: '/components/dropdown-menu' },
          { text: 'Popover', link: '/components/popover' },
          { text: 'Dialog', link: '/components/dialog' },
          { text: 'Command Palette', link: '/components/command' },
          { text: 'Toast', link: '/components/toast' },
          { text: 'Progress', link: '/components/progress' },
          { text: 'Fluid Card', link: '/components/card' },
          { text: 'Glass Menu', link: '/components/menu' },
          { text: 'Badge', link: '/components/badge' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Skeleton', link: '/components/skeleton' },
          { text: 'Scroll Area', link: '/components/scroll-area' },
          { text: 'Separator', link: '/components/separator' },
          { text: 'Sheet', link: '/components/sheet' },
          { text: 'Table', link: '/components/table' },
          { text: 'Toggle', link: '/components/toggle' },
          { text: 'Label', link: '/components/label' },
          { text: 'Hover Card', link: '/components/hover-card' },
          { text: 'Alert Dialog', link: '/components/alert-dialog' },
          { text: 'Context Menu', link: '/components/context-menu' },
          { text: 'Menubar', link: '/components/menubar' },
          { text: 'Tooltip', link: '/components/tooltip' },
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
