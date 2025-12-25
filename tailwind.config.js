/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        peacock: {
          primary: '#5865F2', // Discord Blue
          success: '#23a559', // Discord Green
          danger: '#f43f5e',  // Rose 500
          dark: '#1e1f22',    // Discord Dark
          darker: '#0f0f11',  // Near black
        }
      },
      backgroundImage: {
        'plumage-gradient': 'linear-gradient(45deg, #5865F2, #23a559, #f43f5e, #5865F2)',
      },
      animation: {
        'plumage': 'plumage 3s ease infinite',
      },
      keyframes: {
        plumage: {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' },
        }
      }
    },
  },
  plugins: [],
}
