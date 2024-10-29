/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        border: {
          DEFAULT: 'hsl(var(--border))',
        },
        background: 'hsl(var(--background))',
      },
    },
  },
  plugins: [],
}