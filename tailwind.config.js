/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        isuite: {
          navy: '#001d55',
          'navy-deep': '#000c2b',
          blue: '#1663ff',
          'blue-bright': '#19b6ff',
          bg: '#f6f7f9',
          ink: '#06122e',
        }
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        widebrand: '0.09em',
        kicker: '0.14em',
      }
    },
  },
  plugins: [],
}
