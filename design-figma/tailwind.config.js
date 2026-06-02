/** @type {import('tailwindcss').Config} */
export default {
  content: [
 "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
  'branco': 'var(--branco)',
  'cinza-claro': 'var(--cinza-claro)',
  'cinza-escuro': 'var(--cinza-escuro)',
  'preto': 'var(--preto)',
  'verde-musgo': 'var(--verde-musgo)',
  'cinza-oliva': 'var(--cinza-oliva)',
  'verde-oliva': 'var(--verde-oliva)',
      },
        fontFamily: {
        serif: ['"Crimson Text"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        robotoFlex: ['"Roboto Flex"', 'sans-serif'],
        robotoMono: ['"Roboto Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

