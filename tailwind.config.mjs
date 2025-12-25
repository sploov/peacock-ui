import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./site/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        peacock: {
          primary: '#5865F2', // Discord Blue
          success: '#23a559', // Discord Green
          danger: '#f43f5e',  // Rose 500
          dark: '#0f0f12',    // Deep charcoal
          black: '#050505',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      zIndex: {
        'surface-1': '10',
        'surface-2': '20',
        'surface-3': '30',
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      addUtilities({
        '.plumage-glass': {
          'background': 'rgba(255, 255, 255, 0.03)',
          'backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.08)',
          'box-shadow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        },
        '.plumage-gradient': {
          'background': 'linear-gradient(45deg, #5865F2, #23a559, #f43f5e)',
          'background-size': '200% 200%',
          'animation': 'plumage 5s ease infinite',
        },
        '.noise-texture': {
          'position': 'relative',
          '&::before': {
            'content': '""',
            'position': 'absolute',
            'inset': '0',
            'opacity': '0.03',
            'pointer-events': 'none',
            'background-image': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\ Фильтр%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }
        }
      })
    }),
  ],
}
