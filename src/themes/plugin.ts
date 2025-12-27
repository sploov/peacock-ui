import plugin from 'tailwindcss/plugin';

export const plumagePlugin = plugin(function({ addUtilities, theme }) {
  addUtilities({
    // Glassmorphism System v3.0.1
    '.plumage-glass': {
      'background': 'rgba(255, 255, 255, 0.04)',
      'backdrop-filter': 'blur(16px) saturate(180%)',
      '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
      'border': '1px solid rgba(255, 255, 255, 0.1)',
      'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
    },
    '.plumage-glass-heavy': {
      'background': 'rgba(10, 10, 12, 0.85)',
      'backdrop-filter': 'blur(24px) saturate(180%)',
      '-webkit-backdrop-filter': 'blur(24px) saturate(180%)',
      'border': '1px solid rgba(255, 255, 255, 0.06)',
    },
    
    // Aesthetic Utilities
    '.plumage-gradient': {
      'background': 'linear-gradient(45deg, #6366f1, #22c55e, #f43f5e)',
      'background-size': '200% 200%',
      'animation': 'plumage 5s ease infinite',
    },
    '.text-glow': {
      'text-shadow': '0 0 25px rgba(var(--peacock-primary-rgb), 0.6)',
    },
    
    // Perspective System
    '.perspective-none': { 'perspective': 'none' },
    '.perspective-500': { 'perspective': '500px' },
    '.perspective-1000': { 'perspective': '1000px' },
    '.perspective-2000': { 'perspective': '2000px' },
    
    // Texture System
    '.noise-texture': {
      'position': 'relative',
      'isolation': 'isolate',
      '&::before': {
        'content': '""',
        'position': 'absolute',
        'inset': '0',
        'opacity': '0.02', /* Subtler noise */
        'z-index': '-1',
        'pointer-events': 'none',
        'background-image': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/ %3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        'mix-blend-mode': 'overlay',
      }
    }
  });
}, {
  theme: {
    extend: {
      colors: {
        peacock: {
          primary: 'rgb(var(--peacock-primary) / <alpha-value>)',
          success: 'rgb(var(--peacock-success) / <alpha-value>)',
          danger: 'rgb(var(--peacock-danger) / <alpha-value>)',
          dark: '#0f0f12',    // Deep charcoal
          darker: '#050505',
          surface: {
            1: '#16161a',
            2: '#1c1c21',
            3: '#25252b',
          }
        }
      },
      keyframes: {
        plumage: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      },
      animation: {
        plumage: 'plumage 5s ease infinite',
      }
    }
  }
});
