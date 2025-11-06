/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f8f6',
          100: '#e3e9e3',
          200: '#c7d3c7',
          300: '#a3b5a3',
          400: '#7e967e',
          500: '#8FAA8F',
          600: '#6b856b',
          700: '#566b56',
          800: '#475747',
          900: '#3a483a',
        },
        cream: {
          50: '#fdfcf9',
          100: '#f9f6ef',
          200: '#f3ede0',
          300: '#ebe2cf',
          400: '#E8DDBF',
          500: '#d9c9a8',
        },
      },
      fontFamily: {
        elegant: ['Georgia', 'Garamond', 'serif'],
        script: ['Brush Script MT', 'cursive'],
      },
    },
  },
  plugins: [],
}
