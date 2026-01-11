/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: 'hsl(250, 80%, 65%)',
          glow: 'hsl(250, 80%, 65%, 0.3)',
        },
        bg: {
          dark: 'hsl(220, 20%, 10%)',
          card: 'hsl(220, 20%, 14%)',
        },
        text: {
          main: 'hsl(220, 10%, 95%)',
          muted: 'hsl(220, 10%, 70%)',
        },
        correct: 'hsl(150, 60%, 45%)',
        wrong: 'hsl(0, 70%, 55%)',
      },
    },
  },
  plugins: [],
}
