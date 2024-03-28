/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: {
        gray: {
          100: '#F2F2F2',
          200: '#D9D9D9',
          300: '#808080',
          400: '#333333',
          500: '#262626',
          600: '#1A1A1A',
          700: '#0D0D0D',
        },
        blue: '#4EA8DE',
        'blue-dark': '#1E6F9F',
        'purple-dark': '#5E60CE',
        purple: '#8284FA',
        danger: '#E25858',
      },
    },
  },
  plugins: [],
}
